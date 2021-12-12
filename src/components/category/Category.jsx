import React, { useState, useContext } from 'react'
import Navbar from './categoryNav/CategoryNav'
import { Container, Uz, Eng, Main, Restore } from './style'
// import { data } from '../../utils/categoryObj'
import { MyCategory } from '../../context/CategoryContext'
const Category = () => {
    const [myData, setData] = useContext(MyCategory)
    const [data] = useState(myData);


    // const [category, setCategory] = useState(data);
    const onDelete = (id) => {
        let newData = myData.filter((value) => value.id !== id)
        setData(newData)
    }
    const onreset = () => {
        setData(data);
    }
    return (
        <div>
            <Container>
                <Container.Page>
                    <Navbar />
                    {myData.length ?
                        myData.map(({ id, uz, eng, main, Edit, Delete }) => (
                            <Container.El key={id}>
                                <Uz>{uz}</Uz>
                                <Eng>{eng}</Eng>
                                <Main>{main}</Main>
                                <Container.Edit><Edit /></Container.Edit>
                                <Container.Delete onClick={() => onDelete(id)} ><Delete /></Container.Delete>
                            </Container.El>
                        ))
                        : <Restore onClick={onreset} className="heartbeat">Restore</Restore>
                    }
                </Container.Page>
            </Container>
        </div>
    )
}
export default Category;
