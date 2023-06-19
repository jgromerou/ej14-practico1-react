const URLRecetas = import.meta.env.VITE_API_RECETAS;

export const obtenerListaRecetas = async () => {
  try {
    const respuesta = await fetch(URLRecetas);
    const listaRecetas = await respuesta.json();
    return listaRecetas;
  } catch (error) {
    console.log(error);
  }
};

export const consultaAgregarReceta = async (receta) => {
  try {
    const respuesta = await fetch(URLRecetas, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(receta),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
