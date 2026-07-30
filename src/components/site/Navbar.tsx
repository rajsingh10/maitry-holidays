import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Reviews", href: "/#testimonials" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (href: string) => {
    setOpen(false);
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
    <>
      <header
        className={`z-50 w-full transition-all duration-500 border-b border-transparent ${scrolled || open
          ? "fixed top-0 bg-brand-darker/70 backdrop-blur-xl shadow-lg border-white/10 py-1"
          : "absolute bg-transparent py-1 lg:py-2"
          }`}
      >
        <nav className="container px-4 lg:px-20 flex h-14 lg:h-16 items-center justify-between" aria-label="Main">
          <span onClick={() => navigate("/")} className="flex cursor-pointer items-center transition-transform hover:scale-105" aria-label="Maitry Holidays home">
            <Logo className="h-10 lg:h-28 w-auto object-contain transition-all duration-500" variant="light" />
          </span>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <span
                  onClick={() => handleNavigate(l.href)}
                  className="relative text-[18px] font-medium text-white/90 cursor-pointer transition-colors hover:text-white group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <GetQuoteButton className="rounded-full bg-primary px-7 py-2.5 text-[16px] font-semibold text-primary-foreground transition-all duration-300 hover:bg-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-0.5" />
          </div>

          <button
            onClick={() => setOpen(true)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white transition-colors hover:bg-white/20 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-4/5 max-w-sm bg-brand-darker shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Logo className="h-10 w-auto object-contain" variant="light" />
          <button
            onClick={() => setOpen(false)}
            className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-white/5 text-white/80 hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <ul className="flex-1 flex flex-col gap-2 p-6 overflow-y-auto">
          {links.map((l, idx) => (
            <li key={l.href} style={{ animationDelay: `${idx * 100}ms` }} className={`transition-all duration-500 ${open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <span
                onClick={() => handleNavigate(l.href)}
                className="block cursor-pointer rounded-xl px-4 py-4 text-lg font-medium text-white/90 hover:bg-white/5 hover:text-primary transition-colors"
              >
                {l.label}
              </span>
            </li>
          ))}

          <li className={`pt-6 mt-auto transition-all duration-500 ${open ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <GetQuoteButton
              className="w-full rounded-xl bg-primary px-5 py-4 text-center text-[16px] font-bold text-primary-foreground shadow-lg shadow-primary/25"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

