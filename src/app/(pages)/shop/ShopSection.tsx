"use client";
import { useState } from "react";
import ChevaronDownBlue from "@/app/components/icon/ChevaronDownBlue";
import ListIcon from "@/app/components/icon/List";
import Th from "@/app/components/icon/Th";
import ShopBox from "./ShopBox";
import Chevronright from "@/app/components/icon/Chevronright";

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
    {
        id: 4,
        name: "Doxycycline",
        image: "/img/shop-items-4.png",
        price: 15.00,
        oldPrice: 32.00,
        rating: 5,
    },
    {
        id: 5,
        name: "Doxycycline",
        image: "/img/shop-items-5.png",
        price: 8.00,
        oldPrice: 35.00,
        rating: 5,
    },
    {
        id: 6,
        name: "Ibuprofen",
        image: "/img/shop-items-6.png",
        price: 8.00,
        oldPrice: 35.00,
        rating: 5,
    },
    {
        id: 7,
        name: "Kevzara",
        image: "/img/shop-items-7.png",
        price: 8.00,
        oldPrice: 35.00,
        rating: 5,
    },
    {
        id: 8,
        name: "Lisinopril",
        image: "/img/shop-items-8.png",
        price: 17.00,
        oldPrice: 24.00,
        rating: 5,
    },
    {
        id: 9,
        name: "Metformin",
        image: "/img/shop-items-9.png",
        price: 65.00,
        oldPrice: 75.00,
        rating: 5,
    },
    {
        id: 10,
        name: "Metoprolol",
        image: "/img/shop-items-10.png",
        price: 8.00,
        oldPrice: 35.00,
        rating: 5,
    },
    {
        id: 11,
        name: "Prednisone",
        image: "/img/shop-items-11.png",
        price: 8.00,
        oldPrice: 35.00,
        rating: 5,
    },
    {
        id: 12,
        name: "Weight Machine",
        image: "/img/shop-items-12.png",
        price: 15.00,
        oldPrice: 20.00,
        rating: 5,
    },
    {
        id: 13,
        name: "Wellbutrin",
        image: "/img/shop-items-13.png",
        price: 8.00,
        oldPrice: 35.00,
        rating: 5,
    },
];

const ShopSection = () => {
    const [isListView, setIsListView] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const totalPages = Math.ceil(dummyProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const displayedProducts = dummyProducts.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (newPage:any) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <section className="shop-section">
            <div className="container">
                <div className="filter-wrapper">
                    <div className="filter-left">
                        <p>Showing {startIndex + 1}–{Math.min(startIndex + itemsPerPage, dummyProducts.length)} of {dummyProducts.length} results</p>
                    </div>
                    <div className="filter-right">
                        <div className="filter-label-main">
                            <div className="filter-label">Sort By</div>
                            <div className="filter-select">
                                <select name="sort" id="sort">
                                    <option value="default">Default sorting</option>
                                    <option value="popularity">Sort by popularity</option>
                                    <option value="rating">Sort by average rating</option>
                                    <option value="latest">Sort by latest</option>
                                    <option value="low-to-high">Sort by price: low to high</option>
                                </select>
                                <div className="down">
                                    <ChevaronDownBlue />
                                </div>
                            </div>
                        </div>
                        <div className="filter-icon-main">
                            <div
                                className={`filter-icon-one ${!isListView ? "active" : ""}`}
                                onClick={() => setIsListView(false)}
                            >
                                <Th />
                            </div>
                            <div
                                className={`filter-icon-two ${isListView ? "active" : ""}`}
                                onClick={() => setIsListView(true)}
                            >
                                <ListIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`shop-wrapper ${isListView ? "flex-direction" : ""}`}>
                    {displayedProducts.map((product) => (
                        <ShopBox key={product.id} product={product} />
                    ))}
                </div>
                <div className="pagination-main">
                    <ul>
                        {currentPage > 1 && (
                            <li onClick={() => handlePageChange(currentPage - 1)}>
                                <div
                                    style={{
                                        transform: "rotate(180deg)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <Chevronright />
                                </div>
                            </li>
                        )}
                        {Array.from({ length: totalPages }, (_, i) => (
                            <li
                                key={i + 1}
                                className={currentPage === i + 1 ? "active" : ""}
                                onClick={() => handlePageChange(i + 1)}
                            >
                                {i + 1}
                            </li>
                        ))}
                        {currentPage < totalPages && (
                            <li onClick={() => handlePageChange(currentPage + 1)}>
                                <Chevronright />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default ShopSection;
