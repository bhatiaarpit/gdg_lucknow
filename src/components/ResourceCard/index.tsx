import React from 'react';
import { Star, Clock, Eye, Download, ExternalLink, BookOpen, Video, FileText, Code, Play } from 'lucide-react';

// Define the resource type
type ResourceType = 'video' | 'tutorial' | 'documentation' | 'tool' | 'template' | 'course';

type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

type ResourceLinks = {
  view?: string;
  download?: string;
  external?: string;
};

type Resource = {
  id: number;
  title: string;
  author: string;
  description: string;
  type: ResourceType;
  rating: number;
  tags: string[];
  views: number;
  downloadCount: number;
  duration?: string;
  difficulty: DifficultyLevel;
  publishedDate: string;
  featured?: boolean;
  links?: ResourceLinks;
};

type ResourceCardProps = {
  resource: Resource;
};

export const ResourceCard = ({ resource }: ResourceCardProps) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getResourceIcon = (type: ResourceType): React.ReactElement => {
    switch (type) {
      case 'video': return <Video className="h-5 w-5" />;
      case 'tutorial': return <BookOpen className="h-5 w-5" />;
      case 'documentation': return <FileText className="h-5 w-5" />;
      case 'tool': return <Code className="h-5 w-5" />;
      case 'template': return <Download className="h-5 w-5" />;
      case 'course': return <Play className="h-5 w-5" />;
      default: return <BookOpen className="h-5 w-5" />;
    }
  };

  const getDifficultyColor = (difficulty: DifficultyLevel): string => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden ${resource.featured ? 'ring-2 ring-blue-500' : ''}`}>
      {resource.featured && (
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs font-semibold px-3 py-1 text-center">
          Featured Resource
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              {getResourceIcon(resource.type)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 leading-tight">{resource.title}</h3>
              <p className="text-sm text-gray-500 mt-1">by {resource.author}</p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold text-gray-700">{resource.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{resource.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {Array.isArray(resource.tags) && resource.tags.map((tag: string, index: number) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{resource.views}</span>
            </div>
            {resource.downloadCount > 0 && (
              <div className="flex items-center space-x-1">
                <Download className="h-4 w-4" />
                <span>{resource.downloadCount}</span>
              </div>
            )}
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{resource.duration ? resource.duration : '-'}</span>
            </div>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(resource.difficulty)}`}>
            {resource.difficulty}
          </span>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {formatDate(resource.publishedDate)}
            </span>
            <div className="flex space-x-2">
              {resource.links && resource.links.view && (
                <a
                  href={resource.links.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center space-x-1"
                >
                  <Eye className="h-4 w-4" />
                  <span>View</span>
                </a>
              )}
              {resource.links && resource.links.download && (
                <a
                  href={resource.links.download}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center space-x-1"
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </a>
              )}
              {resource.links && resource.links.external && (
                <a
                  href={resource.links.external}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center space-x-1"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};