import { Reveal } from "@/lib/motion";
import PackageCard from "./PackageCard";
import { categories, packages } from "@/data/packages";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Packages = () => {
  return (
    <section id="packages" aria-label="Popular packages" className="bg-background section-pad">
      <div className="container-px">
        {/* Popular Packages Preview Section */}
        <Reveal className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-[56px]">
            Popular <span className="italic-display text-primary">packages</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] font-light leading-relaxed text-muted-foreground">
            Handpicked travel experiences designed to give you the best of every destination—at the best value.
          </p>
        </Reveal>

          <Tabs defaultValue="uttarakhand" className="w-full">
          <Reveal delay={0.2} className="flex justify-center mb-10">
            <TabsList className="bg-brand-cream/50 p-1 h-auto flex-wrap justify-center border border-border/50">
              {categories.filter(cat => cat.id !== "kerala").map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="px-6 py-2.5 text-[14px] font-medium data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg transition-all rounded-lg"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Reveal>

          {categories.filter(cat => cat.id !== "kerala").map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-0 outline-none">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {packages
                  .filter((pkg) => pkg.category === cat.id)
                  .slice(0, 6)
                  .map((pkg, idx) => (
                    <PackageCard key={pkg.title} pkg={pkg} idx={idx} />
                  ))}
              </div>
              
              <Reveal className="mt-12 text-center">
                <Link 
                  to={cat.path}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white"
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
  );
};

export default Packages;
