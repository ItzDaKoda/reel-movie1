# 🎬 ReelRole – Movie Discovery & Watchlist SPA

ReelRole is a React Single Page Application (SPA) that allows users to discover trending movies, search for films, view detailed movie information, and manage a personalized watchlist.

The application demonstrates modern frontend architecture, authentication flows, API integration, state management, testing, and secure deployment practices expected in professional React applications.

This project was developed as part of a frontend development course and expanded into a portfolio-ready application by implementing authentication systems, enhanced security practices, and comprehensive testing.

---

# 🌐 Live Application

Production URL

https://YOUR_VERCEL_URL.vercel.app

---

# 🎯 Problem Statement

Movie discovery platforms often overwhelm users with massive catalogs of films. ReelRole provides a simple and intuitive interface that allows users to:

- Browse trending movies
- Search for films quickly
- View detailed movie information
- Create and manage personal watchlists

The application focuses on ease of discovery and personalized movie tracking while demonstrating modern frontend development practices.

---

# 🚀 Features

## Core Application Features

- Trending movie discovery
- Movie search functionality
- Dynamic movie detail pages
- Personalized watchlist management
- Responsive mobile-first UI
- External API integration with TMDB

## Authentication Features

- User registration
- User login
- Logout functionality
- Protected routes
- Authentication state persistence
- Token expiration handling

## Security Features

- XSS protection through React's built-in HTML escaping
- Sanitized and validated form inputs
- Secure token storage practices
- Authentication state protection
- CSRF prevention discussion and mitigation practices

## Developer Features

- Unit testing using Vitest
- Context-based state management
- Modular component architecture
- Environment variable configuration
- Production deployment using Vercel
- Git version control

---

# 🛠 Technology Stack

## Frontend Framework

- React
- Vite

## Routing

- React Router

## State Management

- React Context API
- Local component state (useState)

## API Integration

- The Movie Database (TMDB) API

## Testing

- Vitest
- React Testing Library
- Jest DOM

## Deployment

- Vercel

## Version Control

- Git
- GitHub

---

# 📁 Project Architecture

src/

components/
- Header.jsx
- Navigation.jsx
- MovieCard.jsx
- Loader.jsx
- SearchBar.jsx
- ProtectedRoute.jsx

pages/
- Home.jsx
- Discover.jsx
- MovieDetails.jsx
- MyLists.jsx
- Login.jsx
- Register.jsx
- NotFound.jsx

contexts/
- WatchlistContext.jsx
- AuthContext.jsx

services/
- tmdbService.js

__tests__/
- MovieCard.test.jsx
- WatchlistContext.test.jsx
- AuthContext.test.jsx
- ProtectedRoute.test.jsx

App.jsx  
main.jsx  
index.css  

---

# 🔀 Application Routes

| Route | Description |
|------|-------------|
| `/` | Trending movies homepage |
| `/discover` | Search for movies |
| `/movies/:movieId` | Dynamic movie detail page |
| `/my-lists` | User watchlist (Protected Route) |
| `/login` | User login |
| `/register` | User registration |
| `*` | 404 Not Found page |

---

# 🔐 Authentication System

The application implements a JWT-style authentication flow.

Authentication includes:

- User registration
- User login
- Token creation
- Token expiration
- Logout and token cleanup
- Protected routes

Authentication state is managed globally using the React Context API.

Authentication Flow

1. User registers or logs in
2. A token is generated and stored
3. Authentication state is stored in Context
4. Protected routes check authentication status
5. Users are redirected to login if not authenticated

---

# 🔒 Security Implementation

## XSS Protection

The application avoids cross-site scripting vulnerabilities by:

- Using React’s built-in HTML escaping
- Avoiding dangerouslySetInnerHTML
- Validating and trimming user inputs

## Token Storage

Authentication tokens are stored in localStorage for demonstration purposes.

For production applications, a more secure method such as HTTP-only cookies issued by a backend server would be recommended.

## CSRF Considerations

True CSRF protection requires server-side token verification.

Since this project is frontend-only, CSRF mitigation strategies include:

- Avoiding cookie-based authentication
- Using token-based authentication flows
- Restricting unsafe cross-origin requests

---

# 🔌 API Integration

This application integrates with The Movie Database (TMDB) API.

Base URL

https://api.themoviedb.org/3

Endpoints used:

| Endpoint | Purpose |
|--------|---------|
| /trending/movie/week | Fetch trending movies |
| /search/movie | Search for movies |
| /movie/{movieId} | Retrieve movie details |

---

# ⚙ Environment Variables

Create a `.env` file in the project root:

VITE_TMDB_KEY=your_tmdb_api_key_here

Environment variables are securely managed in production using Vercel Environment Variables.

---

# 💻 Installation & Setup

1. Clone the repository

git clone https://github.com/YOUR_USERNAME/reel-movie1.git  
cd reel-movie1

2. Install dependencies

npm install

3. Add TMDB API key

Create `.env` file

VITE_TMDB_KEY=your_api_key_here

4. Start development server

npm run dev

---

# 🧪 Testing

Unit tests were implemented using Vitest and React Testing Library.

Tests cover:

- Component rendering
- Context state updates
- Authentication flows
- Protected routes
- User interaction events

Run tests with:

npm run test

---

# 📱 Responsive Design

The application follows a mobile-first design strategy.

Responsive techniques include:

- Flexible grid layouts
- CSS media queries
- Adaptive typography
- Responsive movie card layout

The application works across:

- Mobile devices
- Tablets
- Desktop screens

---

# 🚀 Deployment

The application is deployed using Vercel.

Production Build

npm run build

Vercel Deployment

1. Connect GitHub repository
2. Configure environment variables
3. Deploy automatically from GitHub

---

# 🔮 Future Enhancements

Potential improvements include:

- Backend API with database storage
- Real JWT authentication from server
- OAuth login (Google / GitHub)
- Persistent user watchlists
- Movie recommendations
- Advanced filtering and sorting
- Dark/light theme switching
- User reviews and ratings

---

# 👨‍💻 Author

DaKoda Gillian

GitHub

https://github.com/ItzDaKoda

---

# 📄 License

This project was created for educational purposes and portfolio demonstration.
