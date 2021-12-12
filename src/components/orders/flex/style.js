import styled from "styled-components"
export const Container = styled.div`
display:flex;
flex-direction:row;
overflow-x:scroll;
margin-top:20px;
margin-left:15px;
`
export const Column = styled.div`
margin-left:20px;
width:234px;
display:flex;
flex-direction:column;
justify-content:flex-start;
margin-bottom:15px;
.littleCircle {
  margin: 0;
  width: 10px;
  height: 10px;
  background-color: rgba(20, 229, 228, 1);
  border-radius: 50%;
  margin-right: 8px;
}
.bigCircle {
  margin: 0;
  width: 14px;
  height: 14px;
  background-color: rgba(20, 229, 228, 1);
  border-radius: 50%;
  margin-right: 38px;
  margin-left: 16px;
}
.ordnum {
  margin-left: 16px;
  margin-top: 18px;
}
.x {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(237, 239, 243, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-top: 20px;
  position: relative;
  background-color: white;
  left: 88px;
}
.x:hover {
  cursor: pointer;
}
.tick {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(237, 239, 243, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-top: 80px;
  position: relative;
  left: 25px;
  background-color: white;
}
.tick:hover {
  cursor: pointer;
}

`
export const Wrapper = styled.div`
display:flex;
flex-direction:column;
/* margin-bottom:100px; */
`



//DRAWER
export const Container2 = styled.div`
.x {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(237, 239, 243, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
  cursor:pointer;
  margin-right:30px;
}
.tick {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(237, 239, 243, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
  cursor:pointer;
  
}
`
Container2.Col1 = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:space-between;
    padding:40px;
    padding-bottom: 20px;
    width:100%;
`
Container2.Clock = styled.div`

    margin-left: 30px;
    /* margin-top: 25px; */
    display: flex;
    align-items: center;
        
`
Container2.Customer = styled.div`
    width:318px;
    height:93px;
    border-radius:6px;
    margin:0 auto;
    display: flex;
    align-items: center;
    background-color: #EDEFF3;
`
Container2.CustomerInfo = styled.div`
display:flex;
flex-direction:column;
align-items:start;
margin-left:15px;


`
Container2.FoodCenter = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
margin-top:30px;
font-size:20px;
border-bottom:1px solid rgb(230,230,230);
margin-left:40px;
margin-right:40px;
padding-bottom:25px;
margin-bottom:45px;
`
Container2.OrderInfo = styled.div`
width:100%;
height:35px;
padding-left:50px;
position: absolute;
background-color: #F9FAFB;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
display:flex;
flex-direction: row;
align-items:center;

`
Container2.OrderedFood = styled.div`
display:flex;
flex-direction: column;
width:1005;
height:fit-content;
margin-top:100px;
padding-left:50px;
`
Container2.Total = styled.div`
width: 318px;
height: 120px;
background: #EDEFF3;
opacity: 0.5;
border-radius: 6px;
margin: 0 auto;
margin-top:50px;
display:flex;
flex-direction:row;
justify-content:space-around;
padding-top:25px;
padding-left:20px;
`
Container2.Circle = styled.div`
width:12px;
height:12px;
border-radius:50%;
margin-right: 10px;
background: #14E5E4;
`