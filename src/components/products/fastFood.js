import React, { useState, useContext } from 'react'
import { ReactComponent as Edit } from "../../assets/icon/Path.svg"
import { ReactComponent as Deletebtn } from "../../assets/icon/trash-2.svg"
import { Restore, Container } from './styled'
import { MyContext } from '../../context/ProductsContext'
const FastFood = () => {
    const [active] = useState(null)
    const [mydata, setData] = useContext(MyContext)
    const [data] = useState(mydata)

    const Delete = (id) => {
        let NewData = mydata.filter((value) => value.id !== id)
        setData(NewData)
    }
    const Reset = () => {
        setData(data)
    }
    return (
        <Container>
            {
                mydata.length ?
                    mydata.map((value) => (
                        <div className={`base delete-${active === value.id}`} key={value.id}>
                            <img src={value.Img} className='foodIcon1' alt='aaa'></img>
                            <div className='meal'>{value.foodType}</div>
                            <div className='mycategories'> <p className='mycategories1'>{value.category}</p> </div>
                            <div className='costtext'> <p className='costtext1'>{value.cost}</p> </div>
                            <div className='info'><p className='info1'>{value.info}</p> </div>
                            <div className='actions'>
                                <div className='editbtn'><Edit /></div>
                                <div onClick={() => Delete(value.id)} className='deletebtn' ><Deletebtn /></div>
                            </div>
                        </div>
                    ))
                    : <Restore onClick={Reset} className='heartbeat'><i class="fa-solid fa-trash-arrow-up  "></i> Restore</Restore>
            }
        </Container>
    )
}

export default FastFood;