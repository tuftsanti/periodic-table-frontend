import axios from "axios"

export default {
  async getElements(sortBy) {
    // const res = await axios.get("http://localhost:8000/elements");
    const res = await axios.get("https://andys-periodic-table.herokuapp.com/elements");
    console.log(sortBy)
    let sorted = res.data
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