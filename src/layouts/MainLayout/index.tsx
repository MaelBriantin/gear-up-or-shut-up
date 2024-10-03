import { ThemeSelector } from "@/components/ThemeSelector";
import { Outlet } from "react-router-dom";
import './index.css';

export const MainLayout = () => {
    return (
        <main className="main-layout">
            <ThemeSelector />
            <Outlet />
        </main>
    );
}