# 📊 Enhanzer CRM Dashboard

An interactive, modern Customer Relationship Management (CRM) Pipeline and Deals Management Dashboard built with **Angular 19+**, **Angular CDK Drag & Drop**, and **SCSS**.

---

<img width="1883" height="953" alt="image" src="https://github.com/user-attachments/assets/037133f4-8f78-4899-8242-c87dea121b45" />


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
   git clone [https://github.com/your-username/crm-dashboard.git](https://github.com/your-username/crm-dashboard.git)
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
