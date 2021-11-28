import styled from "styled-components"
export const Container = styled.div`
display:flex;
flex-direction:column;
`
export const NavBody = styled.div`
  display: flex;
  flex-direction: column;
  .addnews {
  width: 205px !important;
  height: 80px !important;
  margin: 0 2px 20px 2px !important;

  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  background-color: white !important;
}
.myplus {
  width: 36px;
  height: 36px;
  border: 1px solid;
  border-radius: 50%;
  background-color: #20d472;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  margin-left: 36px;

  /* margin-right: 14px; */
  /* margin: 22px; */
}
.myplus:hover {
  cursor: pointer;
}
.addnews p {
  width: fit-content;
  position: relative !important;
  margin: 0;
  right: -14px !important;
  /* margin-left: 14px; */
  width:100px;
}
.togglebar {
  width: 686px;
  height: 80px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.sorts {
  width: 591px;
  height: 48px;
  background-color: #edeff3;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 6px;
  padding-right: 6px;
}
.item { 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex:1;
  font-size: 14px;
  color: #2d3a45;
  opacity: 40%;
  border:none;
}
.item:hover {
  background-color: white;
  width: 150px;
  height: 36px;
  border-radius: 18px;
  opacity: unset;
  color: black;
  cursor: pointer;
}
.twosomeplace {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 169px;
  height: 80px;
  background-color: white;
  margin-left: 2px;
}
.inside {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 77px;
  height: 48px;
  border-radius: 30px;
  padding-left: 6px;
  padding-right: 6px;
  background-color: #edeff3;
}
.first {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  cursor: pointer;
}
.vert1 {
  width: 14px;
  height: 6px;
  border: 1px solid #8d9ba8;
  border-radius: 3px;
}
.background-white {
  background-color: white;
}
.first:hover {
  background-color: white;
}
.first:hover .vert1 {
  background-color: #8d9ba8;
}
.background-black {
  background-color: #8d9ba8;
}
.marg {
  margin-bottom: 2px;
}
.second {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  cursor: pointer;
}
.hor1 {
  width: 6px;
  height: 14px;
  border: 1px solid #8d9ba8;
  border-radius: 3px;
}
.hor2 {
  width: 6px;
  height: 10px;
  border: 1px solid #8d9ba8;
  border-radius: 3px;
  margin-left: 2px;
  position: relative;
  top: -2px;
}
.second:hover {
  background-color: white;
}

.second:hover .hor1 {
  background-color: #8d9ba8;
}
.second:hover .hor2 {
  background-color: #8d9ba8;
}

.activeMe-true {
  background-color: white;
  width: 150px;
  height: 36px;
  border-radius: 18px;
  opacity: unset;
  color: black;
}
`
NavBody.Item = styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 162px;
height: 36px;
left: 563px;
top: 22px;
background:${({ active }) => active && '#ffffff'} ;
box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
border-radius: 18px;
cursor:pointer;
`
export const Wrapper = styled.div`

`