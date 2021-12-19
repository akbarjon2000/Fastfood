import React, { useState, useContext } from 'react'
import { Container } from './style'
import { ReactComponent as Filter } from "./filter.svg"
import { ReactComponent as Search } from "./search.svg"
import { MyCategory } from '../../../context/CategoryContext'
import GenericDrawer from "../../Generic Drawer/index"
import { ContainerAdd } from './AddStyle'
const Navbar = () => {
    const [mydata, setData] = useContext(MyCategory)
    const [data] = useState(mydata);
    const [open, setOpen] = useState(false);
    const onClose = () => {
        setOpen(false)
    }
    const onChange = (e) => {
        let newData = data.filter((value) => value.uz.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(newData);
        setData(newData)
    }
    return (
        <>
            <GenericDrawer width='366px' open={open} onClose={onClose} >
                <ContainerAdd>

                    <p className='title'>Add New Category</p>
                    <form>

                        <p className='text' >Category name uz</p>
                        <input type="text" className='input' />
                        <p className='text' >Category name uz</p>
                        <input type="text" className='input' />
                        <p className='text' >Add to main categories</p>
                        <div style={{ display: "flex" }}>
                            <div style={{ width: "44px", height: "44px", backgroundColor: " #EDEFF3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ width: "16px", height: "16px", border: "2px solid orange", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ width: "10px", height: "10px", backgroundColor: "orange", borderRadius: "2px" }}></div>
                                </div>
                            </div>
                            <select className='select'>
                                <option>Drinks</option>
                                <option>Burger</option>
                                <option>Lavash</option>
                            </select>
                        </div>
                    </form>
                    <button className='savebtn'>Save</button>
                </ContainerAdd>
            </GenericDrawer>
            <Container>
                <div className='nobody'>
                    <div className='nav'>
                        <div className='addnews'>
                            <div className='myplus'><div onClick={() => setOpen(true)} style={{
                                display: 'flex',
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                bottom: "2px"
                            }}>+</div></div>
                            <p style={{ width: "100px" }}>Add a new Category</p>
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
        </>
    )
}
export default Navbar;