import React from "react";
import Productos from "../../Data/Productos";

const Invitado = () => {
    return (
        <div className="home-page">
            <h1 className="title">¡Bienvenido al Museo!</h1>
            <Productos/>
        </div>
    )
}
export default Invitado