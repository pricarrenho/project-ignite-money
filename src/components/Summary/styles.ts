import styled, { DefaultTheme, css } from "styled-components";
import { SummaryCardType } from "./types";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
`;

const WrapperModifier = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.gray[600]};
  `,

  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.green[700]};
  `,
};

type WrapperProps = {
  $styleType: SummaryCardType;
};

export const SummaryCard = styled.div<WrapperProps>`
  ${({ theme, $styleType }) => css`
    border-radius: 6px;
    padding: 2rem;

    ${$styleType && WrapperModifier[$styleType](theme)}
  `}
`;

export const HeaderSummaryCard = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.gray[300]};
  `}
`;

export const TitleSummaryCard = styled.span`
  ${() => css``}
`;

export const ValueSummaryCard = styled.strong`
  ${() => css`
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  `}
`;
