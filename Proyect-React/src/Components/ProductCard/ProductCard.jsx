import React from "react";
import "./ProductCard.css"
import { Link } from "react-router";
import ProductDetalle from "../../Screens/ProductDetalle/ProductDetalle";
const ProductCard = ({id, name, image, history}) => {
console.log({id ,name, image, history})
    return (
        <Link to={`/ProductCardList/${id}/ProductDetalle`} state={{ name, image, history }}>
            <div className="product-list">
            
                <article className="product-card">
                    <img src={image} alt={name} />
                    <h3>{name}</h3>
                </article>
            
            </div>
        </Link>
    )
}
export default ProductCard