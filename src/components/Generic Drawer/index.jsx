import React from 'react'
import { Close, Container, Drawer } from './style';
//ICONS:
import { ReactComponent as Clock } from "../../assets/icon/clock.svg"
import { ReactComponent as Remark } from "../../assets/icon/Remark.svg"
import { ReactComponent as User } from "../../assets/icon/user.svg"
import { ReactComponent as X } from "../../assets/icon/x.svg"
import { ReactComponent as Tick } from "../../assets/icon/tick.svg"
const Index = ({ open, width, onClose, item }) => {

    return (
        <div style={{ overFlow: "hidden" }}>
            <Drawer open={open} width={width} >
                <Close open={open} onClick={onClose}>X</Close>
                <Container>
                    <Container.col1 >
                        <div className='ordnum' style={{ width: "60px", height: "30px", marginLeft: '0' }}>8549</div>
                        <Container.Clock ><Clock style={{ marginLeft: "157px" }} /><p style={{
                            margin: "0",
                            marginLeft: "10px"
                        }}>00:24</p></Container.Clock>
                    </Container.col1>

                    <Container.customer >
                        <User style={{
                            padding: "0",
                            width: "fit-content",
                            height: "fit-content",
                            marginLeft: "22px",
                            marginTop: "0",
                            marginBottom: "10px"
                        }} />
                        <Container.customerInfo >
                            <div style={{ fontSize: "18px" }}>Muhammad Ali</div>

                            <p style={{

                                opacity: "70%",
                                fontSize: "16px",
                                marginBottom: "10px"
                            }}>+8201091519002</p>
                        </Container.customerInfo>
                    </Container.customer>

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
                        <p style={{ margin: "0" }}>Payme</p>
                    </div>
                    <p style={{
                        margin: "0",
                        fontWeight: "700",
                        marginBottom: "18px"
                    }}>40,000 KRW</p>


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
                            }}>Komila A</p>
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
                            }}>Suwon City</p>

                        </div>
                        <div className='tick' style={{
                            margin: "0",
                            marginTop: "15px",
                            position: "relative",
                            left: "-15px"
                        }}><Tick style={{ margin: "0" }} /></div>
                    </div>
                </Container>
            </Drawer>
        </div>
    )
}
export default Index;
