const projects = {
        "sfc": {
        "title": "Singapore Financial Calculator",
        "description": "A comprehensive financial calculator web application that provides various financial tools and resources for users to manage their finances effectively.",
        "tech": [
            { "type": "lang", "name": "react", "icon": "react.svg" },
            { "type": "lang", "name": "html", "icon": "html.svg" },
            { "type": "lang", "name": "css", "icon": "css.svg" },
            { "type": "lang", "name": "js", "icon": "js.svg" },
            { "type": "prog", "name": "supabase", "icon": "supabase.svg" },
            { "type": "prog", "name": "vite", "icon": "vite.svg" },
            { "type": "prog", "name": "nodejs", "icon": "nodejs.svg" },
            { "type": "prog", "name": "vercel", "icon": "vercel.svg" }
        ],
        "content": `
### 🧾 Overview

**Singapore Financial Calculator (SFC)** is a comprehensive, all-in-one financial planning web application built specifically for the Singaporean context. Navigating local policies like CPF contribution rates, BTO housing rules, and IRAS income tax brackets can be incredibly complex. This app aggregates these variables into a single, unified engine to project your lifelong net worth, track assets, and simulate major life milestones up to retirement and beyond.

---

### 🚀 Key Features

- **📊 Centralised Wealth Dashboard**: Visualise your net worth trajectory, liquid cash, and total CPF balances via dynamic, interactive charts (Recharts).
- **🏦 Advanced CPF & CPF LIFE Projections**: Accurately simulates OA, SA, MA, and RA waterfalls at age 55. Calculates CPF LIFE monthly payouts, bequest amounts, and capital recovery based on the latest 2026 statutory limits (BRS/FRS/ERS).
- **🏠 Housing Affordability Planner (BTO/Resale)**: Calculates maximum loan quantums (LTV), Buyer's Stamp Duty (BSD), downpayments, and generates a complete monthly amortization schedule. Supports simulating mortgage payments via CPF OA vs. Cash.
- **🧾 Income Tax Optimizer**: A precise tax calculator factoring in Singapore's progressive tax brackets and exhaustive personal reliefs (NSman, SRS, CPF Cash Top-ups, Working Mother's Child Relief, etc.).
- **🔥 Investment & FIRE Calculator**: Compare Dollar-Cost Averaging (DCA) vs. Lump Sum strategies, and calculate the exact nest egg needed for Financial Independence, Retire Early (FIRE) using Safe Withdrawal Rates (SWR).
- **🛡️ Policy & Gap Analysis**: Track life insurance coverage (Death, CI, TPD) against your income, and simulate hospital bill cash outlays based on the latest Integrated Shield Plan rider regulations.
- **🛣️ Life Events Engine**: Add custom future milestones (e.g., weddings, renovations, children) and instantly see their impact on your long-term cashflow graph.

---

### 🛠️ Tech Stack & Architecture

- **Frontend**: React.js (Vite), React Router, Recharts (Data Visualization)
- **Backend / Database**: Supabase (PostgreSQL)
- **Authentication & Security**: Supabase Auth, strictly enforced Row Level Security (RLS) policies for cross-user data isolation.
- **Architecture**: Serverless Jamstack. Heavy mathematical projection loops execute client-side to minimize server costs and ensure instant UI feedback.
- **Styling**: Pure CSS with responsive variables, glassmorphism UI, and dark-mode optimization.

---

### 🔐 How to Use (No Signup Required)

SFC is built with user privacy and low friction in mind. You can try the entire application without creating an account.

- **Guest Mode**: Simply visit the site and start typing. All your financial data and projections are saved securely in your browser's localStorage and never touch a server. 
- **Cloud Sync**: Users who wish to sync their data across multiple devices can opt to create a free account, seamlessly migrating their local data to the Supabase cloud backend.

> **Live Application**: [singaporefinancialcalculator.com](https://www.singaporefinancialcalculator.com/)

---

### 📝 Disclaimer

*The calculations, projections, and results provided by this application are strictly for educational and informational purposes. Formulas are based on public government guidelines (CPF Board, IRAS, HDB) but may not reflect exact real-world scenarios. This tool does not constitute professional financial advice.*
        `,
        "demoUrl": "https://singaporefinancialcalculator.com/",
        "githubUrl": "https://github.com/FabianHeng/FinPort",
        "video": "sfc.mov",
        "image": "sfc.png"
    },
    "trackspence": {
        "title": "Trackspence",
        "description": "An AI-powered all-in-one financial tracker that seamlessly manages expenses and income.",
        "tech": [
            { "type": "lang", "name": "react", "icon": "react.svg" },
            { "type": "lang", "name": "html", "icon": "html.svg" },
            { "type": "lang", "name": "css", "icon": "css.svg" },
            { "type": "lang", "name": "ts", "icon": "ts.svg" },
            { "type": "prog", "name": "supabase", "icon": "supabase.svg" },
            { "type": "prog", "name": "gemini", "icon": "gemini.svg" },
            { "type": "prog", "name": "netlify", "icon": "netlify.svg" },
            { "type": "prog", "name": "resolve", "icon": "davinci.svg" }
        ],
        "content": `
### 🧾 Overview

**Trackspence** is a full-stack web application built to help users monitor their financial habits, manage expenses and income, and stay on top of their personal budget. With a sleek UI and practical features, it goes beyond basic tracking by integrating live stock data and enabling social debt tracking with friends.

---

### 🚀 Features

- **📊 Dashboard Overview**: Get a quick glance at your income, expenses, and overall budget.
- **💵 Expense & Income Tracker**: Log transactions easily with descriptions, categories, and timestamps.
- **🧮 Budget Management**: Set category-specific budgets (e.g., food, transport, entertainment) and get alerts when nearing your limit.
- **📈 Live Stock Prices**: Stay informed with real-time stock prices integrated directly into the app.
- **🪙 Gemini API Integration**: Seek help from Gemini to plan your finances better.
- **👥 Friends List & Split Tracking**: Add friends, send and receive borrowed money, and keep track of shared debts.
- **🙍‍♂️ Profile Page**: View your financial summary and manage your friend connections in one place.

---

### 🔐 Test Account

Want to try it out? You can login with the following details:

Username: \`boci\`  
Password: \`boci\`

> Feel free to log in and explore the full range of features!

---

### 🛠️ Tech Stack

- Frontend: React.js, CSS, Tailwind
- Backend: Node.js, Express.js
- Database: MongoDB
- APIs: Gemini API, AlphaVantage, FXratesAPI, Mailgun
        `,
        "demoUrl": "https://trackspence.netlify.app/",
        "githubUrl": "https://github.com/FabianHeng/Trackspence",
        "video": "trackspence.mov",
        "image": "trackspence.png"
    },
    "singtel": {
        "title": "Sectorial Dashboard",
        "description": "A cybersecurity dashboard for Singtel, providing real-time threat monitoring and malware detection insights.",
        "tech": [
            { "type": "lang", "name": "html", "icon": "html.svg" },
            { "type": "lang", "name": "css", "icon": "css.svg" },
            { "type": "lang", "name": "react", "icon": "react.svg" },
            { "type": "prog", "name": "figma", "icon": "figma.svg" },
            { "type": "prog", "name": "mongo", "icon": "mongo.svg" }
        ],
        "content": `
### 🧾 Overview

This is a cybersecurity dashboard designed for Singtel, a leading telecommunications company in Asia. The dashboard provides real-time monitoring of web threats and malware detection insights, helping organizations to stay ahead of potential cyber threats.

---

### 🚀 Features
- **🔍 Real-time Threat Monitoring**: Monitor web threats in real-time, ensuring immediate response to potential risks.
- **📊 Malware Detection Insights**: Gain insights into malware detection trends and patterns.
- **📈 Data Visualization**: Visualize threat data through interactive charts and graphs for better understanding.
- **🔒 Secure Access**: Ensure secure access to the dashboard with authentication and authorization mechanisms.

---

### 🛠️ Tech Stack
- Frontend: React.js, CSS
- Backend: Node.js
- Database: MongoDB
- Design: Figma

---

> Closed sourced, not available for public access.
        `,
        "video": "singtel.mov",
        "image": "singtel.png"
    },
    "dtap": {
        "title": "Digital Twinning & Automated Pentesting",
        "description": "A one-click solution for cloning network infrastructure to the cloud, enabling automated remote penetration testing.",
        "tech": [
            { "type": "lang", "name": "py", "icon": "py.svg" },
            { "type": "lang", "name": "powershell", "icon": "powershell.svg" },
            { "type": "prog", "name": "premiere", "icon": "premiere.svg" },
            { "type": "prog", "name": "aws", "icon": "aws.svg" },
            { "type": "prog", "name": "kali", "icon": "kali.svg" }
        ],
        "content": `
### 🧾 Overview

**Digital Twinning & Automated Pentesting** is a cutting-edge solution that allows organizations to clone their network infrastructure to the cloud with just one click. This innovative approach enables automated remote penetration testing, ensuring that security measures are always up-to-date and effective.

---

### 🚀 Features
- **🌐 One-click Cloning**: Effortlessly clone your network infrastructure to the cloud, simplifying the setup process.
- **🔍 Automated Pentesting**: Conduct automated penetration testing to identify vulnerabilities and security gaps.
- **🔒 Enhanced Security**: Ensure that your network is always secure with continuous monitoring and testing.
- **📊 Real-time Insights**: Gain real-time insights into your network's security posture and vulnerabilities.

---

> Project is closed sourced, but trailer video is available on YouTube.
        `,
        "demoUrl": "https://www.youtube.com/watch?v=TeYs2m9WB4E/",
        "video": "dtap.mov",
        "image": "dtap.png"
    },
    "ultraflow": {
        "title": "Ultraflow Engineering Portfolio Website",
        "description": "A complete redesign of an engineering firm's website, highlighting its achievements and successful projects.",
        "tech": [
            { "type": "lang", "name": "html", "icon": "html.svg" },
            { "type": "lang", "name": "css", "icon": "css.svg" },
            { "type": "lang", "name": "js", "icon": "js.svg" },
            { "type": "prog", "name": "netlify", "icon": "netlify.svg" }
        ],
        "content": `
### 🧾 Overview

**Ultraflow** is a portfolio website designed for an engineering firm, showcasing their projects and skills in a visually appealing manner. The website is built with a focus on user experience and responsiveness, ensuring that it looks great on all devices.

---

### 🚀 Features
- **📁 Project Showcase**: Highlights projects with detailed descriptions and images.
- **💻 Responsive Design**: The website is fully responsive, ensuring a seamless experience on all devices.
        `,
        "demoUrl": "https://ultraflow.netlify.app/",
        "video": "ultraflow.mov",
        "image": "ultraflow.png"
    },
    "iot": {
        "title": "FishMon",
        "description": "An Arduino-powered system integrating Amazon Image Recognition to identify and feed fish automatically.",
        "tech": [
            { "type": "lang", "name": "py", "icon": "py.svg" },
            { "type": "lang", "name": "c++", "icon": "cpp.svg" },
            { "type": "lang", "name": "css", "icon": "css.svg" },
            { "type": "lang", "name": "html", "icon": "html.svg" },
            { "type": "lang", "name": "js", "icon": "js.svg" },
            { "type": "prog", "name": "flask", "icon": "flask.svg" },
            { "type": "prog", "name": "arduino", "icon": "arduino.svg" },
            { "type": "prog", "name": "premiere", "icon": "premiere.svg" }
        ],
        "content": `
### 🧾 Overview

**FishMon** is an innovative system designed to automate the feeding of fish using Arduino technology and Amazon Image Recognition. The system identifies the type of fish in the aquarium and dispenses the appropriate amount of food, ensuring that your fish are well-fed and healthy.

---

### 🚀 Features
- **🐟 Fish Identification**: Utilizes Amazon Image Recognition to identify different types of fish.
- **🍽️ Automated Feeding**: Automatically dispenses the right amount of food based on the fish type.
- **🔧 Arduino Integration**: Built on Arduino technology for reliable and efficient operation.
- **📊 Data Logging**: Logs feeding data for analysis and monitoring.
- **📹 Video Demonstration**: A video demonstration of the system in action is available for viewing.

---

### 🛠️ Tech Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Python, Flask
- Hardware: Arduino, Oculus Rift Sumerian
- Image Recognition: Amazon Image Recognition
- Video Editing: Adobe Premiere Pro
        `,
        "demoUrl": "https://www.youtube.com/watch?v=D9ga04qTOAE",
        "githubUrl": "https://github.com/FabianHeng/FishMon/",
        "video": "iot.mov",
        "image": "iot.png"
    },
    "sparklz": {
        "title": "Sparklz",
        "description": "A jewelry e-commerce website prototype with an intuitive UI/UX design, marking my first web development project.",
        "tech": [
            { "type": "lang", "name": "html", "icon": "html.svg" },
            { "type": "lang", "name": "css", "icon": "css.svg" },
            { "type": "lang", "name": "js", "icon": "js.svg" },
        ],
        "content": `
### 🧾 Overview

**Sparklz** is a jewelry e-commerce website prototype designed to provide an intuitive and user-friendly shopping experience. This project marks my first foray into web development, showcasing my skills in HTML, CSS, and JavaScript.

---

### 🚀 Features
- **💎 Jewelry Showcase**: Display a wide range of jewelry products with detailed descriptions and images.
- **🛒 Shopping Cart**: Add products to the cart and manage your selections easily.
- **📱 Responsive Design**: The website is fully responsive, ensuring a seamless experience on all devices.
- **🎨 Intuitive UI/UX**: Designed with user experience in mind, making navigation easy and enjoyable.
- **🔗 Prototype**: This is a prototype website, not a fully functional e-commerce platform.

---

### 🛠️ Tech Stack
- Frontend: HTML, CSS, JavaScript
        `,
        "demoUrl": "https://sparklz.neocities.org/",
        "video": "sparklz.mov",
        "image": "sparklz.png"
    },
};