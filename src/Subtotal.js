import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{basket}, dispath] = useStateValue();
    console.log(basket);
    const subvalue = basket.length > 0 ? basket.reduce((a, b) => a.price + b.price) : 0;
    console.log(subvalue);

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items):  
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>

                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
