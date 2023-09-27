import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";
import * as S from "./styles";

export function Summary() {
  const summary = useSummary();

  return (
    <S.SummaryContainer>
      <S.SummaryCard $styleType={"primary"}>
        <S.HeaderSummaryCard>
          <S.TitleSummaryCard>Entradas</S.TitleSummaryCard>
          <ArrowCircleUp size={32} color="#00b37e" />
        </S.HeaderSummaryCard>

        <S.ValueSummaryCard>
          {priceFormatter.format(summary.income)}
        </S.ValueSummaryCard>
      </S.SummaryCard>

      <S.SummaryCard $styleType={"primary"}>
        <S.HeaderSummaryCard>
          <S.TitleSummaryCard>Saídas</S.TitleSummaryCard>
          <ArrowCircleDown size={32} color="#f75a68" />
        </S.HeaderSummaryCard>

        <S.ValueSummaryCard>
          {priceFormatter.format(summary.outcome)}
        </S.ValueSummaryCard>
      </S.SummaryCard>

      <S.SummaryCard $styleType={"secondary"}>
        <S.HeaderSummaryCard>
          <S.TitleSummaryCard>Total</S.TitleSummaryCard>
          <CurrencyDollar size={32} color="#fff" />
        </S.HeaderSummaryCard>

        <S.ValueSummaryCard>
          {priceFormatter.format(summary.total)}
        </S.ValueSummaryCard>
      </S.SummaryCard>
    </S.SummaryContainer>
  );
}
