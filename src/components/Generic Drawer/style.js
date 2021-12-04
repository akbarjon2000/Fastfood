import styled from "styled-components";

export const Container = styled.div`
position:absolute;
width: ${({ width }) => width ? `${width}` : "400px"};
right:${({ isOpen, width }) => isOpen ? "0" : `-${width}`};
height:100vh;
background-color:red;
z-index:999;
transition: all 0.5s;
`
export const Button = styled.div`
position:absolute;
background-color:red;
color:white;
width:80px;
height:40px;
top:10px;
/* z-index:999; */
border-radius:18px;
display:flex;
align-items:center;
padding-left:15px;
left:-40px;
right:-40px;
`