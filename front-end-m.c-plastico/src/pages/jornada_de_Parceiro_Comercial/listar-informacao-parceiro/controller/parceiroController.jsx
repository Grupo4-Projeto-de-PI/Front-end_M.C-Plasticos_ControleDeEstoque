import axios from "axios";

const API_BASE_URL = "http://localhost:8080/parceiros"; 

export async function getAllParceiros() {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data; 
  } catch (error) {
    console.error("Erro ao buscar parceiros:", error);
    throw error;
  }
}


export async function getParceiroById(id) {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return response.data; 
  } catch (error) {
    console.error(`Erro ao buscar parceiro com id=${id}:`, error);
    throw error;
  }
}
