import { prisma } from "../../lib/prisma";

export default async function Test() {
    const data = await prisma.user.findMany();
    console.log(data);

    return (
        <div>
        <h1>Test</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}