import { motion } from "framer-motion";
import { Check, Home, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import bgImage from "@/assets/images/68d584962dfda3024ed80c67_hero-bg.webp";

const ThankYou = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Scenic background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/60 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-xl mx-4"
      >
        <div className="bg-white/95 backdrop-blur-md rounded-sm p-8 md:p-12 text-center shadow-2xl border border-white/20">
          {/* Animated Checkmark */}
          {/* <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3,
            }}
            className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/20"
          >
            <Check className="w-10 h-10 text-primary" strokeWidth={3} />
          </motion.div> */}

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Thank You for <span className="text-primary italic-display">Choosing Us!</span>
          </h1>

          {/* Subheading */}
          <p className="text-[15px] md:text-lg text-muted-foreground font-light leading-relaxed mb-10 max-w-md mx-auto">
            Your inquiry has been successfully sent. One of our travel experts will reach out to you within 24 hours to craft your perfect journey.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="btn-primary w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2 group"
            >
              <Home className="w-4 h-4" />
              Back to Home
              <ArrowRight className="w-4 h-4 opacity-0 -ml-2 transition-all group-hover:opacity-100 group-hover:ml-0" />
            </Link>
          </div>

          {/* Contact Reminder */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col items-center gap-3">
            <p className="text-[13px] text-muted-foreground uppercase tracking-widest font-medium">Need immediate help?</p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              <a
                href="tel:+917041260720"
                className="text-lg font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                +91-7041260720
              </a>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <a
                href="mailto:maitry.holidays13@gamil .Com"
                className="text-lg font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                maitry.holidays13@gamil .Com
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Floating Elements */}
      {/* <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-10 md:left-40 z-10 hidden sm:block"
      >
        <div className="w-16 h-16 bg-primary/20 rounded-sm backdrop-blur-lg border border-white/20" />
      </motion.div> */}
      {/* <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-10 md:right-40 z-10 hidden sm:block"
      >
        <div className="w-12 h-12 bg-brand-cream/20 rounded-full backdrop-blur-lg border border-white/20" />
      </motion.div> */}
    </div>
  );
};

export default ThankYou;