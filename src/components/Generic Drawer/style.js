import styled from "styled-components";

export const Container = styled.div`
position:absolute;
width: 100%;
right:${({ open, width }) => open ? "0" : `-${width}`};
height:100vh;
background-color:black;
z-index:999;
opacity:0.5;
display:${({ open }) => open ? "flex" : "none"};
overflow: hidden;
`
export const Drawer = styled.div`
position:absolute;
width: ${({ width }) => width ? `${width}` : "400px"};
right:${({ open, width }) => open ? "0" : `-${width}`};
height:100vh;
background-color:red;
z-index:999;
transition: all 0.5s;
`
export const Close = styled.div`
position:absolute;
background-color:red;
color:white;
width:80px;
height:40px;
top:10px;
z-index:-1;
border-radius:18px;
display:flex;
align-items:center;
padding-left:15px;
left:${({ open }) => open ? "-40px" : `0`};
cursor: pointer;
transition:all 0.6s;
`