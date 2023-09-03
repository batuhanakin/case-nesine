import Axios from "axios";

const baseRequest = Axios.create({
  baseURL: `https://nesine-case-study.onrender.com`,
  timeout: 3000,
});
export const getBets = async () =>
  await baseRequest
    .get("/bets")
    .then((response) => response?.data)
    .catch((error) => console.log("error", error));
