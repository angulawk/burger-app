import axios from "axios";

const instance = axios.create({
  headers: {
    post: {
      // can be common or any other method
      "Access-Control-Allow-Origin": "*"
    }
  },
  baseURL: "https://burger-app-24365.firebaseio.com"
});

export default instance;
