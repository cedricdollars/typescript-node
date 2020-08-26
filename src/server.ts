import app from './app';
import * as dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';



const PORT= process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`🚀 Server ready and listening at ${PORT}`);
}) 



