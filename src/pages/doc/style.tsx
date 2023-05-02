import { FC } from "react";
import DocLayout from "../../containers/DocLayout";
import React from "react";
import { Code } from "tuix-design";
import { styleShortCode } from "../../utils/constant";

const style: FC = () => {
  const tag = ["display", "size"];
  return (
    <DocLayout title="style" tag={tag} next="animation" prev="icon">
      <p>
        tuix-design uses shortcode like{" "}
        <span className="text-purple">flex w:100% bg:red</span> to define style
      </p>
      <p className="py-3 text-lg">usage</p>
      <p className="pb-3">
        pass the shorcode in style props
        <br />
        <span className="text-purple">:</span> represent the css value. Ex:
        <span className="text-purple"> bg:red</span>
        <br />
        use<span className="text-purple"> _ </span>(underscode) to present space
        in css value
      </p>
      <Code mode="dark">{`<Div style="flex w:100% bg:red">hello world!<Div/>`}</Code>
      <p className="py-3 text-xl">Shortcode</p>
      {Object.keys(styleShortCode).map((sh, i) => (
        <div key={i} className="p-4">
          <p id={sh} className="text-lg py-3">
            {sh}
          </p>
          <table className="w-full">
            <tr>
              <td className="border border-gray-600   p-3">shortcode</td>
              <td className="border border-gray-600   p-3">css</td>
            </tr>
            {styleShortCode[sh].map((stl: any) => (
              <tr>
                <td className="border border-gray-600 text-gray-300  p-3">
                  {stl.shortcode}
                </td>
                <td className="border border-gray-600 text-gray-300  p-3">
                  {stl.css}
                </td>
              </tr>
            ))}
          </table>
        </div>
      ))}
    </DocLayout>
  );
};

export default style;
