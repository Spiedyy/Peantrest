"use client"

import Link from "next/link";
import { Navbar, Dropdown, Avatar, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { User } from "../../lib/response";
import { getUser } from "./severside";

export function Navcomp() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        getUser().then((res) => {
            const users = res.data.users[0];
            setUser(users);
        });
    }, []);

    return (
        <Navbar fluid rounded className="bg-neutral-950">
            <Navbar.Brand as={Link} href="#">
                <img src="/icon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Pinterest</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img={user?.img} rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">{user?.name}</span>
                        <span className="block truncate text-sm font-medium"></span>
                    </Dropdown.Header>
                    <Dropdown.Item>Home</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Created</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Toggle />

            <form className="flex max-w-md flex-col gap-4">
                <div>
                    <TextInput id="#" type="#" placeholder="Search" required />
                </div>
            </form>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link as={Link} href="#">
                    Saves
                </Navbar.Link>
                <Navbar.Link href="#">Create</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
