import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #fff;

  padding: 25px;

  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);

  h1 {
    color: #555555;
  }

  @media (max-width: 360px) {
    flex-direction: column;
    gap: 10px;
  }

  .flex {
    display: flex;
    gap: 10px;
  }
  `
