🌦️ Weather Forecasting Web Application

A modern, responsive Weather Forecasting web application built using Next.js, React, TypeScript, and Tailwind CSS.
The app fetches real-time weather data from a public API and provides current conditions, a 5-day forecast, dark mode, unit toggle, and more.

🚀 Live Demo

🔗 Deployed Link (Vercel):
https://your-vercel-deployment-link.vercel.app

📸 Screenshots
Light Mode	Dark Mode

	

🛠️ Tech Stack

Frontend

HTML5

CSS3

Tailwind CSS

React.js

Next.js (App Router)

TypeScript

Other Tools

OpenWeatherMap API

Vercel (Deployment)

✨ Features
✅ Mandatory Features

City-based weather search

Current weather details:

City name

Temperature (°C / °F)

Weather condition

Humidity

Wind speed

5-day weather forecast

Dark mode toggle

Unit toggle (Celsius / Fahrenheit)

Skeleton loading UI

Error handling (invalid city, network issues)

Responsive UI (mobile, tablet, desktop)

🌟 Additional Enhancements

Clean and reusable component structure

Centralized API handling

Strict TypeScript type safety

Subtle hover effects and transitions

📁 Project Structure
weather-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── providers.tsx
│
├── components/
│   ├── SearchBar.tsx
│   ├── WeatherCard.tsx
│   ├── ForecastCard.tsx
│   ├── Skeleton.tsx
│   └── ThemeToggle.tsx
│
├── hooks/
│   └── useWeather.ts
│
├── lib/
│   └── api.ts
│
├── types/
│   └── weather.ts
│
├── public/
│   └── screenshots/
│
├── .env.local
├── tailwind.config.ts
├── tsconfig.json
└── README.md

🔑 Environment Variables

Create a .env.local file in the root directory and add:

NEXT_PUBLIC_WEATHER_API_KEY=YOUR_OPENWEATHERMAP_API_KEY


⚠️ Do not commit .env.local to GitHub.

🧑‍💻 Setup Instructions (Local Development)
1️⃣ Clone the Repository
git clone https://github.com/your-username/weather-app.git
cd weather-app

2️⃣ Install Dependencies
npm install

3️⃣ Run the Application
npm run dev


Open:
👉 http://localhost:3000

🌐 Weather API Used

OpenWeatherMap API

Current Weather API

5-Day / 3-Hour Forecast API

🔗 https://openweathermap.org/api

🧪 Error Handling

Displays user-friendly error messages for:

Invalid city names

API/network failures

Loading state handled using skeleton UI

No application crashes on bad input

📈 Performance & Best Practices

Functional components only

React Hooks (useState, useEffect)

Centralized API calls

Reusable UI components

Strict TypeScript (no any)

Clean folder and file naming conventions

📦 Deployment

The application is deployed on Vercel.

Steps:

Push code to GitHub

Import repository in Vercel

Add environment variables in Vercel dashboard

Deploy 🚀

📄 Submission Checklist

✔ GitHub repository link
✔ Live deployed URL (Vercel)
✔ README with setup instructions
✔ Screenshots of UI
✔ All mandatory features implemented

👤 Author

Abhishek Choudhari
Full Stack Developer

📝 Notes for Evaluators

This project was built with a strong focus on:

Code readability

Type safety

UI responsiveness

Real-world frontend best practices

If you want, next I can:

🔥 tailor this README exactly to the company tone

🔥 add evaluation-friendly wording

🔥 review screenshots & UI polish

🔥 help you fill the Google Form perfectly