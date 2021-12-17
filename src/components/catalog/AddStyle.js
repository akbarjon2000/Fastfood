import styled from "styled-components";

export const AddContainer = styled.div`
width:995px;
height:620px;
background-color:white;
margin-left:34px;
border-radius: 12px;
display:flex;
flex-direction:column;
padding:30px;
.title{
    background: #EDEFF3;
border-radius: 25px;
width: 349px;
height: 50px;
padding-left:20px;
border:none;
outline:none;
}
.category{
    background: #F4F4F4;
box-shadow: 0px 0px 2px rgba(54, 54, 54, 0.25);
border-radius: 25px;
width: 400px;
height: 50px;
display:flex;
align-items:center;
justify-content:center;
padding-left:17px;
padding-right:17px;
}
.select{
    flex:1;
    width:110px !important;
    height:26px;
    margin-right:35px;
    border:none;
    outline:none;
    background-color:inherit;
}
.caption{
    background: #EDEFF3;
border-radius: 20px;
min-width: 935px;
max-width: 935px;
min-height: 198px;
max-height: 198px;
margin-top:20px;
border:none;
outline:none;
padding:20px;

}
.label{
    background: #EDEFF3;
border: 2px dashed #4F4F4F;
box-sizing: border-box;
border-radius: 20px;
width: 935px;
height: 186px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-top:20px;
}
.uploadImage{
    font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: 27px;
letter-spacing: 0px;
text-align: left;
opacity:0.4;
}
.cancel{
    border: 2px solid #EDEFF3;
box-sizing: border-box;
border-radius: 20px;
width: 170px;
height: 40px;
background: #FFFFFF;
outline:none;

}
.save{
    background: #09A92C;
border-radius: 20px;
width: 150px;
height: 40px;
color:white;
border:none;
outline:none;
margin-left:20px;
}
`
