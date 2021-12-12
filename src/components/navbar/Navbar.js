import React, { useState, useContext } from 'react'
import { data as Products } from "../../utils/ProductsData"
import { ReactComponent as Filter } from "./filter.svg"
import { ReactComponent as Search } from "./search.svg"
import { NavBody } from './style'
// import { MyContext } from '../../context/ProductsContext'
const Navbar = () => {
    // const [mydata, setData] = useContext(MyContext)
    const [data, setData] = useState(Products);
    const onChange = (e) => {
        let newData = data.filter((value) => value.category.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(newData);
        setData(newData)
    }
    return (
        <NavBody>
            <div className='nav'>
                <div className='addnews'>
                    <div className='myplus'><div style={{
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        bottom: "2px"
                    }}>+</div></div>
                    <p style={{ width: "100px" }}>Add New</p>
                </div>
                <div className='searchbar'>
                    <div>
                        <input type="text" placeholder="Search" className="searchInput" onChange={onChange}></input>
                        <button className="searchbtn" ><Search /></button>
                    </div>
                    <div className='filter'>
                        <Filter />
                    </div>
                </div>
            </div>
            <div className='categories'>
                <div className='product'><p className='p1'>PRODUCT</p></div>
                <div className='category'><p className='p2'>CATEGORY</p></div>
                <div className='cost'><p className='p3'>COST</p></div>
                <div className='add'><p className='p4'>ADDITIONAL INFO</p></div>
                <div className='action'><p className='p5'>ACTION</p></div>
            </div>
        </NavBody >
    )
}
export default Navbar;
