import axios from "axios"

export default {
  async getElements() {
    // const res = await axios.get("http://localhost:8000/elements");
    const res = await axios.get("https://andys-periodic-table.herokuapp.com/elements");
    return res.data;
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