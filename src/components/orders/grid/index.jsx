import React, { useState, useContext } from 'react'
import { MyCardContext } from '../../../context/OrdersContex'
import { Container, Wrapper, ContainerBody } from '../order nav/style'
import { Container2 } from '../flex/style'
import Drawer from "../../Generic Drawer"
// ICONS:
import { ReactComponent as Clock } from "../../../assets/icon/clock.svg"
import { ReactComponent as Remark } from "../../../assets/icon/Remark.svg"
import { ReactComponent as User } from "../../../assets/icon/user.svg"
import { ReactComponent as Telephone } from "../../../assets/icon/telephone.svg"
import { ReactComponent as Vector } from "../../../assets/icon/Vector.svg"
import { ReactComponent as Truck } from "../../../assets/icon/truck.svg"
import { ReactComponent as X } from "../../../assets/icon/x.svg"
import { ReactComponent as Tick } from "../../../assets/icon/tick.svg"
const Grid = ({ isActive }) => {
    const [data] = useContext(MyCardContext);
    const [card, setCard] = useState(data)
    const [open, setOpen] = useState(false)

    const onClose = () => {
        setOpen(false)
    }
    const setClose = () => {
        setOpen(false)
    }
    const onDelete = (id) => {
        const filtered = card.filter((value) => value.id !== id);
        setCard(filtered)
    }
    return (
        <ContainerBody>
            {card.filter((a) => a.category === isActive.toLowerCase())
                .map((item, index) => (
                    <Wrapper key={index}>
                        <Drawer open={open} width="400px" onClose={onClose} item={item}>
                            <Container2>

                                <Container2.Col1 >
                                    <div className='ordnum' style={{ width: "60px", height: "30px", marginLeft: '0' }}>8549</div>
                                    <Container2.Clock >
                                        <Clock style={{}} /><p style={{
                                            margin: "0",
                                            marginLeft: "10px"
                                        }}>00:24</p>
                                    </Container2.Clock>
                                </Container2.Col1>
                                <Container2.Customer >
                                    <User style={{
                                        padding: "0",
                                        width: "fit-content",
                                        height: "fit-content",
                                        marginLeft: "22px",
                                        marginTop: "0",
                                        marginBottom: "30px"
                                    }} />
                                    <Container2.CustomerInfo >
                                        <div style={{ fontSize: "18px" }}>{item.customer}</div>
                                        <p style={{
                                            opacity: "70%",
                                            fontSize: "16px",
                                            marginBottom: "10px"
                                        }}>+8201091519002</p>
                                    </Container2.CustomerInfo>
                                </Container2.Customer>
                                <Container2.FoodCenter>
                                    <div style={{ display: "flex" }}>
                                        <div>
                                            <p style={{
                                                opacity: "70%",
                                                fontSize: "15px"
                                            }}>Operator:</p>
                                            <p >{item.operator}</p>
                                        </div>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between"
                                    }}>
                                        <div>
                                            <p style={{
                                                fontSize: "15px",
                                                opacity: "70%"
                                            }}>Branch:</p>
                                            <p>{item.branch}</p>
                                        </div>
                                    </div>
                                </Container2.FoodCenter>
                                <Container2.OrderInfo>
                                    <p style={{ flex: "1" }}>PRODUCTS</p>
                                    <p style={{ flex: "1" }}>COUNT | COST</p>
                                </Container2.OrderInfo>
                                <Container2.OrderedFood>
                                    {item.order.map((value) => (
                                        <div style={{ display: "flex", width: "100%", marginBottom: "20px" }} key={value.id}>
                                            <p style={{ flex: "1" }}>{value.type}</p>
                                            <p style={{ flex: "1" }}>{value.count}*{value.cost} KRW</p>
                                        </div>
                                    ))}
                                </Container2.OrderedFood>
                                <Container2.Total>
                                    <div style={{ display: "flex", flex: "1" }}>
                                        <Vector style={{ marginRight: "10px" }} />
                                        <p>57,500 KRW</p>
                                    </div>
                                    <div style={{ flex: "1" }}>
                                        <div style={{ display: "flex", }}>
                                            <Truck style={{ marginRight: "10px" }} />
                                            <p>3000 KRW</p>
                                        </div>
                                        <div style={{ display: "flex", marginTop: '15px' }}>
                                            <Container2.Circle></Container2.Circle>
                                            <p>Pay me</p>
                                        </div>
                                    </div>
                                </Container2.Total>
                                <div className='buttonsDiv'>
                                    <div className='x' onClick={onClose}>

                                        <X style={{ margin: "0", padding: "0" }} />
                                    </div >
                                    <div className='tick' onClick={setClose}>

                                        <Tick style={{ margin: "0", padding: "0" }} />
                                    </div>
                                </div>
                            </Container2>
                        </Drawer>
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
                                }}>{item.operator}</p>
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
                                <X />
                            </div>
                            <div className='tick' onClick={() => setOpen(true)}><Tick /></div>
                        </Container.Four>
                    </Wrapper>
                ))
            }
        </ContainerBody>
    )
}
export default Grid;