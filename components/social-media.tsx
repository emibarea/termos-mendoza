import Link from "next/link";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTiktok,
  BiLogoWhatsapp,
} from "react-icons/bi";
const SocialMedia = () => {
  return (
    <>
      <div className="flex mt-4 sm:space-y-0 items-left sm:items-center w-full sm:w-auto justify-around text-sm sm:text-lg sm:space-x-4 pb-4">
        <Link
          href="https://www.instagram.com/dripdealers.arg/"
          target="_blank"
          className="flex items-center hover:underline"
        >
          <BiLogoInstagram className="w-6 h-6" />
          <p>dripdealers.arg</p>
        </Link>
        <Link href="/" className="flex items-center hover:underline">
          <BiLogoTiktok className="w-6 h-6" />
          <p>dripdealerx</p>
        </Link>
        <Link href="/" className="flex items-center hover:underline">
          <BiLogoWhatsapp className="w-6 h-6" />
          <p>2613607775</p>
        </Link>
      </div>
    </>
  );
};

export default SocialMedia;
