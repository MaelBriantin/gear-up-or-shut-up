import data from './data.json';
import { jsonToHtml } from '@utils';
import './index.css';

export const HomePage = () => {
    return (
        <main className='home-container'>
            {jsonToHtml(data, 'home')}
        </main>
    );
};