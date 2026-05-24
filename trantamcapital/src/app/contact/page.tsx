import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { HiMail, HiPhone, HiLocationMarker, HiClock } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with ProTradeVision. Send us a message or find our contact information.",
};

const contactInfo = [
  { icon: HiMail, label: "Email", value: "contact@protradevision.com", href: "mailto:contact@protradevision.com" },
  { icon: HiPhone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: HiLocationMarker, label: "Address", value: "London, United Kingdom" },
  { icon: HiClock, label: "Business Hours", value: "Mon — Fri, 9:00 AM — 6:00 PM GMT" },
];

export default function Contact() {
  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">Contact Us</h1>
          <p className="text-sm text-text-light mt-2 max-w-[500px] mx-auto">
            Have a question or feedback? We&apos;d love to hear from you
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <SectionTitle title="Send Us a Message" subtitle="We typically respond within 24 hours" />
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <SectionTitle title="Contact Information" />
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-4 rounded-lg border border-border bg-white">
                    <item.icon className="text-primary text-xl mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-text-primary">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-text-secondary hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-text-secondary">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-5 p-5 rounded-lg border border-border bg-white text-center">
                <HiLocationMarker className="text-3xl text-primary mx-auto mb-2" />
                <p className="text-sm text-text-secondary">London, United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
