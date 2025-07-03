'use client';

import { useState } from 'react';
import { BookOpen, Download, ExternalLink, Search, Filter, Star, Clock, Eye, Play, FileText, Code, Video } from 'lucide-react';

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', color: 'bg-gray-100 text-gray-700' },
    { id: 'tutorial', name: 'Tutorials', color: 'bg-blue-100 text-blue-700' },
    { id: 'documentation', name: 'Documentation', color: 'bg-green-100 text-green-700' },
    { id: 'video', name: 'Videos', color: 'bg-red-100 text-red-700' },
    { id: 'tool', name: 'Tools', color: 'bg-purple-100 text-purple-700' },
    { id: 'template', name: 'Templates', color: 'bg-yellow-100 text-yellow-700' },
    { id: 'course', name: 'Courses', color: 'bg-indigo-100 text-indigo-700' },
  ];

  const resources = [
    {
      id: 1,
      title: 'Android Development Complete Guide',
      description: 'Comprehensive guide covering Android development from basics to advanced concepts with Kotlin and Jetpack Compose',
      category: 'tutorial',
      type: 'tutorial',
      author: 'GDG Lucknow Team',
      publishedDate: '2024-06-15',
      rating: 4.8,
      views: 1250,
      downloadCount: 890,
      tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Mobile'],
      difficulty: 'Intermediate',
      duration: '8 hours',
      featured: true,
      links: {
        view: '#',
        download: '#',
        external: '#'
      }
    },
    {
      id: 2,
      title: 'React Best Practices Checklist',
      description: 'Essential checklist for React developers covering performance, security, and code quality best practices',
      category: 'documentation',
      type: 'documentation',
      author: 'Priya Gupta',
      publishedDate: '2024-07-01',
      rating: 4.9,
      views: 2100,
      downloadCount: 1560,
      tags: ['React', 'JavaScript', 'Best Practices', 'Web Development'],
      difficulty: 'Beginner',
      duration: '2 hours',
      featured: true,
      links: {
        view: '#',
        download: '#',
        external: '#'
      }
    },
    {
      id: 3,
      title: 'Machine Learning Workshop Series',
      description: 'Complete video series covering ML fundamentals, algorithms, and practical implementations with Python',
      category: 'video',
      type: 'video',
      author: 'Dr. Amit Kumar',
      publishedDate: '2024-05-20',
      rating: 4.7,
      views: 3200,
      downloadCount: 0,
      tags: ['Machine Learning', 'Python', 'AI', 'Data Science'],
      difficulty: 'Advanced',
      duration: '12 hours',
      featured: false,
      links: {
        view: '#',
        external: '#'
      }
    },
    {
      id: 4,
      title: 'Flutter Project Template',
      description: 'Production-ready Flutter project template with state management, API integration, and best practices',
      category: 'template',
      type: 'template',
      author: 'Rahul Sharma',
      publishedDate: '2024-06-30',
      rating: 4.6,
      views: 980,
      downloadCount: 450,
      tags: ['Flutter', 'Template', 'Mobile', 'Dart'],
      difficulty: 'Intermediate',
      duration: '1 hour',
      featured: false,
      links: {
        view: '#',
        download: '#',
        external: '#'
      }
    },
    {
      id: 5,
      title: 'Google Cloud Platform Toolkit',
      description: 'Collection of scripts and tools for GCP deployment, monitoring, and management',
      category: 'tool',
      type: 'tool',
      author: 'Neha Srivastava',
      publishedDate: '2024-06-10',
      rating: 4.5,
      views: 1100,
      downloadCount: 320,
      tags: ['Google Cloud', 'DevOps', 'Automation', 'Scripts'],
      difficulty: 'Advanced',
      duration: '3 hours',
      featured: false,
      links: {
        view: '#',
        download: '#',
        external: '#'
      }
    },
    {
      id: 6,
      title: 'Complete Web Development Course',
      description: 'Full-stack web development course covering HTML, CSS, JavaScript, React, and Node.js',
      category: 'course',
      type: 'course',
      author: 'GDG Lucknow',
      publishedDate: '2024-04-15',
      rating: 4.9,
      views: 4500,
      downloadCount: 2100,
      tags: ['Web Development', 'JavaScript', 'React', 'Node.js'],
      difficulty: 'Beginner',
      duration: '24 hours',
      featured: true,
      links: {
        view: '#',
        download: '#',
        external: '#'
      }
    },
    {
      id: 7,
      title: 'API Design Guidelines',
      description: 'Comprehensive guide for designing RESTful APIs with best practices and examples',
      category: 'documentation',
      type: 'documentation',
      author: 'Tech Team',
      publishedDate: '2024-07-05',
      rating: 4.7,
      views: 1800,
      downloadCount: 890,
      tags: ['API', 'REST', 'Backend', 'Design'],
      difficulty: 'Intermediate',
      duration: '4 hours',
      featured: false,
      links: {
        view: '#',
        download: '#',
        external: '#'
      }
    },
    {
      id: 8,
      title: 'DevOps Automation Scripts',
      description: 'Collection of automation scripts for CI/CD, deployment, and infrastructure management',
      category: 'tool',
      type: 'tool',
      author: 'DevOps Team',
      publishedDate: '2024-05-25',
      rating: 4.4,
      views: 750,
      downloadCount: 280,
      tags: ['DevOps', 'Automation', 'CI/CD', 'Scripts'],
      difficulty: 'Advanced',
      duration: '5 hours',
      featured: false,
      links: {
        view: '#',
        download: '#',
        external: '#'
      }
    }
  ];

  const filteredResources = () => {
    return resources.filter(resource => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
      const matchesTab = activeTab === 'all' || 
                        (activeTab === 'featured' && resource.featured) ||
                        (activeTab === 'recent' && new Date(resource.publishedDate) > new Date('2024-06-01'));
      return matchesSearch && matchesCategory && matchesTab;
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getResourceIcon = (type: string) => {
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  type Resource = {
    id: number;
    title: string;
    description: string;
    category: string;
    type: string;
    author: string;
    publishedDate: string;
    rating: number;
    views: number;
    downloadCount: number;
    tags: string[];
    difficulty: string;
    duration: string;
    featured: boolean;
    links: {
      view?: string;
      download?: string;
      external?: string;
    };
  };

  const ResourceCard = ({ resource }: { resource: Resource }) => (
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
          {resource.tags.map((tag, index) => (
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
              <span>{resource.duration}</span>
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
              {resource.links.view && (
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>View</span>
                </button>
              )}
              {resource.links.download && (
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center space-x-1">
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
              )}
              {resource.links.external && (
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center space-x-1">
                  <ExternalLink className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-green-600 to-red-600 bg-clip-text text-transparent">
                Learning Resources
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our curated collection of tutorials, documentation, tools, and templates to accelerate your learning journey.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Resources ({resources.length})
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'featured'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Featured ({resources.filter(r => r.featured).length})
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'recent'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Recent ({resources.filter(r => new Date(r.publishedDate) > new Date('2024-06-01')).length})
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-3 text-black border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[200px]"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources().map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>

        {/* Empty State */}
        {filteredResources().length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600">
              {searchTerm || selectedCategory !== 'all' 
                ? 'Try adjusting your search or filter criteria'
                : 'No resources available at the moment'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage;