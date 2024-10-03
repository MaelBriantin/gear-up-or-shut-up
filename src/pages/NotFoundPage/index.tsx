import useThemeStore from "@/stores/themeStore";
import { useNavigate } from "react-router-dom";
import './index.css';

export const NotFoundPage = () => {
    const { theme } = useThemeStore();
    const navigate = useNavigate();
    return (
        <div className="not-found-container">
          <h1>404 - Page Not Found</h1>
          <p>This aren't the droids you're looking for.</p>
          <div 
            className={`simple-button ${theme !== 'light' ? 'light-theme' : 'dark-theme'}`}
            style={{ marginTop: '1rem', width: '100px' }}
            onClick={() => navigate('/')}
            >Go Home
            </div>
        </div>
    );
}