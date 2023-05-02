import { FC } from "react";
import DocLayout from "../../containers/DocLayout";
import ApiTable from "../../containers/ApiTable";
import React from "react";
import { apiGrid, apiGridItem } from "../../utils/constant";
import Section from "../../components/Section";
import { Box, Grid, GridItem } from "tuix-design";

const grid: FC = () => {
  return (
    <DocLayout
      title="grid"
      prev="animation"
      next="flex"
      tag={[
        "basic",
        "simple grid",
        "templateColumns",
        "templateRows",
        "gap",
        "grid item",
        "grid area",
        "grid api",
        "grid item api",
      ]}
    >
      <Section
        id="basic"
        title="Basic usage"
        code={`import {Grid} from "tuix-design"`}
      ></Section>
      <Section
        id="simple-grid"
        title="Simple Grid"
        description="Column props define de number of grid's column."
        code={`<Grid column={3}>
    <Box bg="blue" height={100} />
    <Box bg="blue" height={100} />
    <Box bg="blue" height={100} />
    <Box bg="blue" height={100} />
</Grid>`}
      >
        <Grid column={3}>
          <Box bg="blue" height={100} />
          <Box bg="blue" height={100} />
          <Box bg="blue" height={100} />
          <Box bg="blue" height={100} />
        </Grid>
      </Section>
      <Section
        id="autorows"
        title="Autorows set all grid's child height."
        code={`<Grid column={3} autoRows={100}>
    <Box bg="blue" />
    <Box bg="blue" />
    <Box bg="blue" />
    <Box bg="blue" />
</Grid>`}
      >
        <Grid column={3} autoRows={100}>
          <Box bg="blue" />
          <Box bg="blue" />
          <Box bg="blue" />
          <Box bg="blue" />
        </Grid>
      </Section>
      <Section
        id="autocols"
        title="AutoCols sets a size for the columns in a grid.It affects only columns with the size not set"
        code={`<Grid column={3} autoRows={100}>
    <Box bg="blue" />
    <Box bg="blue" />
    <Box bg="blue" />
    <Box bg="blue" />
</Grid>`}
      >
        <Grid autoCols={100} autoRows={100}>
          <Box bg="blue" />
          <Box bg="blue" />
        </Grid>
      </Section>
      <Section
        id="templatecolumns"
        title="templateColumns"
        code={`<Grid templateColumns="20px 100px 200px" autoRows={100}>
    <Box bg="blue" />
    <Box bg="blue" />
    <Box bg="blue" />
</Grid>`}
      >
        <Grid templateColumns="20px 100px 200px" autoRows={100}>
          <Box bg="blue" />
          <Box bg="blue" />
          <Box bg="blue" />
        </Grid>
      </Section>
      <Section
        id="templaterows"
        title="templateRows"
        code={`<Grid templateRows="100px 50px 20px">
    <Box bg="blue" />
    <Box bg="blue" />
    <Box bg="blue" />
</Grid>`}
      >
        <Grid templateRows="100px 50px 20px">
          <Box bg="blue" />
          <Box bg="blue" />
          <Box bg="blue" />
        </Grid>
      </Section>
      <Section
        id="gap"
        title="gap"
        code={`<Grid column={3} autoRows={100} gap={20}>
    <Box bg="blue" />
    <Box bg="blue" />
    <Box bg="blue" />
</Grid>`}
      >
        <Grid column={3} autoRows={100} gap={20}>
          <Box bg="blue" />
          <Box bg="blue" />
          <Box bg="blue" />
        </Grid>
      </Section>
      <Section
        id="grid-item"
        title="Grid Item"
        code={`<Grid templateColumns="auto auto auto">
<GridItem col="1 / 3">
            <Box bg="red" height={100} />
    </GridItem>
<GridItem>
            <Box bg="blue" height={100} />
</GridItem>
    <GridItem>
            <Box bg="blue" height={100} />
    </GridItem>
</Grid>`}
      >
        <Grid templateColumns={`auto auto auto`}>
          <GridItem col="1 / 3">
            <Box bg="red" height={100} />
          </GridItem>
          <GridItem>
            <Box bg="blue" height={100} />
          </GridItem>
          <GridItem>
            <Box bg="blue" height={100} />
          </GridItem>
        </Grid>
      </Section>
      <Section
        id="grid-area"
        title="Grid Area"
        code={`<Grid templateAreas='"red blue" "green green"'>
<GridItem area="red">
<Box bg="red" height={100} />
</GridItem>
<GridItem area="blue">
<Box bg="blue" height={100} />
</GridItem>
<GridItem area="green">
<Box bg="green" height={100} />
</GridItem>
</Grid>`}
      >
        <Grid templateAreas='"red blue" "green green"'>
          <GridItem area="red">
            <Box bg="red" height={100} />
          </GridItem>
          <GridItem area="blue">
            <Box bg="blue" height={100} />
          </GridItem>
          <GridItem area="green">
            <Box bg="green" height={100} />
          </GridItem>
        </Grid>
      </Section>
      <ApiTable id="grid-api" title="Grid props" data={apiGrid} />
      <ApiTable id="grid-item-api" title="Grid Item props" data={apiGridItem} />
    </DocLayout>
  );
};

export default grid;
