import React, { useState, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { Container } from './style'
import { ReactComponent as Filter } from "./filter.svg"
import { ReactComponent as Search } from "./search.svg"
import { MyContext } from '../../context/ProductsContext'
const Navbar = () => {
    const [mydata, setData] = useContext(MyContext)
    const [data] = useState(mydata);
    const onChange = (e) => {
        let newData = data.filter((value) => value.category.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(newData);
        setData(newData)
    }
    const location = useLocation();
    const length = location.pathname.split('').length
    return (
        <Container>
            <div className='nobody'>
                <div className='nav'>
                    <div className='addnews'>
                        <div className='myplus'><div style={{
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            bottom: "2px"
                        }}>+</div></div>
                        <p style={{ width: "100px" }}>Add a new {location.pathname.toLowerCase().slice(1, length - 1)}</p>
                    </div>
                    <div className='searchbar'>
                        <div style={{ margin: "0", padding: "0" }}>
                            <input onChange={Filter} type="text" placeholder="Search" className="searchInput" onChange={onChange}></input>
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
            </div >
        </Container>
    )
}
export default Navbar;
