export const getId = (tag: string[], index: number) => {
  return tag[index].toLocaleLowerCase().replaceAll(" ", "-");
};
