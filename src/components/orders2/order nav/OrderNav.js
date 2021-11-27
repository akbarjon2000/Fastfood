import React, { useState, useContext } from 'react'
import "../../navbar/navbar.css"
// import "../orders.css"
import { MyCardContext } from '../../../context/OrdersContex'
import { NavBody } from './style'
// import { toggle } from "./NavObj"
const OrdersNav = () => {
    const [data, setData] = useContext(MyCardContext);
    const [card, setCard] = useState(Object.entries(data));
    console.log(card)
    const [active, setActive] = useState(null);
    const [show, setShow] = useState(true);
    const change = (index) => {
        setActive(index)
        // let newData = card.filter(([names, value]) => value.index === index)
        // setCard([newData]);
        // console.log(newData)
    }
    const toggle1 = () => {
        setShow(false)
    }
    const toggle2 = () => {
        setShow(true)
    }
    return (
        <NavBody>
            <div style={{ display: "flex" }}>
                <div className='addnews'>
                    <div className='myplus'><div>+</div></div>
                    <p>Add a new product</p>
                </div>
                <div className='togglebar'>
                    <div className='sorts' >
                        {card.map(([name, value], index) => (
                            <button onClick={() => change(index)}
                                id={index}
                                key={index}
                                className={`item activeMe-${active === index}`} disabled>{name}</button>
                        ))}
                    </div>
                </div>
                <div className='twosomeplace'>
                    <div className='inside' >
                        <div className={`first ${show === false ? "background-white" : "no-background"}`} key={1} onClick={() => toggle1()}>
                            <div className={`vert1 marg ${show === false ? "background-black" : "no-background"}`}></div>
                            <div className={`vert1  ${show === false ? "background-black" : "no-background"}`}></div>
                        </div>
                        <div className={`second ${show === true ? "background-white" : "no-background"}`} key={2} onClick={() => toggle2()}>
                            <div className={`hor1 ${show === true ? "background-black" : "no-background"}`}></div>
                            <div className={`hor2 ${show === true ? "background-black" : "no-background"}`}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </NavBody >
    )

}
export default OrdersNav;