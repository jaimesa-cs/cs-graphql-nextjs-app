import { Resolver, Query, Arg } from "type-graphql";

import { StaticPage } from "./static.page";

@Resolver(StaticPage)
export class DogsResolver {
  private _pages: StaticPage[] = [];

  get staticPages(): StaticPage[] {
    return this._pages;
  }
  constructor() {
    //TODO: FETCH
    this._pages = [];
  }

  @Query(() => StaticPage, { nullable: true })
  staticPage(@Arg("name", () => String) url: string): StaticPage | undefined {
    const page = this.staticPages.find((page) => page.url === url);
    if (page === undefined) {
      throw new Error("Dog not found");
    }
    return page;
  }

  @Query(() => [StaticPage])
  pages(): StaticPage[] {
    return this.staticPages;
  }
}
