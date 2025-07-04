# Introduction
This project was created as part of my portfolio to proactively address gaps in my current technical skill set. It is a partial clone of [My Muscle Chef](https://www.mymusclechef.com/), built to demonstrate my ability to work with modern frontend technologies and integrate with external APIs.

In particular, this project focuses on:
- Practicing React with TypeScript using the Next.js framework  
- Exploring GraphQL-based API integration through the Shopify Storefront API  
- Building scalable folder structures and clean, responsive UI components  
- Improving understanding of eCommerce architecture by benchmarking a real-world product

Although I have not yet worked with Shopify Liquid or NestJS, this project reflects my active effort to bridge those gaps through real-world practice and hands-on development.
<br/>

# Tech Stack

| **Category**       | **Stack / Tools**                                  | **Notes / Details**                                           |
|-------------------|-----------------------------------------------------|---------------------------------------------------------------|
| **Frontend**       | Next.js 14, React 18, TypeScript                    | Core technologies used for UI rendering and routing           |
| **State Management** | React Hooks (`useState`, `useEffect`, `useContext`) | Lightweight, local state handling                            |
| **API Communication** | Fetch API, Axios                                 | REST/GraphQL fetch support                                   |
| **Styling**        | CSS Modules, Custom CSS, Media Queries             | No Tailwind or Styled Components – styled manually            |
| **Icons**          | React Icons                                        | Lightweight, flexible icon usage                             |
| **API Integration** | Shopify Storefront API (GraphQL)                  | Practicing GraphQL queries via public storefront API          |
| **Deployment**     | Vercel (optional)                                   | Simple, free deployment for Next.js projects                  |
<br/>

# Folder Structure
```bash
mymc-portfolio
├── 📁 .github                         # GitHub-related documentation and templates
│   ├── 📁 ISSUE_TEMPLATE              
│   │   ├── 📄 bug_report.md
│   │   ├── 📄 feature_request.md
│   │   └── 📄 task.md
│   ├── 📄 COMMIT_CONVENTION.md        
│   └── 📄 PULL_REQUEST_TEMPLATE.md   
│
├── 📁 app                             # App directory for Next.js (App Router)
│   ├── 📁 components                  # Reusable React components
│   ├── 📁 styles                      # CSS Modules for component-level styling
│   ├── 📄 global.css                  # Global styles
│   ├── 📄 layout.tsx                  
│   ├── 📄 page.module.css             
│   └── 📄 page.tsx                    
│
├── 📁 lib                             # Utility functions (e.g. Shopify API)
│   └── 📄 shopify.ts                  # Shopify Storefront API integration
│
├── 📁 models                          # Type definitions or interfaces 
│
├── 📁 public                          
│
└── 📄 .env.local                      # Environment variables for local development
```
<br/>

# Live Demo (TBC)
TODO: *To be confirmed*   
You can view the live demo here: [URL](https://mymc-clone.vercel.app)
<br/>

# Features
- Product grid dynamically rendered via Shopify Storefront API (GraphQL)
- Fully responsive layout with accessible and semantic HTML
- Interactive UI elements with hover states and visual feedback
- Clean component structure using modern React and TypeScript
- Styled using custom CSS and media queries without external UI libraries
- Designed to mirror selected pages from a real-world eCommerce site (My Muscle Chef)
<br/>

# Benchmarked from
- [My Muscle Chef > Full Meal](https://www.mymusclechef.com/menu/meals?sort=featured)
- [My Muscle Chef > Product Detail Page](https://www.mymusclechef.com/products/butter-chicken-veg-pilaf-ch010)

