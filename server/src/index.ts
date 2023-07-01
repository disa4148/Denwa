require('dotenv').config();
import app from './app';

const PORT = process.env.PORT || 3001;

try {
    app.listen(PORT, async (req: any, res: any) => {
        console.log(`Server is working on ${PORT} port`)
    });
} catch (error) {
    console.log(error);
}