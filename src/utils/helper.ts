export const getId = (tag: string[], index: number) => {
  return tag[index].toLocaleLowerCase().replaceAll(" ", "-");
};
/**function to clean string */
const tokennize = (str: string) => {
  let res = str.replaceAll(",", " ");
  return res;
};
/**funxtion to search documentation
 * @param {string} query:the query search
 * @param {any} index:the inverted index of data as object
 */
export const search = (query: string, index: any) => {
  const formatQuery = tokennize(query);
  let result: number[] = [];
  formatQuery.split(" ").forEach((qr: string) => {
    Object.keys(index)
      .filter((k) => k.includes(qr))
      .forEach((idx) => {
        index[idx].forEach((id: number) => {
          if (result.indexOf(id) === -1) {
            result.push(id);
          }
        });
      });
  });
  return result;
};
