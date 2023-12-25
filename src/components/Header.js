import { FaCartShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

function Header({ handleInputChange, query }) {
    return (
        <header>
            <div className="form-search">
                <form action="#" >
                        <input type="text" onChange={handleInputChange} value={query} placeholder="Search Chair..." />
                        <button type="submit" className="search-btn">
                            <IoSearch />
                        </button>
                </form>
            </div>

            <div className="icon-cart">
                <FaCartShopping />
                <span></span>
            </div>
        </header>
    );
}

export default Header;
