import React, { useState, useContext } from 'react'
import { AddContainer } from './AddStyle';
import { useLocation } from 'react-router-dom';
import { Container } from './style'
import { ReactComponent as Filter } from "./filter.svg"
import { ReactComponent as Search } from "./search.svg"
import { ReactComponent as Upload } from "../../../assets/icon/upload-cloud.svg"
import { MyContext } from '../../../context/ProductsContext'
import GenericDrawer from "../../Generic Drawer"
const Navbar = () => {
    const [mydata, setData] = useContext(MyContext)
    const [data] = useState(mydata);
    const [open, setOpen] = useState(false);
    const [img, setImg] = useState(null)
    const onClose = () => {
        setOpen(false)
    }
    const onChange = (e) => {
        let newData = data.filter((value) => value.category.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(newData);
        setData(newData)
    }
    const location = useLocation();
    const length = location.pathname.split('').length
    const onUpload = (e) => {
        console.log(e)
        setImg(e.target.value)
    }
    return (
        <>
            <GenericDrawer width="366px" open={open} onClose={onClose} >
                <AddContainer >
                    <p className='title'>Add new product</p>
                    <form name='products' id='products'>

                        <p className='name' >Name of the product</p>
                        <input type="text" name="name" id="name" className='input' required />
                        <p className='name'>Category</p>
                        <select name="name" id="name" className='input' required >
                            <option>Burger</option>
                            <option>Lavash</option>
                            <option>Drinks</option>
                        </select>
                        <p className='name'>Cost</p>
                        <input type="text" className='input' required ></input>
                        <p className='name'>Additional Info</p>
                        <input type="text" className='input' required></input>
                        <input id='upload' type="file" accept='image/*' className='upload' onChange={(e) => onUpload(e)} required />


                        <label htmlFor='upload' className='label' >
                            <Upload />
                            {img ? <img src={img} alt='alter' />
                                : <p style={{ opacity: "0.6", marginTop: "10px" }}>Upload Product Image</p>
                            }
                        </label>

                    </form>
                    <button className='savebtn' type='submit' form='products' onClick={(e) => console.log(e)} >Save</button>
                </AddContainer>
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
                            <p style={{ width: "100px" }}>Add a new {location.pathname.toLowerCase().slice(1, length - 1)}</p>
                        </div>
                        <div className='searchbar'>
                            <div style={{ margin: "0", padding: "0" }}>
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
                </div >
            </Container>
        </>
    )
}
export default Navbar;
