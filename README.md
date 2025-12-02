# Cuilin 🔗

   

## Introduction

**Cuilin** is a modern and efficient link shortening application designed to simplify URL management. It provides a user-friendly interface for creating short links, customizing slugs, and managing your link portfolio. Built with performance and user experience in mind, Cuilin leverages the latest web technologies to ensure fast redirection and secure authentication.

Whether you need to share a long URL on social media or track your link usage, Cuilin offers a streamlined solution.

## Tech Stack 🛠️

This project is built using a robust modern tech stack:

  * **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
  * **Language:** [TypeScript](https://www.typescriptlang.org/)
  * **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
  * **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (based on Radix UI)
  * **State Management & Data Fetching:** [TanStack Query](https://tanstack.com/query/latest) (React Query)
  * **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for validation
  * **HTTP Client:** [Axios](https://axios-http.com/)
  * **Charts:** [Recharts](https://recharts.org/)
  * **Icons:** [Lucide React](https://lucide.dev/) & [Tabler Icons](https://tabler.io/icons)
  * **Utilities:** `clsx`, `tailwind-merge`, `sonner` (Toast notifications), `vaul` (Drawers)

## Main Features ✨

  * **🔗 Link Shortening:** Instantly convert long URLs into compact, shareable links.
  * **✏️ Custom Slugs:** Create personalized custom aliases for your links (e.g., `yoursite/my-custom-link`).
  * **🔐 User Authentication:** Secure Sign Up and Login functionality to manage your personal links.
  * **📊 Dashboard:** A centralized dashboard to view, manage, and track your created links.
  * **📝 Link Management:** Edit existing links or delete ones you no longer need.
  * **📋 Quick Copy:** One-click button to copy your short links to the clipboard.
  * **🌗 Dark Mode:** Fully supported dark and light themes for visual comfort.
  * **📱 Responsive Design:** optimized for both desktop and mobile devices.

## Installation & Setup 🚀

Follow these steps to get the project running on your local machine.

### 1\. Clone the repository

```bash
git clone https://github.com/yourusername/cuilin.git
cd cuilin
```

### 2\. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3\. Configure Environment Variables

Create a `.env.local` file in the root directory of the project and add the following variables. Adjust the values according to your backend configuration.

```env
# The base URL of your backend API
NEXT_PUBLIC_BASE_URL=http://localhost:8080/api

# The URL of this frontend application (used for copying links)
NEXT_PUBLIC_FE_URL=http://localhost:3000
```

### 4\. Run the project locally

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

### 5\. Build for production

To build the application for production usage:

```bash
npm run build
npm run start
```

## Project Structure mj Structure

The project follows the standard Next.js App Router directory structure:

```
cuilin/
├── app/                 # App Router pages and layouts
│   ├── [slug]/          # Dynamic route for link redirection
│   ├── auth/            # Authentication pages (login/signup)
│   ├── dashboard/       # Dashboard page and layout
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Landing page
├── components/          # Reusable UI components
│   ├── ui/              # Shadcn UI primitives (button, input, etc.)
│   ├── app-sidebar.tsx  # Main application sidebar
│   ├── navbar.tsx       # Top navigation bar
│   └── ...              # Other components
├── hooks/               # Custom React hooks (use-auth, use-mobile, etc.)
├── lib/                 # Utility functions and API configurations
│   ├── api/             # Axios instance and auth API calls
│   ├── utils.ts         # CN utility
│   └── ...
├── public/              # Static assets
└── types/               # TypeScript interfaces (User, Link, etc.)
```

## Usage Example

1.  **Sign Up/Login:** Create an account to access the dashboard.
2.  **Create a Link:**
      * Navigate to the dashboard or the home page.
      * Paste your long URL into the input field.
      * (Optional) Toggle "Custom link?" to enter a specific slug.
      * Click "Create New Short Link".
3.  **Manage Links:**
      * In the dashboard, view your list of links.
      * Click the copy icon to share a link.
      * Use the dropdown menu on a table row to **Edit** or **Delete** a link.

## Contribution Guidelines 🤝

Contributions are welcome\! If you'd like to improve Cuilin, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

Please ensure your code follows the existing style and conventions.

## License 📄

This project is licensed under the **MIT License**. Feel free to use and modify it for your own projects.
