import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about TrantamCapital's mission, team, and story. Your trusted source for forex, crypto, and binary options information.",
};

const values = [
  { title: "Integrity", description: "We provide unbiased, honest reviews and information. Our readers trust us because we prioritize transparency in everything we do." },
  { title: "Education", description: "We believe informed traders are successful traders. Our educational content empowers traders of all levels to make better decisions." },
  { title: "Innovation", description: "We continuously evolve our platform and content to reflect the latest market developments and technological advancements." },
  { title: "Community", description: "We foster a community of traders who share knowledge, experiences, and insights to help each other grow." },
];

const team = [
  { name: "Alex Tran", role: "Founder & Lead Analyst", bio: "15+ years of experience in financial markets. Former institutional trader specializing in forex and crypto markets." },
  { name: "Sarah Chen", role: "Senior Market Analyst", bio: "Expert in technical analysis and market research. Provides daily market commentary and trading insights." },
  { name: "Michael Roberts", role: "Content Director", bio: "Specializes in creating educational content for beginner traders. Makes complex trading concepts easy to understand." },
];

export default function About() {
  return (
    <>
      <section className="bg-dark py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-[28px] md:text-[36px] font-extrabold text-white">About TrantamCapital</h1>
          <p className="text-sm text-text-light mt-2 max-w-[500px] mx-auto">
            Your trusted source for trading information since 2024
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12">
        <div className="max-w-[800px] mx-auto px-4">
          <SectionTitle title="Our Story" subtitle="How TrantamCapital began" />
          <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
            <p>
              TrantamCapital was founded in 2024 with a simple mission: to provide traders with
              honest, unbiased, and comprehensive information about forex brokers, cryptocurrency
              exchanges, and binary options platforms.
            </p>
            <p>
              We noticed that most review sites were either outdated, biased toward affiliates, or
              too complex for beginner traders. We set out to create a resource that puts the
              trader&apos;s interests first — with transparent ratings, detailed comparisons, and
              educational content that actually helps people make informed decisions.
            </p>
            <p>
              Today, TrantamCapital serves over 100,000 monthly readers worldwide, providing
              expert analysis, market news, and trading education across all major markets.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 bg-section">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-bold text-text-primary mb-3">Our Mission</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                To empower traders worldwide with the knowledge, tools, and insights they need to
                navigate financial markets confidently and make informed trading decisions.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-bold text-text-primary mb-3">Our Vision</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                To become the most trusted source of trading information globally, known for our
                integrity, accuracy, and commitment to trader education.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionTitle title="Our Core Values" subtitle="What drives everything we do" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <h3 className="text-lg font-bold text-text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 bg-section">
        <div className="max-w-[1200px] mx-auto px-4">
          <SectionTitle title="Meet Our Team" subtitle="The experts behind TrantamCapital" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-1">{member.name}</h3>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-sm text-text-secondary leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12">
        <div className="max-w-[800px] mx-auto px-4">
          <SectionTitle title="Our Journey" subtitle="Key milestones in our growth" />
          <div className="space-y-6">
            {[
              { year: "2024", title: "Foundation", description: "TrantamCapital was founded with a mission to provide honest trading information." },
              { year: "2025", title: "Growth", description: "Expanded to cover 50+ brokers and exchanges. Reached 50,000 monthly readers." },
              { year: "2026", title: "Milestone", description: "Surpassed 100,000 monthly readers. Launched comprehensive educational resources and trading tools." },
            ].map((item) => (
              <div key={item.year} className="flex gap-5 p-5 rounded-lg border border-border bg-white">
                <div className="text-center shrink-0">
                  <div className="text-lg font-extrabold text-primary">{item.year}</div>
                  <div className="w-[2px] h-full bg-primary/20 mx-auto mt-2" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
