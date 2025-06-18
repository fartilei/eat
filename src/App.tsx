import { Route, Routes, Outlet } from "react-router-dom";
import IndexPage from "@/pages";
import CartPage from "@/pages/cart";
import UserPage from "@/pages/user";
import LoginTelegramPage from "@/pages/loginTelegram";
import { CartProvider } from "@/CartProvider";
import { MainLayout } from "@/layouts/MainLayout";
//import ProtectedRoute from "@/components/ProtectedRoute";
import DefaultLayout from "@/layouts/default";

function App() {
    return (
        <CartProvider>
            <Routes>
                <Route path="/login" element={<LoginTelegramPage />} />
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<IndexPage />} />
                </Route>
                <Route
                    path="/"
                    element={
                        <DefaultLayout>
                            <Outlet />
                        </DefaultLayout>
                    }
                >
                    <Route path="cart" element={
                        //<ProtectedRoute>
                            <CartPage />
                        //</ProtectedRoute>
                    } />
                    <Route path="user" element={
                        //<ProtectedRoute>
                            <UserPage />
                        //</ProtectedRoute>
                    } />
                </Route>
            </Routes>
        </CartProvider>
    );
}

export default App;