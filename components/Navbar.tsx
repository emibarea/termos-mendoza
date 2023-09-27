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
    <div className="border-b fixed top-0 left-0 right-0 z-50 h-[80px] bg-white shadow-xl">
      <Container>
        <div className="relative flex justify-between px-4 sm:px-6 lg:px-8 h-[80px] items-center">
          <div className="hidden sm:flex">
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
              <Image
                src="https://media.discordapp.net/attachments/1087185625658167420/1156668262508150894/logodrip.png?ex=6515cec3&is=65147d43&hm=ff0258fe69977c965a548f4a86ae6c377d8df373cb45c32a07269bb297ed47f7&="
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
                src="https://media.discordapp.net/attachments/1087185625658167420/1156668262508150894/logodrip.png?ex=6515cec3&is=65147d43&hm=ff0258fe69977c965a548f4a86ae6c377d8df373cb45c32a07269bb297ed47f7&="
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
