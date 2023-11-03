import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    display: flex;
    align-items: center;
    gap: 5px;

    font-size: 1.3rem;
    font-weight: 500;

    button {
      border: none;
      background: transparent;
      display: flex;
      align-items: center;
    }
  }
`
