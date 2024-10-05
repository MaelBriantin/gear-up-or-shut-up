import { useLanguageStore } from '@/stores';
import { capitalize } from '@/utils';

export const LanguageSelector = () => {
  const { language, languageOptions, setLanguage } = useLanguageStore();

return (
    <div
      className={`
        bg-backgroundReverse text-textReverse
        flex justify-between items-center absolute top-16 right-4 px-4 py-2 rounded-[4px] text-sm gap-6
      `}
    >
      {languageOptions.map((option) => (
        <div 
          onClick={() => setLanguage(option)} key={option} 
          className={`user-select-none ${language !== option ? 'cursor-pointer hover:opacity-75' : 'pointer-events-none cursor-default'}`}
        >
          <span className={option === language ? 'opacity-1' : 'opacity-0'}>[</span>{capitalize(option)}<span className={option === language ? 'opacity-1' : 'opacity-0'}>]</span>
        </div>
      ))}
    </div>
);

};