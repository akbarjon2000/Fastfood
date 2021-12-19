import React, { useState } from 'react'
import { Wrapper } from "./style";
import { ReactComponent as Active } from "../../assets/icon/check-circle.svg"
import { ReactComponent as Block } from "../../assets/icon/block.svg"
import { ReactComponent as Edit } from "../../assets/icon/Path.svg"
import { ReactComponent as Delete } from "../../assets/icon/trash-2.svg"

export const BodyCopy = ({ onDelete, item, data }) => {

    const [active, setActive] = useState(true)
    const activate = (id) => {
        data.map(value => {
            return value.id === id && setActive(!active)
        })
    }

    return (
        <div>

            <Wrapper key={item.id}>
                <div style={{
                    flex: 1.3,
                    marginLeft: '18px'
                }}>{item.name}</div>
                <div style={{ flex: 1.5 }}> {item.contact}</div>
                <div style={{ flex: 0.8 }}>{item.orderCount}</div>
                <Wrapper.Activate>{active ? <div style={{ color: "#20D472" }}>Active</div> : <div style={{ color: '#FA2738' }}>Block</div>}</Wrapper.Activate>
                <Wrapper.Action>
                    <Wrapper.Active onClick={() => activate(item.id)}>{active ? <Block /> : <Active />}</Wrapper.Active>
                    <Wrapper.Edit><Edit /></Wrapper.Edit>
                    <Wrapper.Delete onClick={() => onDelete(item.id)}><Delete /></Wrapper.Delete>
                </Wrapper.Action>
            </Wrapper>

        </div>
    )
}
