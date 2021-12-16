import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;  
padding-top:35px;
padding-left:25px;
padding-right:25px;
padding-bottom:25px;
 .left{
     display:flex;
     flex-direction:column;
     
 }
.title{
    font-family: SFProDisplay;
font-size: 16px;
line-height: 18px;
/* identical to box height, or 112% */
letter-spacing: 0.533333px;
color: #2D3A45;
margin-left:5px;
}
.toggle{
    width: 464px;
height: 44px;
left: 554px;
top: 159px;

background: #EDEFF3;
border-radius: 24px;
margin-top:19px;
display:flex;
align-items: center;
padding-left:5px;
padding-right:6px;
}
.manuContainer{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:460px ;
    height:fit-content;
    justify-content: space-between;
    margin-top:20px;
    
}
.right{
    display:flex;
    flex-direction:column;
    width:272px;
    height:100%;
}
.rightTitle{
    font-family: SFProDisplay;
font-size: 16px;
line-height: 18px;
/* identical to box height, or 112% */
letter-spacing: 0.533333px;
color: #2D3A45;
font-weight:600;
margin-left:5px;
}
.orderList{
width: 272px;
height: 263px;
border: 1px solid #EDEFF3;
border-radius: 6px;
margin-top:10px;
display:flex;
flex-direction:column;
padding:16px 16px;
}
.total{
    background: #EDEFF3;
border-radius: 6px;
width: 235px;
height: 58px;
margin:0;
margin-top:85px;
display:flex;
flex-direction:column;
justify-content:center;
}
.totalamount{
    font-family: SFProDisplay;
font-size: 14px;
line-height: 18px;
letter-spacing: 0.366667px;
color: #8D9BA8;
opacity: 0.5;
margin-left:10px;
}
.totalamount2{
    font-family: SFProDisplay;
font-size: 20px;
line-height: 18px;
letter-spacing: 0.666667px;
color: #2D3A45;
margin-left:10px;
}
.input{
   height: 44px;
margin-top:5px;
border: 1px solid #EDEFF3;
outline:none;
padding-left:10px;
width: 272px;
border-radius: 6px;
}
.input1{
    width: 229px;
border-radius: 6px 0px 0px 6px;
}
.usr{
    border: 1px solid #EDEFF3;
box-sizing: border-box;
border-radius: 0px 6px 6px 0px;
width: 44px;
height: 44px;
display:flex;
align-items:center;
justify-content:center;
margin-top:5px;
}
.save{
    outline:none;
    border:none;
    background: #20D472;
border-radius: 4px;
width :118px;
height: 35px;
color:white;
margin-top:20px;
cursor:pointer;
}
`
Container.Item = styled.div`
list-style:none;
height: 30px;
background:${({ active }) => active && '#ffffff'} ;
box-shadow: ${({ active }) => active && `0px 2px 2px rgba(174, 176, 181, 0.314986)`};
display:flex;
align-items: center;
flex:1;
justify-content:center;
border-radius: 18px;
`
export const Wrapper = styled.div`
.items{
    display:flex;
    flex-direction:column;
    width:225px;
    height:180px;
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
border-radius: 6px;
margin-bottom:14px;
}
.images{
    border-radius:10px;
    height:116px;
}
.nmae{
    font-family: SFProDisplay;
font-size: 15px;
line-height: 16px;
/* identical to box height, or 123% */
color: #2D3A45;
}
.rus{
    font-family: SFProDisplay;
font-size: 13px;
line-height: 16px;
/* identical to box height, or 160% */


color: #8D9BA8;
}
.addmanu{
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    margin-top:10px;

}
.addButton{
    width: 70px;
height: 24px;
left: 935px;
top: 372px;
border:none;
outline:none;
color:white;
background: #20D472;
border-radius: 4px;
display:flex;
align-items:center;
justify-content:center;
cursor: pointer;
}
.countMenu{
    display:flex;
    flex-direction:row;
    width: 70px;
height: 24px;
border: 1px solid #EDEFF3;
border-radius: 4px;
align-items:center;
justify-content:space-around;
}
.minus{
    border:none;
    outline:none;
    background-color:white;
    font-size:25px;
    font-weight:400;
cursor: pointer;

}
.plus{
    border:none;
    outline:none;
    background-color:white;
    font-size:25px;
    font-weight:400;
cursor: pointer;
}

`
export const DeleteStyle = styled.div`
width: 36px;
height: 36px;
background: #EDEFF3;
border-radius: 18px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
`