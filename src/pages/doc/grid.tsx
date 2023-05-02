import { FC } from "react";
import DocLayout from "../../containers/DocLayout";
import ApiTable from "../../containers/ApiTable";
import React from "react";
import { apiGrid, apiGridItem } from "../../utils/constant";
import Section from "../../components/Section";
import { Box, Grid } from "tuix-design";

const grid: FC = () => {
  return (
    <DocLayout title="grid" prev="animation" next="flex">
      <Section title="Basic usage">{`import {Grid} from "tuix-design"`}</Section>
      <Section title="Simple Grid" preview>
        <Grid column={3}>
          <Box bg="blue" height={100} />
          <Box bg="blue" height={100} />
          <Box bg="blue" height={100} />
          <Box bg="blue" height={100} />
        </Grid>
      </Section>
      <ApiTable title="Grid props" data={apiGrid} />
      <ApiTable title="Grid Item props" data={apiGridItem} />
    </DocLayout>
  );
};

export default grid;
