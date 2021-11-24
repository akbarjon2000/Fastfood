import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction:column;
width:300px;
height:100vh;
background-color:white;
.icon{
    width:40px;
    height:40px;
    padding: 10px;
    background-color:#F6F6F6;
    border-radius:6px;
    margin-right:10px;
}
.bitmap{
    width:72px;
    height:72px;
    border-radius:50%;
    margin-right:20px;
}
.fastfood{
    font-family: SFProDisplay;
font-size: 16px;
line-height: 19px;
letter-spacing: 0px;
text-align: left;
font-weight:800;
}
.sale{
    font-family: SFProDisplay;
font-size: 16px;
line-height: 19px;
letter-spacing: 0px;
text-align: left;
opacity:50%;
}
`
export const Item = styled.div`
display:flex;
    /* margin:20px 9px 0 40px; */
    align-items: center;
    text-decoration:none;
    margin-left:25px;
 
`
export const Title = styled.div`
font-family: SFProDisplay;
font-size: 15px;
line-height: 18px;
letter-spacing: 0px;
text-align: left;
`
export const Exit = styled.div`
margin-top:auto;
margin-bottom:30px;
display:flex;
margin-left:25px;
align-items:center;
`
export const Header = styled.div`
width: 100%auto;
height:100px;
display:flex;
align-items:center;

padding-top:28px;
padding-left:24px;
margin-bottom:64px;
`
export const Wrapper = styled.div`
border-left:4px solid #FCB600;
height:fit-content;
padding:0;
margin:0;
`