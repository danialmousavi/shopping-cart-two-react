import React, { Component } from 'react'
import Product from './Product'
import CartProduct from './CartProduct'
import Social from './Social'
import album1 from './images/Album1.png'
import album2 from './images/Album2.png'
import album3 from './images/Album3.png'
import album4 from './images/Album4.png'
import Cofee from './images/Cofee.png'
import shirt from './images/Shirt.png'
import youtube from './images/YoutubeLogo.png'
import spotify from './images/SpotifyLogo.png'
import faceBook from './images/FacebookLogo.png'
export default class Shop extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [
                { id: 1, title: 'Album 1', price: 5, img:album1 },
                { id: 2, title: 'Album 2', price: 15, img: album2 },
                { id: 3, title: 'Album 3', price: 20, img: album3 },
                { id: 4, title: 'Album 4', price: 100, img:album4 },
                { id: 5, title: 'Coffee', price: 5, img:Cofee },
                { id: 6, title: 'Shirt', price: 50, img:shirt },
            ],

            shoppingCart: [],
            socials: [
                { id: 1, href: 'https://www.youtube.com', image:youtube },
                { id: 2, href: 'https://www.spotify.com', image:spotify},
                { id: 3, href: 'https://www.facebook.com', image:faceBook },
            ],
        }


    }
    addToCartHandler(id){
        let cart=this.state.products.find(product=>product.id===id);
        this.setState((prevState)=>({
            shoppingCart:[...prevState.shoppingCart,cart]
        }));
    }
    removeFromCart(id){
        console.log(id);
        let removed=this.state.shoppingCart.filter(cart=>cart.id!==id);
        this.setState({shoppingCart:removed});
    }
    removeAllHandler(){
        this.setState({shoppingCart:[]})
    }
    render() {
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
                    <h1 className="band-name band-name-large">SabzLearn Shop</h1>
                </header>
                <section className="container content-section">
                    <div className="shop-items">
                        {this.state.products.map(product=>(
                        <Product key={product.id} {...product} addTocart={(id)=>this.addToCartHandler(id)}/>
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
                        {this.state.shoppingCart.map(cart=>(
                        <CartProduct key={cart.id} {...cart} removeHandler={(id)=>this.removeFromCart(id)}/>
                        ))}


                    </div>
                    <button className="btn btn-primary btn-purchase" type="button" onClick={()=>this.removeAllHandler()}>
                        Empty Cart
                    </button>
                </section>
                <footer className="main-footer">
                    <div className="container main-footer-container">
                        <h3 className="band-name">The Generics</h3>
                        <ul className="nav footer-nav">
                            {this.state.socials.map(social=>(
                            <Social key={social.id} {...social}/>
                            ))}
                        </ul>
                    </div>
                </footer>
            </>
        )
    }
}