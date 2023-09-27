import styled, { DefaultTheme, css } from "styled-components";
import { TransactionTypeButtonProps } from "./types";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const NewTransactionButton = styled.button`
  ${({ theme }) => css`
    height: 50px;
    border: 0;
    background: ${theme.colors.green[500]};
    color: ${theme.colors.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: ${theme.colors.green[700]};
      transition: background-color 0.2s;
    }
  `}
`;

export const Overlay = styled(Dialog.Overlay)`
  ${() => css`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
  `}
`;

export const Content = styled(Dialog.Content)`
  ${({ theme }) => css`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background: ${theme.colors.gray[800]};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;

export const NewTransactionModalForm = styled.form`
  ${() => css`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `}
`;

export const NewTransactionModalInput = styled.input`
  ${({ theme }) => css`
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

export const NewTransactionModalBtn = styled.button`
  ${({ theme }) => css`
    height: 50px;
    border: 0;
    background: ${theme.colors.green[500]};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    margin-top: 1.25rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:hover {
      background: ${theme.colors.green[700]};
    }
  `}
`;

export const CloseButton = styled(Dialog.Close)`
  ${({ theme }) => css`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0;
    cursor: pointer;
    color: ${theme.colors.gray[500]};
  `}
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

const WrapperModifierIcon = {
  income: (theme: DefaultTheme) => css`
    color: ${theme.colors.green[300]};
  `,

  outcome: (theme: DefaultTheme) => css`
    color: ${theme.colors.red[300]};
  `,
};

const WrapperModifierBackground = {
  income: (theme: DefaultTheme) => css`
    background: ${theme.colors.green[500]};
  `,

  outcome: (theme: DefaultTheme) => css`
    background: ${theme.colors.red[500]};
  `,
};

type WrapperProps = {
  $styleType: TransactionTypeButtonProps;
};

export const TransactionTypeButton = styled(RadioGroup.Item)<WrapperProps>`
  ${({ theme, $styleType }) => css`
    background: ${theme.colors.gray[700]};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    border: 0;
    color: ${theme.colors.gray[300]};

    svg {
      ${$styleType && WrapperModifierIcon[$styleType](theme)}
    }

    &[data-state="unchecked"]:hover {
      transition: background-color 0.2s;
      background: ${theme.colors.gray[600]};
    }

    &[data-state="checked"] {
      color: ${theme.colors.white};

      svg {
        color: ${theme.colors.white};
      }

      ${$styleType && WrapperModifierBackground[$styleType](theme)}
    }
  `}
`;
