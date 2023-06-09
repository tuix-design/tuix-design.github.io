export const getId = (tag: string[], index: number) => {
  return tag[index].toLocaleLowerCase().replaceAll(" ", "-");
};
/**function to clean string */
const tokennize = (str: string) => {
  let res = str.replace(/[" "]g/, "");
  res = res.toLowerCase();
  return res;
};
/**funxtion to search documentation
 * @param {string} query:the query search
 * @param {any} index:the inverted index of data as object
 */
export const search = (query: string, index: any) => {
  let result: number[] = [];
  query.split(" ").forEach((qr: string) => {
    const formatQuery = tokennize(qr);
    if (index[formatQuery]) {
      index[formatQuery].forEach((id: number) => {
        if (result.indexOf(id) === -1) {
          result.push(id);
        }
      });
    }
  });
  return result;
};
