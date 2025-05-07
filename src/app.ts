import express from 'express';
import router from './app.route';

const app = express();
app.use(express.json());
app.use('', router);

async function startServer() {
    try {
        app.listen(3000, () => {
            console.log('Server started');
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

startServer();