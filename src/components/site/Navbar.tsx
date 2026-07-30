import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "About Us", href: "/about" },
  { label: "Packages", href: "/#packages" },
  { label: "Reviews", href: "/#testimonials" },
  // { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.split("#")[1];
      if (pathname === "/") {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(href);
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  const GetQuoteButton = ({ className }: { className?: string }) => {
    const hasHeroForm = ["/", "/himachal", "/uttarakhand", "/north-india"].includes(pathname);
    // const href = hasHeroForm ? "#contact" : "/contact";

    return (
      <button
        onClick={() => {
          setOpen(false);
          navigate("/contact");
        }}
        className={`${className} group inline-flex items-center justify-center gap-2`}
      >
        Contact Us
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    );
  };

  return (
    <header
      className={`z-50 w-full transition-all duration-500 ${(scrolled || open)
        ? "lg:fixed lg:top-0 absolute top-0 bg-brand-darker/90 shadow-lg backdrop-blur-xl"
        : "absolute bg-transparent"
        }`}
    >
      <nav className="container-px flex h-16 lg:h-20 items-center justify-between" aria-label="Main">
        <span onClick={() => navigate("/")} className="flex cursor-pointer items-center" aria-label="Maitry Holidays home">
          <Logo className="h-16 lg:h-28 w-auto object-contain" variant="light" />
        </span>

        <ul className="hidden items-center gap-5 lg:gap-10 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <span
                onClick={() => handleNavigate(l.href)}
                className="text-[18px] cursor-pointer font-light text-white/85 transition-colors hover:text-primary"
              >
                {l.label}
              </span>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <GetQuoteButton className="rounded-full bg-primary px-6 py-2.5 text-[15px] font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-orange)]" />
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-md text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-8 w-8" /> : <Menu className="h-9 w-9" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden">
          <ul className="container-px flex flex-col gap-1 pb-5">
            {links.map((l) => (
              <li key={l.href}>
                <span
                  onClick={() => {
                    setOpen(false);
                    handleNavigate(l.href);
                  }}
                  className="block cursor-pointer rounded-lg px-3 py-3 text-base font-light text-white/85 hover:bg-white/5"
                >
                  {l.label}
                </span>
              </li>
            ))}
            <li className="pt-2">
              <GetQuoteButton
                className="w-full rounded-full bg-primary px-5 py-4 text-center text-[15px] font-semibold text-primary-foreground"
              />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

