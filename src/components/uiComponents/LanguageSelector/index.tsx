import { InterfaceOptionContainer } from '@/components/uiComponents';
import { useLanguageStore } from '@/stores';
import { LanguageOption } from './LanguageOption';

export const LanguageSelector = () => {
  const { languageOptions } = useLanguageStore();

return (
    <InterfaceOptionContainer>
      {languageOptions.map((option) => (
        <LanguageOption key={option} option={option} />
      ))}
    </InterfaceOptionContainer>
);

};