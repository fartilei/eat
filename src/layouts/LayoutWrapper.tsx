import React, { useState } from "react";
import DefaultLayout from "@/layouts/default";
import { useLocation, Outlet } from "react-router-dom";

export const LayoutWrapper = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const location = useLocation();

    const showSearch = location.pathname === "/";

    return (
        <DefaultLayout
            searchQuery={showSearch ? searchQuery : undefined}
            setSearchQuery={showSearch ? setSearchQuery : undefined}
        >
            <Outlet />
        </DefaultLayout>
    );
};