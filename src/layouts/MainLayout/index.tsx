import { LanguageSelector, ThemeSelector } from "@/components";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <main className="relative flex flex-col items-center justify-center h-screen w-full font-mono bg-background text-text">
            <ThemeSelector />
            <LanguageSelector />
            <Outlet />
        </main>
    );
}