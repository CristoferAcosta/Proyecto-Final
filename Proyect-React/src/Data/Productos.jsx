
import React from "react";
import ProductCardList from "../Components/ProductCardList/ProductCardList";

const Productos = () => {
    const articles = [
    {
        id: 1,
        name: "Vasija Inca",
        image: "https://i.pinimg.com/originals/f9/52/62/f9526289deb1b3c8c9c2e3962a09acdb.png",
        history: "Objeto histórico usado en ceremonias incas."
    },
    {
        id: 2,
        name: "Máscara Maya",
        image: "https://i.pinimg.com/736x/50/5f/5d/505f5df51d359a8e44006d9fe3f9ff6b.jpg",
        history: "Máscara ceremonial de la cultura maya."
    },
    {
        id: 3,
        name: "Estatua Egipcia",
        image: "https://i.pinimg.com/736x/f7/b0/e7/f7b0e7db80e3e902f254534e238d1b7d.jpg",
        history: "Escultura representando a un faraón egipcio."
    }
];
    return (
        <ProductCardList articles={articles}/>
    )
}
export default Productos