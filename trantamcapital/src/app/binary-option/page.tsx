import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import BrokerCard from "@/components/BrokerCard";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Binary Options Platforms",
  description: "Explore binary options trading platforms. Expert reviews, risk warnings, and educational resources for binary options traders.",
};

const platforms = [
  {
    name: "BinaryPlatform A", type: "Binary Options", rating: 4.3,
    features: ["User-friendly platform", "Multiple asset classes", "Demo account available", "Fast withdrawals"],
    reviewHref: "/binary-option/platform-a", visitHref: "#",
    gradient: "linear-gradient(135deg, #C62828 0%, #B71C1C 100%)",
  },
  {
    name: "BinaryPlatform B", type: "Binary Options", rating: 4.1,
    features: ["High payouts up to 95%", "Mobile trading app", "60-second options", "24/7 support"],
    reviewHref: "#", visitHref: "#",
    gradient: "linear-gradient(135deg, #E84910 0%, #C93D0A 100%)",
  },
  {
    name: "BinaryPlatform C", type: "Binary Options", rating: 4.0,
    features: ["Turbo options", "Range of expiry times", "Technical indicators", "Video tutorials"],
    reviewHref: "#", visitHref: "#",
    gradient: "linear-gradient(135deg, #6A1B9A 0%, #4A148C 100%)",
  },
];

const steps = [
  { number: "01", title: "Choose an Asset", description: "Select the asset you want to trade — currency pairs, stocks, commodities, or cryptocurrencies." },
  { number: "02", title: "Set Expiry Time", description: "Choose how long your option will last — from 60 seconds to several hours or days." },
  { number: "03", title: "Predict Direction", description: "Predict whether the asset price will be higher or lower than the current price at expiry." },
  { number: "04", title: "Collect Profits", description: "If your prediction is correct, you receive a fixed payout (typically 70-95% of your investment)." },
];

export default function BinaryOption() {
  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">Binary Options Platforms</h1>
          <p className="text-sm text-text-light mt-2 max-w-[500px] mx-auto">
            Expert reviews of binary options trading platforms
          </p>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="py-8">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="p-5 bg-warning/10 border-2 border-warning/50 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <h3 className="text-lg font-bold text-warning mb-1">High Risk Warning</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Binary options trading carries a high level of risk and may not be suitable for all investors.
                  You could lose some or all of your invested capital. Never invest money you cannot afford to
                  lose. Past performance does not guarantee future results. Please ensure you fully understand
                  the risks involved and seek independent advice if necessary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionTitle title="Top Binary Options Platforms" subtitle="Compare leading binary options trading platforms" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {platforms.map((platform) => (
              <BrokerCard key={platform.name} {...platform} />
            ))}
          </div>
        </div>
      </section>

      {/* How Binary Options Work */}
      <section className="py-12 bg-section">
        <div className="max-w-[800px] mx-auto px-4">
          <SectionTitle title="How Binary Options Work" subtitle="Understanding the basics in 4 simple steps" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {steps.map((step) => (
              <Card key={step.number} className="relative pl-16">
                <div className="absolute left-4 top-5 text-3xl font-extrabold text-primary/20">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
