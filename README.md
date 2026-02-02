# 📊 Job Market Intelligence Dashboard

🔗 **Live Demo:** https://job-intelligence-tau.vercel.app  

A real-time analytics dashboard designed to help job seekers visualize employment trends, salary ranges, and industry demand in South Africa.

---

## 🚀 Tech Stack

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

- **React 18** – Component-based UI development  
- **Vite** – Fast development server and optimized build tooling  
- **TypeScript** – Type-safe, scalable codebase  
- **Tailwind CSS** – Utility-first styling  
- **Vercel** – Production deployment  

---

## ✨ Features

### 📈 Interactive Charts
- Visualizes employment data using a reusable **HeroChart** component  
- Displays skill demand, salary ranges, and industry distribution  
- Built with a scalable and modular chart architecture  

### 🎯 Smart Filtering
- Dynamic **FilterBar** component  
- Filter by:
  - 📍 Location (Johannesburg, Cape Town, Remote)
  - 🏢 Industry / Job Category
- Real-time UI updates based on selected filters  

### 📊 Key Metrics
- InsightCards display:
  - Experience level distribution
  - Active job counts
  - Market demand indicators  

### 📱 Responsive Design
- Fully responsive layout
- Optimized for desktop, tablet, and mobile devices

---

## 🏗 Project Structure

```bash
src/
│
├── components/
│   ├── Header.tsx
│   ├── FilterBar.tsx
│   ├── HeroChart.tsx
│   ├── InsightCards.tsx
│   └── ...
│
├── data/
│   └── mockData.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

- **components/** → Reusable UI components  
- **data/** → Mock dataset and structured job market data  
- **App.tsx** → Main application layout and logic  

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/naledi901/job-market-intelligence-dashboard.git
cd job-market-intelligence-dashboard
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run locally

```bash
npm run dev
```

The app will run on:

```
http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🎯 Project Vision

The goal of this project is to bridge the gap between raw job listings and meaningful career insights by transforming structured data into actionable visual intelligence.

This dashboard demonstrates:

- Data-driven UI design
- Frontend architecture with React + TypeScript
- Real-time filtering logic
- Scalable component design
- Clean, modern UI implementation

---

## 📬 Contact

**Naledi Motaung**  
GitHub: https://github.com/naledi901  

---

> Built to transform job market data into intelligent career insights.
