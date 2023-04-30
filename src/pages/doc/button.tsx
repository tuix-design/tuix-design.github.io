import { FC } from "react";
import DocLayout from "../../containers/DocLayout";
import React from "react";
import { Button, Code, Icon } from "tuix-design";
import ApiTable from "../../containers/ApiTable";
import { apiButton } from "../../utils/constant";

interface buttonProps {}

const button: FC = (props) => {
  return (
    <DocLayout
      title="button"
      tag={[
        "basic",
        "icon button",
        "size",
        "disabled",
        "bordered",
        "rounded",
        "api",
      ]}
      next="icon"
      prev="installation"
    >
      <p id="basic" className="py-5">
        Basic usage
      </p>
      <Code
        mode="dark"
        language="javascript"
      >{`import {Button} from "tuix-design"`}</Code>
      <div className="my-3 flex gap-4">
        <Button>primary</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="success">success</Button>
        <Button variant="warning">warning</Button>
        <Button variant="danger">danger</Button>
      </div>

      <Code mode="dark" language="javascript">
        {`<Button>primary</Button>
<Button variant="secondary">secondary</Button>
<Button variant="success">success</Button>
<Button variant="warning">warning</Button>
<Button variant="danger">danger</Button>`}
      </Code>

      <p id="icon-button" className="py-5">
        Icon Button
      </p>
      <div className="my-3 flex gap-4">
        <Button icon={<Icon name="Home" color="#fff" />}>primary</Button>
      </div>

      <Code mode="dark" language="javascript">
        {`<Button icon={<Icon name="Home" color="#fff" />}>primary</Button>`}
      </Code>
      <p id="size" className="py-5">
        Size
      </p>
      <div className="my-3 flex gap-4">
        <Button size="sm" icon={<Icon size={16} name="Home" color="#fff" />}>
          small
        </Button>
        <Button icon={<Icon name="Home" color="#fff" />}>medium</Button>
        <Button size="lg" icon={<Icon name="Home" color="#fff" />}>
          large
        </Button>
      </div>

      <Code mode="dark" language="javascript">
        {`<Button size="sm" icon={<Icon size={16} name="Home" color="#fff" />}>
  small
</Button>
<Button icon={<Icon name="Home" color="#fff" />}>medium</Button>
<Button size="lg" icon={<Icon name="Home" color="#fff" />}>
  large
</Button>`}
      </Code>

      <p id="disabled" className="py-5">
        Disabled
      </p>
      <div className="my-3 flex gap-4">
        <Button disabled>disable</Button>
      </div>

      <Code mode="dark" language="javascript">
        {`<Button disabled>disable</Button>`}
      </Code>

      <p id="bordered" className="py-5">
        Bordered
      </p>
      <div className="my-3 flex gap-4">
        <Button bordered>bordered</Button>
      </div>

      <Code mode="dark" language="javascript">
        {`<Button bordered>bordered</Button>`}
      </Code>
      <p id="rounded" className="py-5">
        Rounded
      </p>
      <div className="my-3 flex gap-4">
        <Button rounded icon={<Icon name="Home" color="#fff" />}></Button>
      </div>

      <Code mode="dark" language="javascript">
        {`<Button rounded icon={<Icon name="Home" color="#fff" />}></Button>`}
      </Code>

      <ApiTable id="api" data={apiButton} />
    </DocLayout>
  );
};

export default button;
