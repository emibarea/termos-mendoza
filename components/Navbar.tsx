import React from "react";
import Container from "@/components/ui/conteiner";
import Link from "next/link";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import Image from "next/image";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative flex justify-between px-4 sm:px-6 lg:px-8  h-16 items-center">
          <div className="hidden sm:flex">
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
              <Image
                src="https://media.discordapp.net/attachments/1087185625658167420/1153779062825816125/DR_p__1_-removebg-preview_2.png"
                alt="logo"
                width={170}
                height={50}
              />
            </Link>
            <MainNav data={categories} />
          </div>
          <div className="flex sm:hidden">
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
              <Image
                src="https://media.discordapp.net/attachments/1087185625658167420/1153779062825816125/DR_p__1_-removebg-preview_2.png"
                alt="logo"
                width={170}
                height={50}
              />
            </Link>
          </div>
          <div className="flex sm:hidden">
            <MainNav data={categories} />
          </div>
          <div className="hidden sm:block">
            <NavbarActions />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
