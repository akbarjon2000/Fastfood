import React, { useState } from 'react'
// import "../../navbar/navbar.css"
import "../orders.css"
import Grid from '../grid'
import { NavBody, PageContainer, Sorts } from './style'
import Card from '../flex'
import GenericDrawer from "../../Generic Drawer"
import { Container, DeleteStyle } from './AddNewStyle'
import { data } from '../../../utils/AddNewUtils/garnierObj'
import { AddNew } from './AddNew'
import Location from "../location"
import { nanoid } from "nanoid"
//ICONS
import { ReactComponent as Delete } from "../../../assets/icon/trash-2.svg"
import { ReactComponent as UserPlus } from "../../../assets/icon/user-plus.svg"


const OrdersNav = () => {
    const [isActive, setActive] = useState('New');
    const [menu, setMenu] = useState("Garnier")

    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false)
    // const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const onClose = () => {
        setOpen(false)
    }
    const toggle1 = () => {
        setShow(false)
        setOpen(false)
    }
    const toggle2 = () => {
        setShow(true)
        setOpen(false)
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
                <GenericDrawer onClose={onClose} open={open} width="810px" key={nanoid(3)}>
                    <Container key={nanoid(3)}>
                        <div className='left'>
                            <h1 className='title'>Add New Order</h1>
                            <div className='toggle'>
                                <Container.Item className='item' onClick={() => {
                                    setMenu("Burger")
                                }} active={menu === "Burger"}>Burger</Container.Item>
                                <Container.Item className='item' onClick={() => {
                                    setMenu("Lavash")
                                }} active={menu === "Lavash"}>Lavash</Container.Item>
                                <Container.Item className='item' onClick={() => {
                                    setMenu("Garnier")
                                }} active={menu === "Garnier"}>Garnier</Container.Item>
                                <Container.Item className='item' onClick={() => {
                                    setMenu("Salats")
                                }} active={menu === "Salats"}>Salats</Container.Item>
                                <Container.Item className='item' onClick={() => {
                                    setMenu("Drinks")
                                }} active={menu === "Drinks"}>Drinks</Container.Item>
                                <Container.Item className='item' onClick={() => {
                                    setMenu("Sous")
                                }} active={menu === "Sous"}>Sous</Container.Item>
                            </div>
                            {
                                menu === "Garnier" ?
                                    <div className='manuContainer'>
                                        {data.map((value) => (
                                            <AddNew value={value} key={nanoid(3)} />
                                        ))}
                                    </div>

                                    : <p>Coming soon</p>
                            }
                        </div>
                        <div className='right'>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <p className='rightTitle'>List of orders</p>
                                <DeleteStyle >
                                    <Delete className="delete" />
                                </DeleteStyle>
                            </div>
                            <div className='orderList'>
                                <div style={{ display: "flex", width: "100%", justifyContent: "space-between", marginBottom: "10px" }}>
                                    <p>Shaurma standard</p>
                                    <p>40.500 KRW</p>
                                </div>
                                <div style={{ display: "flex", width: "100%", justifyContent: "space-between", marginBottom: "10px" }}>
                                    <p>Pang Sendwich</p>
                                    <p>40.500 KRW</p>
                                </div>
                                <div style={{ display: "flex", width: "100%", justifyContent: "space-between", marginBottom: "10px" }}>
                                    <p>Coca-Cola 1.5L</p>
                                    <p>40.500 KRW</p>
                                </div>
                                <div className='total'>
                                    <p className='totalamount'>Total amount</p>
                                    <p className='totalamount2'>120000 KRW</p>
                                </div>

                            </div>
                            <form>

                                <p style={{ marginTop: "16px" }}>Customer's name </p>
                                <div style={{ display: "flex", alignItems: "center" }}>

                                    <input type='text' className='input1 input' required />
                                    <div className='usr'>
                                        <UserPlus />
                                    </div>
                                </div>
                                <p style={{ marginTop: "16px" }}>Phone number</p>
                                <input className='input ' type="text" required></input>
                                <p style={{ marginTop: "16px" }}>Location</p>

                                <Location />
                                <button className='save'>Save</button>
                            </form>
                        </div>
                    </Container>
                </GenericDrawer>
            </div>
        </PageContainer >
    )
}
export default OrdersNav;