# 🚌 SafarSwap — Bus Ticket Resale Platform

A peer-to-peer bus ticket resale platform that allows users to safely buy and sell verified tickets, preventing losses due to cancellations.

---

## 🚀 Live Demo

(Add your deployed link here)

---

## 📌 Problem Statement

Users often lose money when cancelling bus tickets, while operators retain the benefit.

**SafarSwap solves this by:**

* Allowing resale of unused tickets
* Ensuring verified and safe transactions
* Preventing fraud and price manipulation

---

## ✨ Features

### 🔐 Authentication

* Email + Phone OTP verification
* Secure login/signup
* Password reset via email

### 🎟️ Ticket System

* Buy verified tickets
* Sell unused tickets
* Price ≤ original ticket price
* Ticket expiry validation

### 💳 Payment

* Secure in-app payment
* Escrow system

### 👤 User System

* Buyer & Seller roles
* Profile with history
* Ratings & reviews

### 🛡️ Trust & Safety

* Verified badge
* Safe for Female tag
* Fraud detection
* Seat locking system

---

## 🧠 System Architecture

![System Architecture](./assets/system-design.png)

User → Frontend (React) → Backend (Spring Boot) → MongoDB

---

## 🔄 Core Flows

### 🟢 Buy Flow

User → Login → Search → View tickets → Buy → Payment → Ticket transfer → History update

### 🔵 Sell Flow

User → Upload ticket → Price validation → Operator approval → Listing → Sold → Payment release

---

## ⚠️ Business Rules

* No double resale
* Price ≤ original price
* Operator approval required
* Seat locking system
* In-app payment only
* Cutoff before departure

---

## 🧪 Testing

Cypress E2E Testing:

* Home → Buy → Payment flow
* Ticket listing
* Search functionality

Run:

```bash
npx cypress open
```

---

## 🛠 Tech Stack

* React (Vite)
* CSS
* Cypress

---

## 📂 Project Structure

BUS/
├── frontend/
├── cypress/
├── assets/
│    └── system-design.png
├── README.md

---

## ⚙️ Installation

```bash
git clone <your-repo-link>
cd BUS
npm install
npm run dev
```

---

## 🔮 Future Work

* Backend (Spring Boot)
* MongoDB integration
* Payment gateway
* Authentication system

---

## 👨‍💻 Author

Your Name

---

## ⭐ Star this repo if you like it!
