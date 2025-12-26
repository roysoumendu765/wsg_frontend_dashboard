# Call Analytics Dashboard (Frontend)

A visually polished analytics dashboard inspired by **Superbryn**, built using **React + TypeScript**.  
The application displays call analytics for voice agents using interactive charts and allows users to persist customized data using **Supabase**.

---

## 🔗 Live Demo

👉 **Deployed on Vercel**  
<ADD_YOUR_VERCEL_URL_HERE>

---

## ✨ Features

### 📊 Analytics Dashboard
- Call Duration Analysis (interactive line chart)
- Sad Path Analysis (donut chart with legend)
- KPI summary for quick insights

### ✏️ Editable Analytics
- Users can overwrite dummy analytics values
- Changes are reflected instantly on charts

### 📧 Email-Gated Persistence
- Users must enter an email before editing
- Custom values are stored in **Supabase**
- Existing data is detected and users are prompted to:
  - Use previous values
  - Overwrite with new values

### 🧠 Insightful UX
- Hover tooltips show value and percentage change vs previous point
- Clean, minimal UI inspired by Superbryn’s design language
- Custom modals instead of browser alerts

---

## 🛠 Tech Stack

- **React** (Vite)
- **TypeScript**
- **Tailwind CSS**
- **Recharts** (Charts)
- **Supabase** (Data persistence)
- **Vercel** (Deployment)

---

## 🧱 Architecture Overview

src/
├── components/
│ ├── CallDurationChart.tsx
│ ├── SadPathChart.tsx
│ ├── EditCallDurationModal.tsx
│ ├── EmailModal.tsx
│ ├── OverwriteConfirmModal.tsx
│ └── KpiRow.tsx
│
├── pages/
│ └── Dashboard.tsx
│
├── services/
│ └── supabaseClient.ts


---

## 🧪 Data Persistence Logic

- Data is stored in Supabase table: `call_duration_data`
- Schema:
  ```sql
  create table call_duration_data (
    email text primary key,
    data jsonb not null,
    updated_at timestamptz default now()
  );

## ▶️ Running the App Locally

Follow these steps to run the frontend locally on your machine.

### Clone the Repository

```bash
git clone https://github.com/roysoumendu765/wsg_frontend_dashboard.git
cd wsg_frontend_dashboard
```

### Install Dependencies

```bash
npm install
```

### create local .env file and add these envs

```bash
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### Start the local dev server

```bash
npm run dev
```
