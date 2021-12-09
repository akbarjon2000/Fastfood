import styled from "styled-components";

// export const Container = styled.div`
// position:absolute;
// width: 100%;
// right:${({ open, width }) => open ? "0" : `-${width}`};
// height:100vh;
// background-color:black;
// z-index:999;
// opacity:0.5;
// display:${({ open }) => open ? "flex" : "none"};
// overflow: hidden;
// `
export const Drawer = styled.div`
position:absolute;
width: ${({ width }) => width ? `${width}` : "400px"};
right:${({ open, width }) => open ? "0" : `-${width}`};
height:100vh;
background-color:white;
z-index:999;
transition: all 0.5s;
`
export const Close = styled.div`
position:absolute;
background-color:white;
color:black;
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
export const Container = styled.div`
display:flex;
flex-direction:column;
margin:0;
padding:0px 16px 0 16px;
position:relative;
bottom:15px;
right:15px;
width:fit-content;

`
Container.col1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:space-between;
    padding: 0;
    margin:0;
    margin-bottom: 24px;
    width:fit-content;
`
Container.Clock = styled.div`

    margin-left: 30px;
    margin-top: 25px;
    display: flex;
    align-items: center;
        
`
Container.col2 = styled.div`

`
Container.customer = styled.div`
    width:318px;
    height:93px;
    border-radius:6px;
    margin:0;
    display: flex;
    align-items: center;
    background-color: #EDEFF3;


`
Container.customerInfo = styled.div`
width:178px;
height:45px;
padding-left:14px;
`