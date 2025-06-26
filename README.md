
# 💛 Poruch.Help — Frontend

Poruch.Help is a human-centered donation platform that allows Ukrainians to post personal stories and request help — and lets others donate, verify, and support.
This is the **frontend** app built with React, TypeScript, and Vite.

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/poruch-help.git
cd poruch-help
```

### Install Dependencies

`npm install`

### Set Up Environment Variables

`cp .env.example .env`

Edit .env and fill in your values (e.g., API base URL):

`VITE_API_URL=http://localhost:8080`

### Run the App

`npm start`
Open http://localhost:5173 to view it in the browser.

### Git Workflow
We use a feature-branch strategy for safe and structured collaboration.

|Branch   | 	Description                                |
|---------|----------------------------------------------|
|main     |	Stable, production-ready code                |
|dev	    | Integration branch for all merged features   |
|feature/*|	Work-in-progress for specific tasks          |

Example Workflow
```
git checkout dev
git pull origin dev
git checkout -b feature/login-page
# Make changes
git add .
git commit -m "feat: add login page"
git push origin feature/login-page
```
Then open a Pull Request into dev.

✅ Pull latest dev before starting new work.
✅ Keep branches small and task-focused.

## 📦 Project Structure (Modular)

| 📌 Module | Description |
|----------|-------------|
| `modules/` | Groups each feature (auth, stories) into self-contained units |
| `shared/` | Contains reusable pieces shared between modules |
| `context/` | Global state like `AuthContext`, `ThemeContext` |
| `router/` | Centralizes route definitions |
| `services/` | Keeps API logic modular and testable |
| `types.ts` | Helps organize TypeScript contracts per module |

---
