import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ffffff] sm:text-xl rounded md:p-0 hover:text-white uppercase font-medium orbitron tracking-in-expand"
    >
      {title}
    </Link>
  );
};

export default NavLink;