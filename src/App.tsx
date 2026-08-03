import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { LazyMotion, domMax } from "framer-motion";

const Index = lazy(() => import("./pages/Index.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const TermsConditions = lazy(() => import("./pages/TermsConditions.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const ThankYou = lazy(() => import("./pages/ThankYou.tsx"));
const ContactUs = lazy(() => import("./pages/ContactUs.tsx"));
const AboutUs = lazy(() => import("./pages/AboutUs.tsx"));

const CharDham = lazy(() => import("./pages/CharDham.tsx"));
const CharDham12Days = lazy(() => import("./pages/CharDham12Days.tsx"));
const AshtavinayakTour = lazy(() => import("./pages/AshtavinayakTour.tsx"));
const GangasagarKolkataPuriYatra = lazy(() => import("./pages/GangasagarKolkataPuriYatra.tsx"));
const KashmirTour = lazy(() => import("./pages/KashmirTour.tsx"));
const NorthEastTour = lazy(() => import("./pages/NorthEastTour.tsx"));
const SouthIndiaTour = lazy(() => import("./pages/SouthIndiaTour.tsx"));
const DivineDarshan = lazy(() => import("./pages/DivineDarshan.tsx"));
const Kashmir = lazy(() => import("./pages/Kashmir.tsx"));
const NorthEast = lazy(() => import("./pages/NorthEast.tsx"));
const SouthIndia = lazy(() => import("./pages/SouthIndia.tsx"));
const DestinationsMain = lazy(() => import("./pages/DestinationsMain.tsx"));

const PackagesMain = lazy(() => import("./pages/PackagesMain.tsx"));
const Gallery = lazy(() => import("./pages/Gallery.tsx"));

// Loading fallback component
const PageLoading = () => (
  <div className="flex h-screen w-full items-center justify-center bg-background">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <LazyMotion features={domMax} strict>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/destinations" element={<DestinationsMain />} />
              <Route path="/chardham" element={<CharDham />} />
              <Route path="/divine-darshan" element={<DivineDarshan />} />
              <Route path="/kashmir" element={<Kashmir />} />
              <Route path="/north-east" element={<NorthEast />} />
              <Route path="/south-india" element={<SouthIndia />} />
              <Route path="/packages/char-dham-yatra-12-days" element={<CharDham12Days />} />
              <Route path="/packages/ashtavinayak-ganpati-tour-6-days" element={<AshtavinayakTour />} />
              <Route path="/packages/gangasagar-kolkata-jagannath-puri-yatra" element={<GangasagarKolkataPuriYatra />} />
              <Route path="/packages/kashmir-tour-7-days" element={<KashmirTour />} />
              <Route path="/packages/north-east-tour-11-days" element={<NorthEastTour />} />
              <Route path="/packages/south-india-tour-11-days" element={<SouthIndiaTour />} />
              <Route path="/packages" element={<PackagesMain />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about" element={<AboutUs />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </LazyMotion>
);

export default App;
