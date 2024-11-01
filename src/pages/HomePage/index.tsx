import { Button } from '@components';
import { useData } from '@hooks';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const HomePage = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    return (
        <main className="flex flex-col items-start justify-center gap-12 p-4 mx-auto md:w-6/12">
            <h1 className="flex justify-center w-full text-4xl font-bold">
                {useData('home.title')}
            </h1>
            <h2 className="flex items-center justify-start w-full text-2xl underline">
                {useData('home.subtitle')}
            </h2>
            <article className="flex flex-col items-start justify-center w-full text-justify">
                <p className="text-lg">{useData('home.paragraphs.1')}</p>
                <p className="text-lg">{useData('home.paragraphs.2')}</p>
            </article>
            <div className="flex flex-col items-center w-full gap-4 mx-auto mt-4 md:w-full md:justify-center md:flex-row">
                <Button onClick={() => navigate('/play')} className='w-40'>
                    Berzerker
                </Button>
                <Button 
                    onClick={() => setLoading(!loading)} 
                    loading={loading} 
                    className='w-40 bg-purple-900'
                >
                    Wizard
                </Button>
                <Button onClick={() => {}}  
                    className='w-40 bg-green-900'
                >
                    Rogue
                </Button>
            </div>
        </main>
    );
};