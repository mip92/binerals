import React, {FC} from 'react';
import {observer} from "mobx-react-lite";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Login/Login";
import {ThemeProvider} from "@material-ui/core";
import {createTheme} from "@material-ui/core";

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
                        <Routes>
                            <Route path='/' element={<Main/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
        );
    }
)

export default App;
