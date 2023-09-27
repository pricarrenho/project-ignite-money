import styled, { css } from "styled-components";

export const SearchFormContainer = styled.form`
  ${() => css`
    display: flex;
    gap: 1rem;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${theme.colors.gray[900]};
    color: ${theme.colors.gray[300]};
    padding: 1rem;

    &::placeholder {
      color: ${theme.colors.gray[500]};
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${theme.colors.green[300]};
    color: ${theme.colors.green[300]};
    font-weight: bold;
    border-radius: 6px;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${theme.colors.green[500]};
      border-color: ${theme.colors.green[500]};
      color: ${theme.colors.white};
    }
  `}
`;
