import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosRequestConfig } from "axios";

const getDefaultAxiosOptions = (options: AxiosRequestConfig<any>): AxiosRequestConfig<any> => {
  return {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
      access_token: process.env.CS_DELIVERY_TOKEN || "",
    },
  };
};

const query = `
  query IntrospectionQuery {
    __schema {
      
      queryType { name }
      mutationType { name }
      subscriptionType { name }
      types {
        ...FullType
      }
      directives {
        name
        description
        
        locations
        args {
          ...InputValue
        }
      }
    }
  }

  fragment FullType on __Type {
    kind
    name
    description
    
    fields(includeDeprecated: true) {
      name
      description
      args {
        ...InputValue
      }
      type {
        ...TypeRef
      }
      isDeprecated
      deprecationReason
    }
    inputFields {
      ...InputValue
    }
    interfaces {
      ...TypeRef
    }
    enumValues(includeDeprecated: true) {
      name
      description
      isDeprecated
      deprecationReason
    }
    possibleTypes {
      ...TypeRef
    }
  }

  fragment InputValue on __InputValue {
    name
    description
    type { ...TypeRef }
    defaultValue
    
    
  }

  fragment TypeRef on __Type {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await axios(
    `https://${process.env.HOST}/stacks/${process.env.CS_API_KEY}?environment=${process.env.CS_ENVIRONMENT}`,
    getDefaultAxiosOptions({ method: "POST", data: req.body })
  )
    .then((r) => {
      // console.log(r);
      res.status(200).send(r.data);
    })
    .catch((err) => {
      //   console.log("Error while getting variations from DY", err);
      res.status(500).json({ msg: "Error while GraphQL schema", error: err });
    });
};

export default handler;
