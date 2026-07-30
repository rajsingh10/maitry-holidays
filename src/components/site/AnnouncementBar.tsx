import { PhoneCall, Mail } from "lucide-react";
const AnnouncementBar = () => (
  <div className="bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground shadow-sm hidden md:block">
    <div className="container-px flex h-10 items-center justify-between gap-2 text-[12px] font-medium tracking-wide sm:text-[13px]">
      <a href="tel:+917041260720" className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
        <PhoneCall className="h-4 w-4" />
        <span>+91-7041260720</span>
      </a>
      <a href="mailto:maitry.holidays13@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
        <Mail className="h-4 w-4" />
        <span>maitry.holidays13@gmail.com</span>
      </a>
    </div>
  </div>
);

export default AnnouncementBar;
