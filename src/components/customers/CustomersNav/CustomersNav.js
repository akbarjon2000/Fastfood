import React, { useState, useContext } from 'react'
// import { data } from "../products/data"

import { ReactComponent as Filter } from "./filter.svg"
import { ReactComponent as Search } from "./search.svg"
import { MyCustomerContext } from '../../../context/CustomersContext'
import { Container } from './style'
import GenericDrawer from "../../Generic Drawer"
import { ContainerAdd, Toggle } from './AddStyle'
const Navbar = () => {
    const [mydata, setData] = useContext(MyCustomerContext)
    const [data] = useState(mydata);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false)
    const onClose = () => {
        setOpen(false)
    }
    const onSave = (e) => {
        e.preventDefault()
    }
    const onChange = (e) => {
        let newData = data.filter((value) => value.name.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(newData);
        setData(newData)
    }
    return (
        <>
            <GenericDrawer open={open} onClose={onClose} width="366px">
                <ContainerAdd>
                    <form>

                        <p className="title">Add New Customer</p>
                        <p className='text'>Customer's Name</p>
                        <input type="tel" className='input' />
                        <p className='text'>Phone Number</p>
                        <input type="text" className='input' />
                        <p className='text'>Orders Count</p>
                        <input type="number" className='input' />
                        <div style={{ display: "flex" }}>

                            <div className='checkbox' onClick={() => setActive(!active)}>
                                <Toggle className='toggle' active={active}></Toggle>
                            </div>
                            <p className='text'>Customer is bolcked</p>
                        </div>
                        <button className='savebtn' onClick={(e) => onSave(e)}>Save</button>

                    </form>
                </ContainerAdd>
            </GenericDrawer>
            <Container>

                <div className='nobody'>
                    <div className='nav'>
                        <div className='addnews'>
                            <div onClick={() => setOpen(true)} className='myplus'><div style={{
                                display: 'flex',
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                bottom: "2px"
                            }}>+</div></div>
                            <p style={{ width: "100px" }}>Add a new customer</p>
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
                        <div className='product' style={{ width: "258px" }}><p className='p1'>CUSTOMER NAME</p></div>
                        <div className='category' style={{ width: "203px" }}><p className='p2'>CONTACT NUMBER</p></div>
                        <div className='cost' style={{ width: "194px" }}><p className='p3'>ORDERS COUNT</p></div>
                        <div className='cost' style={{ width: "152px" }}><p className='p4'>STATUS</p></div>
                        <div className='action' style={{ width: "255px" }}><p className='p5'>ACTION</p></div>
                    </div>
                </div >
            </Container>
        </>
    )
}
export default Navbar;