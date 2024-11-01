import { OptionsInterface } from "@/components/OptionsInterface";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <main className="relative flex flex-col items-center justify-center w-full h-screen font-mono text-black bg-white dark:bg-zinc-900 dark:text-white">
            <OptionsInterface />
            <Outlet />
        </main>
    );
}