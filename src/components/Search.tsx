import { Link } from "gatsby";
import React, { FC, useCallback, useState } from "react";
import { Icon, Modal } from "tuix-design";
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

  const modal = useCallback((node: any) => {
    if (node) {
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          node.close();
        }
        if (e.key === "k" && e.ctrlKey) {
          e.preventDefault();
          node.show();
        }
      });
    }
  }, []);

  return (
    <Modal
      ref={modal}
      className="w-1/2"
      modalClass="!bg-[rgba(0,0,0,0.8)]"
      position="start"
      shortcut="k"
    >
      <div className="border main-radius py-1 px-3 cursor-pointer">
        search ctrl+k
      </div>
      <div className="w-1/2 bg-dark mt-32 main-radius">
        <div className="flex items-center border-b p-5">
          <Icon name="Search" color="#f2f2f2" />

          <input
            placeholder="search"
            className="bg-transparent outline-none w-full ml-5 rounded-none"
            onChange={(e) => onSearch(e.target.value)}
            autoFocus
            onFocus={(e) => onSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-col p-5 max-h-[300px] overflow-y-auto">
          {tags.map((tag, i) => {
            const id = tag.link.includes("#");
            return (
              <Link
                key={i}
                to={`/doc/${tag.link}`}
                className={`search-result-show h-12 flex items-center  px-2 my-2 ${
                  id && "pl-4"
                } main-radius bg-gray-900 hover:bg-purple`}
              >
                <span>
                  {<Icon name={id ? "Down" : "File"} size={32} color="#fff" />}
                </span>
                <span>
                  {id && "# "}
                  {tag.label}
                </span>
              </Link>
            );
          })}
          {tags.length === 0 && "No result"}
        </div>
      </div>
    </Modal>
  );
};

export default Search;
