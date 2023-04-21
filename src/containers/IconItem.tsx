import React, { FC, useState } from "react";
import { Code, Icon, Modal } from "tuix-design";

interface IconItemProps {
  name: any;
}

const IconItem: FC<IconItemProps> = ({ name }) => {
  const [copyName, setCopyName] = useState<string>("Copy name");
  const [copyimport, setCopyimport] = useState<string>("Copy import");
  const [color, setColor] = useState<string>("#ffffff");
  const [size, setSize] = useState<number>(24);
  const [rotate, setRotate] = useState<number>(0);
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
          <Icon name={name} color="#fff" size={72} />
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
        <div className="flex w-full gap-4 my-5">
          <div className="flex justify-between items-center border w-1/2 px-2 py-1 main-radius hover:bg-white hover:text-gray-800">
            <span>Color</span>
            <input
              type="color"
              defaultValue={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
          </div>
          <select
            className="border outline-none bg-transparent w-1/2 px-2 py-1 hover:bg-white hover:text-gray-800"
            onChange={(e) => {
              setSize(
                e.target.value === "default" ? 24 : parseInt(e.target.value)
              );
            }}
          >
            {["default", 16, 24, 32, 40, 48, 56, 64].map((sz, i) => (
              <option key={i}>{sz}</option>
            ))}
          </select>
        </div>
        <div>
          <input
            className="border w-full outline-none bg-transparent px-2 py-1 hover:bg-white hover:text-gray-800"
            type="number"
            min={-360}
            max={360}
            placeholder="Rotate"
            onChange={(e) =>
              setRotate(e.target.value === "" ? 0 : parseInt(e.target.value))
            }
          />
        </div>
        <div className="my-3">
          <Icon name={name} color={color} size={size} rotate={rotate} />
        </div>
        <Code
          mode="dark"
          language="javascript"
          bg="#fff"
          className="text-base"
        >{`<Icon name="${name}" ${
          color === "#000000" ? "" : `color="${color}"`
        } ${size === 24 ? "" : `size={${size}}`} ${
          rotate === 0 ? "" : `rotate={${rotate}}`
        }/>`}</Code>
      </div>
    </Modal>
  );
};

export default IconItem;
