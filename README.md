# My Muscle Chef Clone (Portfolio Project)
<img width="1918" height="910" alt="portfolio_img" src="https://github.com/user-attachments/assets/3bc1785d-0e37-4c2f-98ca-d6f15c4fd8ff" />

🔗Link: [mymc-portfolio.vercel.app](https://mymc-portfolio.vercel.app/)   

<br/>

🚨 **Disclaimer**  
This project is for **portfolio purposes only**. All content, including images and text, is sourced from [My Muscle Chef](https://www.mymusclechef.com/) and remains the property of its rightful owner.  
The project is not affiliated with or endorsed by My Muscle Chef.  
**All assets will be removed upon completion of portfolio review.**

# Introduction
This project was created as part of my portfolio to proactively address gaps in my current technical skill set. It is a partial clone of [My Muscle Chef](https://www.mymusclechef.com/menu/meals?sort=featured), built to demonstrate my ability to work with modern frontend technologies and integrate with external APIs.

In particular, this project focuses on:
- Practicing React with TypeScript using the Next.js framework  
- Exploring GraphQL-based API integration through the Shopify Storefront API  
- Building scalable folder structures and clean, responsive UI components  
- Improving understanding of eCommerce architecture by benchmarking a real-world product

Although I have not yet worked with Shopify Liquid or NestJS, this project reflects my active effort to bridge those gaps through real-world practice and hands-on development.
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
| **Frontend**       | Next.js 15, React 19, TypeScript                    | Core technologies used for UI rendering and routing           |
| **State Management** | React Hooks (`useState`, `useEffect`)<br/> Reduct Toolkit (RTK), React-Redux (`useSelector`, `useDispatch`)  | Lightweight, local state handling                            |
| **API Communication** | Fetch API, Axios                                 | REST/GraphQL fetch support                                   |
| **Styling**        | CSS Modules, Custom CSS, Media Queries             | No Tailwind or Styled Components – styled manually            |
| **Icons**          | React Icons                                        | Lightweight, flexible icon usage                             |
| **API Integration** | Shopify Storefront API (GraphQL)                  | Practicing GraphQL queries via public storefront API          |
| **Deployment**     | Vercel                                             | Simple, free deployment for Next.js projects                  |
<br/>

# Key Folder Structure
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
│   ├── 📁 [handle]                    # Dynamic route segment for handles
│   │   └── 📄 page.tsx                
│   ├── 📁 components                  # Reusable React components
│   ├── 📁 styles                      # CSS Modules for component-level styling
│   ├── 📄 layout.tsx                  
│   ├── 📄 loading.tsx                  
│   ├── 📄 page.tsx                  
│   └── 📄 StoreProvider.tsx           # Redux provider component         
│
├── 📁 data                            # Static data used in components
│   └── 📄 sortAndFilters.ts           # Sidebar menu data (e.g., meal categories)
│
├── 📁 lib                             # Pure logic helpers (e.g., parsing, formatting, tree builders)
│   ├── 📁 graphql                     # GraphQL query definitions for Shopify
│   ├── 📁 hooks                       # Custom hooks
│   ├── 📁 parsers                     # Data transformers for API responses
│   └── 📁 utils                       # General utility functions
│
├── 📁 models                          # Type definitions or interfaces 
│
├── 📁 public                          # Static assets
│
├── 📁 redux                           # State management
│
└── 📄 .env.local                      # Environment variables for local development
```

<br/>

# Known Issues & Solutions
## 1. Get Products with Sorting and Filtering
### Issues
- `Data fetching strategy`: To improve SEO and provide a better user experience (e.g., faster initial load), it was necessary to decide how to fetch product data: using CSR (Client-Side Rendering), SSR (Server-Side Rendering), or a hybrid approach.
- `Sorting`: Shopify supports basic sorting options (e.g., price, alphabetical order), but it does not support custom sorting based on metafields I created.
- `Filtering`:
  - The **top section** of the sidebar works like sub-menus (e.g., /pro-meals, /high-protein-meals) and follows a RESTful URL structure.
  - The **bottom section** provides filtering options based on custom metafields, such as dietary preference or protein type.

### Solutions
- `Data fetching strategy`: → Chose a **hybrid** approach. ([Maximizing Performance and SEO with Server-Side Rendering (SSR) in Next.js](https://dev.to/abhay_yt_52a8e72b213be229/maximizing-performance-and-seo-with-server-side-rendering-ssr-in-nextjs-9ih?utm_source=chatgpt.com))
  - *Reason*: Product data is initially fetched server-side (SSR) to improve SEO and initial load speed. After the initial render, client-side updates (CSR) are used for smoother interactions like filtering or sorting.
- `Sorting`:
  - **Shopify-supported options**: Sorting parameters (e.g., price, title) are passed directly to the Shopify query to fetch sorted data.
  - **Custom metafield-based options**: For unsupported options, data is fetched normally and then sorted client-side using metafield values.
- `Filtering`:
  - **Top section** (submenu style): Created metafields and corresponding collections (e.g., /pro-meals) in Shopify to fetch relevant products efficiently using predefined queries.
    - *Reason*: Using collections improves performance and makes URLs SEO-friendly.
  - **Bottom section** (custom filters): Filtering options are applied by passing selected metafield values to the product-fetching function.
    - *Reason*: Allows dynamic and flexible filtering without needing to predefine all possible combinations.

<br/>

