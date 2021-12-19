import styled from "styled-components";
export const AddContainer = styled.div`
display:flex;
flex-direction:column; 
padding-top:44px;
padding-left:24px;
padding-right:24px;
.title{
font-family: SFProDisplay;
font-size: 16px;
line-height: 18px;
letter-spacing: 0.533333px;
color: #2D3A45;
font-weight:600;
margin-bottom:32px;
}
.name{
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
outline:unset;
}
.upload{
display:none;
width:318px;
height:97px;
}

.label{
    width:318px;
    height:97px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
border:1px dashed #EDEFF3 ;
border-radius: 8px;

}
.savebtn{
    background: #20D472;
border-radius: 4px;
width:118px;
height:35px;
border:none;
outline:unset;
color:white;
margin-top:250px;
}
`