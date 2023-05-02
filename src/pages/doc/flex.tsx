import { FC } from "react";
import DocLayout from "../../containers/DocLayout";
import React from "react";
import ApiTable from "../../containers/ApiTable";
import { apiFlex } from "../../utils/constant";
import { Box, Center, Code, Flex } from "tuix-design";

const flex: FC = () => {
  return (
    <DocLayout
      title="flex"
      tag={["usage", "api"]}
      next="center"
      prev="animation"
    >
      <p id="basic" className="py-5">
        Basic usage
      </p>
      <Code
        mode="dark"
        language="javascript"
      >{`import {Flex} from "tuix-design"`}</Code>
      <div className="py-5">
        <Flex>
          <Box bg="blue" height={50}>
            <Center>box1</Center>
          </Box>
          <Box bg="blue" height={50}>
            <Center>box2</Center>
          </Box>
        </Flex>
        <Code mode="dark" language="javascript">{`<Flex
<Box bg="blue" height={50}>
    <Center>box1</Center>
</Box>
<Box bg="blue" height={50}>
    <Center>box2</Center>
</Box>
</Flex>`}</Code>
      </div>

      <ApiTable data={apiFlex} />
    </DocLayout>
  );
};

export default flex;
