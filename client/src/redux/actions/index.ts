export const addPost = (num: number) => {
  return {
    type: "ADD_TEST",
    // tslint:disable-next-line:object-literal-sort-keys
    number: num,
  }
}