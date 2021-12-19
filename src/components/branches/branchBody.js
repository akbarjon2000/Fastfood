import React, { useState, useContext } from 'react'
// import branchObj from "../../utils/branchObj"
import { Wrapper } from './style'
import { ReactComponent as Delete } from "../../assets/icon/trash-2.svg"
import { ReactComponent as Location } from "../../assets/icon/map-pin copy.svg"
import { ReactComponent as Edit } from "../../assets/icon/Path.svg"
import { MyBranchContext } from '../../context/branchContex'
import { Restore } from '../products/styled'
const BranchBody = () => {
    const [data, setData] = useContext(MyBranchContext);
    const [newData] = useState(data);
    const [locate, setLocate] = useState(true);
    const onDelete = (id) => {
        let newData = data.filter((value) => value.id !== id);
        setData(newData);
    }
    const reset = () => {
        setData(newData)
    }
    const onLocate = () => {
        setLocate(!locate);
    }
    return (
        <Wrapper>
            {data.length ?
                data.map(({ id, branchNameUz, branchNameEng, landmark, workingHours }) =>
                (



                    <Wrapper.Obj key={id}>
                        <div style={{
                            flex: "1.25",
                            marginLeft: "18px"
                        }}>{branchNameUz}</div>
                        <div style={{ flex: "1", }}>{branchNameEng}</div>
                        <div style={{ flex: "1", }}>{landmark}</div>
                        <div style={{ flex: "1", }}>{workingHours}</div>
                        <Wrapper.Action>
                            <Wrapper.Location onClick={onLocate}><Location /></Wrapper.Location>
                            <Wrapper.Edit ><Edit /></Wrapper.Edit>
                            <Wrapper.Delete onClick={() => onDelete(id)}><Delete /></Wrapper.Delete>
                        </Wrapper.Action>
                    </Wrapper.Obj>



                ))
                : <Restore className='heartbeat' onClick={reset}>Restore</Restore>}
        </Wrapper>
    )
}
export default BranchBody;