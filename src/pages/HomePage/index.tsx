import { Button } from '@/components/Button';
import home from './data.json';

export const HomePage = () => {
    return (
        <main className="flex flex-col items-start justify-center h-screen gap-12 w-2/5 mx-auto p-4">
            <h1 className="text-4xl w-full font-bold flex justify-center">
                {home.title}
            </h1>
            <h2 className="text-2xl w-full flex justify-start items-center underline">
                {home.subtitle}
            </h2>
            <article className="flex flex-col w-full justify-center items-start">
            {
                home.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-lg">
                        {paragraph}
                    </p>
                ))
            }
            </article>
            <div className="w-full flex gap-4 justify-center mt-4">
                <Button onClick={() => {}} >
                    Normal
                </Button>
                <Button onClick={() => {}} loading >
                    Loading
                </Button>
                <Button onClick={() => {}} disabled >
                    Disabled
                </Button>
            </div>
        </main>
    );
};