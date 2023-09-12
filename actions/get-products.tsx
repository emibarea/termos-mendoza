import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  try {
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        colorId: query.colorId,
        sizeId: query.sizeId,
        isFeatured: query.isFeatured,
        categoryId: query.categoryId,
      },
    });
    const res = await fetch(url);

    if (!res.ok) {
      // Manejar errores de respuesta HTTP aquí, si es necesario.
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    // Manejar errores de red, errores de análisis JSON, etc.
    console.error("Error en la solicitud de categorías:", error);
    throw error; // Opcionalmente, puedes lanzar el error nuevamente para que lo maneje el código que llama a esta función.
  }
};

export default getProducts;
