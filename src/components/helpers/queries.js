const URLRecetas = import.meta.env.VITE_API_RECETAS;

export const obtenerListaProductos = async () => {
  try {
    const respuesta = await fetch(URLRecetas);
    const listaRecetas = await respuesta.json();
    return listaRecetas;
  } catch (error) {
    console.log(error);
  }
};
