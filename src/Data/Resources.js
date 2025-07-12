const resourcesData = {
  categories: [
    { id: "all", name: "All Resources", color: "bg-gray-100 text-gray-700" },
    { id: "tutorial", name: "Tutorials", color: "bg-blue-100 text-blue-700" },
    { id: "documentation", name: "Documentation", color: "bg-green-100 text-green-700" },
    { id: "video", name: "Videos", color: "bg-red-100 text-red-700" },
    { id: "tool", name: "Tools", color: "bg-purple-100 text-purple-700" },
    { id: "template", name: "Templates", color: "bg-yellow-100 text-yellow-700" },
    { id: "course", name: "Courses", color: "bg-indigo-100 text-indigo-700" }
  ],
  resources: [
    {
      id: 1,
      title: "Android Development Complete Guide",
      description: "Comprehensive guide covering Android development from basics to advanced concepts with Kotlin and Jetpack Compose",
      category: "tutorial",
      type: "tutorial",
      author: "GDG Lucknow Team",
      publishedDate: "2024-06-15",
      rating: 4.8,
      views: 1250,
      downloadCount: 890,
      tags: ["Android", "Kotlin", "Jetpack Compose", "Mobile"],
      difficulty: "Intermediate",
      duration: "8 hours",
      featured: true,
      links: {
        view: "#",
        download: "#",
        external: "#"
      }
    },
    {
      id: 2,
      title: "React Best Practices Checklist",
      description: "Essential checklist for React developers covering performance, security, and code quality best practices",
      category: "documentation",
      type: "documentation",
      author: "Priya Gupta",
      publishedDate: "2024-07-01",
      rating: 4.9,
      views: 2100,
      downloadCount: 1560,
      tags: ["React", "JavaScript", "Best Practices", "Web Development"],
      difficulty: "Beginner",
      duration: "2 hours",
      featured: true,
      links: {
        view: "#",
        download: "#",
        external: "#"
      }
    },
    {
      id: 3,
      title: "Machine Learning Workshop Series",
      description: "Complete video series covering ML fundamentals, algorithms, and practical implementations with Python",
      category: "video",
      type: "video",
      author: "Dr. Amit Kumar",
      publishedDate: "2024-05-20",
      rating: 4.7,
      views: 3200,
      downloadCount: 0,
      tags: ["Machine Learning", "Python", "AI", "Data Science"],
      difficulty: "Advanced",
      duration: "12 hours",
      featured: false,
      links: {
        view: "#",
        external: "#"
      }
    },
    {
      id: 4,
      title: "Flutter Project Template",
      description: "Production-ready Flutter project template with state management, API integration, and best practices",
      category: "template",
      type: "template",
      author: "Rahul Sharma",
      publishedDate: "2024-06-30",
      rating: 4.6,
      views: 980,
      downloadCount: 450,
      tags: ["Flutter", "Template", "Mobile", "Dart"],
      difficulty: "Intermediate",
      duration: "1 hour",
      featured: false,
      links: {
        view: "#",
        download: "#",
        external: "#"
      }
    },
    {
      id: 5,
      title: "Google Cloud Platform Toolkit",
      description: "Collection of scripts and tools for GCP deployment, monitoring, and management",
      category: "tool",
      type: "tool",
      author: "Neha Srivastava",
      publishedDate: "2024-06-10",
      rating: 4.5,
      views: 1100,
      downloadCount: 320,
      tags: ["Google Cloud", "DevOps", "Automation", "Scripts"],
      difficulty: "Advanced",
      duration: "3 hours",
      featured: false,
      links: {
        view: "#",
        download: "#",
        external: "#"
      }
    },
    {
      id: 6,
      title: "Complete Web Development Course",
      description: "Full-stack web development course covering HTML, CSS, JavaScript, React, and Node.js",
      category: "course",
      type: "course",
      author: "GDG Lucknow",
      publishedDate: "2024-04-15",
      rating: 4.9,
      views: 4500,
      downloadCount: 2100,
      tags: ["Web Development", "JavaScript", "React", "Node.js"],
      difficulty: "Beginner",
      duration: "24 hours",
      featured: true,
      links: {
        view: "#",
        download: "#",
        external: "#"
      }
    },
    {
      id: 7,
      title: "API Design Guidelines",
      description: "Comprehensive guide for designing RESTful APIs with best practices and examples",
      category: "documentation",
      type: "documentation",
      author: "Tech Team",
      publishedDate: "2024-07-05",
      rating: 4.7,
      views: 1800,
      downloadCount: 890,
      tags: ["API", "REST", "Backend", "Design"],
      difficulty: "Intermediate",
      duration: "4 hours",
      featured: false,
      links: {
        view: "#",
        download: "#",
        external: "#"
      }
    },
    {
      id: 8,
      title: "DevOps Automation Scripts",
      description: "Collection of automation scripts for CI/CD, deployment, and infrastructure management",
      category: "tool",
      type: "tool",
      author: "DevOps Team",
      publishedDate: "2024-05-25",
      rating: 4.4,
      views: 750,
      downloadCount: 280,
      tags: ["DevOps", "Automation", "CI/CD", "Scripts"],
      difficulty: "Advanced",
      duration: "5 hours",
      featured: false,
      links: {
        view: "#",
        download: "#",
        external: "#"
      }
    }
  ]
};

export default resourcesData;