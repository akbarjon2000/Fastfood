import React, { useState, useContext } from 'react'

import { Container } from './style';
import { MyCardContext } from '../../../context/OrdersContex';

import { Card as MyCard } from './Card';

const Card = () => {
    const [card] = useContext(MyCardContext);
    const [data] = useState(Object.entries(card))
    return (
        <>
            <Container>
                {
                    data.map(([name, value], index) => (
                        <div key={index}>
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
                            {value.map((item) => (
                                <MyCard item={item} index={index} name={name} key={item.id} />
                            ))}
                        </div>
                    ))}
            </Container>
        </>
    )
}
export default Card;