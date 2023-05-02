import { FC } from "react";
import DocLayout from "../../containers/DocLayout";
import React from "react";
import { Box, Center, Code } from "tuix-design";

const center: FC = () => {
  return (
    <DocLayout title="center" next="space" prev="flex" tag={["usage"]}>
      <p id="basic" className="py-5">
        Basic usage
      </p>
      <Code
        mode="dark"
        language="javascript"
      >{`import {Center} from "tuix-design"`}</Code>
      <Box bg="gray" height={300}>
        <Center>I am in the center</Center>
      </Box>
      <Code mode="dark" language="javascript">{`<Box bg="gray" height={300}>
<Center>I am in the center</Center>
</Box>`}</Code>
    </DocLayout>
  );
};

export default center;
