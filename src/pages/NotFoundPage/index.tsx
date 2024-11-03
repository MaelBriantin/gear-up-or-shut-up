import { Button } from "@/components/uiComponents";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { randomNumber } from "@utils";
import { useEffect, useState } from "react";

export const NotFoundPage = () => {
    const { t } = useTranslation('ui');
    const navigate = useNavigate();
    const [phraseNumber, setPhraseNumer] = useState(0);
    useEffect(() => {
        setPhraseNumer(randomNumber(1, 4));
    }, []);
    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4 mx-auto">
            <h1 className="text-4xl font-bold">
                {t('not_found.title')}
            </h1>
            <p className="text-lg italic">
                {t(`not_found.text.${phraseNumber}`)}
            </p>
            <Button onClick={() => navigate('/')} className="mt-10">
                {t('button.go_home')}
            </Button>
        </div>
    );
}