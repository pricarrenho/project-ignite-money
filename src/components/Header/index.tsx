import logoImg from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";
import * as S from "./styles";

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.Image src={logoImg} alt="" />

        <NewTransactionModal />
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
