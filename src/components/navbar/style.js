import styled from "styled-components";

export const NavBody = styled.div`
display: flex;
flex-direction: column;

.searchbar {
  width: 857px;
  height: 80px;
  background-color: white;
  display: flex;
  flex-direction: row;
}
.searchInput {
  width: 300px;
  height: 48px;
  margin-left: 48px;
  margin-top: 16px;
  border-radius: 24px;
  background-color: #edeff3;
  border: unset;
  outline: unset;
  padding-left: 22px;
}
.searchbtn {
  position: relative;
  left: -45px;
  top: 5px;
  border: unset;
  cursor: pointer;
  width: 16px;
  height: 16px;
}
.filter {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-left: 10px;
  border-radius: 50%;
  border: 7px solid #edeff3;
  width: 36px;
  height: 36px;
}
.categories {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1066px;
  height: 36px;
  background-color: white;
  font-size: 11px;
  color: #2d3a45;
  font-weight: 700;
  margin-bottom: 20px;
}
.categories .product {
  width: 282px;
  height: 22px;
  border-right: 1px solid #8d9ba8;
}
.product p1 {
  margin-left: 56px;
}
.categories .category {
  width: 172.5px;
  height: 22px;
  border-right: 1px solid #8d9ba8;
}
.category p2 {
  margin-left: 12px;
}
.cost {
  width: 160px;
  height: 22px;
  border-right: 1px solid #8d9ba8;
}
.cost p3 {
  margin-left: 11.5px;
}
.add {
  width: 250px;
  height: 22px;
  border-right: 1px solid #8d9ba8;
}
.add p4 {
  margin-left: 11.5px;
}
.action {
  width: 197.5px;
  height: 22px;
}
.action p5 {
  margin-left: 11.5px;
}

`