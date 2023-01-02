import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { Button } from "./components/Button";

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <h1>Sis-Pomodoro</h1>
            <Button />
            <Button />
            <Button />
            <Button />
        </ThemeProvider>
    );
}
