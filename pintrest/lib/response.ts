import { SessionOptions } from "iron-session";

export interface Image {
    id: number;
    img: string;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface User {
    id: number;
    name: string;
    img: string;
    createdAt: Date;
    updatedAt: Date;
  }

  // export const sessionOptions: SessionOptions = {
  //   password: process.env.SESSION_SECRET!,
  //   cookieName: "user_session",
  //   cookieOptions: {
  //     httpOnly: true,
  //     secure: process.env.NODE_ENV === "production",
  //   },
  // }