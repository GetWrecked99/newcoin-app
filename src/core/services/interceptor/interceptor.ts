import axios from "axios";
import { getItem } from "../storage/localStorage";

axios.interceptors.response.use(
  (response: any) => {
    console.log("با موفقیت انجام شد");
    return response;
  },
  async (error: any) => {
    // check if error is expected from backend
    try {
      const expectedError =
        error.response &&
        error.response.state >= 400 &&
        error.response.status < 500;

      // if error doesnt expected when we log it
      if (!expectedError) {
        // tweak it later
        // get error message from backend (see object of response later... maybe its changed)
        try {
          console.log(error.response.data.message[0].message);
        } catch (error) {}
      }
    } catch (error) {}
    return Promise.reject(error);
  }
);

// will send token to headers request ( in x-auth-token body )
axios.interceptors.request.use((config: any) => {
  config.headers["x-auth-token"] = getItem("token");
  return config;
});

export default axios;
