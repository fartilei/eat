import { useState } from "react";
import { Outlet } from "react-router-dom";
import DefaultLayout from "@/layouts/default";

export const MainLayout = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <DefaultLayout searchQuery={searchQuery} setSearchQuery={setSearchQuery}>
            <Outlet />
        </DefaultLayout>
    );
};