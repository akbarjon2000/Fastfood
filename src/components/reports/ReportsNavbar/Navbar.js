import React from 'react'

import { Container } from './style'
import { ReactComponent as Filter } from "./filter.svg"
import { ReactComponent as Search } from "./search.svg"

const Navbar = () => {

    return (

        <Container>
            <div className='nobody'>
                <div className='nav'>
                    <div className='addnews'>
                        <div className='myplus'><div style={{
                            display: 'flex',
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            bottom: "2px"
                        }}>+</div></div>
                        <p style={{ width: "100px" }}>Add a new Report</p>
                    </div>
                    <div className='searchbar'>
                        <div style={{ margin: "0", padding: "0" }}>
                            <input type="text" placeholder="Search" className="searchInput" ></input>
                            <button className="searchbtn" ><Search /></button>
                        </div>
                        <div className='filter'>
                            <Filter />
                        </div>
                    </div>
                </div>

            </div >
        </Container>
    )
}
export default Navbar;
