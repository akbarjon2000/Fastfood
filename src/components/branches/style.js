import styled from 'styled-components'

export const Container = styled.div`

`
export const Wrapper = styled.div`
display:flex;
flex-direction:column;

`
Wrapper.Obj = styled.div`
width:992px;
height:60px;
border-radius:6px;
background-color:white;
display:flex;
flex-direction:row;
margin-bottom:8px;
margin-left:38px; 
align-items:center;
font-size:15px;  
`
Wrapper.Action = styled.div`
display:flex;
flex-direction:row;
flex:1.1;
`
Wrapper.Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 4px solid #edeff3;
  border-radius: 50%;

`
Wrapper.Edit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 4px solid #edeff3;
  border-radius: 50%;
margin-left:31px;
`
Wrapper.Delete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 4px solid #edeff3;
  border-radius: 50%;
margin-left:31px;

`