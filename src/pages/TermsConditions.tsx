import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import FloatingActions from "@/components/site/FloatingActions";
import { Reveal } from "@/lib/motion";
import { useEffect } from "react";
import termsBg from "@/assets/images/68d584996cc7bd69eb58cdda_package-image6.webp";
import {
    FileText,
    CreditCard,
    XCircle,
    RefreshCcw,
    AlertTriangle,
    CheckCircle2,
    Info,
    Calendar,
    IndianRupee
} from "lucide-react";

const TermsConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <AnnouncementBar />
            <Navbar />

            <main
                className="relative isolate "
                style={{
                    backgroundImage: `url(${termsBg})`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 -z-10 bg-black/60" />

                {/* Decorative Background */}
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-primary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
                </div>

                {/* Hero Section */}
                <div className="container-px pt-32 pb-16 md:pt-48 md:pb-24">
                    <Reveal>
                        <div className="flex items-center gap-2 text-white font-medium tracking-wider uppercase text-[12px] mb-4">
                            <FileText className="w-4 h-4" />
                            <span>Policies & Agreements</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-8">
                            Terms & <span className="italic-display text-primary">Conditions</span>
                        </h1>
                        <p className="text-xl text-white/90 font-light max-w-3xl leading-relaxed">
                            Please review our booking, cancellation, and operational policies carefully to ensure a smooth and transparent travel experience with Maitry Holidays.
                        </p>
                    </Reveal>
                </div>

                {/* Content Section */}
                <div className="container-px pb-32">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-8 md:p-12 shadow-card border border-primary/20">
                        <div className="flex flex-col gap-12">
                            {/* 1. Booking Process */}
                            <div>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500">
                                        <CreditCard className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">Booking Condition & Process</h2>
                                        <p className="text-muted-foreground text-sm">Payment schedules and methods</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div className="p-6 rounded-2xl bg-brand-cream/100 border border-brand-cream">
                                            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                                <IndianRupee className="w-4 h-4 text-primary" /> Payment Schedule
                                            </h3>
                                            <ul className="space-y-3 text-foreground/90 text-[15px]">
                                                <li className="flex gap-3"><span className="text-primary font-bold">•</span> 20% token amount to initiate the booking.</li>
                                                <li className="flex gap-3"><span className="text-primary font-bold">•</span> 40% after confirmation and receiving hotel vouchers.</li>
                                                <li className="flex gap-3"><span className="text-primary font-bold">•</span> Final 40% during the tour before the trip starts.</li>
                                            </ul>
                                        </div>
                                        <div className="p-6 rounded-2xl bg-brand-cream/100 border border-brand-cream">
                                            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-primary" /> Payment Methods
                                            </h3>
                                            <p className="text-foreground/90 text-[15px]">
                                                Payable at New Delhi via DD, Cash, Cheque, NEFT, Credit Card, or Debit Card.
                                                <span className="block mt-2 text-[13px] text-primary/80 italic font-medium">* 2.50% extra charge applies for Debit/Credit cards.</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 bg-brand-cream/100 border border-brand-cream rounded-2xl text-foreground/90 text-[15px] p-4">
                                        <p className="flex gap-4"><CheckCircle2 className="w-5 h-5 shrink-0 text-primary" /> Full payment is required on confirmation of all services and before departure.</p>
                                        <p className="flex gap-4"><CheckCircle2 className="w-5 h-5 shrink-0 text-primary" /> Package cannot be combined with any other offers.</p>
                                        <p className="flex gap-4"><CheckCircle2 className="w-5 h-5 shrink-0 text-primary" /> Not valid during national holidays, festivals & long weekends.</p>
                                        <p className="flex gap-4"><CheckCircle2 className="w-5 h-5 shrink-0 text-primary" /> In case we are unable to get confirmations, the deposited amount shall be fully refunded.</p>
                                        <p className="flex gap-4"><CheckCircle2 className="w-5 h-5 shrink-0 text-primary" /> The company is not responsible for any loss of luggage or personal belongings during the trip.</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-border" />

                            {/* 2. Cancellation & Postponing */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500">
                                            <XCircle className="w-7 h-7" />
                                        </div>
                                        <h2 className="text-2xl font-semibold text-foreground">Cancellation Policy</h2>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center py-3 border-b border-border">
                                            <span className="text-foreground/90 font-medium">Once booking is made</span>
                                            <span className="font-semibold text-primary">30% Charges</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-border">
                                            <span className="text-foreground/90 font-medium">30 - 15 days before check-in</span>
                                            <span className="font-semibold text-primary">50% Charges</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-border">
                                            <span className="text-foreground/90 font-medium">15 - 07 days before check-in</span>
                                            <span className="font-semibold text-primary">75% Charges</span>
                                        </div>
                                        <div className="flex justify-between items-center py-3 border-b border-border">
                                            <span className="text-foreground/90 font-medium">07 days before check-in</span>
                                            <span className="font-semibold text-primary">100% Charges</span>
                                        </div>
                                        <p className="text-foreground/70 font-medium text-[13px] pt-4 italic">
                                            * 25% of the total cost is strictly non-refundable.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500">
                                            <RefreshCcw className="w-7 h-7" />
                                        </div>
                                        <h2 className="text-2xl font-semibold text-foreground">Prepone & Postpone</h2>
                                    </div>
                                    <ul className="space-y-4 text-foreground/90 text-[15px]">
                                        <li className="flex gap-3"><Info className="w-5 h-5 shrink-0 text-primary" /> Inform us at least 10 days in advance via mail for any date changes.</li>
                                        <li className="flex gap-3"><Info className="w-5 h-5 shrink-0 text-primary" /> Postponement/Preponement charges depend on hotel availability and policies.</li>
                                        <li className="flex gap-3"><Info className="w-5 h-5 shrink-0 text-primary" /> No plan changes accepted within 10 days of travel except in cases of adverse weather or strikes.</li>
                                        <li className="flex gap-3"><Info className="w-5 h-5 shrink-0 text-primary" /> Advance payments can be utilized within 1 year from the date of payment.</li>
                                        <li className="flex gap-3"><Info className="w-5 h-5 shrink-0 text-primary" /> Costing is subject to season/off-season fluctuations.</li>
                                    </ul>
                                </div>
                            </div>

                            <hr className="border-border" />

                            {/* 3. Important Notes & Local Conditions */}
                            <div>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500">
                                        <AlertTriangle className="w-7 h-7" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Important Note</h2>
                                </div>
                                <div className="flex flex-col lg:flex-row lg:divide-x divide-y lg:divide-y-0 divide-border">
                                    <div className="space-y-4 flex-1 py-6 lg:py-0 lg:pr-8">
                                        <h3 className="font-semibold text-foreground flex items-center gap-2 underline decoration-primary/30 underline-offset-4">Hotels & Services</h3>
                                        <p className="font-bold text-black text-[14px] leading-relaxed">
                                            Hotels in Himachal and Kashmir are categorized based on location and service quality, not standard star ratings (1*-5*). Facilities at hill stations may differ from developed cities.
                                        </p>
                                        <p className="font-bold text-black text-[14px] leading-relaxed">
                                            Check-in/out times are as per hotel policy (standard 02 PM - 12 PM). Early check-ins/late check-outs must be settled directly with the hotel.
                                        </p>
                                    </div>
                                    <div className="space-y-4 flex-1 py-6 lg:py-0 lg:px-8">
                                        <h3 className="font-semibold text-foreground flex items-center gap-2 underline decoration-primary/30 underline-offset-4">Amendments</h3>
                                        <p className="font-bold text-black text-[14px] leading-relaxed">
                                            Executive-quoted hotels can be changed, but differences in cost will be levied. Changes at the last moment or during check-in are subject to availability and additional charges.
                                        </p>
                                        <p className="font-bold text-black text-[14px] leading-relaxed">
                                            Sightseeing schedules may be adjusted due to monument closures to ensure smooth execution.
                                        </p>
                                    </div>
                                    <div className="space-y-4 flex-1 pt-6 lg:pt-0 lg:pl-8">
                                        <h3 className="font-semibold text-foreground flex items-center gap-2 underline decoration-primary/30 underline-offset-4">Unforeseen Events</h3>
                                        <p className="text-black font-bold text-[14px] leading-relaxed">
                                            We are not responsible for cancellations due to bad weather, strikes, accidents, or snowfall. Rates may change due to government taxes, fuel hikes, or hotel rate fluctuations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-border" />

                            {/* 4. General Terms & ID Requirements */}
                            <div>
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500">
                                        <Info className="w-7 h-7" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-semibold text-foreground">General Terms</h2>
                                </div>
                                <div className="prose prose-slate max-w-none">
                                    <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-foreground/90 text-[15px]">
                                        <li className="list-none flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-primary" /> Rates valid for Indian nationals only unless specified.</li>
                                        <li className="list-none flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-primary" /> Base category rooms are booked unless specified. Differences apply for higher categories.</li>
                                        <li className="list-none flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-primary" /> No refunds for unutilized services in a tour package.</li>
                                        <li className="list-none flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-primary" /> Valid Photo ID (Aadhar/VoterID/Passport) is mandatory. PAN card is NOT valid for check-in.</li>
                                        <li className="list-none flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-primary" /> Meal timings are to be followed strictly; no refunds for un-availed meals.</li>
                                        <li className="list-none flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 text-primary" /> Air tickets for group packages may be delivered 2 days prior to departure.</li>
                                    </ul>
                                </div>
                            </div>

                            <hr className="border-border" />

                            {/* Seasonal Note & Acceptance */}
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-4 w-fit mx-auto px-4 py-1 rounded-full text-[12px] font-bold uppercase tracking-widest text-primary bg-primary/10">
                                    <Calendar className="w-4 h-4" />
                                    <span>Peak Season Alert</span>
                                </div>
                                <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground/90 max-w-4xl mx-auto mb-6">
                                    During Exam, New Year (Dec 15th - Jan 15th), long weekends, and festivals, high-season supplements apply to all hotel rates. Confirmation depends on real-time airfare and hotel availability.
                                </p>
                                <div className="bg-brand-cream border-l-4 border-primary p-6 rounded-r-xl max-w-3xl mx-auto text-left">
                                    <p className="text-[15px] font-medium text-foreground italic mb-2">
                                        "By accepting our quotation, you acknowledge that you have read and agree to all booking terms, payment, and cancellation policies."
                                    </p>
                                    <p className="text-[13px] font-light text-muted-foreground">
                                        Visit this page periodically for updates to our terms.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <Footer />
            <FloatingActions />
        </div>
    );
};

export default TermsConditions;
