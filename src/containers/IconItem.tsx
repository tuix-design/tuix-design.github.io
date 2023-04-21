import React, { FC, useState } from "react";
import { Code, Icon, Modal } from "tuix-design";

interface IconItemProps {
  name: any;
}

const IconItem: FC<IconItemProps> = ({ name }) => {
  const [copyName, setCopyName] = useState<string>("Copy name");
  const [copyimport, setCopyimport] = useState<string>("Copy import");
  const copy = (isname: boolean = true) => {
    navigator.clipboard.writeText(
      isname ? name : `import {Icon} from "tuix-design"`
    );
    isname ? setCopyName("copied") : setCopyimport("copied");
    setTimeout(() => {
      isname ? setCopyName("Copy name") : setCopyimport("Copy import");
    }, 3000);
  };
  return (
    <Modal modalClass="!bg-[rgba(0,0,0,0.8)]">
      <div className="bg-gray-900 cursor-pointer p-4 main-radius flex flex-col justify-center items-center hover:bg-purple">
        <Icon name={name} color="#fff" size={36} />
        <span className="text-sm">{name}</span>
      </div>
      <div className="w-1/2 bg-gray-900 main-radius p-3 py-4">
        <p className="text-xl">{name}</p>
        <div className="w-full flex justify-center items-center">
          <Icon name={name} color="#fff" size={100} />
        </div>
        <div className="flex w-full gap-4 my-5">
          <button
            onClick={() => copy()}
            className="border w-1/2 px-2 py-1 hover:bg-white hover:text-gray-800"
          >
            {copyName}
          </button>
          <button
            onClick={() => copy(false)}
            className="border w-1/2 px-2 py-1 hover:bg-white hover:text-gray-800"
          >
            {copyimport}
          </button>
        </div>
        <Code
          mode="dark"
          language="javascript"
          bg="#fff"
          className="text-base"
        >{`<Icon name="${name}"/>`}</Code>
      </div>
    </Modal>
  );
};

export default IconItem;
