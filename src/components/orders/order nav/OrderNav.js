import React, { useState } from 'react'
import "../../navbar/navbar.css"
import "../orders.css"
// import { MyCardContext } from '../../../context/OrdersContex'
import { orders } from '../../../utils/orders'
import { Container, NavBody, Wrapper, PageContainer, ContainerBody, Sorts } from './style'
import Card from '../cards'
// import { toggle } from "./NavObj"
// ICONS:
import { ReactComponent as Clock } from "../../../assets/icon/clock.svg"
import { ReactComponent as Remark } from "../../../assets/icon/Remark.svg"
import { ReactComponent as User } from "../../../assets/icon/user.svg"
import { ReactComponent as Telephone } from "../../../assets/icon/telephone.svg"
import { ReactComponent as Vector } from "../../../assets/icon/Vector.svg"
import { ReactComponent as Truck } from "../../../assets/icon/truck.svg"
import { ReactComponent as X } from "../../../assets/icon/x.svg"
import { ReactComponent as Tick } from "../../../assets/icon/tick.svg"
const OrdersNav = () => {
    // const [data, setData] = useContext(MyCardContext);
    const [card] = useState(Object.entries(orders));

    const [isActive, setActive] = useState('New');
    const [show, setShow] = useState(true);

    const toggle1 = () => {
        setShow(false)
    }
    const toggle2 = () => {
        setShow(true)
    }
    const onDelete = (id) => {
        // const filtered = card.map(([key, value]) => value
        //     .filter((a) => a.id === id))
    }
    return (
        <PageContainer>
            <NavBody>
                <div style={{ display: "flex" }}>
                    <div className='addnews'>
                        <div className='myplus'><div>+</div></div>
                        <p>Add a new product</p>
                    </div>
                    <div className='togglebar'>
                        <Sorts className='sorts' isActive={show}>
                            <NavBody.Item onClick={() => {
                                setActive("New")
                            }}
                                active={isActive === 'New'}>New</NavBody.Item >
                            <NavBody.Item onClick={() => {
                                setActive("Received")
                            }
                            }
                                active={isActive === 'Received'}>Received</NavBody.Item >
                            <NavBody.Item onClick={() => {
                                setActive("Sent")
                            }} active={isActive === 'Sent'}>Sent</NavBody.Item >
                            <NavBody.Item onClick={() => {
                                setActive("Closed")
                            }} active={isActive === 'Closed'}>Closed</NavBody.Item >
                        </Sorts>
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
            {show ?
                <Card />
                : <ContainerBody>
                    {card.map(([key, value], index) => value
                        .filter((a) => a.category === isActive.toLowerCase())
                        .map((item) => (
                            <Wrapper key={index}>
                                <Container.One>
                                    <Container.One.Colone className='col1'>
                                        <div className='orderInfo'>
                                            <div className='ordnum'>8597</div>
                                            <div className='time'><Clock /><p style={{
                                                fontSize: "22px",
                                                lineHeight: "16px",
                                                marginBottom: "",
                                                marginLeft: "12px",
                                                // marginTop: "0"
                                            }}>20:12</p></div>
                                        </div>
                                        <div className='remark'><Remark /></div>

                                    </Container.One.Colone>
                                </Container.One>
                                <Container.Two>
                                    <Container.Two.Rowone>
                                        <User />
                                        <p style={{
                                            margin: "0",
                                            marginLeft: "18.78px",
                                            width: "30px",

                                            fontSize: "20px",
                                            lineHeight: "20px",
                                            letterSpacing: "0.6666666865348816px",
                                            textAlign: "left"

                                        }}>{item.customer}</p>
                                    </Container.Two.Rowone>
                                    <Container.Two.Rowtwo>
                                        <Telephone className="telephone" />
                                        <p style={{
                                            margin: "0",
                                            marginLeft: "18.78px",
                                            width: "30px",

                                            fontSize: "20px",
                                            lineHeight: "20px",
                                            letterSpacing: "0.6666666865348816px",
                                            textAlign: "left"
                                        }}>{item.phoneNum}</p>
                                    </Container.Two.Rowtwo>
                                </Container.Two>
                                <Container.Three>

                                    <div>
                                        <div style={{
                                            display: "flex",
                                            marginTop: '24px',
                                            marginLeft: "35px"
                                        }}><Vector style={{
                                            opacity: "50%",
                                            width: "13px",
                                            height: "15px"
                                        }} /> <p className='costs'>{item.cost}</p> </div>
                                        <div style={{
                                            display: "flex",
                                            marginTop: '19px',
                                            marginLeft: "35px"
                                        }}><Truck style={{
                                            opacity: "50%",
                                            width: "16px",
                                            height: "16px"
                                        }} /> <p className='costs'>{item.deliveringCost}</p> </div>
                                        <p className='totalAmount'>Total amount</p>
                                        <div className='total'>{item.total}</div>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        margin: "0",
                                        marginTop: "26px",
                                        marginLeft: "16px",
                                        height: "fit-content",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <div className='littleCircle'></div>
                                        <p className='payment'>{item.paymentType}</p>
                                    </div>
                                </Container.Three>
                                <Container.Four>

                                    <div style={{}}>
                                        <p style={{
                                            fontSize: "11px",
                                            lineHeight: "18px",
                                            letterSpacing: "0.36666667461395264px",
                                            textAlign: "left",
                                            marginTop: "22px",
                                            marginLeft: "35px",
                                            marginBottom: "0"
                                        }}>Operator:</p>
                                        <p style={{
                                            fontSize: "14px",
                                            lineHeight: "18px",
                                            letterSpacing: "0.36666667461395264px",
                                            textAlign: "left",
                                            marginTop: "1px",
                                            marginLeft: "35px",
                                            fontWeight: "600"
                                        }}>{value.operator}</p>
                                        <p style={{
                                            fontSize: "11px",
                                            lineHeight: "18px",
                                            letterSpacing: "0.36666667461395264px",
                                            textAlign: "left",
                                            marginTop: "22px",
                                            marginLeft: "35px",
                                            marginBottom: "0"
                                        }}>Branch:</p>
                                        <p className='branch'>Fast Food {item.branch}</p>
                                    </div>
                                    <div className='x'
                                        onClick={() => onDelete(item.id)}
                                    >
                                        <X /></div>
                                    <div className='tick'><Tick /></div>
                                </Container.Four>
                            </Wrapper>
                        ))
                    )}
                </ContainerBody>
            }
        </PageContainer >
    )

}
export default OrdersNav;