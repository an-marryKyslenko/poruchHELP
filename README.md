
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
|develop  | Integration branch for all merged features   |
|feature/*|	Work-in-progress for specific tasks          |

Example Workflow
```
git checkout develop
git pull origin develop
git checkout -b feature/login-page
# Make changes
git add .
git commit -m "feat: add login page"
git push origin feature/login-page
```
### Go to GitHub and open a PR into dev
Go to the repo → Pull requests → "New Pull Request"

Base: `develop`, Compare: `feature/login-page`

Add description, tag reviewer (if needed), and create PR

🔀 Merge it (after review or approval):
Merge into `develop` via GitHub

### 🛑 Never merge into dev locally and push unless your team agreed on it
Doing this:
```
git checkout dev
git merge feature/layout
git push origin dev
```
…can cause conflicts or break shared code if someone else is also working on dev.

Let GitHub handle the merge — it's cleaner, trackable, and reversible.

### 🎯 TL;DR:
|Action	                    |Should you do it?   |
|---------------------------|--------------------|
|git commit on feature	    | ✅ Yes             |
|git push origin feature/* 	| ✅ Yes             |
|Merge into dev locally	    | ❌ No (use PR)     |
|Merge via GitHub PR        | ✅ Yes             |

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
