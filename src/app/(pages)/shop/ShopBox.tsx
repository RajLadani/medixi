import CartIcon from "@/app/components/icon/Catr";
import HeartIcon from "@/app/components/icon/Hearticon";
import RatingStarSolid from "@/app/components/icon/RatingStarSolid";
import SearchIcon from "@/app/components/icon/SearchIcon";
import Image from "next/image";

const ShopBox = ({ product }) => {
    return (
        <div className="shop-box">
            <div className="shop-box-img">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={390}
                    height={331}
                />
                <div className="shop-cart-link">
                    <div className="shop-cart-inner-link">
                        <CartIcon />
                    </div>
                    <div className="shop-cart-inner-link">
                        <SearchIcon />
                    </div>
                    <div className="shop-cart-inner-link">
                        <HeartIcon />
                    </div>
                </div>
            </div>
            <div className="shop-box-text">
                <div className="shop-rating-main">
                    {[...Array(5)].map((_, index) => (
                        <RatingStarSolid
                            key={index}
                            style={{ opacity: index < product.rating ? 1 : 0.4 }}
                        />
                    ))}
                </div>
                <div className="shop-items-name">
                    <h3>{product.name}</h3>
                </div>
                <div className="shop-items-price">
                    <div className="shop-items-running-price">
                        <span style={{ color: "#999" }}>${product.price.toFixed(2)}</span>
                    </div>
                    {product.oldPrice && (
                        <div className="shop-items-old-price">
                            <span style={{ textDecoration: "line-through", color: "#999" }}>
                                ${product.oldPrice.toFixed(2)}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShopBox;
