import React from 'react';
import "./checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal";
import { useStateValue } from './StateProvider';
import PageLayout from './PageLayout';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <PageLayout>
            <div className="checkout">
                <div className="checkout__left">
                    <img className="checkout__ad" 
                    src="data:image/jpeg;base64,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" 
                    alt=""
                    />
                    <div>
                        <h3>Hello, {user?.email}</h3>
                        <h2 className="checkout__title">Your shopping Basket</h2>
                
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

                <div className="checkout__right">
                    <Subtotal />
                    

                </div>
            </div>
        </PageLayout>
    )
}

export default Checkout
