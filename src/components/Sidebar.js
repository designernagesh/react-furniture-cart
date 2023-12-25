import React from 'react'
import FilterByCategory from './FilterByCategory'
import FilterByPrice from './FilterByPrice'
import FilterByColor from './FilterByColor'
import { MdChair } from "react-icons/md";
import { Link } from "react-router-dom";
import FilterByNew from './FilterByNew';

function Sidebar({ productsList, filterByCategory }) {    
    return (
        <div className='sidebar'>
            <Link to="/" className="logo"><MdChair /> Furniture's</Link>
            <FilterByNew />
            <FilterByCategory productsList={productsList} filterByCategory={filterByCategory} />
            <FilterByPrice />
            <FilterByColor />
        </div>
    )
}

export default Sidebar
