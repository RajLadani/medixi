'use client';
import { useState } from 'react';
import Button from "@/app/components/Button.";
import CheckIcon from "@/app/components/icon/CheckIcon";
import ChevaronDownBlue from "@/app/components/icon/ChevaronDownBlue";
import HeartIcon from "@/app/components/icon/Hearticon";
import RatingStarSolid from "@/app/components/icon/RatingStarSolid";
import Image from "next/image";
import CalendarIcon from '@/app/components/icon/CalendarIcon';
import RatingStarRegular from '@/app/components/icon/RatingStarRegular';
import UserIcon from '@/app/components/icon/UserIcon';
import MailIcon from '@/app/components/icon/MailIcon';
import ShopBox from '../shop/ShopBox';
const dummyProducts = [
    {
        id: 1,
        name: "Amitriptyline",
        image: "/img/shop-items-1.png",
        price: 17.00,
        oldPrice: 19.00,
        rating: 5,
    },
    {
        id: 2,
        name: "Biotin Complex",
        image: "/img/shop-items-2.png",
        price: 8.00,
        oldPrice: 35.00,
        rating: 5,
    },
    {
        id: 3,
        name: "Clonazepam",
        image: "/img/shop-items-3.png",
        price: 8.00,
        oldPrice: 35.00,
        rating: 5,
    },
];
const ItemsDetails = () => {
    const [activeTab, setActiveTab] = useState('description');

    const [indicatorStyle, setIndicatorStyle] = useState({
        left: '476px',
        width: '132px',
    });

    const handleTabClick = (tab:any) => {
        setActiveTab(tab);
        if (tab === 'description') {
            setIndicatorStyle({ left: '476px', width: '132px' });
        } else if (tab === 'reviews') {
            setIndicatorStyle({ left: '588px', width: '134px' });
        }
    };

    return (
        <section className="items-details">
            <div className="container">
                <div className="items-details-wrapper">
                    <div className="items-details-left">
                        <Image src="/img/ddd.png" alt="" width={500} height={425} />
                    </div>
                    <div className="items-details-right">
                        <div className="price-main">
                            <span>$65.00 </span>
                            <span>$75.00</span>
                        </div>
                        <div className="rating-main">
                            <div className="rating-star">
                                <RatingStarSolid />
                                <RatingStarSolid />
                                <RatingStarSolid />
                                <RatingStarSolid />
                                <RatingStarSolid />
                            </div>
                            <div className="review">
                                (1 customer review)
                            </div>
                        </div>
                        <div className="product-name">
                            <h3>Metformin</h3>
                        </div>
                        <div className="product-details">
                            <p>Assertively conceptualize parallel process improvements through user-friendly action items. Interactively cultivate interdependent customer service</p>
                        </div>
                        <ul>
                            <li>
                                <CheckIcon />
                                Objectively provide access to extensible processes.
                            </li>
                            <li>
                                <CheckIcon />
                                Assertively conceptualize parallel goods.
                            </li>
                            <li>
                                <CheckIcon />
                                Phosfluorescently customize proactive to testing
                            </li>
                        </ul>
                        <div className="stock">
                            <span>Availability:</span>
                            In Stock
                        </div>
                        <div className="add-cart-main">
                            <div className="number">
                                <input type="number" placeholder="1" />
                                <div className="arrow-up">
                                    <ChevaronDownBlue />
                                </div>
                                <div className="arrow-down">
                                    <ChevaronDownBlue />
                                </div>
                            </div>
                            <div className="add-cart-btn">
                                <Button text="Add to cart" variant="secondary" />
                            </div>
                            <div className="add-heart">
                                <HeartIcon />
                            </div>
                        </div>
                        <div className="product-info">
                            <span>SKU:</span>
                            Metf-ormin
                        </div>
                        <div className="product-info">
                            <span>Categories:</span>
                            Barbiturates, Bronchodilators
                        </div>
                    </div>
                </div>
                <div className="items-two-section">
                    <div className="nav">
                        <ul>
                            <li
                                className={`tab ${activeTab === 'description' ? 'active' : ''}`}
                                onClick={() => handleTabClick('description')}
                            >
                                Description
                            </li>
                            <li
                                className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
                                onClick={() => handleTabClick('reviews')}
                            >
                                Reviews (1)
                            </li>
                            <span style={{ position: 'absolute', ...indicatorStyle }}></span>
                        </ul>
                    </div>

                    {activeTab === 'description' && (
                        <>
                            <div className="items-two-section-description">
                                <p>Assertively conceptualize parallel process improvements through user friendly action items. Interactively cultivate interdependent customer service without clicks-and-mortar e-services. Proactively cultivate go forward testing procedures with accurate quality vectors. Globally embrace ethical functionalities via empowered scenarios.</p>
                                <p>Enthusiastically transition multidisciplinary “outside the box” thinking without premium networks. Progressively supply clicks-and-mortar human capital through enterprise-wide web services. Objectively provide access to extensible processes through 24/365 solutions. Professionally actualize client-based leadership via out-of-the-box supply chains. Collaboratively unleash e-business human capital through plug-and-play metrics.</p>
                                <div className="items-two-section-img">
                                    <Image src="/img/shop-d-1.jpg" alt='' width={390} height={280} />
                                    <Image src="/img/shop-d-2.jpg" alt='' width={390} height={280} />
                                </div>
                                <p>Progressively supply clicks-and-mortar human capital through enterprise-wide web services. Objectively provide access to extensible processes through 24/365 solutions. Professionally actualize client-based leadership via out-of-the-box supply chains.</p>
                            </div>
                            <div className="shop-details-heading">
                                <h3>Additional Features</h3>
                                <p>Progressively supply clicks-and-mortar human capital through enterprise-wide web services. Objectively provide access to extensible processes through 24/365 solutions.</p>
                                <div className="shop-details-box">
                                    <div className="shop-details-box-left">
                                        <div className="shop-details-box-icon-main">
                                            <div className="shop-details-box-icon">
                                                <CheckIcon />
                                            </div>
                                            <div className="shop-details-box-text">
                                                Low: 588 G / KM
                                            </div>
                                        </div>
                                        <div className="shop-details-box-icon-main">
                                            <div className="shop-details-box-icon">
                                                <CheckIcon />
                                            </div>
                                            <div className="shop-details-box-text">
                                                Mid: 360 G / KM
                                            </div>
                                        </div>
                                        <div className="shop-details-box-icon-main">
                                            <div className="shop-details-box-icon">
                                                <CheckIcon />
                                            </div>
                                            <div className="shop-details-box-text">
                                                High: 318 G / KM
                                            </div>
                                        </div>
                                        <div className="shop-details-box-icon-main">
                                            <div className="shop-details-box-icon">
                                                <CheckIcon />
                                            </div>
                                            <div className="shop-details-box-text">
                                                Extra High: 348 G / KM
                                            </div>
                                        </div>
                                        <div className="shop-details-box-icon-main">
                                            <div className="shop-details-box-icon">
                                                <CheckIcon />
                                            </div>
                                            <div className="shop-details-box-text">
                                                Combined: 373 G/ KM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shop-details-box-right">
                                        Enthusiastically transition multidisciplinary “outside the box” thinking without premium networks services.
                                    </div>
                                </div>
                                <p>Assertively conceptualize parallel process improvements through user friendly action items. Interactively cultivate interdependent customer service without clicks-and-mortar e-services. Proactively cultivate go forward testing procedures with accurate quality vectors. Globally embrace ethical functionalities via empowered scenarios.</p>
                                <p>Enthusiastically transition multidisciplinary “outside the box” thinking without premium networks. Progressively supply clicks-and-mortar human capital through enterprise-wide web services. Objectively provide access to extensible processes through 24/365 solutions. Professionally actualize client-based leadership via out-of-the-box supply chains. Collaboratively unleash e-business human capital through plug-and-play metrics.</p>
                            </div>
                        </>
                        
                    )}

                    {activeTab === 'reviews' && (
                        <div className="reviews-wrapper">
                            <div className="reviews-box">
                                <div className="reviews-box-img">
                                    <Image src="/img/profile.png" alt="" width={100} height={100} />
                                </div>
                                <div className="reviews-text">
                                    <div className="rating-name-star">
                                        <div className="rating-name">Medilax</div>
                                        <div className="rating-star">
                                        {Array(5).fill(0).map((value, index) => (
                                                <RatingStarSolid key={index} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="reviews-date">
                                        <CalendarIcon />
                                        2 September 2021 at 18:17
                                    </div>
                                    <p>Competently provide access to fully researched methods of empowerment without sticky models.</p>
                                </div>
                            </div>
                            <div className="reviews-heading">
                                <h3>Add a review</h3>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <div className="your-reviews">
                                    Your Rating 
                                    {Array(5).fill(0).map((_, yourrating) => (
                                        <RatingStarRegular key={yourrating}/>
                                    ))}
                                </div>
                            </div>
                            <div className="reviews-text">
                                <textarea placeholder="Write your comments" rows={8} cols={5} name="comment"></textarea>
                            </div>
                            <div className="reviews-name-mail-main">
                                <div className="reviews-name">
                                    <input type="text" placeholder='Your Name' />
                                    <div className="icon">
                                        <UserIcon />
                                    </div>
                                </div>
                                <div className="reviews-name">
                                    <input type="email" placeholder='Your E-Mail' />
                                    <div className="icon">
                                        <MailIcon />
                                    </div>
                                </div>
                            </div>
                            <div className="reviews-btn">
                                <Button text="Post Review" variant="secondary" />
                            </div>
                        </div>
                    )}
                </div>
                <div className="related-products-section">
                    <div className="related-products-heading">
                        <h3>Related products</h3>
                    </div>
                    <div className="related-products-wrapper">
                        {dummyProducts.map((product) => (
                            <ShopBox key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ItemsDetails;
