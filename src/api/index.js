import axios from "axios";

const api = axios.create({
  baseURL: "https://sportybackendv1.herokuapp.com/api"
});

export const getSports = () => api.get("/deportes");
export const getLigas = () => api.get("/liga");
export const postLigas = (content) => api.post("/liga", content);

const apis = {
  getLigas,
  getSports,
  postLigas
};

export default apis;
