import { useState, useEffect, useRef } from "react";
import { LanguageSelector } from "../LanguageSelector";
import { ThemeSelector } from "../ThemeSelector";
import { OptionsInterfaceButton } from "./OptionsInterfaceButton";

export const OptionsInterface = () => {
    const [displayOptions, setDisplayOptions] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const translateMobile = displayOptions ? 'translate-x-0' : 'translate-x-[200%]';
    const translateDesktop = displayOptions ? 'md:translate-y-0 md:translate-x-0' : 'md:-translate-y-[200%] md:translate-x-0';

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setDisplayOptions(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [containerRef]);

    return (
        <div
            ref={containerRef}
            className="fixed flex flex-col-reverse items-end justify-center w-full gap-2 top-2 right-2 md:top-4 md:right-4 md:flex-row md:justify-end md:items-center md:gap-4">
            <div className={`flex flex-col items-end gap-2 transform transition-transform duration-300 ${translateMobile} ${translateDesktop} md:flex-row md:gap-4`}>
                <ThemeSelector />
                <LanguageSelector />
            </div>
            <OptionsInterfaceButton displayOptions={displayOptions} setDisplayOptions={setDisplayOptions} />
        </div>
    );
}