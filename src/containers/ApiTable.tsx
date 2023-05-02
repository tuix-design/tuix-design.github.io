import React, { FC } from "react";

interface dataSchema {
  props: string;
  type: string;
  description: string;
  default: string;
  status: string;
}

type dataKey = "props" | "type" | "description" | "default" | "status";

interface ApiTableProps {
  title?: string;
  data?: dataSchema[];
  id?: string;
}

const ApiTable: FC<ApiTableProps> = ({ title, data, id }) => {
  const header: dataKey[] = [
    "props",
    "type",
    "status",
    "default",
    "description",
  ];
  return (
    <div id={id} className="my-4 w-full overflow-x-auto">
      <p className="my-2">{title ? title : "API"}</p>
      <table className="w-full text-gray-300 rounded-sm">
        <thead>
          <tr>
            {header.map((head, i) => (
              <th
                key={i}
                className="capitalize font-normal text-left border border-gray-500 p-4"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item: dataSchema, i) => (
            <tr key={i}>
              {header.map((head: dataKey, i) => (
                <td
                  key={i}
                  className="text-sm border border-gray-500 hover:border-white p-4"
                >
                  {item[head]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiTable;
