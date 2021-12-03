import React from 'react'
import { Container, Exit, Header, Item, Title, Wrapper } from './style';
import { NavLink } from "react-router-dom"
import { sidebar } from '../../utils/sidebar';
import { ReactComponent as Logout } from "../../assets/icon/log-out.svg"
import { ReactComponent as Bitmap } from "../../assets/icon/Bitmap.svg"
const Sidebar = () => {

    return (
        <Container>
            <Header>
                <Bitmap className="bitmap" />
                <div>
                    <p className='fastfood'>FastFood</p>
                    <p className='sale'>Online Food Sale</p>
                </div>
            </Header>
            <Wrapper>
                <div></div>
                {sidebar.map(({ id, title, pathname, icon: Icon }) => (
                    <NavLink key={id} to={pathname} style={({ isActive }) => {
                        return {
                            color: isActive ? 'white' : '#2D3A45',
                            textDecoration: "none",
                            backgroundColor: isActive ? "#FCB600" : "white",
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: '10px',
                            height: "60px",
                            paddingRight: '25px',
                            transition: 'all 0.3s',
                            borderBottomRightRadius: '6px',
                            borderTopRightRadius: '6px',
                            width: '280px',
                        }
                    }}>
                        <Item>
                            <Icon className="icon" />
                            <Title>{title}</Title>
                        </Item>
                    </NavLink>
                ))}
            </Wrapper>
            <Exit>
                <Logout className="icon" />
                <Title>Exit</Title>
            </Exit>
        </Container>
    )
}
export default Sidebar;