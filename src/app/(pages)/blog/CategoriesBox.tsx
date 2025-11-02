import ChevronRight from "@/app/components/icon/Chevronright";

const CategoriesBox = ({ data }:{
    data:any
}) => {
    return (
        <div className="categories-box">
            <div className="categories-box-text">
                <ChevronRight />
                <p>{data.name}</p>
            </div>
            <div className="categories-box-number">{data.count}</div>
        </div>
    );
};

export default CategoriesBox;
