# Interview Prep Flashcards – MVP

This repository contains the MVP (Minimum Viable Product) for my **Interview Prep Flashcard Web App**, built as the final project for my Rize / COMPS course.

The goal of this app is to help students and job seekers prepare for **technical and behavioral interviews** by practicing with flashcards in a focused, interactive web interface.

---

## 🎯 MVP Goals

- Provide a simple, working web interface for practicing interview questions.
- Demonstrate modern development practices:
  - GitHub branching and pull requests
  - Docker containerization
  - Cloud deployment (Google Cloud Run)
  - Agile planning using Jira
  - Technical documentation using Confluence
  - Responsible AI usage (GitHub Copilot + ChatGPT)

---

## 👥 Target Users

- College students preparing for internships / entry-level roles  
- Bootcamp graduates and self-taught learners  
- People preparing for **technical**, **behavioral**, or **IT / security** interviews  

---

## ✨ Current MVP Features

**Authentication (Demo Only)**  
- Simple “fake login” flow so users can enter the app UI.  
- Real auth (Firebase) is planned for a future phase.

**Flashcard Experience**

- Home screen with:
  - Sign In section
  - Area for “Your Flashcard Sets”
- Demo flashcard set:
  - A few behavioral interview questions
  - Ability to flip between **question** and **answer**
  - Track “Got it” vs “Missed it” counts
- Progress display at the bottom of the quiz section

**Tech & Dev Practices**

- Node.js + Express server to serve static files
- Dockerfile for containerization
- Ready for deployment to **Google Cloud Run**
- GitHub feature branch created and merged via Pull Request

---

## 🛠 Tech Stack

- **Frontend:** HTML, CSS, vanilla JavaScript  
- **Backend:** Node.js with Express (serving static files)  
- **Containerization:** Docker  
- **Cloud Platform:** Google Cloud Run  
- **Project Management:** Jira  
- **Documentation:** Confluence  
- **AI Tools:** GitHub Copilot, ChatGPT

---

## 📂 Project Structure

```text
.
├── Dockerfile
├── package.json
├── server.js
└── public
    ├── index.html
    ├── styles.css
    ├── app.js
    └── placeholder.txt
