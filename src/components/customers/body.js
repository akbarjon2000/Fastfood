import React, { useContext, useState } from 'react'
import { MyCustomerContext } from '../../context/CustomersContext'
import { Wrapper } from "./style";
import { ReactComponent as Active } from "../../assets/icon/check-circle.svg"
import { ReactComponent as Block } from "../../assets/icon/block.svg"
import { ReactComponent as Edit } from "../../assets/icon/Path.svg"
import { ReactComponent as Delete } from "../../assets/icon/trash-2.svg"
export const Body = () => {
    const [myData, setMyData] = useContext(MyCustomerContext);
    const [data, setData] = useState(myData);
    const [active, setActive] = useState(true)
    const activate = (id) => {
        const item = data.map((value) => {
            if (value.id === id) {
                setActive(!active)
            }
        })
    }
    const onDelete = (id) => {
        let newData = myData.filter((value) => value.id !== id)
        setMyData(newData);
    }
    return (
        <div>
            {myData.map(({ id, name, contact, orderCount }) => (
                <Wrapper key={id}>
                    <div style={{
                        flex: 1.3,
                        marginLeft: '18px'
                    }}>{name}</div>
                    <div style={{ flex: 1.5 }}> {contact}</div>
                    <div style={{ flex: 0.8 }}>{orderCount}</div>
                    <Wrapper.Activate>{active ? <div style={{ color: "#20D472" }}>Active</div> : <div style={{ color: '#FA2738' }}>Block</div>}</Wrapper.Activate>
                    <Wrapper.Action>
                        <Wrapper.Active onClick={() => activate(id)}>{active ? <Block /> : <Active />}</Wrapper.Active>
                        <Wrapper.Edit><Edit /></Wrapper.Edit>
                        <Wrapper.Delete onClick={() => onDelete(id)}><Delete /></Wrapper.Delete>
                    </Wrapper.Action>
                </Wrapper>
            ))}
        </div>
    )
}
