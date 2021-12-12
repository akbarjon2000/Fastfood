import React, { useState, useContext } from 'react'
import { Container } from './style';
import { MyCardContext } from '../../../context/OrdersContex';
import { orders } from '../../../utils/orders';
import { Card as MyCard } from './Card';

const Card = () => {
    const [card] = useContext(MyCardContext);
    const [data, setData] = useState(orders)
    const categories = ["New", "Received", "Sent", "Closed"]
    const onDelete = (id) => {
        let newData = card.filter((value) => value.id !== id)
        setData(newData);
        console.log(id)
    }
    return (
        <>
            <Container>
                {
                    categories.map((value, index) => (
                        < div key={index}>
                            <div style={{ marginLeft: "20px" }}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginLeft: "5px",
                                    marginBottom: '10px'
                                }}>
                                    <p style={{
                                        marginRight: '12px',
                                        opacity: "70%"
                                    }}>{value}</p>
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
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: "234px",
                                    height: "50px",
                                    backgroundColor: "white",
                                    borderRadius: "6px",
                                }}>
                                    <div className='bigCircle'></div>
                                    <p style={{ fontWeight: "700" }}>{ }</p>
                                </div>
                            </div>
                            {data.filter((f) => f.category === value.toLowerCase()).map((item) => (

                                <MyCard item={item} onDelete={(id) => onDelete(id)} />

                            ))}
                        </div>
                    ))}
            </Container>
        </>
    )
}
export default Card;