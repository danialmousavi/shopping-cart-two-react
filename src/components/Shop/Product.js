import React, { Component } from 'react'
export default function Product ({title,img,price,handleAddToCart,id}) {
    
        return (
            <div className="shop-item">
                <span className="shop-item-title">{title}</span>
                <img className="shop-item-image" src={img} />
                <div className="shop-item-details">
                    <span className="shop-item-price">${price}</span>
                    <button
                        className="btn btn-primary shop-item-button"
                        type="button"
                        onClick={()=>handleAddToCart(id)}
                        >
                        ADD TO CART
                    </button>
                </div>
            </div>
        )
}
