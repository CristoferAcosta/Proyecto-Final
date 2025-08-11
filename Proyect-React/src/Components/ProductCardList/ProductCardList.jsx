import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductCardList.css"

const ProductCardList = ({articles}) =>{
    return(
        <div className="conteiner-product-list">
            {
                articles.map(
                    (article) => {
                        return (
                            <div>
                                <ProductCard key={article.id} id={article.id} name={article.name} image={article.image} history={article.history}/>
                            </div>
                        ) 
                    }
                )
            }
        </div>
    )
} 
export default ProductCardList