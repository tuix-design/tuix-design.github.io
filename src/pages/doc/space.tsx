import { FC } from "react";
import DocLayout from "../../containers/DocLayout";
import React from "react";
import ApiTable from "../../containers/ApiTable";
import { apiSpace } from "../../utils/constant";
import { Box, Center, Code, Space } from "tuix-design";

const space: FC = () => {
  return (
    <DocLayout title="space" next="divider" prev="center">
      <p id="basic" className="py-5">
        Basic usage
      </p>
      <p>set height for vertical space and width for horizontal space</p>
      <Code
        mode="dark"
        language="javascript"
      >{`import {Center} from "tuix-design"`}</Code>
      <Box bg="gray" height={100}>
        <Center>Content1</Center>
      </Box>
      <Space h={50} />
      <Box bg="gray" height={100}>
        <Center>Content2</Center>
      </Box>
      <Code mode="dark" language="javascript">{`<Box bg="gray" height={100}>
<Center>Content1</Center>
</Box>
<Space h={50} />
<Box bg="gray" height={100}>
<Center>Content2</Center>
</Box>`}</Code>
      <ApiTable data={apiSpace} />
    </DocLayout>
  );
};

export default space;
