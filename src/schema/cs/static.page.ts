import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class StaticPage {
  @Field(() => ID)
  url: string;

  @Field(() => [String])
  title: string[];
}
