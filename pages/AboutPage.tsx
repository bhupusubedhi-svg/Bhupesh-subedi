
import React from 'react';
import { TeamMember } from '../types';
import TeamMemberCard from '../components/TeamMemberCard';

const teamMembers: TeamMember[] = [
  {
    name: "Aarav Subedi",
    title: "Founder & Chief Financial Advisor",
    bio: "With over 15 years of experience in SME finance, Aarav founded the firm to bring corporate-level financial expertise to growing businesses.",
    imageUrl: "https://picsum.photos/id/1005/200/200"
  },
  {
    name: "Priya Sharma",
    title: "Head of Tax & Compliance",
    bio: "Priya is a certified tax professional who specializes in navigating the complex tax landscapes of Nepal and India, ensuring clients are always compliant.",
    imageUrl: "https://picsum.photos/id/1011/200/200"
  },
  {
    name: "Sameer Joshi",
    title: "Senior Accountant & Systems Expert",
    bio: "Sameer excels at implementing efficient bookkeeping systems and internal controls, helping clients streamline their daily operations.",
    imageUrl: "https://picsum.photos/id/1025/200/200"
  }
];

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="bg-[#003366] py-16 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold">About Subedi Finance Solution</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">Your Dedicated Partner in SME Financial Excellence</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-[#003366] mb-4">Our Story</h2>
                    <p className="text-gray-600 mb-4">
                        Founded in 2015, Subedi Finance Solution was born from a simple observation: Small and Medium Enterprises are the backbone of our economy, yet they often lack access to the high-level financial expertise needed to thrive. We set out to bridge that gap.
                    </p>
                    <p className="text-gray-600">
                        Today, we are a trusted advisor to dozens of SMEs, helping them navigate complex financial challenges, from day-to-day bookkeeping to long-term strategic planning. We are passionate about empowering business owners to focus on what they do best – growing their business.
                    </p>
                </div>
                <div>
                    <img src="https://picsum.photos/600/400?image=12" alt="Office meeting" className="rounded-lg shadow-xl"/>
                </div>
            </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#003366] mb-4">Our Mission</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto italic">
            "Delivering robust financial strategies that foster SME growth through precise bookkeeping, real-time reporting, efficient stock tracking, ironclad internal controls, and hassle-free tax/VAT filings."
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#003366] mb-12">Meet Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
