import React, { useContext, useState } from 'react'
import { MyCustomerContext } from '../../context/CustomersContext'
import { Wrapper } from "./style";
import { ReactComponent as Active } from "../../assets/icon/check-circle.svg"
import { ReactComponent as Block } from "../../assets/icon/block.svg"
import { ReactComponent as Edit } from "../../assets/icon/Path.svg"
import { ReactComponent as Delete } from "../../assets/icon/trash-2.svg"
export const Body = () => {
    const [myData] = useContext(MyCustomerContext);
    // const [data] = useState(myData);
    const [active] = useState(true)
    const activate = () => {
        // setActive(!active)
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
                        <Wrapper.Delete><Delete /></Wrapper.Delete>
                    </Wrapper.Action>
                </Wrapper>
            ))}
        </div>
    )
}
