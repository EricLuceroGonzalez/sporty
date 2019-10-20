import axios from "axios";

const api = axios.create({
  baseURL: "https://sportybackendv1.herokuapp.com/api"
  // baseURL: "http://localhost:3001/api"
});

export const getSports = () => api.get("/deportes");
export const getLigas = () => api.get("/liga");
export const postLigas = content => api.post("/liga", content);
export const postEquipo = content => api.post("/equipo", content);
export const getEquipos = () => api.get("/equipos");
export const postPlayer = aPlayer => api.post("/player", aPlayer);
export const getLigaId = theId => api.get(`/ligaDetail/${theId}`);

const apis = {
  getLigas,
  getSports,
  getLigaId,
  getEquipos,
  postLigas,
  postEquipo,
  postPlayer
};

export default apis;
