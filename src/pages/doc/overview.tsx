import { Link } from "gatsby";
import React from "react";
import { Card, Flex } from "tuix-design";
import DocLayout from "../../containers/DocLayout";

type Props = {};

const Overview = (props: Props) => {
  const overview = ["button", "icon", "grid", "layout", "form"];
  return (
    <DocLayout title="Overview" next="installation">
      <p className="p-2 py-5">
        We have the ready to use kit and customizable component <br />
        Feel free to add them to your react based application
      </p>
      <Flex wrap gap={24}>
        {overview.map((over, i) => (
          <Link to={`/doc/${over}`} key={i}>
            <Card
              image={`/${over}.png`}
              shadowColor="#5D00FF"
              hoverShadow="sm"
              className="group border hover:border-purple max-w-[150px]"
              bordered={false}
            >
              <div className="p-2 capitalize group-hover:text-purple">
                {over}
              </div>
            </Card>
          </Link>
        ))}
      </Flex>
    </DocLayout>
  );
};

export default Overview;
