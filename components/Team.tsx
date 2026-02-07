import React from 'react';
import { Users, Briefcase, GraduationCap } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Mohammad Fard",
      role: "Engineering Lead",
      bio: "Master of Aerospace Engineering with 15+ years experience in industries. Expert in development of innovative systems and Large CAPEX project management.",
      image: "/images/mohammad-fard.jpg"
    },
    {
      name: "Dr. Amir Zomorodian",
      role: "CEO & Material Scientist",
      bio: "Experienced Researcher with a demonstrated history in international research groups. Published in high-rank journals with extensive conference participation.",
      image: "/images/amir-zomorodian.jpg"
    },
    {
      name: "Usef Alem",
      role: "Master of Material Engineer",
      bio: "Technical knowledge and industry experience for 17+ years. Project Manager carrying out various launching production lines in Chemical and Material industries.",
      image: "https://picsum.photos/400/400?random=3"
    }
  ];

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-hydrixon-primary font-semibold tracking-wide uppercase">Leadership</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Meet the Team
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center p-8 border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="h-32 w-32 rounded-full overflow-hidden mb-6 border-4 border-slate-100 shadow-inner bg-slate-200">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
              <p className="text-hydrixon-primary font-medium mb-4">{member.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;