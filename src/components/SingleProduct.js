import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function SingleProduct({ item }) {
    console.log(item)
    const { id, image, title, price, discount, isNew } = item;

    return (
        <div key={id} className="item">
            {
                discount >= 1 && 
                <div className="discount">
                    <div className="percentage">
                        <span className="number">{discount}</span>
                        <span className="symbol">%</span>
                    </div>
                    <span className="off">OFF</span>
                </div>
            }
            {
                isNew && 
                <div className="new">
                    New
                </div>
            }

            <Link to={`/products/${id}`}>
                <img src={`/images/${image}`} alt={title} />
            </Link>
            <Link to={`/products/${id}`}>
                <h2>{title}</h2>
            </Link>
            <div className="cart-price">
                <div className="price">${price}/-</div>
                <button className="addCart">
                    <IoCartOutline />
                </button>
            </div>
        </div>
    )
}

export default SingleProduct
