import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, UserRound, XIcon } from "lucide-react";
import ThemeButton from "@/components/ThemeButton";
import { navItem } from "@/constants";

type NavItem = "home" | "movie" | "popular" | "service";

const Header = ({pastHero}:{pastHero: unknown}) => {
  const [navActive, setNavActive] = useState<NavItem>("home");
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    if (isMobile) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  const handleNavActive = (label: string) => {
    if(label === "home"){
      setNavActive("home")
    }else if(label === "popular"){
      setNavActive('popular')
    }else if(label === "movie"){
      setNavActive('movie')
    }else{
      setNavActive('service')
    }
  }

  return (
    <header className={`header z-100 ${pastHero ? "" : "text-neutral-400"}`}>
      <Link
        to="/"
        className={`text-2xl font-bold tracking-wider bg-linear-to-r bg-blue-700 to-amber-300 bg-clip-text relative text-transparent`}
      >
        LK24
      </Link>
      <nav
        className={`nav ${
          isMobile
            ? "opacity-100 translate-0"
            : "max-md:translate-y-60 max-md:opacity-0 max-md:pointer-events-none"
        } ${isMobile && pastHero ? 'dark:bg-neutral-400/10 bg-neutral-600/30': 'max-md:bg-black/50 backdrop-blur'} `}
      >
        {isMobile && (
          <XIcon
            className="absolute top-0.5 right-0.5 size-5 border border-border rounded-sm cursor-pointer"
            onClick={() => setIsMobile(false)}
          />
        )}
        {navItem.map((item) => (
          <NavLink
            to={item.link}
            onClick={() => handleNavActive(item.label)}
            key={item.label}
            className={`dark:hover:text-blue-200 capitalize hover:text-white duration-300 
              ${navActive === item.label ? "text-white" : ""} 
              ${navActive === item.label && pastHero ? "dark:text-blue-400 text-gray-900" : ""}
            `}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <ThemeButton
          className={`duration-300 ${pastHero ? "" : "text-neutral-400"}`}
        />
        <Menu
          onClick={toggleMenu}
          className="md:hidden cursor-pointer hover:text-foreground duration-300"
        />
        <div className="bg-gray-700 w-0.5 h-7" />
        <Link
          to="/login"
          className={`duration-300 ${pastHero ? "hover:text-foreground" : "hover:text-white"}`}
        >
            <UserRound className="md:hidden" />
            <span className="max-md:hidden">Login</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
