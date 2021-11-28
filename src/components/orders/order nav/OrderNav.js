import React, { useState, useContext } from 'react'
import "../../navbar/navbar.css"
import "../orders.css"
import { MyCardContext } from '../../../context/OrdersContex'
import { Container, NavBody, Wrapper } from './style'
// import { toggle } from "./NavObj"
const OrdersNav = () => {
    const [data, setData] = useContext(MyCardContext);
    const [card, setCard] = useState(Object.entries(data));
    console.log(card)
    const [isActive, setActive] = useState('New');
    const [show, setShow] = useState(true);
    // const isActive = (category) => {
    //     setActive(category)
    // }
    const toggle1 = () => {
        setShow(false)
    }
    const toggle2 = () => {
        setShow(true)
    }
    return (
        <Container>

            <NavBody>
                <div style={{ display: "flex" }}>
                    <div className='addnews'>
                        <div className='myplus'><div>+</div></div>
                        <p>Add a new product</p>
                    </div>
                    <div className='togglebar'>
                        <div className='sorts' >
                            <NavBody.Item onClick={() => {
                                // const NewData = card.map(([key, value], index) => {
                                //     value.filter((a) => a.category.toLowerCase() === isActive.toLowerCase())
                                // })
                                // setCard([NewData]);
                                setActive("New")
                            }}
                                active={isActive === 'New'}>New</NavBody.Item>
                            <NavBody.Item onClick={() => {
                                setActive("Received")
                            }
                            }
                                active={isActive === 'Received'}>Received</NavBody.Item>
                            <NavBody.Item onClick={() => {

                                setActive("Sent")
                            }} active={isActive === 'Sent'}>Sent</NavBody.Item>
                            <NavBody.Item onClick={() => {

                                setActive("Closed")
                            }} active={isActive === 'Closed'}>Closed</NavBody.Item>
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
            <Wrapper>
                {card.map(([key, value], index) => {
                    value.filter((a) => a.category.toLowerCase() === isActive.toLowerCase())
                        .map((item) => {
                            <h1>{item.category}</h1>
                        })
                })}
            </Wrapper>
        </Container >
    )

}
export default OrdersNav;