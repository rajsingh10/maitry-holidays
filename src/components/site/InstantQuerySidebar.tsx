import { useState } from "react";
import { X } from "lucide-react";
import QuoteForm from "./QuoteForm";

const InstantQuerySidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* The Vertical Tab */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:block fixed top-1/2 left-0 z-[55] bg-primary text-white font-bold tracking-wider py-2.5 px-6 rounded-b-md shadow-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
        style={{
          transformOrigin: "top left",
          transform: "rotate(-90deg) translateX(-50%)",
        }}
      >
        INSTANT QUERY
      </button>

      {/* The Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[70] backdrop-blur-sm transition-opacity" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* The Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-[90%] max-w-[420px] bg-[#f9f9f9] shadow-2xl z-[80] transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-gray-500 hover:text-black bg-white shadow-sm p-1.5 rounded-full border border-gray-200 transition-all hover:scale-105"
          >
            <span className="sr-only">Close query form</span>
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="px-6 pb-10">
          <QuoteForm 
            title="Please Contact Us" 
            subtitle="" 
            horizontal={false} 
            singleColumn={true}
            className="!bg-transparent !p-0 !shadow-none" 
            onSuccess={() => setIsOpen(false)}
          />
        </div>
      </div>
    </>
  );
};

export default InstantQuerySidebar;
