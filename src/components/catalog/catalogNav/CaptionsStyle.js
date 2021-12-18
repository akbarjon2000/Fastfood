import styled from "styled-components";

export const NotifyDiv = styled.div`
width:1000px;
height:600px;
background-color:white;
margin-left:30px;
margin-top:10px;
border-radius:10px;
padding:35px;
.item{
    margin-bottom:30px;
    display:flex;
    align-items:center;
    justify-content:space-between;
}
.captionText{
    font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
color: #000000;
margin-left:22px;
width:fit-content;
}
.sentBtn{
    background: #00B707;
border-radius: 10px;
color:white;
border:none;
outline:none;
width: 77px;
height: 26px;
margin-left:158px;
}
.editbox{
    background: #EDEFF3;
    width: 40px;
height: 40px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
margin-left:104px;
}
`