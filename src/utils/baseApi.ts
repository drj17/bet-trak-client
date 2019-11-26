const axios = require("axios").default;
const instance = axios.create({
  baseUrl: "http://localhost:3000/api"
});
export default instance;
