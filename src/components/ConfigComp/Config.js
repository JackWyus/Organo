import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 10px;

  position: absolute;
  z-index: 2;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #0D0000;
`

export const Title = styled.h2`
  margin-block: 50px;
  padding: 10px;

  color: white;
  border-bottom: 3px solid white;
`

export const GroupOptions = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 50px;
  /* background-color: aquamarine; */
  
  @media(min-width: 1024px){
    width: 50%;
  }

  .groupButtons{
    display: flex;
    margin-top: 80px;
    gap: 50px;

    > div:nth-child(1){
      padding-left: 0px;
      justify-content: center;
      border: none;
      background-color: #CA0606;

      :hover{
        background-color: #0D0000;
        border-bottom: 3px solid white;
      }
    }
    
    > div:nth-child(2){
      padding-left: 0px;
      justify-content: center;
      border: none;
      background-color: blue;

      :hover{
        background-color: #0D0000;
        border-bottom: 3px solid white;
      }
    }
  }

`