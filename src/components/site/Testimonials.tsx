import { Star, Quote } from "lucide-react";
import { Reveal } from "@/lib/motion";

import u1 from "@/assets/images/68d706662e2c1302fd9b1c46_user-image1.png";
import u2 from "@/assets/images/68d7066501f243c7ab093727_user-image2.png";
import u3 from "@/assets/images/68d706666da03ec43b49d714_user-image3.png";

const reviews = [
  {
    quote: "I booked Shimla and Manali holidays including hotel, cab through this travel agency, named shrishti Trip. Overall Experience is totally flawless and convenient.",
    name: "Anand Maurya", location: "Mumbai", avatar: u1
  },
  {
    quote: "I had a family trip to Manali. It was a very good experience with the cab pilot and he was experienced as well as well versed with location.",
    name: "Priya Sinha", location: "Delhi", avatar: u2
  },
  {
    quote: "We had recently a Jim Corbett trip by Shrishti Trip. We had booking in resort Pumpkin tusk and woods that is awesome place. Foods and services are fantastic.",
    name: "Shraddha Singh", location: "Bengaluru", avatar: u3
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" aria-label="What our clients say" className="bg-brand-cream section-pad overflow-hidden">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">

          <h2 className="mt-6 text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-[56px]">
            What our <span className="italic-display text-primary">clients say</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[16px] font-light leading-relaxed text-muted-foreground">
            We take pride in serving our travelers with unforgettable journeys around the world. Here's what they shared about their experiences.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 max-w-7xl mx-auto">
          {reviews.map((r, i) => (
            <Reveal
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-white p-8 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-border/40">
                {/* Background decorative quote */}
                <Quote className="absolute -right-4 -top-4 h-32 w-32 -rotate-12 text-primary/5 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" aria-hidden="true" />

                <div className="relative z-10">
                  <div className="mb-6 flex gap-1">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-[16px] font-light leading-relaxed text-foreground md:text-[17px]">
                    "{r.quote}"
                  </blockquote>
                </div>

                <div className="relative z-10 mt-8 flex items-center gap-4 border-t border-border/50 pt-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-[6px] transition-all duration-300 group-hover:bg-primary/40"></div>
                    <img
                      src={r.avatar}
                      alt={r.name}
                      loading="lazy"
                      width={48}
                      height={48}
                      className="relative h-12 w-12 rounded-full object-cover ring-2 ring-white"
                    />
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-foreground">{r.name}</div>
                    <div className="text-[13px] text-muted-foreground">{r.location}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
