import React, { useState, useContext } from 'react'
import "../navbar/navbar.css"
import "./orders.css"
import { Wrapper } from './style'
import { MyCardContext } from '../../context/OrdersContex'
// import { toggle } from "./NavObj"
const OrdersNav = () => {
    const [data, setData] = useContext(MyCardContext);
    const [card, setCard] = useState(Object.entries(data));
    console.log(card)
    const [active, setActive] = useState(null);
    const [show, setShow] = useState(true);
    const change = (id) => {
        setActive(id)
    }
    const toggle1 = () => {
        setShow(false)
    }
    const toggle2 = () => {
        setShow(true)
    }
    return (
        <div className='nobody'>
            <div className='nav'>
                <div className='addnew'>
                    <div className='circle'><div>+</div></div>
                    <p>Add a new product</p>
                </div>
                <div className='togglebar'>
                    <div className='sorts' >
                        {card.map(([name, value], index) => (
                            <Wrapper>
                                <div onClick={() => change(index + 1)}
                                    id={index + 1}
                                    key={index + 1}
                                    className={`item activeMe-${active === index + 1}`}>{name}</div>
                            </Wrapper>
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
        </div >
    )

}
export default OrdersNav;