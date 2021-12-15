import React, { useState } from 'react'
import { Wrapper } from './AddNewStyle';
export const AddNew = ({ value }) => {
    const [count, setCount] = useState(1);
    const [add, setAdd] = useState(false);

    const onAdd = () => {
        setAdd(true);
    }
    return (
        <Wrapper>

            <div className='items'>
                <img src={value.img} className='images' alt='aaa'></img>
                <div style={{ padding: "5px", paddingLeft: "13px" }}>
                    <p className='nmae'>{value.name} ({value.netto} g)</p>
                    <p className='rus'>{value.Rus}</p>
                    <div className='addmanu'>
                        <p>{value.cost} KRW</p>
                        {add ?
                            <div className='countMenu'>
                                <button className='minus' onClick={() => {
                                    if (count > 1) {
                                        setCount(count - 1);
                                    }
                                }}>-</button>
                                <p>{count}</p>
                                <button className='plus' onClick={() => {
                                    setCount(count + 1);
                                }}>+</button>
                            </div>
                            : <button className='addButton' onClick={onAdd} > <span style={{ fontSize: "25px", marginRight: "5px" }}>+ </span> Add</button>

                        }
                    </div>

                </div>
            </div>


        </Wrapper>
    )
}
