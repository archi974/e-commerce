import React, { useState, useEffect } from 'react'
import Banner from '../images/banner2.png'
import Ban from '../images/ban3.jpg'
import { Carousel } from 'react-bootstrap'
import ProductHome from '../components/Products/ProductHome'
import './home.css'

function Home({ products }) {

    return (
        <div>

            {/* Carousel Section */}

            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Banner}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Ban}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* Huiles section */}

            <div>
                <div className='box'>
                    <div className='back'>
                        <h1 className='title'>Huiles essentielles</h1>
                    </div>
                    <div className='prod'>
                        <ProductHome products={products} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home