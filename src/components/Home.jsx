import NavBar from "./NavBar";
import PruebasHooks from "./PruebasHooks";
import {useState} from "react"

const Home = () => {

    const [contador, setContador] = useState(0);

    return (
        <>
        <NavBar />
        <PruebasHooks contador={contador} setContador={setContador} />
        </>
    )
}

export default Home;