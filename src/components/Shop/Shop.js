import React, { useState } from 'react'
import Product from './Product';
import Social from './Social';
import CartProduct from './CartProduct';

export default function Shop() {
    const [products,setProducts]=useState([
                { id: 1, title: 'Album 1', price: 5, img: '/images/Album1.png' },
                { id: 2, title: 'Album 2', price: 15, img: '/images/Album2.png' },
                { id: 3, title: 'Album 3', price: 20, img: '/images/Album3.png' },
                { id: 4, title: 'Album 4', price: 100, img: '/images/Album4.png' },
                { id: 5, title: 'Coffee', price: 5, img: '/images/Cofee.png' },
                { id: 6, title: 'Shirt', price: 50, img: '/images/Shirt.png' },
    ])
    const [shoppingCart,setShoppingCart]=useState([]);
    const [socials,setSocials]=useState([
        { id: 1, href: 'https://www.youtube.com', img: '/images/YouTubeLogo.png' },
        { id: 2, href: 'https://www.spotify.com', img: '/images/SpotifyLogo.png' },
        { id: 3, href: 'https://www.facebook.com', img: '/images/YouTubeLogo.png' },
    ])
    const handleAddToCart=(id)=>{
        const cart=products.find(product=>product.id===id);
        setShoppingCart(prevCart=>[...prevCart,cart]);        
        
    }

    const EmptyCart=()=>{
        setShoppingCart([])
    }
    const handleRemoveItem=(id)=>{
        console.log(id);
        const newCart=shoppingCart.filter(item=>item.id!==id);
        setShoppingCart(newCart)
    }
  return (
    <>
         <header className="main-header">
                    <nav className="main-nav nav">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">STORE</a></li>
                            <li><a href="#">ABOUT</a></li>
                        </ul>
                    </nav>
                    <h1 className="band-name band-name-large">DMSV Shop</h1>
                </header>
                <section className="container content-section">
                    <div className="shop-items">
                        {products.map(product=>(
                        <Product key={product.id} {...product} handleAddToCart={(id)=>handleAddToCart(id)} />

                        ))}
                    </div>
                </section>
                <section className="container content-section">
                    <h2 className="section-header">CART</h2>
                    <div className="cart-row">
                        <span className="cart-item cart-header cart-column">ITEM</span>
                        <span className="cart-price cart-header cart-column">PRICE</span>
                        <span className="cart-quantity cart-header cart-column">Doing</span>
                    </div>
                    <div className="cart-items">

                        {shoppingCart.map(cart=>(
                        <CartProduct key={cart.id} {...cart} handleRemoveItem={(id)=>handleRemoveItem(id)}/>

                        ))}

                    </div>
                    <button className="btn btn-primary btn-purchase" type="button" onClick={EmptyCart}>
                        Empty Cart
                    </button>
                </section>
                <footer className="main-footer">
                    <div className="container main-footer-container">
                        <h3 className="band-name">The Generics</h3>
                        <ul className="nav footer-nav">
                            {socials.map(social=>(
                            <Social key={social.id} {...social}/>

                            ))}
                        </ul>
                    </div>
                </footer>
    </>
    )
}
