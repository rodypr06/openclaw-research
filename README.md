# OpenClaw Research Website

A beautiful, interactive, widget-based research platform for OpenClaw - the next-generation AI agent framework.

## Features

### 🎨 Modern Design
- **Dark Theme**: Sleek, professional dark mode with gradient accents
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion for delightful interactions
- **Glassmorphism**: Modern glass-effect cards with backdrop blur

### 📊 Interactive Widgets

1. **Sentiment Analysis**
   - Real-time sentiment tracking
   - Category breakdown (Documentation, Performance, Community, Bugs)
   - Historical trend visualization
   - Key insights panel

2. **Development Timeline**
   - Interactive release roadmap
   - Milestone tracking per release
   - Progress indicators
   - Detailed release information panel

3. **Community Analytics**
   - User engagement charts (Area, Line, Bar)
   - Sentiment distribution (Pie chart)
   - Feedback breakdown by category
   - Community growth metrics

4. **Tools Showcase**
   - 12+ integrated tools with details
   - Category filtering
   - Popularity indicators
   - Feature highlights

5. **Skills Directory**
   - 6 skill categories
   - 24+ capabilities
   - Proficiency levels
   - Usage frequency tracking

6. **Data Visualizations**
   - Performance metrics radar chart
   - Platform usage distribution
   - Tool usage breakdown
   - Weekly activity trends
   - Feature adoption analysis

7. **News Feed**
   - Featured articles
   - Category filtering
   - Trending topics
   - Newsletter subscription

### 🛠 Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/openclaw/openclaw-research.git
cd openclaw-research

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev

# Build for production
npm run build
# or
pnpm build

# Preview production build
npm run preview
# or
pnpm preview
```

### Development

The development server will start at `http://localhost:3000`

## Project Structure

```
openclaw-research/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navigation header
│   │   ├── Hero.jsx             # Hero section
│   │   ├── SentimentWidget.jsx  # Sentiment analysis
│   │   ├── DevelopmentTimeline.jsx  # Release timeline
│   │   ├── CommunitySentimentChart.jsx  # Community analytics
│   │   ├── ToolsShowcase.jsx    # Tools directory
│   │   ├── SkillsDirectory.jsx  # Capabilities
│   │   ├── DataVisualizations.jsx  # Charts & graphs
│   │   ├── NewsFeed.jsx         # News & updates
│   │   └── Footer.jsx           # Footer
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  openclaw: {
    50: '#f0f9ff',
    // ... more shades
  }
}
```

### Data

All data is defined within each component. For example, in `SentimentWidget.jsx`:

```javascript
const sentimentData = {
  overall: { score: 0.78, label: 'Very Positive' },
  categories: [...],
  timeline: [...]
};
```

## Features Breakdown

### Widget Cards

Two card styles available:
- `widget-card` - Standard glass-effect card
- `widget-card-alt` - Alternative with gradient border

### Animations

- Fade-in animations for page load
- Slide-up animations for sections
- Hover effects on interactive elements
- Smooth scroll navigation
- Animated progress bars and charts

### Responsive Design

- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`
- Collapsible navigation for mobile
- Stacked layouts on smaller screens

## Performance

- Optimized bundle size with Vite
- Lazy loading of components
- Efficient re-rendering with React
- Smooth 60fps animations

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this project for your own research or commercial purposes.

## Acknowledgments

- OpenClaw community for feedback and insights
- Recharts team for the excellent charting library
- Framer Motion for smooth animations
- Tailwind CSS for the utility-first CSS framework

---

Made with ❤️ by the OpenClaw community
