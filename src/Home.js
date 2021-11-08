import React from 'react';
import "./Home.css";
import PageLayout from './PageLayout';
import Product from './Product';

function Home() {
    return (
        <PageLayout>
            <div className="home">
                <div className="home__container">
                    <img className="home__image" 
                    src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" 
                    alt=""
                    />

                    <div className="home__row">
                        <Product 
                        id={1} 
                        title='essence | Lash Princess False Lash Effect Mascara | Gluten & Cruelty Free'
                        price={4.99}
                        image="https://m.media-amazon.com/images/I/71clFOCQXlL._AC_UL320_.jpg"
                        rating={5}
                        />
                        <Product
                        id={2} 
                        title='REVLON One-Step Hair Dryer And Volumizer Hot Air Brush, Black'
                        price={34.88}
                        image="https://m.media-amazon.com/images/I/71aXzv34N+L._AC_UL320_.jpg"
                        rating={5}
                        />
                    </div>

                    <div className="home__row">
                        <Product 
                        id={3} 
                        title='Amazon Basics 48 Pack AA High-Performance Alkaline Batteries to Open Value Pack'
                        price={14.99}
                        image="https://m.media-amazon.com/images/I/91J9pb2yEyL._AC_UL320_.jpg"
                        rating={5}
                        />
                        <Product 
                        id={4}
                        title='Amazon Basics 2 Slice, Extra-Wide Slot Toaster with 6 Shade Settings, Black'
                        price={22.99}
                        image="https://m.media-amazon.com/images/I/81smEEgnhfL._AC_UL320_.jpg"
                        rating={5}
                        />

                        <Product 
                        id={5}
                        title="Fellowes Powershred 79Ci 100% Jam Proof Medium, Duty Cross, Cut Shredder, 16 Sheet Capacity, Black/Dark Silver"
                        price={194.98}
                        image="https://m.media-amazon.com/images/I/41Ru1ZoKE9L._AC_UL320_.jpg"
                        rating={5}/>
                    </div>

                    <div className="home__row">
                        <Product 
                        id={6}
                        title="SAMSUNG 65-Inch Class Neo QLED QN90A Series - 4K UHD Quantum HDR 32x Smart TV with Alexa Built-in"
                        price={2227.99}
                        image="https://m.media-amazon.com/images/I/913+l9CB6cL._AC_SL1500_.jpg"
                        rating={5}/>
                    </div>
                </div>

            </div>
        </PageLayout>
    )
}

export default Home;