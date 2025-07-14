# My Muscle Chef Clone (Portfolio Project)
🚨 **Disclaimer**  
This project is for **portfolio purposes only**. All content, including images and text, is sourced from [My Muscle Chef](https://www.mymusclechef.com/) and remains the property of its rightful owner.  
The project is not affiliated with or endorsed by My Muscle Chef.  
**All assets will be removed upon completion of portfolio review.**

<br/>

# Introduction
This project was created as part of my portfolio to proactively address gaps in my current technical skill set. It is a partial clone of [My Muscle Chef](https://www.mymusclechef.com/menu/meals?sort=featured), built to demonstrate my ability to work with modern frontend technologies and integrate with external APIs.

In particular, this project focuses on:
- Practicing React with TypeScript using the Next.js framework  
- Exploring GraphQL-based API integration through the Shopify Storefront API  
- Building scalable folder structures and clean, responsive UI components  
- Improving understanding of eCommerce architecture by benchmarking a real-world product

Although I have not yet worked with Shopify Liquid or NestJS, this project reflects my active effort to bridge those gaps through real-world practice and hands-on development.
<br/>

# Live Demo
You can view the live demo here: [https://mymc-portfolio.vercel.app](https://mymc-portfolio.vercel.app)
<br/>

# Features
- Frontend built using **React.js**, **Next.js**, and **CSS Modules**
- Product data fetched dynamically via **Shopify Storefront API (GraphQL)**
- Sort & filter UI elements are designed and structured for future integration with **GraphQL**, but backend functionality is not yet implemented.
- Styled using custom CSS and media queries (no external UI libraries)
- Clean component structure using React Hooks (`useState`, `useEffect`)
- Product model created for improved data management and typing  
- Benchmarked and partially cloned selected UI and logic from My Muscle Chef
<br/>


# Tech Stack

| **Category**       | **Stack / Tools**                                  | **Notes / Details**                                           |
|-------------------|-----------------------------------------------------|---------------------------------------------------------------|
| **Frontend**       | Next.js 14, React 18, TypeScript                    | Core technologies used for UI rendering and routing           |
| **State Management** | React Hooks (`useState`, `useEffect`)            | Lightweight, local state handling                            |
| **API Communication** | Fetch API, Axios                                 | REST/GraphQL fetch support                                   |
| **Styling**        | CSS Modules, Custom CSS, Media Queries             | No Tailwind or Styled Components – styled manually            |
| **Icons**          | React Icons                                        | Lightweight, flexible icon usage                             |
| **API Integration** | Shopify Storefront API (GraphQL)                  | Practicing GraphQL queries via public storefront API          |
| **Deployment**     | Vercel                                             | Simple, free deployment for Next.js projects                  |
<br/>

# Folder Structure
```bash
mymc-portfolio
├── 📁 .github                         # GitHub configuration and templates for collaboration
│   ├── 📁 ISSUE_TEMPLATE              
│   │   ├── 📄 bug_report.md
│   │   ├── 📄 feature_request.md
│   │   └── 📄 task.md
│   ├── 📄 COMMIT_CONVENTION.md        
│   └── 📄 PULL_REQUEST_TEMPLATE.md   
│
├── 📁 api                             # Handles external API communication
│   ├── 📄 products.ts                 # Functions to fetch products and related data from Shopify
│   └── 📄 shopify.ts                  # Common fetch logic for Shopify Storefront API│
│
├── 📁 app                             # Next.js App Router application structure
│   ├── 📁 components                  # Reusable React components
│   ├── 📁 styles                      # CSS Modules for component-level styling
│   ├── 📄 layout.tsx                  
│   └── 📄 page.tsx                    
│
├── 📁 data                            # Static data used in components
│   └── 📄 filters.ts                  # Sidebar menu data (e.g., meal categories)
│
├── 📁 lib                             # Pure logic helpers (e.g., parsing, formatting, tree builders)
│   ├── 📁 parsers                     # Data transformers for API responses
│   ├── 📁 graphql                     # GraphQL query definitions for Shopify
│   └── 📁 utils                       # General utility functions
│
├── 📁 models                          # Type definitions or interfaces 
│
├── 📁 public                          # Static assets
│
└── 📄 .env.local                      # Environment variables for local development
```
<br/>

