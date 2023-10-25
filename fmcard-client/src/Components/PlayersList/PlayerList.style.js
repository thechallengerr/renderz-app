import styled from 'styled-components';

export const LastestPlayers = styled.div`
  padding: 16px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(90px, auto);
  grid-gap: 16px; 
`

export const Left = styled.div`
  background: url(https://assets-prod.frzdb.net/img/f76a4c0.jpg) 50% no-repeat;
  background-size: cover;
  padding: 5rem;
`
export const Container = styled.div`
    box-sizing:border-box;
    width:100%;
    padding:16px 32px;
    display:flex;
    align-items: center;
    justify-content:space-between;
    flex-direction: column;
    box-shadow: 0 4px 25px 0 rgba(0,0,0,.1);
    flex-flow:wrap;
    position: relative;
`