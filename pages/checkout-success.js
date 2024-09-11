import Lottie from "lottie-web";
import success from "../public/assets/Lottie/success.json"
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const OrderSucess = () => {
    const router = useRouter();
    const [orderDetails, setOrderDetails] = useState(null);
    useEffect(() => {
        Lottie.loadAnimation({
          container: document.getElementById('animation'),
          animationData: success,
          renderer: 'svg',
          loop: true,
          autoplay: true,
        });
      }, []);

      useEffect(() => {
        if (router.query.data) {
            const decodedData = decodeURIComponent(router.query.data);
            const statusRes = JSON.parse(decodedData);
            setOrderDetails(statusRes); // Set the order ID from the statusRes object
          }
      }, [router.query.data])
      
    return (
        <>
            <Layout parent="Home" sub="Order" subChild="Sucess">
                <section className="mt-50 mb-50">
                    <div className="container">
                        <div className="order-sucess-container mb-20">
                            <div id="animation" style={{ width: 200, height: 200 , marginInline:"auto"}} />
                            {orderDetails?.order_id && <p>Order Id: {orderDetails?.order_id}</p>}
                            {orderDetails?.amount && <p>Amount: {orderDetails?.amount}</p>}
                            <p className="mb-20">Your Order Placed Successfully.</p>
                            <h1 className="mb-20">Thank you for ordering!</h1>
                            <div className="actions">
                                <button className="btn btn-border">
                                    <Link href={"/my-profile?tab=2"}>View order</Link>
                                </button>
                                <button className="btn">
                                    <Link href={"/"}>Continue Shopping</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default OrderSucess