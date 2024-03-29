import styled from "styled-components"
export const Container = styled.div`
${'' /* position:sticky;
top:0;
overflow:auto; */}
.nobody {
  display: flex;
  flex-direction: column;
  /* position:fixed; */

}
.nav {
  display: flex;
}
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
}
.searchbar {
  width: 857px;
  height: 80px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items:center;
  padding:0;
}
.searchInput {
  width: 300px;
  height: 48px;
  margin-left: 48px;
  margin-top: 0;
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
  margin-top: 0;
  margin-left: 10px;
  border-radius: 50%;
  border: 7px solid #edeff3;
  width: 46px;
  height: 46px;
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
.p1 {
  margin-left: 56px;
}
.categories .category {
  width: 172.5px;
  height: 22px;
  border-right: 1px solid #8d9ba8;
}
.p2 {
  margin-left: 12px;
}
.cost {
  width: 160px;
  height: 22px;
  border-right: 1px solid #8d9ba8;
}
.p3 {
  margin-left: 11.5px;
}
.add {
  width: 250px;
  height: 22px;
  border-right: 1px solid #8d9ba8;
}
.p4 {
  margin-left: 11.5px;
}
.action {
  width: 197.5px;
  height: 22px;
}
.p5 {
  margin-left: 11.5px;
}

`