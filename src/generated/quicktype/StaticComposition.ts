// To parse this data:
//
//   import { Convert } from "./file";
//
//   const staticComposition = Convert.toStaticComposition(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface StaticComposition {
    _version:        number;
    locale:          string;
    uid:             string;
    ACL:             ACL;
    _in_progress:    boolean;
    created_at:      Date;
    created_by:      string;
    currency:        number | null;
    dynamic_blocks:  DynamicBlock[];
    header:          Header;
    locale_field:    LocaleField;
    system:          System;
    tags:            string[];
    title:           string;
    type:            string;
    updated_at:      Date;
    updated_by:      string;
    url:             string;
    publish_details: PublishDetails;
}

export interface ACL {
}

export interface DynamicBlock {
    faq?:                    FAQ;
    mail_list_subscription?: MailListSubscription;
    paragraphs_with_links?:  ParagraphsWithLinks;
}

export interface FAQ {
    questions: Question[];
    _metadata: Metadata;
}

export interface Metadata {
    uid: string;
}

export interface Question {
    question:  string;
    _metadata: Metadata;
    answers:   string[];
}

export interface MailListSubscription {
    email_subscription: Banner[];
    _metadata:          Metadata;
}

export interface Banner {
    uid:               string;
    _content_type_uid: string;
}

export interface ParagraphsWithLinks {
    paragraphs: ParagraphElement[];
    _metadata:  Metadata;
}

export interface ParagraphElement {
    title:     string;
    _metadata: Metadata;
    paragraph: ParagraphParagraph;
}

export interface ParagraphParagraph {
    uid:      string;
    attrs:    ACL;
    children: ParagraphChild[];
    type:     string;
    _version: number;
}

export interface ParagraphChild {
    type:     string;
    attrs:    ACL;
    uid:      string;
    children: ChildChild[];
}

export interface ChildChild {
    text: string;
}

export interface Header {
    title:    string;
    subtitle: string;
    banner:   Banner[];
}

export interface LocaleField {
    select_locale: string[];
}

export interface PublishDetails {
    environment: string;
    locale:      string;
    time:        Date;
    user:        string;
}

export interface System {
    unpublish_at: Date | null;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toStaticComposition(json: string): StaticComposition[] {
        return cast(JSON.parse(json), a(r("StaticComposition")));
    }

    public static staticCompositionToJson(value: StaticComposition[]): string {
        return JSON.stringify(uncast(value, a(r("StaticComposition"))), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "StaticComposition": o([
        { json: "_version", js: "_version", typ: 0 },
        { json: "locale", js: "locale", typ: "" },
        { json: "uid", js: "uid", typ: "" },
        { json: "ACL", js: "ACL", typ: r("ACL") },
        { json: "_in_progress", js: "_in_progress", typ: true },
        { json: "created_at", js: "created_at", typ: Date },
        { json: "created_by", js: "created_by", typ: "" },
        { json: "currency", js: "currency", typ: u(0, null) },
        { json: "dynamic_blocks", js: "dynamic_blocks", typ: a(r("DynamicBlock")) },
        { json: "header", js: "header", typ: r("Header") },
        { json: "locale_field", js: "locale_field", typ: r("LocaleField") },
        { json: "system", js: "system", typ: r("System") },
        { json: "tags", js: "tags", typ: a("") },
        { json: "title", js: "title", typ: "" },
        { json: "type", js: "type", typ: "" },
        { json: "updated_at", js: "updated_at", typ: Date },
        { json: "updated_by", js: "updated_by", typ: "" },
        { json: "url", js: "url", typ: "" },
        { json: "publish_details", js: "publish_details", typ: r("PublishDetails") },
    ], false),
    "ACL": o([
    ], false),
    "DynamicBlock": o([
        { json: "faq", js: "faq", typ: u(undefined, r("FAQ")) },
        { json: "mail_list_subscription", js: "mail_list_subscription", typ: u(undefined, r("MailListSubscription")) },
        { json: "paragraphs_with_links", js: "paragraphs_with_links", typ: u(undefined, r("ParagraphsWithLinks")) },
    ], false),
    "FAQ": o([
        { json: "questions", js: "questions", typ: a(r("Question")) },
        { json: "_metadata", js: "_metadata", typ: r("Metadata") },
    ], false),
    "Metadata": o([
        { json: "uid", js: "uid", typ: "" },
    ], false),
    "Question": o([
        { json: "question", js: "question", typ: "" },
        { json: "_metadata", js: "_metadata", typ: r("Metadata") },
        { json: "answers", js: "answers", typ: a("") },
    ], false),
    "MailListSubscription": o([
        { json: "email_subscription", js: "email_subscription", typ: a(r("Banner")) },
        { json: "_metadata", js: "_metadata", typ: r("Metadata") },
    ], false),
    "Banner": o([
        { json: "uid", js: "uid", typ: "" },
        { json: "_content_type_uid", js: "_content_type_uid", typ: "" },
    ], false),
    "ParagraphsWithLinks": o([
        { json: "paragraphs", js: "paragraphs", typ: a(r("ParagraphElement")) },
        { json: "_metadata", js: "_metadata", typ: r("Metadata") },
    ], false),
    "ParagraphElement": o([
        { json: "title", js: "title", typ: "" },
        { json: "_metadata", js: "_metadata", typ: r("Metadata") },
        { json: "paragraph", js: "paragraph", typ: r("ParagraphParagraph") },
    ], false),
    "ParagraphParagraph": o([
        { json: "uid", js: "uid", typ: "" },
        { json: "attrs", js: "attrs", typ: r("ACL") },
        { json: "children", js: "children", typ: a(r("ParagraphChild")) },
        { json: "type", js: "type", typ: "" },
        { json: "_version", js: "_version", typ: 0 },
    ], false),
    "ParagraphChild": o([
        { json: "type", js: "type", typ: "" },
        { json: "attrs", js: "attrs", typ: r("ACL") },
        { json: "uid", js: "uid", typ: "" },
        { json: "children", js: "children", typ: a(r("ChildChild")) },
    ], false),
    "ChildChild": o([
        { json: "text", js: "text", typ: "" },
    ], false),
    "Header": o([
        { json: "title", js: "title", typ: "" },
        { json: "subtitle", js: "subtitle", typ: "" },
        { json: "banner", js: "banner", typ: a(r("Banner")) },
    ], false),
    "LocaleField": o([
        { json: "select_locale", js: "select_locale", typ: a("") },
    ], false),
    "PublishDetails": o([
        { json: "environment", js: "environment", typ: "" },
        { json: "locale", js: "locale", typ: "" },
        { json: "time", js: "time", typ: Date },
        { json: "user", js: "user", typ: "" },
    ], false),
    "System": o([
        { json: "unpublish_at", js: "unpublish_at", typ: u(Date, null) },
    ], false),
};
