import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import data from './data.json';

export const NotFoundPage = () => {

    const catchRandomPhrase = () => {
        const randomIndex = Math.floor(Math.random() * data.catchPhrases.length);
        return data.catchPhrases[randomIndex];
    }

    const navigate = useNavigate();
    return (
        <div className="mx-auto p-4 flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-bold">
                404 - Page Not Found
            </h1>
            <p className="text-lg italic">
                {catchRandomPhrase()}
            </p>
            <Button onClick={() => navigate('/')}>
                Go Home
            </Button>
        </div>
    );
}