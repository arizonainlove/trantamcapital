import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Trading Tools",
  description: "Essential trading tools including economic calendar, position size calculator, profit/loss calculator, currency converter, margin calculator, and pip calculator.",
};

const tools = [
  {
    title: "Economic Calendar",
    description: "Stay informed about key economic events, central bank decisions, and market-moving data releases that impact your trading.",
    icon: "📅",
  },
  {
    title: "Position Size Calculator",
    description: "Calculate the optimal position size based on your account balance, risk tolerance, and stop-loss distance.",
    icon: "📐",
  },
  {
    title: "Profit / Loss Calculator",
    description: "Estimate potential profit or loss for any trade before entering, helping you manage risk effectively.",
    icon: "💰",
  },
  {
    title: "Currency Converter",
    description: "Convert between major currencies using real-time exchange rates for quick and accurate calculations.",
    icon: "🔄",
  },
  {
    title: "Margin Calculator",
    description: "Determine the margin required to open and maintain leveraged positions across different asset classes.",
    icon: "📊",
  },
  {
    title: "Pip Calculator",
    description: "Calculate the monetary value of a pip movement for any currency pair based on your trade size.",
    icon: "📏",
  },
];

export default function Tools() {
  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">Trading Tools</h1>
          <p className="text-sm text-text-light mt-2 max-w-[500px] mx-auto">
            Essential tools to help you trade smarter and manage risk effectively
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((tool) => (
              <Card key={tool.title} className="text-center h-full">
                <span className="text-4xl block mb-4">{tool.icon}</span>
                <h3 className="text-lg font-bold text-text-primary mb-2">{tool.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{tool.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
