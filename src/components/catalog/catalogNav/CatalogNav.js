import React, { useState, useContext } from 'react'
// import { data } from "../products/data"
import { ReactComponent as Filter } from "./filter.svg"
import { ReactComponent as Search } from "./search.svg"
import { ReactComponent as Edit } from "../../../assets/icon/EditBox.svg"
import { MyBranchContext } from '../../../context/branchContex'
import { Container } from './style'
import { AddNotify } from '../AddNotify'
import { obj } from "../../../utils/notifyObj"
import { NotifyDiv } from './CaptionsStyle'
const Navbar = () => {
    const [mydata, setData] = useContext(MyBranchContext)
    const [data] = useState(mydata);
    const [notify, setNotify] = useState(false)
    const onNotify = () => {
        setNotify(false)
        console.log(notify)
    }
    const Activate = () => {
        setNotify(true);
    }
    const onChange = (e) => {
        let newData = data.filter((value) => value.branchNameUz.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(newData);
        setData(newData)
    }
    return (
        <>
            <Container>

                <div className='nobody'>
                    <div className='nav'>
                        <div className='addnews'>
                            <div onClick={Activate} className='myplus'><div style={{
                                display: 'flex',
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                bottom: "2px"
                            }}>+</div></div>
                            <p style={{ width: "100px" }}>Add a new notification</p>
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
                </div >
            </Container>
            {notify ? <AddNotify onNotify={onNotify} />
                : <NotifyDiv className='notifyDiv'>
                    {obj.map((value) => (
                        <div key={value.id} className='item'>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <input type='checkbox' />
                                <p className='captionText'> {value.caption.split('').length > 61 ? value.caption.split('').slice(0, 60).join('') + "..." : value.caption} </p>
                            </div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <button className='sentBtn'>Sent</button>
                                <div className='editbox'>
                                    <Edit />
                                </div>
                            </div>
                        </div>
                    ))}
                </NotifyDiv>
            }
        </>
    )
}
export default Navbar;