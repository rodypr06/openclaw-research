# Contributing to OpenClaw Research

Thank you for your interest in contributing to OpenClaw Research! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Submitting Changes](#submitting-changes)
- [Coding Standards](#coding-standards)
- [Documentation](#documentation)

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please:

- Be respectful and constructive
- Welcome newcomers and help them learn
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn package manager
- Git

### Setup Development Environment

1. **Fork the repository**

   ```bash
   # Fork https://github.com/rodypr06/openclaw-research
   # Clone your fork
   git clone https://github.com/YOUR_USERNAME/openclaw-research.git
   cd openclaw-research
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Run tests**

   ```bash
   npm test
   ```

## Development Workflow

### Branch Strategy

- **main**: Production-ready code
- **develop**: Development branch
- **feature/***: New features
- **bugfix/***: Bug fixes
- **docs/***: Documentation changes
- **refactor/***: Code refactoring

### Creating a Feature Branch

```bash
# Update develop branch
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/your-feature-name
```

### Making Changes

1. Write clear, descriptive commit messages

   ```
   feat: add research widget overview component
   fix: resolve memory leak in stats widget
   docs: update API documentation
   ```

2. Follow the commit message convention (Conventional Commits)

   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation changes
   - `style:` Code style changes (formatting, etc.)
   - `refactor:` Code refactoring
   - `test:` Test additions or changes
   - `chore:` Maintenance tasks

### Testing

Always test your changes:

```bash
# Run unit tests
npm test

# Run linter
npm run lint

# Build project
npm run build

# Preview production build
npm run preview
```

## Submitting Changes

### Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new functionality
3. **Ensure all tests pass**
4. **Update CHANGELOG.md** (if applicable)
5. **Submit pull request**

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe tests performed

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] Tests added/updated
- [ ] All tests passing
- [ ] No new warnings generated

## Related Issues
Closes #xxx
Related to #yyy
```

### Review Process

1. Automated checks must pass
2. At least one maintainer approval required
3. Address all review comments
4. Squash and merge when approved

## Coding Standards

### React/JavaScript

- Use functional components with hooks
- Prefer TypeScript over JavaScript when possible
- Follow React best practices
- Use Tailwind CSS for styling

```jsx
// ✅ Good
const MyComponent = ({ title, children }) => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
    </div>
  );
};

// ❌ Bad
var MyComponent = function(props) {
  return React.createElement('div', { className: 'p-4' });
};
```

### CSS

- Use Tailwind utility classes
- Avoid custom CSS unless necessary
- Use semantic class names when needed

### File Naming

- React components: PascalCase (e.g., `ResearchWidget.jsx`)
- Utilities: camelCase (e.g., `apiHelper.js`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.js`)

### Imports

- Group imports: React → Third-party → Internal
- Use absolute imports when possible

```jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ResearchWidget from './components/ResearchWidget';
```

### Comments

- JSDoc comments for functions
- Inline comments for complex logic
- Keep comments up-to-date

```jsx
/**
 * Fetches research data from the API
 * @param {string} category - Research category to fetch
 * @returns {Promise<ResearchData[]>} Array of research items
 */
const fetchResearchData = async (category) => {
  // Implementation...
};
```

## Documentation

### Adding Documentation

- Update README.md for user-facing changes
- Add inline code comments for developers
- Update API.md for API changes
- Add examples in docs/examples/

### Documentation Style

- Use clear, concise language
- Include code examples
- Add diagrams for complex concepts
- Keep documentation in sync with code

## Getting Help

- Join our [GitHub Discussions](https://github.com/rodypr06/openclaw-research/discussions)
- Create an issue for bugs
- Ask questions in discussions

## Recognition

Contributors are recognized in:
- CONTRIBUTORS.md file
- Release notes
- Project README

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to OpenClaw Research! 🎉
