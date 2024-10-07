import { SettingsInterface } from "@/components/SettingsInterface";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
    return (
        <main className="
            relative 
            flex flex-col 
            items-center 
            justify-center 
            h-screen 
            w-full 
            font-mono 
            bg-background 
            text-text
        ">
            <SettingsInterface />
            <Outlet />
        </main>
    );
}