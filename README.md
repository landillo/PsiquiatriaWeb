# 🧠 Psychiatry & Mental Health Website

A modern, fully responsive web application built with **React + TypeScript + Vite**.  
This project represents a professional psychiatrist’s website, featuring sections like *Home*, *About*, *Services*, *Blog*, and *Contact*, with smooth scrolling navigation and a clean, modular structure.

## 🚀 Technologies Used

- **React 18** + **TypeScript**
- **Vite** as development environment
- **React Scroll** for smooth navigation
- **Lucide React** for icons
- **CSS Modules and Global Styles**
- **Responsive Design** (mobile-first)

## 🧩 Component Overview

### **1. NavBar**
Responsive navigation bar that includes:
- Horizontal logo and title alignment  
- Hamburger menu on smaller screens  
- Smooth scrolling between sections (using `react-scroll`)  
- Sticky position on scroll  

### **2. HeroSection**
- Animated image carousel with text overlay  
- Title, subtitle, and call-to-action button  
- Smooth auto-slide transitions  
- Fully responsive and mobile-friendly  

### **3. AboutPage**
- Two-column layout:
  - Left: Doctor’s portrait image  
  - Right: Description and key service icons  
- Professional and modern layout  

### **4. ServicesPage**
- Grid of service cards displaying:
  - Image, title, short description, and button  
- Clicking a card opens a **modal** with more detailed information  
- Data loaded dynamically from `dataServices.ts`  

### **5. BlogPage**
- Displays sample articles written by the psychiatrist  
- Each card includes image, date, title, and summary  
- Smooth hover animations matching the overall site design  

### **6. ContactPage**
- Contact information (phone, email, address)  
- Embedded Google Maps location  
- Icon-based design using **Lucide React**  

### **7. Footer**
- Compact and balanced footer with:
  - Left: Logo and name  
  - Center: Contact details  
  - Right: Social links (Facebook, Instagram)  
- Includes a personalized copyright  

## 🌟 Key Features

- Smooth scroll navigation between sections  
- Animated hero carousel  
- Responsive service and blog card grids  
- Reusable modal component  
- Global color variables for consistent styling  
- Mobile-first layout  

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/landillo/psiquiatriaWeb.git
cd psiquiatriaWeb
  
```

### 2. Install dependencies 

```bash

npm install

```
### 3. Run the development server

```bash

npm run dev

```
---

### 🧾 **Part 7 — Environment Notes & Future Plans**

```markdown
## 🧾 Environment Notes

- All images are located under `src/assets/`.  
- This project is **frontend-only**, with no backend or database.  
- Fully optimized for performance and mobile viewing.  

---

## ✨ Future Improvements

- Add a working **contact form** (using EmailJS or API)  
- Implement a **dynamic blog system** with real posts  
- Add a **dark/light mode toggle**  
- Improve accessibility (ARIA labels, focus states, etc.)  

## 👨‍💻 Author

**Orlando Ledón**  
Front-End Developer (React / React Native)  

📧 leso.orlando@gmail.com  
💼 [https://www.linkedin.com/in/orlandoledon/](https://www.linkedin.com/in/orlandoledon/)  





