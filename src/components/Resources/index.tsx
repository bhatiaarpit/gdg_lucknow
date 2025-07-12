'use client';

import React, { useState } from 'react';
import { BookOpen, Search, Filter } from 'lucide-react';
import { ResourceCard } from '@/components/ResourceCard';
import resourcesData from '@/Data/Resources.js'; 

// Define types for the resource data
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
  category: string;
  links?: ResourceLinks;
};

type Category = {
  id: string;
  name: string;
};

type ResourcesData = {
  categories: Category[];
  resources: Resource[];
};

// Type for active tab
type ActiveTab = 'all' | 'featured' | 'recent';

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Type assertion for imported data
  const { categories, resources }: ResourcesData = resourcesData as ResourcesData;

  const filteredResources = (): Resource[] => {
    return resources.filter((resource: Resource) => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           resource.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
      const matchesTab = activeTab === 'all' || 
                        (activeTab === 'featured' && resource.featured) ||
                        (activeTab === 'recent' && new Date(resource.publishedDate) > new Date('2024-06-01'));
      return matchesSearch && matchesCategory && matchesTab;
    });
  };

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
              Featured ({resources.filter((r: Resource) => r.featured).length})
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'recent'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Recent ({resources.filter((r: Resource) => new Date(r.publishedDate) > new Date('2024-06-01')).length})
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.target.value)}
              className="pl-10 pr-8 py-3 text-black border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[200px]"
            >
              {categories.map((category: Category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources().map((resource: Resource) => (
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