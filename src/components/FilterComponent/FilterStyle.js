import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #fafafa;
  padding: 0.6em;
`;

export const Car = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 2% 0;
  margin: 1.4em;
  border-radius: 15px;
  box-shadow: 0 0 6px #777;
`;
export const Image = styled.div`
  padding: 1.4em;
  display: flex;
  flex-direction: column;
  align-items: center;

  .gender {
    font-size: 1.7em;
    font-weight: 500;
  }

  .country {
    display: flex;
  }

  .color {
    display: flex;
    margin: 2em auto 0 auto;
  }
`;

export const P = styled.p`
  margin: 0 1em;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => (props.color ? props.color : "gray")};
`;

export const SelectDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
  margin: auto;

  select {
    padding: 0.7em;
    outline: none;
    border: 1px solid teal;
    border-radius: 10px;
  }
`;
