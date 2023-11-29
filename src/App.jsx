import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Account from "./pages/Account.jsx";
import Bookings from "./pages/Bookings.jsx";
import Cabins from "./pages/Cabins.jsx";
import Users from "./pages/Users.jsx";
import Settings from "./pages/Settings.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Login from "./pages/Login.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import GlobalStyles from "./styles/GlobalStyled.js";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClinet = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
        }
    }
});


function App() {
    return (
        <QueryClientProvider client={queryClinet}>
            <ReactQueryDevtools initialIsOpen={false}/>
            <GlobalStyles/>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Navigate replace to="dashboard"/>}></Route>
                    <Route element={<AppLayout/>}>
                        <Route path="dashboard" element={<Dashboard/>}></Route>
                        <Route path="account" element={<Account/>}></Route>
                        <Route path="booking" element={<Bookings/>}></Route>
                        <Route path="cabins" element={<Cabins/>}></Route>
                        <Route path="users" element={<Users/>}></Route>
                        <Route path="settings" element={<Settings/>}></Route>
                    </Route>
                    <Route path="login" element={<Login/>}></Route>
                    <Route path="*" element={<PageNotFound/>}></Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>

    );
}

export default App;