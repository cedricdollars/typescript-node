import app from './app';
import * as dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';


dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`🚀 Server started at http://localhost:${PORT}`);
}) 



