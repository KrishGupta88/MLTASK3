Lead Scraper MVP

A lightweight React-based MVP that scrapes and displays business leads based on user-inputted keywords, location, and minimum rating using an API. Built with clean UI, fallback error handling, and modern styling.
Features
 **Search** businesses using:
  - Keyword (e.g., "software", "lawyer")
  - Location (e.g., "New York", "Delhi")
  - Minimum rating (e.g., 4 stars)
 **Dual-fetch mechanism**:
  - Tries `fetch()` first
  - Falls back to `axios` if needed
 **Responsive Lead Table**:
  - Name, Address, Website, Email, Source
 **Modern UI**:
  - Tailwind CSS
  - Responsive design
  - Interactive elements (loading spinner, hover effects)
 Tech Stack

| Layer        | Technology                     |
|-------------|--------------------------------|
| Frontend     | React.js (Hooks)               |
| Styling      | Tailwind CSS                   |
| Icons        | Lucide React                   |
| HTTP Client  | Fetch API + Axios              |
| Backend API  | Node.js + Express (localhost)  |
| Versioning   | Git + GitHub                   |

---
Installation & Running Locally

1️⃣ Clone the repo
bash
git clone https://github.com/KrishGupta88/MLTASK3.git
cd MLTASK3
2️⃣ Install frontend dependencies
bash
npm install
3️⃣.Start the frontend
bash
npm start
4️⃣ Start the backend (in a separate terminal)
Make sure you have a running Express server at http://localhost:5000/api/leads.
lead-scraper-mvp/
├── components/
│   ├── LeadScraper.jsx
│   └── LeadTable.jsx
├── App.jsx
├── index.js
└── README.md

