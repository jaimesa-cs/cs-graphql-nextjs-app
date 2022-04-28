import { Button, Grid, Image, Text, Title } from "@mantine/core";
import { dehydrate, useQuery } from "react-query";
import { dogByName, queryClient } from "../../src/api";

import React from "react";
import { StaticComposition } from "../../src/generated/cs/graphql";
import { StaticPage } from "../../src/schema/cs/static.page";
import { StaticPageByUrl } from "../../src/cs-api";
import { setHttpAgentOptions } from "next/dist/server/config";

export async function getServerSideProps({ params }) {
  //   await queryClient.prefetchQuery(["dog"], () =>
  //     dogByName({ name: params.name })
  //   );
  const arr = params?.url as [];
  let path = `/${arr.join("/")}`;
  console.log(path);
  return {
    props: {
      url: path,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const StaticPageDetail: React.FunctionComponent<{
  url: string;
}> = ({ url }) => {
  const { data } = useQuery(["static-page"], () => StaticPageByUrl({ url }));
  let page: StaticComposition = undefined;
  if (!data || !data.all_static_composition.items || data.all_static_composition.items.length === 0) {
    return <div>No page found</div>;
  } else {
    //const {education: {school: {name} = {}} = {}} = user;
    const {
      all_static_composition: { items },
    } = data;
    page = items[0];
  }

  return (
    <Grid>
      {/* <Title order={1}>{data.dog.name}</Title> */}
      <Title order={1}>{JSON.stringify(page)}</Title>
    </Grid>
  );
};

export default StaticPageDetail;
