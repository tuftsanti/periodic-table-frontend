import axios from "axios"

export default {
  async getElements(sortBy) {
    // const res = await axios.get("http://localhost:8000/elements");
    const res = await axios.get("https://andys-periodic-table.herokuapp.com/elements");
    console.log(sortBy)
    let sorted = res.data
    console.log(sorted)
    /////// TRYING TO SORT IN GETTER?
    // console.log(sorted)
    // function sortAlphaNum(a,b) {
    //   let regexAlpha = /[^a-zA-Z]/g;
    //   let regexNumber = /[^0-9]/g;
    //   let aA = a.name.replace(regexAlpha, "");
    //   let bA = b.name.replace(regexAlpha, "");
    //   if (aA === bA) {
    //       let aN = parseInt(a.name.replace(regexNumber, ""), 10);
    //       let bN = parseInt(b.name.replace(regexNumber, ""), 10);
    //       return aN === bN ? 0 : aN > bN ? 1 : -1;
    //   } else {
    //       return aA > bA ? 1 : -1;
    //   }
    // }
    // const resort = sorted.sort(sortAlphaNum);
    // console.log(sorted)

    return sorted;
  },
  async getElement(elementNumber) { //, token) {
    // const res = await axios.get("http://localhost:8000/elements/" + elementNumber) //, {
    const res = await axios.get("https://andys-periodic-table.herokuapp.com/elements/" + elementNumber) //, {
    //     headers: {Authorization: `Bearer ${token}`}
    // });
    
    return res.data;
  }
  // async searchByName(name) {
  //   const res = await axios.get()
  // }
}