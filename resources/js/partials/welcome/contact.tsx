import {Head} from "@inertiajs/react";
import {useEffect} from "react";

export default function Contact() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Form submitted');
    };

    return (

        <>
            <Head>
                <script src="https://embed.homebotapp.com/lgw/v1/widget.js"></script>
            </Head>
            <div id="contact" className="bg-card mt-32 py-32">
                <div className="mx-auto grid grid-cols-2 max-w-7xl gap-16 px-8">
                    {/* Contact Details */}
                    <div>
                        <h2 className="text-primary mb-8 text-4xl font-semibold">Contact Details</h2>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm">
                                <div
                                    className="bg-primary flex h-12 w-12 items-center justify-center rounded-lg text-white">
                                    <PhoneIcon className="h-6 w-6"/>
                                </div>
                                <div>
                                    <div className="font-semibold">Phone</div>
                                    <div>(425) 900 6082 #101</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm">
                                <div
                                    className="bg-primary flex h-12 w-12 items-center justify-center rounded-lg text-white">
                                    <EnvelopeIcon className="h-6 w-6"/>
                                </div>
                                <div>
                                    <div className="font-semibold">Email</div>
                                    <div>info@loansbysheilla.com</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm">
                                <div
                                    className="bg-primary flex h-12 w-12 items-center justify-center rounded-lg text-white">
                                    <MapPinIcon className="h-6 w-6"/>
                                </div>
                                <div>
                                    <div className="font-semibold">Location</div>
                                    <div>14205 SE 36th St, STE 112, Bellevue, WA 98006</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm">
                                <div
                                    className="bg-primary flex h-12 w-12 items-center justify-center rounded-lg text-white">
                                    <ClockIcon className="h-6 w-6"/>
                                </div>
                                <div>
                                    <div className="font-semibold">Availability</div>
                                    <div>8:00 AM to 6:00 PM (Pacific Time)</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
                                <div className="font-semibold">Social Media</div>
                                <div className="flex gap-2">
                                    {['facebook', 'instagram', 'linkedin', 'youtube', 'tiktok'].map((social) => (
                                        <a
                                            key={social}
                                            href="#"
                                            target="_blank"
                                            className="bg-primary flex h-10 w-10 items-center justify-center rounded-xl text-white"
                                        >
                                            <span className="sr-only">{social}</span>
                                            <SocialIcon type={social} className="h-5 w-5"/>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <div className="rounded-2xl bg-white p-8 shadow-sm">
                        <h2 className="text-primary mb-8 text-4xl font-semibold">Get In Touch With Us</h2>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Name"
                                       className="rounded-lg border border-gray-200 px-4 py-2"/>
                                <input type="tel" placeholder="Phone"
                                       className="rounded-lg border border-gray-200 px-4 py-2"/>
                            </div>

                            <input type="email" placeholder="Email Address"
                                   className="rounded-lg border border-gray-200 px-4 py-2"/>

                            <textarea placeholder="Message" rows={4}
                                      className="rounded-lg border border-gray-200 px-4 py-2"/>

                            <div className="flex items-start gap-2">
                                <input type="checkbox" id="consent" className="mt-1.5"/>
                                <label htmlFor="consent" className="text-sm">
                                    I consent to receive <strong className="text-red-500"> SMS TEXT
                                    MESSAGES</strong> from
                                    <strong className="text-red-500"> LOANS BY SHEILLA</strong> (our message frequency
                                    may vary). Message & data rates may
                                    apply. Reply <strong className="text-red-500">STOP</strong> to unsubscribe from
                                    further messaging. Reply
                                    <strong className="text-red-500"> HELP</strong> for more information. See our Terms
                                    of Service & Privacy Policy.
                                </label>
                            </div>

                            <button type="submit"
                                    className="bg-primary mt-4 w-32 cursor-pointer rounded-full py-3 text-white">
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>
                <HomebotInlineScript/>

            </div>
        </>
    );
}

declare global {
    interface Window {
        Homebot?: any;
    }
}

const HomebotInlineScript = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.innerHTML = `
        (function (h,b) {
          var w = window, d = document, s = 'script', x, y;
          w['__hb_namespace'] = h;
          w[h] = w[h] || function () {
            (w[h].q = w[h].q || []).push(arguments)
          };
          y = d.createElement(s);
          x = d.getElementsByTagName(s)[0];
          y.async = 1;
          y.src = b;
          x.parentNode.insertBefore(y,x)
        })('Homebot','https://embed.homebotapp.com/lgw/v1/widget.js');

        window.Homebot && window.Homebot('#homebot_homeowner', '319cbc4bbc6649b7b8415dd0f3100a6fd9fe0e49490a9156', {
          mode: 'buyers-mode'
        });
      `;
        script.type = 'text/javascript';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
            const container = document.getElementById('homebot_homeowner');
            if (container) container.innerHTML = '';
        };
    }, []);

    return <div id="homebot_homeowner" className="w-full mt-24"/>;
};

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
        </svg>
    );
}

function EnvelopeIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
        </svg>
    );
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
        </svg>
    );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
    );
}

function SocialIcon({type, ...props}: { type: string } & React.SVGProps<SVGSVGElement>) {
    switch (type) {
        case 'facebook':
            return (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
            );
        case 'instagram':
            return (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
            );
        case 'linkedin':
            return (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
            );
        case 'youtube':
            return (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            );
        case 'tiktok':
            return (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
            );
        default:
            return null;
    }
}
