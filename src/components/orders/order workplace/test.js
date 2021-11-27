import React, { useContext, useState } from 'react'
import { MyCardContext } from '../../../context/OrdersContex'
import { orders } from '../../../utils/orders'
const Test = () => {
    // const [data, setData] = useContext(MyCardContext);
    // const [card, setCard] = useState(Object.entries(data));
    // console.log(Object.entries(data))
    const [data, setData] = useState(Object.entries(orders))
    return (
        <div>
            {data.map(([name, value], index) => (
                <div key={index}>
                    <h1>{name}</h1>
                    {value.map((item) => (
                        <h1>{item.customer}</h1>
                    ))}
                </div>
            ))}
        </div>
    )
}
export default Test