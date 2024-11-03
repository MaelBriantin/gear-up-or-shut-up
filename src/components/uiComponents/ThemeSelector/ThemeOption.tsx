import { useData } from "@/hooks";

type ThemeOptionProps = {
    option: 'dark' | 'light' | 'system';
    theme: 'dark' | 'light' | 'system';
    setTheme: (theme: 'dark' | 'light' | 'system') => void;
  }

export const ThemeOption = (props: ThemeOptionProps) => {
    const { option, theme, setTheme } = props;
    return (
        <div
            onClick={() => setTheme(option)}
            key={option} 
            className={`${theme !== option ? 'cursor-pointer hover:opacity-75' : 'cursor-default'}`}
        >
            <span className={option === theme ? 'opacity-1' : 'opacity-0'}>[</span>
            {useData(`ui.theme.${option}`)}
            <span className={option === theme ? 'opacity-1' : 'opacity-0'}>]</span>
        </div>
    );
};