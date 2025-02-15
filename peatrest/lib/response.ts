export interface ImageInt {
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

  export interface BoardImg {
    board_id: number;
    img_id: number;
    img: ImageInt;
  }

  export interface Boards {
    board_id: number;
    boardName: string;
    images: {
      img: BoardImg;
    }[];
  }

  // export const sessionOptions: SessionOptions = {
  //   password: process.env.SESSION_SECRET!,
  //   cookieName: "user_session",
  //   cookieOptions: {
  //     httpOnly: true,
  //     secure: process.env.NODE_ENV === "production",
  //   },
  // }