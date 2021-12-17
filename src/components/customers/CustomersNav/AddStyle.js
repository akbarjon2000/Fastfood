import styled from "styled-components";
export const ContainerAdd = styled.div`
padding:44px 24px;
.title{
    font-family: SFProDisplay;
font-size: 16px;
line-height: 18px;
letter-spacing: 0.533333px;
font-weight:600;
color: #2D3A45;
margin-bottom:32px;

}
.text{
font-family: SFProDisplay;
font-size: 12px;
line-height: 18px;
letter-spacing: 0.4px;
color: #2D3A45;
mix-blend-mode: normal;
opacity: 0.6;
margin-bottom:5px;
}
.input{
    border: 1px solid #EDEFF3;
box-sizing: border-box;
border-radius: 6px;
width:318px;
height:44px;
margin-bottom:16px;
outline:none;
padding:10px
}
.timeDiv{
    display:flex;
    align-items:center;
    
}
.timeInput{
    border: 1px solid #EDEFF3;
box-sizing: border-box;
border-radius: 6px;
width:95px;
height:50px;
outline:none;
margin-bottom:16px;
}
.savebtn{
    background: #20D472;
border-radius: 4px;
color:white;
width:118px;
height:35px;
outline:none;
border:none;
margin-top:200px;
}
.checkbox{
border:1px solid orange !important;
border-radius:3px;
margin-right:10px;
width:16px;
height:16px;
display:flex;
justify-content:center;
align-items:center;

}

`
export const Toggle = styled.div`
    background-color:${({ active }) => active ? "orange" : "white"};
    width:10px;
    height:10px;
    border-radius:2px;
`