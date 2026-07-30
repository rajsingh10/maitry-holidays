import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import AnnouncementBar from "@/components/site/AnnouncementBar";
import FloatingActions from "@/components/site/FloatingActions";
import { Reveal } from "@/lib/motion";
import { useEffect } from "react";
import privacyBg from "@/assets/images/privacy-bg.png";
import { ShieldCheck, Info, Users, Lock, Clock, Mail } from "lucide-react";

const PrivacyPolicy = () => {
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
                    backgroundImage: `url(${privacyBg})`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                }}
            >
                {/* Background Decorative Elements */}
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-[#ff80b5] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
                </div>

                {/* Hero Section */}
                <div className="container-px pt-32 pb-16 md:pt-48 md:pb-24">
                    <Reveal>
                        <div className="flex items-center gap-2 text-foreground font-bold tracking-wider uppercase text-[12px] mb-4">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Trust & Safety</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-semibold text-foreground tracking-tight mb-8">
                            Privacy <span className="italic-display text-primary">Policy</span>
                        </h1>
                        <p className="text-xl  font-semibold text-foreground font-light max-w-3xl leading-relaxed">
                            At Shrishti Trip(Maitry Holidays), we are committed to protecting your personal information and being transparent about how we handle your data.
                        </p>
                    </Reveal>
                </div>

                {/* Content Section */}
                <div className="container-px pb-32">
                    <div className="grid gap-8">
                        {/* Section 1: Data Collection */}
                        <Reveal delay={0.1}>
                            <div className="group relative overflow-hidden rounded-[2.5rem] bg-white p-8 md:p-12 shadow-card transition-all hover:shadow-2xl border border-primary/20">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="flex h-14 w-14  shrink-0 items-center justify-center rounded-2xl bg-primary text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                        <Info className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold text-foreground mb-4">Information Collection & Usage</h2>
                                        <p className="text-[16px] md:text-[18px] text-muted-foreground leading-relaxed font-light">
                                            While you access this Site, certain personal information pertaining to the users, such as name, address etc. can or may be used for statistical and/or other purposes. In addition other information like Internet protocol (IP) addresses, navigation paths on the Site, the systems and programs used to access the site and the time spent on the site, along with other similar information, may be stored on our servers and maybe subsequently used for analytical purposes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Section 2: Assurance */}
                        <Reveal delay={0.2}>
                            <div className="group relative overflow-hidden rounded-[2.5rem] bg-white p-8 md:p-12 shadow-card transition-all hover:shadow-2xl border border-primary/20">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                        <ShieldCheck className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold text-foreground mb-4">Our Commitment</h2>
                                        <p className="text-[16px] md:text-[18px] text-muted-foreground leading-relaxed font-light">
                                            We encourage the users of the Site to review our Privacy Policy, and become familiar with it, and at the same time we would also like to assure our users that we do not sell or rent our customers' personal information to third parties.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Section 3: Disclosure */}
                        <Reveal delay={0.3}>
                            <div className="group relative overflow-hidden rounded-[2.5rem] bg-white p-8 md:p-12 shadow-card transition-all hover:shadow-2xl border border-primary/20">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                                        <Users className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold text-foreground mb-4">Disclosure to Travel Suppliers</h2>
                                        <p className="text-[16px] md:text-[18px] text-muted-foreground leading-relaxed font-light mb-4">
                                            Any personally identifiable information that the users submit while using Shrishti Trip will ONLY be disclosed to our travel suppliers who are linked directly/indirectly to the bookings of the users.
                                        </p>
                                        <div className="p-4 rounded-xl bg-brand-cream border-l-4 border-primary">
                                            <p className="text-[15px] font-medium text-foreground italic">
                                                "We will not disclose, sell, share or in any way reveal user information to any other third party."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Section 4: Security */}
                        <Reveal delay={0.4}>
                            <div className="group relative overflow-hidden rounded-[2.5rem] bg-brand-dark text-white p-8 md:p-12 shadow-soft transition-all">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                                        <Lock className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4">Technical & Physical Security</h2>
                                        <p className="text-[16px] md:text-[18px] text-white/70 leading-relaxed font-light mb-6">
                                            We have implemented appropriate administrative, technical, and physical security procedures to help protect the personal information our users provide to us. To prevent unauthorized access, maintain data accuracy, and ensure correct use of information, we will employ Internet security methods and technologies that are considered to be industry standards.
                                        </p>
                                        <p className="text-white/50 text-[14px]">
                                            * While no site can guarantee 100% security, we are fully committed to protecting your info with standard-setting procedures.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Section 5 & 6: Policy Updates */}
                        <Reveal delay={0.5}>
                            <div className="group relative overflow-hidden rounded-[2.5rem] bg-white p-8 md:p-12 shadow-card transition-all hover:shadow-2xl border border-primary/20">
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div>
                                        <div className="flex items-center gap-3 mb-6 ">
                                            <Clock className="w-6 h-6 text-primary" />
                                            <h2 className="text-2xl font-semibold text-foreground">Periodic Reviews</h2>
                                        </div>
                                        <p className="text-[16px] text-muted-foreground leading-relaxed font-light">
                                            We will advise our users to bookmark this page and/or periodically review it to ensure that they have the latest version. We keep revisiting our Privacy Policy from time to time, and we may make periodic changes to the policy in connection with that review.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <ShieldCheck className="w-6 h-6 text-primary" />
                                            <h2 className="text-2xl font-semibold text-foreground">Our Commitment</h2>
                                        </div>
                                        <p className="text-[16px] text-muted-foreground leading-relaxed font-light">
                                            Regardless of later updates, we assure our users our total commitment to the privacy practices described to them in this Privacy Policy at the time when they provided their personal information on the site.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Section 7: Contact */}
                        <Reveal delay={0.6}>
                            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-foreground p-8 md:p-16 text-center text-white">
                                <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

                                <h2 className="text-3xl md:text-5xl font-semibold mb-6">Additional Questions?</h2>
                                <p className="text-lg md:text-xl text-white/80 font-light mb-10 max-w-2xl mx-auto">
                                    If you have any additional questions or concerns regarding our disclaimer, please email us and we'll respond as soon as Possible.
                                </p>
                                <a
                                    href="mailto:maitry.holidays13@gamil .Com"
                                    className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-brand-cream transition-colors shadow-xl"
                                >
                                    <Mail className="w-5 h-5" />
                                    maitry.holidays13@gamil .Com
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Bottom Decorative Blur */}
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
                </div>
            </main>

            <Footer />
            <FloatingActions />
        </div>
    );
};

export default PrivacyPolicy;
