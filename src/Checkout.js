import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import {useStateValue} from './Stateprovider';

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout_left">
           <img className='checkout_ad' src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg" alt="" /> 

           <div  >
            <h3> Hello, {user?.email}</h3>

                <h2 className='checkout_title' >Your shopping basket</h2>

              {basket.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
              ))}

           </div>
        </div>

        <div className="checkout_right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout