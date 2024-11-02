import { Button } from '@components';
import { useData } from '@hooks';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const navigate = useNavigate();
    return (
        <main className="flex flex-col items-start justify-center gap-12 p-4 mx-auto md:w-6/12">
            <h1 className="flex justify-center w-full text-4xl font-bold">
                {useData('home.title')}
            </h1>
            <article className="flex flex-col items-start justify-center w-full text-justify">
                <p className="text-lg">{useData('home.paragraphs.1')}</p>
                <p className="text-lg">{useData('home.paragraphs.2')}</p>
            </article>
            <div className="flex flex-col items-center w-full gap-4 mx-auto mt-4 md:w-full md:justify-center md:flex-row">
                <Button onClick={() => navigate('/play')}>
                    Start the Game
                </Button>
            </div>
        </main>
    );
};