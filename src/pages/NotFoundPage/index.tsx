import { useNavigate } from "react-router-dom";
import './index.css';
import { Button } from "@/components/Button";

export const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <div className="not-found-container">
            <h1>404 - Page Not Found</h1>
            <p>This aren't the droids you're looking for.</p>
            <Button onClick={() => navigate('/')}>
                Go Home
            </Button>
        </div>
    );
}