import { ThemeToggle } from "@/components/ThemeToggle";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <main className="main-layout">
            <ThemeToggle />
            <Outlet />
        </main>
    );
}