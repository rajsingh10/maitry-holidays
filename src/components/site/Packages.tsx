import { Reveal } from "@/lib/motion";
import PackageCard from "./PackageCard";
import { categories, packages } from "@/data/packages";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PackagesProps {
  bgImage?: string;
  showAll?: boolean;
}

const Packages = ({ bgImage, showAll = false }: PackagesProps = {}) => {
  return (
    <>
      {bgImage && (
        <section 
          className="relative w-full flex flex-col items-center justify-center overflow-hidden py-24 md:py-32 min-h-[400px] md:min-h-[500px] bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container-px relative z-10">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-[56px] text-white">
                Popular <span className="italic-display text-primary">packages</span>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-[15px] font-light leading-relaxed text-white/80">
                Handpicked travel experiences designed to give you the best of every destination—at the best value.
              </p>
            </Reveal>
          </div>
        </section>
      )}

      <section id="packages" aria-label="Popular packages" className={`bg-background ${bgImage ? 'pt-16 pb-24' : 'section-pad'}`}>
        <div className="container-px">
          {!bgImage && (
            <Reveal className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-[56px] text-foreground">
                Popular <span className="italic-display text-primary">packages</span>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-[15px] font-light leading-relaxed text-muted-foreground">
                Handpicked travel experiences designed to give you the best of every destination—at the best value.
              </p>
            </Reveal>
          )}

          <Tabs defaultValue="all" className="w-full">
          <Reveal delay={0.2} className="flex justify-center mb-10">
            <TabsList className="bg-brand-cream/50 p-1 h-auto flex-wrap justify-center border border-border/50 rounded-sm">
              <TabsTrigger
                value="all"
                className="px-6 py-2.5 text-[14px] font-medium data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all rounded-sm"
              >
                All Packages
              </TabsTrigger>
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="px-6 py-2.5 text-[14px] font-medium data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all rounded-sm"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Reveal>

          <TabsContent value="all" className="mt-0 outline-none">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {packages
                .slice(0, showAll ? undefined : 6)
                .map((pkg, idx) => (
                  <PackageCard key={pkg.title} pkg={pkg} idx={idx} />
                ))}
            </div>
            
            {!showAll && (
              <Reveal className="mt-12 text-center">
                <Link 
                  to="/packages?type=regular"
                  className="inline-flex items-center gap-2 rounded-sm border-2 border-primary px-8 py-3 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white"
                >
                  Explore all packages
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            )}
          </TabsContent>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-0 outline-none">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {packages
                  .filter((pkg) => pkg.category === cat.id)
                  .slice(0, showAll ? undefined : 6)
                  .map((pkg, idx) => (
                    <PackageCard key={pkg.title} pkg={pkg} idx={idx} />
                  ))}
              </div>
              
              <Reveal className="mt-12 text-center">
                <Link 
                  to={cat.path}
                  className="inline-flex items-center gap-2 rounded-sm border-2 border-primary px-8 py-3 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white"
                >
                  Explore all {cat.label} packages
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
    </>
  );
};

export default Packages;
