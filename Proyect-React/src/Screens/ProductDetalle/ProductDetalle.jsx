import { useParams } from "react-router";
import React from "react";
import { useLocation } from "react-router";
import "./ProductDetalle.css";

const ProductDetalle = () => {
    const { state } = useLocation();
    if (!state) return <p>No se recibieron datos</p>;

    return (
        <div className="container_productos_detalle">
                <img src={state.image} alt={state.name} />
            <div className="product-detalle">
                <h2 className="title_big">{state.name}</h2>
                <p className="text">{state.history}</p>
            </div>
        </div>
    );
};

export default ProductDetalle;
