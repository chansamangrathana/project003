import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function NavbarComponent() {
  
  return (
    <header className="bg-white fixed w-full z-20 top-0 start-0 border-b border-pink-700 ">
      <Navbar className="bg-white h-12 ">
        <NavbarBrand as={Link} href="https://flowbite-react.com">
          <img className="w-20 " src="" />
          <span className=" self-center whitespace-nowrap text-3xl font-extrabold tracking-[.25em] text-pink-500">
            C S R
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="/" className="text-pink-500  text-3lg font-bold">
            Home
          </NavbarLink>

          <NavbarLink href="/aboutUs" className="text-pink-500  text-3lg font-bold">
            About Us
          </NavbarLink>
          <NavbarLink href="/policy" className="text-pink-500  text-3lg font-bold">
            Policy
          </NavbarLink>

          <NavbarLink href="/login" className="text-pink-500  text-3lg font-bold">
            My Shop
          </NavbarLink>

          <NavbarLink href="/login" className="justify-center hover:text-white-800 items-center py-5 px-5 sm:ms-4 text-base font-bold text-center text-pink-800 bg-pink-300 rounded-2xl border border-pink-600 hover:bg-pink-200 focus:ring-4 focus:ring-pink-400">
            Login
          </NavbarLink>
         
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
