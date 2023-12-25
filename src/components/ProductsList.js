import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

function ProductsList({ productsList }) {
    const [btnText, setBtnText] = useState("Load More");
    const [start, setStart] = useState(0);
    let itemsPerPage = 8;

    const loadMoreHandler = () => {
        const newStart = start + itemsPerPage;

        if (newStart > productsList.length) {
            setBtnText("No more products");
            return;
        }
        setStart(newStart);
        setBtnText("Load More");
    }

    useEffect(() => {
        setStart(0);
        setBtnText("Load More");
    }, [productsList])

    return (
        <div className="listProduct">
            {productsList.slice(0, start + itemsPerPage).map(product => (
                <SingleProduct key={product.id} item={product} />
            ))}

            {
                productsList.length === 0 &&
                <div> No Products Found </div>
            }
            {
                productsList.length !== 0 &&
                <button className="loadMore" onClick={loadMoreHandler}>{btnText}</button>
            }
        </div>
    )
}

export default ProductsList
