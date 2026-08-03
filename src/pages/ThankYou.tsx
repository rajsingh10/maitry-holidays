import { motion } from "framer-motion";
import { CheckCircle2, Home, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import bgImage from "@/assets/images/68d584962dfda3024ed80c67_hero-bg.webp";
import SEO from "@/components/SEO";

const ThankYou = () => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-background">
      <SEO title="Thank You | Maitry Holidays" description="Thank you for contacting Maitry Holidays." />
      
      {/* Left side - Image */}
      <div className="relative w-full lg:w-1/2 h-[40vh] lg:h-screen hidden md:block">
        <div className="absolute inset-0 bg-brand-dark/20 z-10" />
        <img
          src={bgImage}
          alt="Beautiful destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-10 left-10 z-20 text-white max-w-md hidden lg:block">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Your journey begins here.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-white/80 text-lg"
          >
            We are thrilled to help you plan the perfect holiday experience.
          </motion.p>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-full lg:w-1/2 h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 bg-white relative">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          {/* Animated Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-500" strokeWidth={2.5} />
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
            Thank You! <br />
            <span className="text-primary italic-display font-light">Request Received.</span>
          </h1>

          <p className="text-[16px] md:text-lg text-muted-foreground font-normal leading-relaxed mb-10">
            We've received your details successfully. One of our travel experts will review your request and get back to you within 24 hours to craft your perfect journey.
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-foreground text-background hover:bg-foreground/90 px-8 py-4 rounded-full font-medium transition-all group"
          >
            <Home className="w-5 h-5" />
            Return to Homepage
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>

          <hr className="my-12 border-border" />

          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">Need immediate assistance?</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <a href="tel:+917041260720" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary/10">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium">+91-7041260720</span>
              </a>
              <a href="mailto:maitry.holidays13@gmail.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary/10">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium">maitry.holidays13@gmail.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYou;