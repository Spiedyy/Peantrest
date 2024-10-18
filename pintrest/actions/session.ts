    // "use server";

    // import { getIronSession } from "iron-session";
    // import { Image, sessionOptions, User } from "../lib/response";
    // import { cookies } from "next/headers";

    // type SessionData = User | Image;

    // type PlainSession = Partial<User & Image>;

    // export const getSession = async (): Promise<PlainSession> => {
    //     const session: SessionData = await getIronSession(cookies(), sessionOptions);
    //     console.log("Session data:", session);
    //     return {
    //         ...session,
    //     };
    // }

    // export const updateSession = async (partialData: PlainSession): Promise<void> => {
    //     const session = await getIronSession<PlainSession>(cookies(), sessionOptions);

    //     Object.assign(session, partialData);

    //     await session.save();
    // }