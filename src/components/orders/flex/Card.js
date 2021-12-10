import React, { useState } from 'react'
import { Column, Wrapper, Container, Container2 } from './style'
import GenericDrawer from "../../Generic Drawer"

//ICONS:
import { ReactComponent as Clock } from "../../../assets/icon/clock.svg"
import { ReactComponent as Remark } from "../../../assets/icon/Remark.svg"
import { ReactComponent as User } from "../../../assets/icon/user.svg"
import { ReactComponent as X } from "../../../assets/icon/x.svg"
import { ReactComponent as Tick } from "../../../assets/icon/tick.svg"
import { ReactComponent as Vector } from "../../../assets/icon/Vector.svg"
import { ReactComponent as Truck } from "../../../assets/icon/truck.svg"

export const Card = ({ item }) => {
    const [open, setOpen] = useState(false)
    const onClose = () => {
        setOpen(false)
    }
    const setClose = () => {
        setOpen(false)
    }
    const onDelete = (id) => {
        console.log(id)
    }
    return (
        <div>
            <Wrapper key={item.id}>
                <GenericDrawer open={open} width="400px" onClose={onClose} item={item} >
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
                        <div style={{ display: "flex", marginTop: "35px", marginLeft: "40px" }}>
                            <div className='x'>

                                <X />
                            </div >
                            <div className='tick' onClick={setClose}>

                                <Tick />
                            </div>
                        </div>
                    </Container2>
                </GenericDrawer>
                <Column >
                    <div key={item.id} style={{
                        width: "234px",
                        height: "345px",
                        backgroundColor: "white",
                        marginTop: "8px",
                        borderRadius: "6px",
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            padding: "0",
                            marginBottom: "18px"
                        }}>
                            <div className='ordnum' style={{ width: "60px", height: "30px" }}>{item.orderNum}</div>
                            <div className='remark' style={{
                                marginTop: "18px",
                                marginLeft: "10px",
                                marginRight: "0",
                                width: "30px",
                                height: "30px"
                            }}><Remark /></div>
                            <div style={{
                                marginLeft: "40px",
                                marginTop: "25px",
                                display: "flex",
                                alignItems: "center"
                            }}><Clock /><p style={{
                                margin: "0",
                                marginLeft: "8px"
                            }}>{item.time}</p></div>
                        </div>
                        <div style={{
                            borderTop: "1px solid rgb(220, 220, 220)",
                            borderBottom: "1px solid rgb(220, 220, 220)",
                            margin: "0 auto",
                            width: "202px",
                        }}>
                            <div style={{
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <div style={{
                                    display: 'flex'
                                }}>
                                    <User style={{ marginTop: "19px" }} />
                                    <div style={{
                                        marginTop: "19px",
                                        marginLeft: "22px"
                                    }}>{item.customer}</div>
                                </div>
                            </div>
                            <p style={{
                                marginTop: "5px",
                                marginLeft: "33px",
                                opacity: "70%",
                                fontSize: "12px"
                            }}>{item.phoneNum}</p>

                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "20px"
                            }}>
                                <p style={{
                                    margin: "0",
                                    fontSize: "11px"
                                }}>Total amount:</p>
                                <div className='littleCircle' style={{
                                    margin: "0",
                                    marginLeft: "61px",
                                    marginRight: "8px"
                                }}></div>
                                <p style={{ margin: "0" }}>{item.paymentType}</p>
                            </div>
                            <p style={{
                                margin: "0",
                                fontWeight: "700",
                                marginBottom: "18px"
                            }}>{item.total}</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div>
                                <p style={{
                                    marginTop: "13px",
                                    marginLeft: "16px",
                                    marginBottom: "1px",
                                    opacity: "70%",
                                    fontSize: "11px"
                                }}>Operator:</p>
                                <p style={{
                                    margin: "0",
                                    marginLeft: "16px"
                                }}>{item.operator}</p>
                            </div>
                            <div className='x' style={{ marginTop: "11px" }} onClick={() => onDelete(item.id)} ><X style={{ marginRight: "0" }} /></div>
                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }}>
                            <div>
                                <p style={{
                                    marginTop: "15px",
                                    marginLeft: "16px",
                                    marginBottom: "1px",
                                    fontSize: "11px",
                                    opacity: "70%"
                                }}>Branch:</p>
                                <p style={{
                                    marginTop: "0",
                                    marginLeft: "16px"
                                }}>{item.branch}</p>
                            </div>
                            <div className='tick' style={{
                                margin: "0",
                                marginTop: "15px",
                                position: "relative",
                                left: "-15px"
                            }} onClick={() => setOpen(true)}><Tick style={{ margin: "0" }} /></div>
                        </div>
                    </div>
                </Column>


            </Wrapper>

        </div >
    )
}
