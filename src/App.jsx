import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Account from "./pages/Account.jsx";
import Bookings from "./pages/Bookings.jsx";
import Cabins from "./pages/Cabins.jsx";
import Users from "./pages/Users.jsx";
import Settings from "./pages/Settings.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Login from "./pages/Login.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Navigate replace to="dashboard"/>}></Route>
                <Route path="dashboard" element={<Dashboard/>}></Route>
                <Route path="account" element={<Account/>}></Route>
                <Route path="booking" element={<Bookings/>}></Route>
                <Route path="cabins" element={<Cabins/>}></Route>
                <Route path="login" element={<Login/>}></Route>
                <Route path="users" element={<Users/>}></Route>
                <Route path="settings" element={<Settings/>}></Route>
                <Route path="*" element={<PageNotFound/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;