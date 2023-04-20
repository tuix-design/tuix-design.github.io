import { Link } from "gatsby";
import React from "react";
import { Card, Col, Row } from "tuix-design";
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
      <Row wrap gap={[24, 16]}>
        {overview.map((over) => (
          <Col span={6}>
            <Link to={`/doc/${over}`}>
              <Card
                image={`/${over}.png`}
                shadowColor="#5D00FF"
                hoverShadow="sm"
                className="group border hover:border-purple"
                bordered={false}
              >
                <div className="p-2 capitalize group-hover:text-purple">
                  {over}
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </DocLayout>
  );
};

export default Overview;
