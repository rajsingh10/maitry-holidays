import { Reveal } from "@/lib/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PhoneCall } from "lucide-react";

const faqs = [
  {
    question: "What destinations does Maitry Holidays offer? ",
    answer: "We offer a wide range of destinations across India and internationally. In India, we cover popular spots like Himachal, Uttarakhand, North India, and offbeat locations across the Northeast and other hidden gems. Internationally, we offer exciting destinations like: Himachal, Uttarakhand, North India Tour Package etc."
  },
  {
    question: "Can I customize my tour package with Maitry Holidays?",
    answer: "Yes, we offer customizable tour packages for both domestic and international destinations. You can select your preferred destinations, activities, and the duration that best suits your travel preferences. Our team will assist you in creating a tailored travel experience."
  },
  {
    question: "How can I book a tour with Maitry Holidays?",
    answer: "You can easily book a tour through our website by filling out the booking form, or you can contact our customer service team via email or phone. We will guide you through the booking process."
  },
  {
    question: "Do you have family-friendly holiday packages?",
    answer: "Yes, we have family-friendly packages that are designed to be enjoyable for all ages. These packages include kid-friendly activities, comfortable accommodations, and family-oriented tours."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellation terms vary by destination and the specific suppliers involved. We will provide a detailed cancellation policy for your specific package before you make any payments."
  }
];

const FAQ = () => {
  return (
    <div className="">
      <div className="grid gap-12 lg:grid-cols-1">
        {/* <Reveal className="lg:col-span-1 text-center lg:text-left">
          <p className="text-[13px] font-light uppercase tracking-widest text-primary">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
            Common
            <br />
            <span className="italic-display text-primary">questions</span>
          </h2>
          <p className="mt-3 md:mt-5 text-[15px] font-light leading-relaxed text-muted-foreground">
            Everything you need to know about booking your dream journey with Maitry Holidays.
          </p>
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-[14px] font-medium text-foreground">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">?</span>
            More questions? <a href="#contact" className="text-primary underline underline-offset-4">Contact Us</a>
            <span><PhoneCall className="h-4 w-4 text-primary" /></span>
          </div>
          <div>
            <p className="text-primary mt-5">+91-8920909501 , +91-7041260720</p>
          </div>
        </Reveal> */}

        <Reveal delay={0.2} className="lg:col-span-1">
          <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-sm border border-foreground/5 bg-white px-4 md:px-6 transition-all hover:border-primary/20">
                <AccordionTrigger className="text-[15px] md:text-[16px] font-semibold text-foreground hover:no-underline hover:text-primary py-4 md:py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] md:text-[15px] font-light leading-relaxed text-muted-foreground pb-4 md:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </div>
  );
};

export default FAQ;
