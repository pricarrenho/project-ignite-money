import styled, { DefaultTheme, css } from "styled-components";
import { PriceHighlightProps } from "./types";

export const TransactionsContainer = styled.main`
  ${() => css`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
  `}
`;

export const TransactionsTable = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    td {
      padding: 1.25rem 2rem;
      background: ${theme.colors.gray[700]};

      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  `}
`;

const WrapperModifier = {
  income: (theme: DefaultTheme) => css`
    color: ${theme.colors.green[300]};
  `,

  outcome: (theme: DefaultTheme) => css`
    color: ${theme.colors.red[300]};
  `,
};

type WrapperProps = {
  $styleType: PriceHighlightProps;
};

export const PriceHighlight = styled.span<WrapperProps>`
  ${({ theme, $styleType }) => css`
    ${$styleType && WrapperModifier[$styleType](theme)}
  `}
`;
