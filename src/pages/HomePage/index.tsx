import { Button } from '@components';
import { useData } from '@hooks';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const HomePage = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    return (
        <main className="flex flex-col items-start justify-center gap-12 mx-auto p-4 md:w-6/12">
            <h1 className="text-4xl w-full font-bold flex justify-center">
                {useData('home.title')}
            </h1>
            <h2 className="text-2xl w-full flex justify-start items-center underline">
                {useData('home.subtitle')}
            </h2>
            <article className="flex flex-col w-full justify-center items-start text-justify">
                <p className="text-lg">{useData('home.paragraphs.1')}</p>
                <p className="text-lg">{useData('home.paragraphs.2')}</p>
            </article>
            <div className="
                md:w-full 
                flex 
                gap-4 
                md:justify-center
                items-center
                mx-auto
                w-full
                mt-4 
                md:flex-row 
                flex-col
            ">
                <Button onClick={() => navigate('/play')}>
                    {useData('ui.button.play')}
                </Button>
                <Button 
                    onClick={() => setLoading(!loading)} 
                    loading={loading} 
                    className='w-32' 
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