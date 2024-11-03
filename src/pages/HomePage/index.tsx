import { Button } from '@/components/uiComponents';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const { t } = useTranslation('home-page');
    const navigate = useNavigate();
    return (
        <main className="flex flex-col items-start justify-center gap-12 p-4 mx-auto md:w-6/12 ">
            <h1 className="flex justify-center w-full text-4xl font-bold text-transparent bg-purple-gradient bg-clip-text">
                {t('title')}
            </h1>
            <article className="flex flex-col items-start justify-center w-full text-lg text-justify">
                {t('description')}
            </article>
            <div className="flex flex-col items-center w-full gap-4 mx-auto mt-4 md:w-full md:justify-center md:flex-row">
                <Button onClick={() => navigate('/play')}>
                    {t('start')}
                </Button>
            </div>
        </main>
    );
};