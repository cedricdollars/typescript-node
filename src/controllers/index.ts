import { PrismaClient } from '@prisma/client';
import ApiError from '../error/api_error';

const prisma = new PrismaClient();


const main = async function main() {
    const user = await prisma.users.create({
        data: {
            name: "Cédric",
            email: "gabyngoune@yahoo.fr"
        }
    })
    console.log(user);
}
main()
    .catch(e => console.log(e))
    .finally(async ()=> {
        prisma.disconnect();
    })