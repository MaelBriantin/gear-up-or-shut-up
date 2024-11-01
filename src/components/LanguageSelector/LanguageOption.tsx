import { capitalize } from "@/utils";
import { useLanguageStore } from "@/stores/languageStore";
import { LangType } from "@/types/LangType";

type LanguageOptionProps = {
    option: string;
};

export const LanguageOption = (props: LanguageOptionProps) => {
    const { language, setLanguage } = useLanguageStore();
    const { option } = props;
    return (
        <div 
          onClick={() => setLanguage(option as LangType)} key={option} 
          className={`user-select-none ${language !== option ? 'cursor-pointer hover:opacity-75' : 'pointer-events-none cursor-default'}`}
        >
          <span 
            className={option === language ? 'opacity-1' : 'opacity-0'}>[</span>{capitalize(option)}<span className={option === language ? 'opacity-1' : 'opacity-0'}>]
          </span>
        </div>
    )
}