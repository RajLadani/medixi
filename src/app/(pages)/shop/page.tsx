import PagesBanner from "@/app/components/PagesBanner";
import ShopSection from "./ShopSection";

const Shop = () => {
    return (
        <>
            <PagesBanner
                title="Shop"
                currentPage="Shop"
            />
            <ShopSection />
        </>
    )
}

export default Shop;