// export async function getParceiroById(id) {
//   try {
//     const response = await fetch(`http://localhost:3000/api/parceiros/${id}`);
//     if (!response.ok) throw new Error("Erro ao buscar parceiro");
//     return await response.json();
//   } catch (error) {
//     console.error("Erro no controller:", error);
//     return null;
//   }
// }

// export async function getParceiros() {
//   try {
//     const response = await fetch("http://localhost:3000/api/parceiros");
//     if (!response.ok) throw new Error("Erro ao buscar lista de parceiros");
//     return await response.json();
//   } catch (error) {
//     console.error("Erro no controller:", error);
//     return [];
//   }
// }