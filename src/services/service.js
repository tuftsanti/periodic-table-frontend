import axios from "axios"

export default {
  async getElements() {
    const res = await axios.get("http://localhost:8000/elements");
    return res.data;
  },
  async getElement(elementId, token) {
    const res = await axios.get("http://localhost:8000/elements/" + elementId, {
        headers: {Authorization: `Bearer ${token}`}
    });
    return res.data;
  }
}