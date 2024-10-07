import { LanguageSelector } from "../LanguageSelector";
import { ThemeSelector } from "../ThemeSelector";

export const SettingsInterface = () => {
    return (
        <div 
            className="
                flex 
                flex-col
                gap-2
                justify-center
                items-end
                w-full 
                fixed
                top-2
                right-2
                md:top-4
                md:right-4
                md:flex-row
                md:justify-end
                md:items-center
                md:gap-4
        ">
            <ThemeSelector />
            <LanguageSelector />
        </div>
    );
}