# Learning Land

A modern, responsive educational platform built with React and Vite. Learn from expert-led courses, track your progress, and achieve your learning goals.

## Features

- 🎓 **Diverse Courses** - Browse hundreds of courses across multiple topics
- 📊 **Progress Tracking** - Monitor your learning journey with detailed analytics
- 🏆 **Achievements** - Earn badges and certificates as you advance
- 👥 **Community** - Connect with other learners and instructors
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast & Modern** - Built with React 18 and Vite for optimal performance

## Tech Stack

- **Frontend**: React 18, React Router DOM
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/learning-land.git
   cd learning-land
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   The site will open at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server with hot refresh
- `npm run build` - Create optimized production build
- `npm run preview` - Preview production build locally

## Project Structure

```
learning-land/
├── src/
│   ├── components/       # Reusable components
│   │   └── Navbar.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   └── Dashboard.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
├── vercel.json          # Vercel deployment config
└── README.md            # This file
```

## Pages

### 🏠 Home (`/`)
Landing page with hero section, features overview, and call-to-action buttons.

### 📚 Courses (`/courses`)
Browse and filter available courses with detailed information including:
- Course title and instructor
- Difficulty level (Beginner, Intermediate, Advanced)
- Student count and ratings
- Course pricing

### 📊 Dashboard (`/dashboard`)
Personalized learning dashboard featuring:
- User progress overview
- Course progress tracking with visual indicators
- Achievements and badges
- Personalized course recommendations

## Deployment on Vercel

### Automatic Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite+React project
   - Click "Deploy"

### Manual Deployment

1. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   npx vercel
   ```

3. **Follow the prompts** to complete the deployment

### Production Build

To test the production build locally:

```bash
npm run build
npm run preview
```

## Environment Variables

For production deployment, set these variables in your Vercel project settings:

```
VITE_API_URL=https://your-api-domain.com
VITE_APP_NAME=Learning Land
```

## Performance Optimizations

- **Code Splitting**: Routes are automatically code-split for faster initial load
- **CSS Optimization**: Production builds include minified CSS
- **Image Optimization**: SVG emojis used for instant rendering
- **Responsive Design**: Mobile-first approach for better UX on all devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Roadmap

- [ ] User authentication system
- [ ] Payment integration
- [ ] Course creation tools
- [ ] Real-time chat and forums
- [ ] Video player integration
- [ ] Certificate generation
- [ ] Mobile app (React Native)
- [ ] Dark mode

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@learningland.com or open an issue on GitHub.

## Acknowledgments

- React team for the amazing framework
- Vite for incredible build speed
- Vercel for seamless deployment
- All contributors and testers

---

**Made with ❤️ by Learning Land Team**

Live Demo: [https://learning-land.vercel.app](https://learning-land.vercel.app)