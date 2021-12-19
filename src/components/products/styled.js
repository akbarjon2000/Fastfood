import styled from "styled-components"

export const Container = styled.div`    
height:100vh;

.base {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 38px;
  margin-bottom: 10px;
  width: 992px;
  height: 60px;
  background-color: white;
  border-radius: 6px;
  font-size: 13px;
  color: #2d3a45;
}
.foodIcon {
  width: 86px;
  /* padding-left: 18px; */
  display: flex;
  flex-direction: row;
  align-items: center;
}
.foodIcon1 {
  margin-left: 18px;
}
.meal {
  width: 156px;
  margin-left: 28px;
}
.mycategories {
  width: 170px;
}
.mycategories1 {
  margin-left: 13px;
}
.costtext {
  width: 160px;
}
.costtext1 {
  margin-left: 18.5px;
}
.info {
  width: 250px;
}
.info1 {
  margin-left: 20.5px;
}
.actions {
  width: 152.5px;
  display: flex;
  flex-direction: row;
}
.editbtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 4px solid #edeff3;
  border-radius: 50%;
  margin-left: 25px;
}
.deletebtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 4px solid #edeff3;
  border-radius: 50%;
  margin-left: 15px;
}
.menu{
  margin-top:300px;
}
.addd {
  width: 992px;
  height: 40px;
  border: 1px solid #8d9ba84a;
  margin-top: 8px;
  margin-left: 38px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
}
.delete-true {
  display: none;
}

.heartbeat:hover {
  -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
  animation: heartbeat 1.5s ease-in-out infinite both;
}
@-webkit-keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
@keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
    transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
    transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
    transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
`


export const Restore = styled.button`
width:992px;
height:60px;
margin-left:38px;
margin-bottom:15px;
border-radius:6px;
border:none;
outline:unset;
color:white;
font-size:20px;
background-color:orange;
:hover{
    box-shadow: 0px 5px 15px #B0B1B56E;
    cursor:pointer;
}
`
export const Base = styled.div`
height:100vh;

`