import { useState, useEffect } from "react";

const PruebasHooks = ({contador, setContador}) => {

    const [img, setImg] = useState("");

    let arr = [
        "https://previews.123rf.com/images/dafityusup/dafityusup2110/dafityusup211000002/175210388-lindo-gato-en-estilo-pop-art-adecuado-para-el-dise%C3%B1o-de-camisetas-arte-mural-y-cualquier-cosa.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqEFMvZByVVq1qB8Ue6NWil3p-dnUwbxKPZ_6WRJ0&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqI_ZI7DI42s3RkirEyks26d7BTRqAS65ThSMjpS9&s"
    ]

    useEffect( () => {

        setImg(arr[contador])
    }, [contador])

    return (
        <div>
            <h4>{contador}</h4>
            <button onClick={ () => setContador( contador + 1 ) }>Aumentar</button>
            <button onClick={ () => setContador( contador - 1 ) }>Decremento</button>

            {/* <button onClick={()=> setImg("https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/creacion_de_sitios_web/image/imgscursoweb-01_xl.png")}>Traer Imagen</button> */}
            <img src={img} alt=""></img>
        </div>
    )
}

export default PruebasHooks;