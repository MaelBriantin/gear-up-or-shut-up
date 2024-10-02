import useThemeStore from "@/stores/themeStore";
import { capitalize } from "@utils";

export const HomePage = () => {
    const { theme } = useThemeStore();

    return (
        <h1>
            {capitalize(theme)} / Home Page
        </h1>
    );
};