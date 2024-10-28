"use client";

import Link from "next/link";
import { Navbar, Dropdown, Avatar, TextInput } from "flowbite-react";
import { use, useEffect, useState } from "react";
import { User } from "../../lib/response";
import { getUser } from "./severside";
import { usePathname } from "next/navigation";

export function Navcomp() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser().then((res) => {
      const users = res.data.users[0];
      const userWithId = { ...users, id: users.user_id };
      setUser(userWithId);
    });
  }, []);

  const pathname = usePathname();

  return (
    <Navbar fluid rounded className="bg-neutral-950 relative z-30">
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
            className="bg-neutral-950 placeholder-neutral-700 text-neutral-500 h-8 p-2 rounded border-b-2 border-neutral-800 focus:outline-none w-32 md:w-auto"
          />
        </div>
      </form>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={user?.img} rounded />}
          className="relative z-30"
        >
          <Dropdown.Header>
            <span className="block text-sm">{user?.name}</span>
            <span className="block truncate text-sm font-medium"></span>
          </Dropdown.Header>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Created</Dropdown.Item>
          <Dropdown.Divider />
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
