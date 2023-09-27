import { ThemeProvider } from "styled-components";
import { themeDefault } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { TransactionsProvider } from "./contexts/TransactionsContext";

export function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}
