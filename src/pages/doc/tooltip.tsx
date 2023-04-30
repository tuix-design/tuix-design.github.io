import { FC } from "react";
import DocLayout from "../../containers/DocLayout";
import React from "react";
import { Button, Code, Tooltip } from "tuix-design";
import ApiTable from "../../containers/ApiTable";
import { apiTooltip } from "../../utils/constant";

const tooltip: FC = () => {
  return (
    <DocLayout title="tooltip" tag={["usage", "position", "api"]}>
      <p id="usage" className="py-5">
        Tooltip is a helper to quick inform user
      </p>
      <div className="my-3 flex gap-4">
        <Tooltip
          content="this is the tooltip content"
          style={{ backgroundColor: "#f2f2f2", color: "#000" }}
        >
          <Button>tooltip</Button>
        </Tooltip>
      </div>

      <Code mode="dark" language="javascript">
        {`<Tooltip
content="this is the tooltip content"
style={{ backgroundColor: "#f2f2f2", color: "#000" }}
>
<Button>tooltip</Button>
</Tooltip>`}
      </Code>
      <p id="position" className="py-5">
        Tooltip can be in a different position
      </p>
      <div className="my-3 flex flex-wrap gap-4">
        <Tooltip
          content="this is the tooltip content"
          style={{ backgroundColor: "#f2f2f2", color: "#000" }}
        >
          <Button>default</Button>
        </Tooltip>
        <Tooltip
          content="this is the tooltip content"
          style={{ backgroundColor: "#f2f2f2", color: "#000" }}
          position="left"
        >
          <Button>left</Button>
        </Tooltip>
        <Tooltip
          content="this is the tooltip content"
          style={{ backgroundColor: "#f2f2f2", color: "#000" }}
          position="right"
        >
          <Button>right</Button>
        </Tooltip>
        <Tooltip
          content="this is the tooltip content"
          style={{ backgroundColor: "#f2f2f2", color: "#000" }}
          position="bottom"
        >
          <Button>bottom</Button>
        </Tooltip>
      </div>

      <Code mode="dark" language="javascript">
        {`<Tooltip
content="this is the tooltip content"
>
<Button>tooltip</Button>
</Tooltip>

<Tooltip
content="this is the tooltip content"
position="left"
>
<Button>tooltip</Button>
</Tooltip>

<Tooltip
content="this is the tooltip content"
position="right"
>
<Button>tooltip</Button>
</Tooltip>

<Tooltip
content="this is the tooltip content"
position="bottom"
>
<Button>tooltip</Button>
</Tooltip>`}
      </Code>
      <ApiTable id="api" data={apiTooltip} />
    </DocLayout>
  );
};

export default tooltip;
