"use client";

import Link from "next/link";
import { Navbar, Dropdown, Avatar, TextInput } from "flowbite-react";
import { use, useEffect, useState } from "react";
import { User } from "../../lib/response";
import { getUser } from "./severside";
import { usePathname } from "next/navigation";

export function Navcomp() {
  const [user, setUser] = useState<User | null>(null);

  const customTheme = {
    arrowIcon: "ml-2 h-4 w-4",
    content: "py-1 focus:outline-none bg-neutral-800 rounded",
    floating: {
      animation: "transition-opacity",
      arrow: {
        base: "absolute z-10 h-2 w-2 rotate-45",
        style: {
          dark: "bg-gray-900 dark:bg-gray-700",
          light: "bg-white",
          auto: "bg-white dark:bg-gray-700",
        },
        placement: "-4px",
      },
      base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
      content: "py-1 text-sm text-gray-700 dark:text-gray-200",
      divider: "my-1 h-px bg-black",
      header: "block px-4 py-2 text-sm text-neutral-300",
      hidden: "invisible opacity-0",
      item: {
        container: "",
        base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-neutral-300 hover:bg-red-800 focus:bg-red-800 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
        icon: "mr-2 h-4 w-4",
      },
      style: {
        dark: "bg-gray-900 text-white dark:bg-gray-700",
        light: "border border-gray-200 bg-white text-gray-900",
        auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
      },
      target: "w-fit",
    },
    inlineWrapper: "flex items-center",
  };

  useEffect(() => {
    getUser().then((res) => {
      const users = res.data.users[0];
      const userWithId = { ...users, id: users.user_id };
      setUser(userWithId);
    });
  }, []);

  const pathname = usePathname();

  return (
    <Navbar fluid rounded className="bg-neutral-900 relative z-30">
      <Navbar.Brand as={Link} href="/">
        <img
          src="/icon.ico"
          className="mr-3 h-6 md:h-8"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-sm md:text-xl font-semibold dark:text-white">
          Pinterest
        </span>
      </Navbar.Brand>

      <form className="flex max-w-md flex-col gap-4">
        <div className="w-32">
          <input
            id="#"
            type="#"
            placeholder="Search"
            className="bg-neutral-900 placeholder-neutral-700 text-neutral-500 h-8 p-2 rounded border-b-2 border-neutral-800 focus:outline-none w-32 md:w-auto"
          />
        </div>
      </form>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={user?.img} rounded />}
          className="relative z-30 bg-black border-black"
          theme={customTheme}
        >
          <Dropdown.Header>
            <span className="block text-sm">{user?.name}</span>
            <span className="block truncate text-sm font-medium"></span>
          </Dropdown.Header>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Created</Dropdown.Item>
          <Dropdown.Divider className="bg-black"/>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          as={Link}
          href="/"
          active={pathname === "/"}
          className="text-neutral-500 font-semibold"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="/boards"
          active={pathname === "/boards"}
          className="text-neutral-500 font-semibold"
        >
          Boards
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          href="#"
          active={pathname === "/create"}
          className="text-neutral-500 font-semibold"
        >
          Create
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
