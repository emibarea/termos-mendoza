"use client";
import Link from "next/link";
import ReactWhatsapp from "react-whatsapp";
import { BiLogoInstagram, BiLogoTiktok, BiLogoWhatsapp } from "react-icons/bi";
const SocialMedia = () => {
  return (
    <>
      <div className="flex mt-4 sm:space-y-0 items-left sm:items-center w-full sm:w-auto justify-around text-sm sm:text-lg sm:space-x-4 pb-4">
        <Link
          href="https://www.instagram.com/termosmendoza2/"
          target="_blank"
          className="flex items-center hover:underline"
        >
          <BiLogoInstagram className="w-6 h-6" />
          <p>termosmendoza2</p>
        </Link>
        <Link
          href="https://www.tiktok.com/@termosmendoza?lang=es"
          target="_blank"
          className="flex items-center hover:underline"
        >
          <BiLogoTiktok className="w-6 h-6" />
          <p>termosmendoza</p>
        </Link>
        <ReactWhatsapp
          className="flex items-center hover:underline"
          number="+54 9 2613 60-7775"
          message="Hola! Queria hacer una consulta sobre..."
          element="button"
        >
          <BiLogoWhatsapp className="w-6 h-6" />
          2617092743
        </ReactWhatsapp>
      </div>
    </>
  );
};

export default SocialMedia;
