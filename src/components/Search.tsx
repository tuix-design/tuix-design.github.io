import { Link } from "gatsby";
import React, { FC, useEffect, useState } from "react";
import { Modal } from "tuix-design";
import { index, tag, tagSchema } from "../utils/constant";
import { search } from "../utils/helper";

interface SearchProps {}

const Search: FC<SearchProps> = () => {
  const [tags, setTags] = useState<tagSchema[]>([]);
  const onSearch = (value: string) => {
    const result = search(value, index);
    let res: tagSchema[] = [];
    result.forEach((id: number) => {
      res.push(tag[id]);
    });
    setTags(res);
  };
  return (
    <Modal className="w-1/2" modalClass="!bg-[rgba(0,0,0,0.8)]">
      <div className="border main-radius py-1 px-3">search ctrl+k</div>
      <div className="w-1/2 bg-dark">
        <input
          placeholder="search"
          className="bg-transparent outline-none w-full border-b p-5 rounded-none"
          onChange={(e) => onSearch(e.target.value)}
        />
        <div className="flex flex-col p-5 max-h-[300px] overflow-y-auto">
          {tags.map((tag) => {
            return (
              <>
                <Link
                  to=""
                  className="p-2 py-3 my-2 main-radius bg-gray-950 hover:bg-purple"
                >
                  <span>{tag.doc}</span>
                </Link>
                {tag.tag.split(",").map((id: string) => (
                  <Link
                    to=""
                    className="p-2 pl-4 py-3 my-2 main-radius bg-gray-950 hover:bg-purple"
                  >
                    <span># {id}</span>
                  </Link>
                ))}
              </>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default Search;
