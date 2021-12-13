import React, { useState } from 'react'
// import "../../navbar/navbar.css"
import "../orders.css"
import Grid from '../grid'
import { NavBody, PageContainer, Sorts } from './style'
import Card from '../flex'
import GenericDrawer from "../../Generic Drawer"
import { Container } from './AddNewStyle'
const OrdersNav = () => {
    const [isActive, setActive] = useState('New');
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false)
    const onClose = () => {
        setOpen(false)
    }
    const toggle1 = () => {
        setShow(false)
    }
    const toggle2 = () => {
        setShow(true)
    }
    return (
        <PageContainer >
            <NavBody>
                <div style={{ display: "flex" }}>
                    <div className='addnews'>
                        <div className='myplus' onClick={() => setOpen(!open)}><div>+</div></div>
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
            <div style={{ position: "relative" }}>

                {show ?
                    <Card />
                    : <Grid isActive={isActive} />
                }
                <GenericDrawer onClose={onClose} open={open} width="800px" >
                    <Container>
                        <div className='left'>
                            <h1 className='title'>Add New Order</h1>

                        </div>
                    </Container>
                </GenericDrawer>
            </div>
        </PageContainer >
    )

}
export default OrdersNav;