import React, { useContext, useState } from 'react'
import { MyCustomerContext } from '../../context/CustomersContext'
import { BodyCopy } from "./body copy";
import { nanoid } from 'nanoid';
export const Body = () => {
    const [myData] = useContext(MyCustomerContext);
    const [data, setData] = useState(myData);
    const onDelete = (id) => {
        let newData = data.filter((value) => value.id !== id)
        setData(newData);
    }
    return (
        <div >
            {data.map((item) => (
                <BodyCopy item={item} onDelete={(id) => onDelete(id)} data={data} key={nanoid(3)} />
            ))}
        </div>
    )
}
