import ChevaronDownBlue from "@/app/components/icon/ChevaronDownBlue";
import DeleteIcon from "@/app/components/icon/Delete";
import PagesBanner from "@/app/components/PagesBanner";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
    return (
        <>
            <PagesBanner
                title="Cart"
                currentPage="Cart"
            />
            <section className="cart">
                <div className="container">
                    <div className="cart-product-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Price/Unit</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <td>
                                        <span>Image</span>
                                        <Image src="/img/cart.png" alt="" width={120} height={120} />
                                    </td>
                                    <td>
                                        <span>Product Name</span>
                                        Biotin Complex
                                    </td>
                                    <td>
                                        <span>Price/Unit</span>
                                        $8.00	
                                    </td>
                                    <td>
                                        <span>Quantity</span>
                                        <div className="qty-main">
                                            <div className="qty-down">
                                                <ChevaronDownBlue />
                                            </div>
                                            <div className="qty-number">
                                                <input type="number" placeholder="1"/>
                                            </div>
                                            <div className="qty-up">
                                                <ChevaronDownBlue />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>Total</span>
                                        $8.00
                                    </td>
                                    <td>
                                        <span>Remove</span>
                                        <button><DeleteIcon /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={6}>
                                        <div className="cart-btn-main">
                                            <div className="cart-btn-left">
                                                <div className="coupon">
                                                    <input type="text" placeholder="Enter Coupon Code" />
                                                </div>
                                                <div className="coupon-btn">
                                                    <Link className="cart-btn" href={"#"}>Submit</Link>
                                                </div>
                                            </div>
                                            <div className="cart-btn-right">
                                                <Link className="cart-btn" href={"#"}>Update cart</Link>
                                                <Link className="cart-btn" href={"#"}>Continue Shopping</Link>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="cart-total-wrapper">
                        <div className="cart-total">
                            <div className="cart-total-heading">
                                <h3>Cart Totals</h3>
                            </div>
                            <div className="cart-total-table">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Subtotal</td>
                                            <td>$8.00</td>
                                        </tr>
                                        <tr>
                                            <td>Order Total</td>
                                            <td><span>$8.00</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="cart-total-btn">
                                <button>
                                    Proceed to checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Cart;