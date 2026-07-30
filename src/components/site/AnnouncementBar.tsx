import { PhoneCall, Mail } from "lucide-react";
const AnnouncementBar = () => (
  <div className="bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#F97316] text-white shadow-sm hidden md:block">
    <div className="container-px flex h-10 items-center justify-between gap-2 text-[12px] font-medium tracking-wide sm:text-[13px]">
      <div className="flex items-center gap-2">
        <PhoneCall className="h-4 w-4" />
        <span>+91-7042426335, +91-8920909501</span>
      </div>
      <div className="flex items-center gap-2">
        <Mail className="h-4 w-4" />
        <span>info@shrishtitrip.com</span>
      </div>
    </div>

  </div>
);

export default AnnouncementBar;
