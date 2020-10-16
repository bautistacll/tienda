import axios from "axios";

const callControllerGetCartegory = async (idCategoria) => {
  try {
    const response = await axios.get(
      "../../api/Articuloes/GetArticulosPorIdCategoria/" + idCategoria
    );
    console.log(response.data)
    if (response.data != null) {
      return response.data;
    } else {
      return null;
    }
  } catch (ex) {
    return {
      success: false,
      message: "No se ha podido establecer la conexion",
    };
  }
};


export { callControllerGetCartegory };
