Please find the live deployed link here: https://imdb-clone-smoky-eta.vercel.app/

# IMDB Clone

A React-based application that replicates the core functionality of the IMDB movie database website. Built with pure React and vanilla JavaScript using the React documentation available at the time of development.

## 📝 Important Note

This project was written in **pure React** using the official React documentation at that time. The code might appear outdated by today's standards, but it was developed with genuine understanding and without the assistance of any Large Language Models (LLMs). This represents a pure learning exercise in understanding React fundamentals, component architecture, and building interactive web applications.

## 🛠 Tech Stack

- **Frontend Framework**: React 18.2.0
- **Routing**: React Router DOM 6.21.3
- **UI Library**: Material-UI (MUI) 5.15.5
- **Carousel**: React Multi Carousel 2.8.4
- **HTTP Client**: Axios 1.6.7
- **Styling**: Emotion (CSS-in-JS)
- **Build Tool**: Create React App with webpack

## 📁 Project Structure

```
imdb-clone/
├── src/
│   ├── components/
│   │   └── common/              # Shared UI components
│   │       ├── Banner.jsx       # Hero banner section
│   │       ├── Header.jsx       # App header
│   │       ├── HeaderMenu.jsx   # Navigation menu
│   │       ├── MoviesList.jsx   # Movie grid display
│   │       ├── Slide.jsx        # Carousel slide
│   │       └── UpNext.jsx       # Upcoming content section
│   ├── pages/
│   │   ├── Home.jsx             # Home page
│   │   └── CategoryMovies.jsx   # Category-specific movies
│   ├── services/
│   │   └── api.js               # API calls using Axios
│   ├── constants/
│   │   ├── constant.js          # App constants
│   │   └── Route.js             # Route definitions
│   ├── App.js                   # Main app component with routing
│   └── index.js                 # Entry point
├── public/
└── build/                       # Production build output
```

## 🎯 Features

- Movie discovery with category browsing
- Carousel displays for featured content
- Responsive Material-UI components
- Client-side routing between pages
- API integration for movie data
- Clean component-based architecture

## 📚 Learning Insights

This project showcases:

- React component composition and reusability
- React Router for SPA navigation
- Async API calls with Axios
- Material-UI integration for professional UI
- CSS-in-JS styling with Emotion
- State management patterns in functional components

---

**Built with passion and pure understanding of React fundamentals** 🚀
