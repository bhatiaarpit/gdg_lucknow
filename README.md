# GDG Lucknow Website

<div align="center">
<img width="1897" height="868" alt="image" src="https://github.com/user-attachments/assets/3f7cfda5-db8e-44ff-8000-2a945714cdae" />

  
  [![Next.js](https://img.shields.io/badge/Next.js-14.0-black)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
  [![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://vercel.com/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
</div>

A modern, fast, and responsive web application for Google Developer Groups (GDG) Lucknow. Built with Next.js and TypeScript, featuring server-side rendering, automatic font optimization, and seamless deployment capabilities.

## 🚀 Features

- **⚡ Next.js 14** - Latest React framework with App Router
- **🔷 TypeScript** - Type-safe development experience
- **🎨 Automatic Font Optimization** - Using Geist font family from Vercel
- **📱 Responsive Design** - Mobile-first approach
- **🔥 Hot Reloading** - Instant feedback during development
- **🚀 Server-Side Rendering** - Optimal performance and SEO
- **📦 Optimized Builds** - Automatic code splitting and optimization

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React Framework | 14.x |
| **TypeScript** | Type Safety | 5.x |
| **React** | UI Library | 18.x |
| **next/font** | Font Optimization | Built-in |
| **Vercel** | Deployment Platform | Latest |

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18.x or Above
- npm, yarn, pnpm, or bun package manager
- Git for version control

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/bhatiaarpit/gdg_lucknow.git
cd gdg_lucknow
```

### 2. Install Dependencies

Choose your preferred package manager:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install

# Using bun
bun install
```

### 3. Run Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev

# Using bun
bun dev
```

### 4. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

The page will automatically reload when you make changes to the code.

## 📁 Project Structure

```
gdg_lucknow/
├── app/                    # Next.js App Router directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx          # Home page component
│   └── favicon.ico       # Favicon
├── components/            # Reusable React components
├── lib/                  # Utility functions and configurations
├── public/               # Static assets
├── styles/               # Additional stylesheets
├── .env.local           # Environment variables (create this)
├── .env.example         # Environment variables template
├── .gitignore           # Git ignore rules
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies and scripts
├── README.md           # Project documentation
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run type-check` | Run TypeScript compiler check |

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Automatic Deployment:**
   - Connect your GitHub repository to [Vercel](https://vercel.com)
   - Vercel will automatically build and deploy on every push to main branch

2. **Manual Deployment:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

### Other Deployment Options

- **Netlify:** Connect your repo and deploy
- **AWS Amplify:** Use AWS's hosting service
- **Docker:** Build and deploy using containers

For more deployment options, check the [Next.js Deployment Documentation](https://nextjs.org/docs/deployment).

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Customization

- **Fonts:** Modify font settings in `app/layout.tsx`
- **Styles:** Update global styles in `app/globals.css`
- **Configuration:** Adjust settings in `next.config.js`

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Contributing Guidelines

1. **Fork the Repository**
   ```bash
   git fork https://github.com/bhatiaarpit/gdg_lucknow.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Your Changes**
   - Write clean, documented code
   - Follow the existing code style
   - Add tests if applicable

4. **Commit Your Changes**
   ```bash
   git commit -m "Add: Amazing new feature"
   ```

5. **Push to Your Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Provide a clear description of your changes
   - Link any related issues

### Code Style

- Use TypeScript for all new components
- Follow the existing naming conventions
- Write meaningful commit messages
- Add comments for complex logic

## 🐛 Issues and Support

- **Bug Reports:** [Create an issue](https://github.com/bhatiaarpit/gdg_lucknow/issues/new?template=bug_report.md)
- **Feature Requests:** [Request a feature](https://github.com/bhatiaarpit/gdg_lucknow/issues/new?template=feature_request.md)
- **Questions:** [Start a discussion](https://github.com/bhatiaarpit/gdg_lucknow/discussions)

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://reactjs.org/docs) - Learn React
- [TypeScript Documentation](https://www.typescriptlang.org/docs) - Learn TypeScript
- [Vercel Platform](https://vercel.com/docs) - Learn about Vercel deployment

## 👥 Community

Join the GDG Lucknow community:

- 🌐 [Visit Us](https://gdg.community.dev/gdg-lucknow/)
- 💼 [LinkedIn](https://www.linkedin.com/company/google-developer-groups-lucknow/posts/?feedView=all)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Developer Groups program
- Next.js team for the amazing framework
- Vercel for hosting and deployment
- All contributors who help improve this project

---

<div align="center">
  <p>Made with ❤️ by GDG Lucknow Community</p>
  <p>
    <a href="https://github.com/bhatiaarpit/gdg_lucknow/stargazers">⭐ Star this repo</a> •
    <a href="https://github.com/bhatiaarpit/gdg_lucknow/issues">🐛 Report Bug</a> •
    <a href="https://github.com/bhatiaarpit/gdg_lucknow/issues">✨ Request Feature</a>
  </p>
</div>
