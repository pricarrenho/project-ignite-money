import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.gray[900]};
    padding: 2.5rem 0 7.5rem;
  `}
`;

export const HeaderContent = styled.div`
  ${() => css`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const Image = styled.img``;
