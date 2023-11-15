import { getCharacters } from "../reducer/characterSlice"
import axios from "axios"

export const getAllCharacters = () => async (dispatch) => {
    try {
        const response = await axios.get("http://localhost:3001/videogames");
        const allCharacters = response.data;
        dispatch(getCharacters(allCharacters));
      } catch (error) {
        console.error("Error al obtener personajes:", error);
      }
}   

