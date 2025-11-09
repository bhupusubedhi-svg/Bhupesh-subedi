
import React from 'react';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-bold text-[#003366]">{member.name}</h3>
      <p className="text-[#00A651] font-semibold mb-2">{member.title}</p>
      <p className="text-gray-600">{member.bio}</p>
    </div>
  );
};

export default TeamMemberCard;
