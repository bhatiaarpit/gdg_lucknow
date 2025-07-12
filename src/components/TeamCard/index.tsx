import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Image from 'next/image';

// Define a more specific type for images
type ImageSource = string | { src: string } | null | undefined;

interface TeamMember {
  image?: ImageSource;
  name: string;
  role: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  const fallbackImage = '/images/default-profile.png';
  
  const getImageSrc = (image: ImageSource): string => {
    if (!image) return fallbackImage;
    
    // Handle object with src property (like imported images)
    if (typeof image === 'object' && image.src) {
      return image.src;
    }
    
    // Handle string URLs
    if (typeof image === 'string') {
      return image.startsWith('http') || image.startsWith('/') ? image : fallbackImage;
    }
    
    return fallbackImage;
  };

  const imageUrl = getImageSrc(member.image);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-64 text-center border border-gray-200">
      {/* Top Image */}
      <div className="w-full h-72 relative">
        <Image
          src={imageUrl}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          // Add error handling for broken images
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = fallbackImage;
          }}
        />
      </div>

      {/* Name and Role */}
      <div className="py-4 px-3">
        <h3 className="text-gray-900 font-semibold text-lg">{member.name}</h3>
        <p className="text-gray-500 text-sm">{member.role}</p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-5 pb-4">
        {member.social.github && (
          <a
            href={`https://github.com/${member.social.github}`}
            className="text-gray-600 hover:text-black transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name}'s GitHub profile`}
          >
            <Github className="w-4 h-4" />
          </a>
        )}
        {member.social.linkedin && (
          <a
            href={`https://linkedin.com/in/${member.social.linkedin}`}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name}'s LinkedIn profile`}
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
        {member.social.twitter && (
          <a
            href={`https://twitter.com/${member.social.twitter}`}
            className="text-gray-600 hover:text-blue-400 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name}'s Twitter profile`}
          >
            <Twitter className="w-4 h-4" />
          </a>
        )}
        {member.social.email && (
          <a
            href={`mailto:${member.social.email}`}
            className="text-gray-600 hover:text-red-500 transition-colors duration-200"
            aria-label={`Email ${member.name}`}
          >
            <Mail className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;