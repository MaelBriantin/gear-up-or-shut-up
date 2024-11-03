import { capitalize } from "@/utils";
import { LanguageType } from "@/types";

type LanguageOptionProps = {
    option: string;
    actualLanguage: string;
    setLanguage: (language: string) => void;
};

export const LanguageOption = (props: LanguageOptionProps) => {
    const { option, setLanguage, actualLanguage } = props;
  
    return (
        <div 
          onClick={() => setLanguage(option as LanguageType)} key={option} 
          className={`user-select-none ${actualLanguage !== option ? 'cursor-pointer hover:opacity-75' : 'pointer-events-none cursor-default'}`}
        >
          <span 
            className={option === actualLanguage ? 'opacity-1' : 'opacity-0'}>[</span>{capitalize(option)}<span className={option === actualLanguage ? 'opacity-1' : 'opacity-0'}>]
          </span>
        </div>
    )
}