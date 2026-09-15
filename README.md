# 📊 NYK CRM Dashboard

An interactive, modern Customer Relationship Management (CRM) Pipeline and Deals Management Dashboard built with **Angular 19+**, **Angular CDK Drag & Drop**, and **SCSS**.

---

<img width="1867" height="944" alt="image" src="https://github.com/user-attachments/assets/1d2e0df7-3a23-4df4-9ba4-3cb3da944f76" />
<img width="1882" height="950" alt="image" src="https://github.com/user-attachments/assets/c192c9c7-387e-4167-aa09-2ae30d8c2b9f" />
<img width="1872" height="952" alt="image" src="https://github.com/user-attachments/assets/7f5eb363-37d4-45ba-80a2-12902276023e" />
<img width="1875" height="953" alt="image" src="https://github.com/user-attachments/assets/8c8695ac-005d-48fa-8893-768c363a5265" />
<img width="1876" height="944" alt="image" src="https://github.com/user-attachments/assets/acb925f8-319d-4e36-8771-52b2f0901342" />


## 🌟 Key Features

* 📈 **Live Analytics & Summary Cards:** Track Won Deals, Lost Deals, Total Deals count, and Total Pipeline Value dynamically.
* 🔄 **Kanban Drag-and-Drop Pipeline:** Move deals effortlessly between stages (*Prospecting, Qualified, Proposal Sent, In Negotiation, Closed Won*) using Angular CDK.
* 🔍 **Smart Search & Dynamic Filtering:** 
  * Real-time search by Deal Title, Assignee, or Value.
  * Filter by specific Pipeline categories (*Sales Pipeline, Enterprise Deals, SMB Pipeline, etc.*).
  * Sort deals by Value (High to Low / Low to High) or Alphabetically.
* ➕ **Add New Deal Modal:** Interactive modal form to create and push new CRM deals directly into the active pipeline state.
* 🎨 **Corporate UI/UX Design:** Responsive, clean layout styled with modern CSS/SCSS and visual priority indicators.

---

## 🛠️ Tech Stack

* **Framework:** Angular 19+ (Standalone Components)
* **Drag and Drop:** `@angular/cdk/drag-drop`
* **Styling:** SCSS / CSS3
* **Language:** TypeScript
* **State & Forms:** Angular FormsModule & Directives

---

## 🚀 Quick Start Guide

### Prerequisites
Make sure you have Node.js and Angular CLI installed globally:
```bash
npm install -g @angular/cli
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HirushiDivya/CRM-Dashbord.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd crm-dashboard
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the Development Server:**
   ```bash
   ng serve -o
   ```

5. Open your browser and go to `http://localhost:4200/`.

---

## 📁 Project Structure

```text
crm-dashboard/
├── src/
│   ├── app/
│   │   ├── app.ts            # Core Component Logic & State Handlers
│   │   ├── app.html          # Dashboard Template & Modal Form
│   │   ├── app.scss          # Visual Styling & Custom Layouts
│   │   ├── deals.data.ts     # Deal Interface & Initial Mock Dataset
│   │   └── app.config.ts     # Application Configurations
│   ├── main.ts               # Application Entrypoint
│   └── styles.scss           # Global SCSS Rules
└── README.md
```

---

## 📄 License

This project is open-source and available under the MIT License.
