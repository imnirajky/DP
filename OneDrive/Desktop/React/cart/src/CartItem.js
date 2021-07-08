import { getSuggestedQuery } from '@testing-library/react';
import React from 'react';
class CartItem extends React.Component{
    render(){
     return (
         <div className="cart-item">
             <div className="left-block">
                 <img style={styles.image} src="" alt="" />
             </div>
             <div className="right-block">
            <div style={{fontSize:25}}>
            Phone
            </div >
           <div style={{fontSize:15, color:'grey'}}>
           Rs. 999 
           </div>
            <div style={{fontSize:15, color:'grey'}}>
            Qty: 1
            </div>
            <div className="cart-item-action">
                {/*Buttons*/}
            </div>
             </div>
         </div>
     );   
    }
}

const styles = {
    image :{
        height: 110,
        width:110,
        borderRadius:4,
        background: '#ccc'
    }
}
export default CartItem; 