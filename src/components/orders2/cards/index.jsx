import React, { useState, useContext } from 'react'

import { Column, Container, Wrapper } from './style';
import "./stylesheet.css"
import { ReactComponent as Clock } from "../../../assets/icon/clock.svg"
import { ReactComponent as Remark } from "../../../assets/icon/Remark.svg"
import { ReactComponent as User } from "../../../assets/icon/user.svg"
import { ReactComponent as X } from "../../../assets/icon/x.svg"
import { ReactComponent as Tick } from "../../../assets/icon/tick.svg"
import { MyCardContext } from '../../../context/OrdersContex';
const Card = () => {
    const [card, setCard] = useContext(MyCardContext)
    const [data, setData] = useState(Object.entries(card));
    // const onDelete1 = (id) => {
    //     let newData = card.new.filter((value) => value.id !== id);
    //     setCard(newData);
    // }
    // const onDelete2 = (id) => {
    //     let newData = card.received.filter((value) => value.id !== id);
    //     setCard(newData);
    // }
    // const onDelete3 = (id) => {
    //     let newData = card.sent.filter((value) => value.id !== id);
    //     setCard(newData);
    // }
    // const onDelete4 = (id) => {
    //     let newData = card.closed.filter((value) => value.id !== id);
    //     setCard(newData);
    // }
    return (
        <Container>
            {
                data.map(([name, value]) => (
                    <Wrapper>
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                            <p style={{
                                marginRight: '12px',
                                opacity: "70%"
                            }}>{name}</p>
                            <div style={{
                                width: "30px",
                                height: "20px",
                                backgroundColor: 'white',
                                borderRadius: "4px",
                                display: 'flex',
                                flexDirection: "row",
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <p style={{
                                    opacity: "70%",
                                }}>
                                    {5}
                                </p>
                            </div>
                        </div>
                        {value.map((item) => (

                            <Column>

                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: "234px",
                                    height: "50px",
                                    backgroundColor: "white",
                                    borderRadius: "6px",
                                }}>
                                    <div className='bigCircle'></div>
                                    <p style={{ fontWeight: "700" }}>{item.cost}</p>
                                </div>
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
                                            alignItems: "center"
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
                                        <div className='x' style={{ marginTop: "11px" }}  ><X style={{ marginRight: "0" }} /></div>

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
                                        }}><Tick style={{ margin: "0" }} /></div>
                                    </div>
                                </div>
                            </Column>
                        ))}

                    </Wrapper>
                ))}
        </Container>
    )
}
export default Card;