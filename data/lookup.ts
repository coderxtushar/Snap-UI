export default {
    SUGGESTIONS: [
        "Create a Todo App",
        "Create a Budget Tracking App",
        "Create a Gym Management Portal Dashboard",
        "Create a Quiz App On Historical Events",
        "Create a SaaS Landing Page with Microinteractions",
    ],

    HERO_HEADING: "Build Stunning Websites with AI",
    HERO_DESC: "Warp Speed",
    INPUT_PLACEHOLDER: "What do you want to build?",

    SIGNIN_HEADING: "Continue With Tinker AI ⚡",
    SIGNIN_SUBHEADING:
        "To use Tinker AI you must log into an existing account or create one.",
    SIGNIN_AGREEMENT_TEXT:
        "By using Tinker AI , you agree to the collection of usage data for analytics.",

    DEFAULT_FILE: {
        "/public/index.html": {
            code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`,
        },
        "/App.css": {
            code: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
        },
        "/tailwind.config.js": {
            code: `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`,
        },
        "/postcss.config.js": {
            code: `/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;`,
        },
    },

    DEPENDENCY: {
        postcss: "^8",
        tailwindcss: "^3.4.1",
        autoprefixer: "^10.0.0",
        "tailwindcss-animate": "^1.0.7",
        "react-router-dom": "^7.1.1",
        firebase: "^11.1.0",
        "@google/generative-ai": "^0.21.0",
        "date-fns": "^4.1.0",
        "react-chartjs-2": "^5.3.0",
        "chart.js": "^4.4.7",
        "@radix-ui/react-dialog": "^1.1.4",
        "@radix-ui/react-slot": "^1.1.1",
        "@react-oauth/google": "^0.12.1",
        axios: "^1.7.9",
        "class-variance-authority": "^0.7.1",
        clsx: "^2.1.1",
        convex: "^1.17.4",
        dedent: "^1.5.3",
        "lucide-react": "^0.471.0",
        next: "15.1.4",
        "next-themes": "^0.4.4",
        react: "^18.0.0",
        "react-dom": "^18.0.0",
        "react-markdown": "^9.0.3",
        "tailwind-merge": "^2.6.0",
        "tailwind-scrollbar-hide": "^2.0.0",
        uuid: "^11.0.5",
    },

    PRICING_DESC:
        "Start with a free account to speed up your workflow on public projects or boost your entire team with instantly-opening production environments.",

    PRICING_OPTIONS: [
        {
            name: "Basic",
            tokens: "50K",
            value: 50000,
            desc: "Ideal for hobbyists and casual users for light, exploratory use.",
            price: 4.99,
        },
        {
            name: "Starter",
            tokens: "120K",
            value: 120000,
            desc: "Designed for professionals who need to use ThunderBolt.New a few times per week.",
            price: 9.99,
        },
        {
            name: "Pro",
            tokens: "2.5M",
            value: 2500000,
            desc: "Designed for professionals who need to use ThunderBolt.New a few times per week.",
            price: 19.99,
        },
    ],
};
