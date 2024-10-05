import { Button } from '@components';
import { useData } from '@hooks';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const HomePage = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    return (
        <main className="flex flex-col items-start justify-center h-screen gap-12 w-2/5 mx-auto p-4">
            <h1 className="text-4xl w-full font-bold flex justify-center">
                {useData('home.title')}
            </h1>
            <h2 className="text-2xl w-full flex justify-start items-center underline">
                {useData('home.subtitle')}
            </h2>
            <article className="flex flex-col w-full justify-center items-start">
                <p className="text-lg">{useData('home.paragraphs.1')}</p>
                <p className="text-lg">{useData('home.paragraphs.2')}</p>
            </article>
            <div className="w-full flex gap-4 justify-center mt-4">
                <Button onClick={() => navigate('/play')}>
                    {useData('ui.button.play')}
                </Button>
                <Button 
                    onClick={() => setLoading(!loading)} 
                    loading={loading} 
                    className='w-28' 
                >
                    {useData('ui.button.loading')}
                </Button>
                <Button onClick={() => {}} 
                    disabled 
                >
                    {useData('Sword of Damocles')}
                </Button>
            </div>
        </main>
    );
};