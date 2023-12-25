import { IoCartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";

function ProductDetail({ productsList }) {
    const { id } = useParams();

    const searchedProduct = productsList.find(product => product.id === parseInt(id));
    console.log(searchedProduct)

    if (!searchedProduct) {
        console.log("Product not found");
        return null;
    }

    const { image, title, price, category, description } = searchedProduct;

    const similarProducts = productsList.filter(product => product.category === searchedProduct.category && product.id !== parseInt(id));

    return (
        <div className="container">
            <div className="detail">
                <div className="image">
                    <img src={`/images/${image}`} alt={title} />
                </div>
                <div className="content">
                    <div className="product-detail">PRODUCT DETAIL</div>
                    <h1 className="name">{title}</h1>
                    <p className="category"><strong>Category:</strong> {category}</p>
                    <div className="price">Rs. {price} /- </div>
                    <div className="description">
                        <strong>Description:</strong><br />
                        {description}
                    </div>
                    <div className="buttons">
                        <button>Check Out</button>
                        <button>Add To Cart
                            <span>
                                <IoCartOutline />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="similar-products">
                <h2 className="title">Similar Products</h2>
                <div className="listProduct">
                    {
                        similarProducts.map(product => {
                            return (
                                <SingleProduct key={product.id} item={product} />
                            )
                        })
                    }
                </div>
                <Link to="/">
                    <button className="all-products">All Products</button>
                </Link>
            </div>
        </div>
    )
}

export default ProductDetail
