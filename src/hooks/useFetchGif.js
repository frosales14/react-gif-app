import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGif = (category) => {
 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getImages = async() => {
        const newImagenes = await getGif(category);
        setImages(newImagenes);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }
}
