import React, { useState, useContext } from 'react'
// import { data } from "../products/data"
import { ReactComponent as Filter } from "./filter.svg"
import { ReactComponent as Search } from "./search.svg"
import { MyBranchContext } from '../../../context/branchContex'
import { Container } from './style'
import GenericDrawer from "../../Generic Drawer"
import { ContainerAdd } from './AddStyle'
import Location from "../location"
const Navbar = () => {
    const [mydata, setData] = useContext(MyBranchContext)
    const [data] = useState(mydata);
    const [open, setOpen] = useState(false)
    const onClose = () => {
        setOpen(false)
    }
    const onChange = (e) => {
        let newData = data.filter((value) => value.branchNameUz.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(newData);
        setData(newData)
    }
    const onSave = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <GenericDrawer open={open} onClose={onClose} width="366px">
                <ContainerAdd>
                    <form>

                        <p className="title">Add New Branch</p>
                        <p className='text'>Branch Name UZ</p>
                        <input type="text" className='input' />
                        <p className='text'>Branch Name RU</p>
                        <input type="text" className='input' />
                        <p className='text'>Working Hours</p>
                        <div className='timeDiv'>
                            <input type="time" className='timeInput' />
                            <span style={{ borderTop: "1px solid", width: "22px", opacity: "0.2", margin: "0 7px 0 7px" }} />
                            <input type="time" className='timeInput' />
                        </div>
                        <p className='text'>Branch Location</p>
                        <Location />
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
                        <div className='product' style={{ width: "266px" }}><p className='p1'>BRANCH NAME (UZ)</p></div>
                        <div className='category' style={{ width: "190px" }}><p className='p2'>BRANCH NAME (ENG)</p></div>
                        <div className='cost' style={{ width: "179px" }}><p className='p3'>LANDMARK</p></div>
                        <div className='cost' style={{ width: "172px" }}><p className='p4'>WORKING HOURS</p></div>
                        <div className='action' style={{ width: "255px" }}><p className='p5'>ACTION</p></div>
                    </div>
                </div >
            </Container>
        </>
    )
}
export default Navbar;