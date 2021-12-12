import React, { useState, useContext } from 'react'
import { Container } from './style'
import { ReactComponent as Filter } from "./filter.svg"
import { ReactComponent as Search } from "./search.svg"
import { MyCategory } from '../../../context/CategoryContext'
const Navbar = () => {
    const [mydata, setData] = useContext(MyCategory)
    const [data] = useState(mydata);
    const onChange = (e) => {
        let newData = data.filter((value) => value.uz.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(newData);
        setData(newData)
    }
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
                        <p style={{ width: "100px" }}>Add a new product</p>
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
                    <div className='product' style={{ width: "271px" }}><p className='p1'>CATEGORY (UZ)</p></div>
                    <div className='category' style={{ width: "271px" }}><p className='p2'>CATEGORY (ENG)</p></div>
                    <div className='cost' style={{ width: "284px" }}><p className='p3'>MAIN CATEGORY</p></div>
                    <div className='action' style={{ width: "100px" }}><p className='p5'>ACTION</p></div>
                </div>
            </div >
        </Container>
    )
}
export default Navbar;