require('dotenv').config();
import app from './app';

const PORT: number | string = process.env.PORT || 3001;

app.listen(PORT, async (req: any, res: any) => {
    try {
        console.log("Hello typescript");
    } catch (error) {
        console.log(error);
    }
    console.log(`Server is working on ${PORT} port`)
});