import styled from "styled-components"
export const Container = styled.div`
display:flex;
flex-direction:row;
overflow:hidden;
`
export const Column = styled.div`
margin-left:38px;
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