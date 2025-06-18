import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {Provider as ReduxProvider} from "react-redux";
import App from "./App.tsx";
import {Provider} from "./provider.tsx";
import "@/styles/globals.css";
import {store} from "@/store";
import { AuthProvider } from "./AuthProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ReduxProvider store={store}>
            <Provider>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </Provider>
        </ReduxProvider>
    </BrowserRouter>,
);
