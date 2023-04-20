import React, { FC } from "react";
import { Modal } from "tuix-design";

interface SearchProps {}

const Search: FC<SearchProps> = () => {
  return (
    <div className="w-1/2">
      <Modal>
        <div className="border main-radius py-1 px-3">search ctrl+k</div>
        <div>
          <input placeholder="search" />
        </div>
      </Modal>
    </div>
  );
};

export default Search;
