import PagesBanner from "@/app/components/PagesBanner"
import ItemsDetails from "./ItemsDetails"

const ShopDetails = () => {
    return (
        <>
            <PagesBanner
                title="Shop Details"
                currentPage="Metformin"
                breadcrumbLinks={[
                    { href: "/shop", label: "Barbiturates" },
                ]}
            />
            <ItemsDetails />
        </>
    )
}
export default ShopDetails