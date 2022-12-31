import styled from "styled-components";

export const CardComp = styled.div`
  width: 250px;


  display: flex;
  flex-direction: column;
  gap: 35px;
  justify-content: center;

  border-radius: 5px;
  background-color: black;

  div:nth-of-type(1){
    border-radius: 5px 5px 0px 0px;
    width: 100%;
    height: 45px;
    background-color: white;
  }


`

export const UserData = styled.div`
  text-align: center;
  margin-bottom: 20px;

  .Photo_User{
    width: 130px;
    margin-bottom: 15px;
    border-radius: 50%;
  }
`


