import { getSuggestedQuery } from '@testing-library/react';
import React from 'react';
class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:'apple iphone 12',
            qty:1,
            img:''
        }
    }
    increaseQuantity = () => {
        this.state.price++;
        console.log(this.state.price);
    }
    render(){
        const {price, title, qty} = this.state;
     return (
         <div className="cart-item">
             <div className="left-block">
                 <img style={styles.image} src="https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/u/q/d/apple-iphone-12-pro-dummyapplefsn-original-imafwgbrcgcar4rn.jpeg?q=70" alt="" />
             </div>
             <div className="right-block">
            <div style={{fontSize:15}}>
           {title}
            </div >
           <div style={{fontSize:15, color:'grey'}}>
           ₹. {price}
           </div>
            <div style={{fontSize:15, color:'grey'}}>
            Qty: {qty}
            </div>
            <div className="cart-item-action">
                {/*Buttons*/}
                <img
                onClick={this.increaseQuantity}
                className="action-icons" src="https://img-premium.flaticon.com/png/512/1665/premium/1665629.png?token=exp=1625776624~hmac=d7518f6f2eca10fb6cac10687eb4ea6c" alt="inc" />
                <img  className="action-icons" src="https://img-premium.flaticon.com/png/512/1665/premium/1665663.png?token=exp=1625776576~hmac=217b5fa8a3ef7231fc62305460948537" alt="dec" />
                <img  className="action-icons" src="https://image.flaticon.com/icons/png/512/1345/1345823.png" alt="del" />
            </div>
             </div>
         </div>
     );   
    }
}

const styles = {
    image :{
        height: 200,
        width:100,
        borderRadius:4,
        background: '#ccc'
    }
}
export default CartItem; 