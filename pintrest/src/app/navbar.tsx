
"use client";

import Link from "next/link";
import { Navbar, Dropdown, Avatar, Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";

const user = [user, setUser] = useState([]);





export function Navcomp() {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand as={Link} href="#">
                <img src="/icon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Pinterest</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
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
                    Boards
                </Navbar.Link>
                <Navbar.Link href="#">Create</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
