import { useNavigate } from "react-router-dom";
import { Button } from "@/components/uiComponents";
import { useData } from "@hooks";
import { randomNumber } from "@utils";

export const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <div className="mx-auto p-4 flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-bold">
                {useData('ui.notFound.title')}
            </h1>
            <p className="text-lg italic">
                {useData(`ui.notFound.text.${randomNumber(1, 4)}`)}
            </p>
            <Button onClick={() => navigate('/')} className="mt-10">
                {useData('ui.button.goHome')}
            </Button>
        </div>
    );
}