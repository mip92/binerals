import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@material-ui/core";
import {createTheme} from "@material-ui/core";
import MyRoutes from "../MyRoutes/MyRoutes";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#ffe0b2',
        },
        secondary: {
            main: '#f57c00',
        },

    },

});

const App: FC = observer(() => {
        return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <MyRoutes/>
                </BrowserRouter>
            </ThemeProvider>
        );
    }
)

export default App;
