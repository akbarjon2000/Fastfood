import React, { useState, useContext } from 'react'
import { data as Products } from "../../utils/ProductsData"
import "./navbar.css"
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
                <div className='product'><p1>PRODUCT</p1></div>
                <div className='category'><p2>CATEGORY</p2></div>
                <div className='cost'><p3>COST</p3></div>
                <div className='add'><p4>ADDITIONAL INFO</p4></div>
                <div className='action'><p5>ACTION</p5></div>
            </div>
        </NavBody >
    )
}
export default Navbar;
