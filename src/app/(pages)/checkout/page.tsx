import Button from "@/app/components/Button.";
import ChevaronDownBlue from "@/app/components/icon/ChevaronDownBlue";
import PagesBanner from "@/app/components/PagesBanner";
import Image from "next/image";
import Link from "next/link";

const Checkout = () => {
    return (
        <>
            <PagesBanner
                title="Checkout"
                currentPage="Checkout"
            />
            <section className="checkout">
                <div className="container">
                    <div className="section-checkout-bg">
                        <div className="checkout-wrapper">
                            <div className="checkout-left">
                                <div className="checkout-left-heading">
                                    <h3>Billing details</h3>
                                </div>
                                <div className="checkout-input-main">
                                    <div className="checkout-input-left">
                                        <input type="text" placeholder="First Name" />
                                    </div>
                                    <div className="checkout-input-right">
                                        <input type="text" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="checkout-input-main">
                                    <input type="text" placeholder="Company name (optional)" />
                                </div>
                                <div className="checkout-input-main">
                                    <input type="tel" placeholder="Phone" />
                                </div>
                                <div className="checkout-input-main">
                                    <input type="email" placeholder="Email address" />
                                </div>
                                <div className="checkout-input-main">
                                    <select name="" id="">
                                        <option value="">United States (US)</option>
                                        <option value="">United States (US) Minor Outlying Islands</option>
                                        <option value="">Uruguay</option>
                                        <option value="">Vanuatu</option>
                                    </select>
                                    <div className="select-icon">
                                        <ChevaronDownBlue />
                                    </div>
                                </div>
                                <div className="checkout-input-main">
                                    <select name="" id="">
                                        <option value="">California</option>
                                        <option value="">Arkansas</option>
                                        <option value="">Colorado</option>
                                        <option value="">Delaware</option>
                                    </select>
                                    <div className="select-icon">
                                        <ChevaronDownBlue />
                                    </div>
                                </div>
                                <div className="checkout-input-main">
                                    <input type="text" placeholder="House number and street name" />
                                </div>
                                <div className="checkout-input-main">
                                    <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" />
                                </div>
                                <div className="checkout-input-main">
                                    <input type="text" placeholder="Town / City" />
                                </div>
                                <div className="checkout-input-main">
                                    <input type="text" placeholder="ZIP Code" />
                                </div>
                            </div>
                            <div className="checkout-right">
                                <h3>Additional information</h3>
                                <p>Order notes (optional)</p>
                                <textarea name="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." rows={8} cols={5}></textarea>
                            </div>
                        </div>
                        <div className="your-order-wrapper">
                            <h3>Your order</h3>
                            <div className="your-order-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span>Image</span>
                                                <Image src="/img/cart.png" alt="" width={95} height={95} />
                                            </td>
                                            <td>
                                                <span>Product Name</span>
                                                Biotin Complex
                                            </td>
                                            <td>
                                                <span>Price</span>
                                                8.00
                                            </td>
                                            <td>
                                                <span>Quantity</span>
                                                1
                                            </td>
                                            <td>
                                                <span>Total</span>
                                                8.00
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Subtotal <span>$8.00</span></th>
                                            <td colSpan={5}>$8.00</td>
                                        </tr>
                                        <tr>
                                            <th>Total <span>$8.00</span></th>
                                            <td colSpan={4}>
                                                <span>$8.00</span>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
                                <Link href={"#"}>Privacy policy.</Link>
                            </p>
                            <Button
                                text="Place order"
                                variant="secondary"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout;