import { Star, Quote } from "lucide-react";
import { Reveal } from "@/lib/motion";

import u1 from "@/assets/images/68d706662e2c1302fd9b1c46_user-image1.png";
import u2 from "@/assets/images/68d7066501f243c7ab093727_user-image2.png";
import u3 from "@/assets/images/68d706666da03ec43b49d714_user-image3.png";

const reviews = [
  {
    quote: "I booked Shimla and Manali holidays including hotel, cab through this travel agency, named Maitry Holiday. Overall Experience is totally flawless and convenient.",
    name: "Anand Maurya", location: "Mumbai", avatar: u1
  },
  {
    quote: "I had a family trip to Manali. It was a very good experience with the cab pilot and he was experienced as well as well versed with location.",
    name: "Priya Sinha", location: "Delhi", avatar: u2
  },
  {
    quote: "We had recently a Jim Corbett trip by Maitry Holiday. We had booking in resort Pumpkin tusk and woods that is awesome place. Foods and services are fantastic.",
    name: "Shraddha Singh", location: "Bengaluru", avatar: u3
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" aria-label="What our clients say" className="bg-white section-pad overflow-hidden">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-light uppercase tracking-widest text-primary mb-3">Testimonials</p>
          <h2 className="text-4xl font-semibold leading-[1.05] text-foreground md:text-5xl lg:text-[56px]">
            What our <span className="italic-display text-primary">clients say</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[16px] font-light leading-relaxed text-muted-foreground">
            We take pride in serving our travelers with unforgettable journeys around the world. Here's what they shared about their experiences.
          </p>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-6 lg:gap-8 max-w-7xl mx-auto pb-16">
          {reviews.map((r, i) => (
            <Reveal
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`h-full ${i === 1 ? "md:translate-y-12" : ""}`}
            >
              <div className="group relative flex h-full flex-col rounded-[2rem] bg-white px-8 pb-10 pt-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(249,115,22,0.15)] border border-brand-darker/5">

                {/* Header: Avatar + Name + Location */}
                <div className="relative z-10 flex items-center gap-5 mb-8">
                  <div className="relative shrink-0 -mt-16">
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-md transition-all duration-300 group-hover:bg-primary/40 group-hover:scale-110"></div>
                    <img
                      src={r.avatar}
                      alt={r.name}
                      loading="lazy"
                      width={80}
                      height={80}
                      className="relative h-20 w-20 rounded-full object-cover ring-4 ring-white shadow-lg"
                    />
                    {/* Tiny quote badge */}
                    <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-md">
                      <Quote className="h-4 w-4 fill-white" />
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="text-[17px] font-semibold text-foreground tracking-tight">{r.name}</div>
                    <div className="text-[14px] text-primary font-medium mt-0.5">{r.location}</div>
                  </div>
                </div>

                {/* Quote Content */}
                <div className="relative z-10 flex-grow">
                  <div className="mb-6 flex gap-1">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-[17px] font-light leading-relaxed text-foreground md:text-[18px] italic relative">
                    <span className="text-4xl text-primary/20 absolute -top-4 -left-3 font-serif">"</span>
                    {r.quote}
                    <span className="text-4xl text-primary/20 absolute -bottom-6 -right-2 font-serif">"</span>
                  </blockquote>
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
