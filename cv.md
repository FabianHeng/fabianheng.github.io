# Fabian Heng (Heng Yee Chong, Fabian)

**Software Engineer (Full-Stack and DevOps) · Bachelor of Computing in Computer Science, National University of Singapore**

Singapore · [fabianheng@gmail.com](mailto:fabianheng@gmail.com) · [fabianheng.me](https://fabianheng.me) · [LinkedIn](https://www.linkedin.com/in/fabianheng/) · [GitHub](https://github.com/FabianHeng)

> This is the canonical, machine-readable version of my CV, written in plain Markdown. The content matches my full CV PDF and my [LinkedIn profile](https://www.linkedin.com/in/fabianheng/). PDF versions: [Resume (1 page)](https://fabianheng.me/files/Fabian_Resume.pdf) · [Full CV](https://fabianheng.me/files/Fabian_CV.pdf). Raw source: [fabianheng.me/cv.md](https://fabianheng.me/cv.md). Last updated: September 2026.

## At a Glance

| Field | Detail |
| --- | --- |
| Full name | Heng Yee Chong, Fabian (王禹璁) |
| Location | Singapore |
| Current role | DevOps Software Engineer Intern, Pick Network Private Limited (Jun 2026 – Jan 2027) |
| Education | Bachelor of Computing in Computer Science, National University of Singapore, GPA 4.56 / 5.0 (Distinction) |
| Prior education | Diploma in Infocomm Security Management, Singapore Polytechnic, GPA 3.888 / 4.0 |
| Core stack | TypeScript, React, Next.js, Node.js, Express.js, PostgreSQL, Supabase, Docker, AWS, GitHub Actions |
| Open to | Software Engineer roles (Full-Stack, Backend, DevOps / Platform) |
| Availability | February 2027 onwards, after the current internship |
| Founder of | [Appsol](https://appsol.sg), a software consultancy delivering client web applications |
| Email | fabianheng@gmail.com |
| Website | https://fabianheng.me |
| LinkedIn | https://www.linkedin.com/in/fabianheng/ |
| GitHub | https://github.com/FabianHeng |

## Summary

Computer Science graduate from the National University of Singapore (GPA 4.56 / 5.0, Distinction) with software engineering experience across internships, part-time work and client projects since 2020. I build full-stack web applications end to end, from database design and secure backends (PostgreSQL, Supabase Row-Level Security, role-based access control) to React and Next.js frontends, and I deploy them with Docker, AWS (ECS, ECR, Lambda), Terraform and GitHub Actions CI/CD.

Recent work includes a 13-module ERP platform of over 50k lines of code that doubled an SME's administration efficiency, a privacy-first personal finance application built in partnership with AIA, and a nationwide smart locker tracking portal serving Shopee, Lazada and Amazon. I started out in infocomm security (Singapore Polytechnic diploma, SAF Signals, a penetration testing final year project), so I treat security and data integrity as defaults. At NUS I also served as President of a student organisation with over 300 members.

## Skills

- **Programming languages:** TypeScript, JavaScript, Python, Java, SQL, C++, HTML, CSS, PowerShell
- **Frontend:** React, Next.js, Vite, Tailwind CSS, shadcn/ui, JavaFX, responsive UI/UX design, Figma, @react-pdf/renderer, html2pdf.js
- **Backend:** Node.js, Express.js, RESTful APIs, microservices, monolithic domain module architecture, event-driven systems, webhooks, JWT authentication, role-based access control (RBAC), Flask
- **Databases:** PostgreSQL, MySQL, SQL Server, MongoDB, Redis, Supabase (migrations, Row-Level Security, database webhooks), Firebase (NoSQL)
- **Cloud and DevOps:** AWS (ECS, ECR, Lambda, Kinesis, Sumerian), Docker, GitHub Actions CI/CD, GitHub OIDC, Terraform (infrastructure as code), Render, Netlify
- **Testing and code quality:** Vitest, Playwright (E2E), unit testing, test coverage thresholds in CI, ESLint, TypeScript validation, dependency checks
- **AI / LLM integration:** Anthropic SDK, Google GenAI SDK, Gemini API
- **Security:** Infocomm security management (diploma), automated penetration testing, digital twinning, networking, PDPA-compliant handling of sensitive health data, Row-Level Security and RBAC design
- **Ways of working:** Kanban, Sprint SDLC, agile teams, Git and GitHub, stakeholder presentations, project coordination
- **Other:** Android (Java, Android Studio), IoT (Arduino, sensors, actuators), MERN stack, Expo, DaVinci Resolve, Adobe Premiere Pro
- **Services (via Appsol):** Full-Stack Development, UI/UX Web Design, Software Development, Database Management, Visual Design, Data Analysis, Customer Relations
- **Toolbox (from resume):** React, Figma, HTML/CSS, NextJS, TypeScript, Python, Docker, Redis, MongoDB, MySQL, Supabase, Firebase, Git, Java, Expo, MERN, REST, AWS

## Experience

### DevOps Software Engineer at Pick Network Private Limited

*Internship · Singapore · Jun 2026 – Jan 2027 (current)*

- Engineered an automated CI/CD pipeline from scratch utilising GitHub Actions to enforce ESLint, TypeScript validations, and dependency checks across all internal and external software repositories.
- Architected secure deployment workflows leveraging GitHub OIDC to automatically build and push Docker containerised applications to AWS ECR and deploy to AWS ECS, removing manual credential management.
- Maintained and enhanced an internal tracking portal built on an Express.js microservice architecture, monitoring over 1,000 smart lockers nationwide and processing real-time booking and delivery transactions for major e-commerce partners including Shopee, Lazada, and Amazon.
- Optimised event-driven system architecture by auditing and refining webhook integrations with locker manufacturers.
- Reconciled data across multiple relational database environments (MySQL, PostgreSQL, SQL Server) to verify status tallies, ensuring strict data consistency between physical locker hardware events and internal transaction records.

**Tech:** `GitHub Actions` `GitHub OIDC` `Docker` `AWS ECR` `AWS ECS` `Express.js` `TypeScript` `ESLint` `MySQL` `PostgreSQL` `SQL Server` `Webhooks`

### Full Stack Software Engineer at Ultraflow Engineering Private Limited

*Part-Time · Singapore · Aug 2024 – Jun 2026*

- Engineered a full-stack ERP platform from scratch for a SME engineering firm using Next.js, Node.js, TypeScript, Tailwind CSS, and shadcn/ui to support daily operational workflows.
- Architected a monolithic domain modules service system comprising 13 distinct modules and over 50k lines of code to manage company records, client data, quotations, invoices, DOs, and POs, effectively doubling administration efficiency.
- Built a highly secure backend utilising Supabase and PostgreSQL across 50+ database migrations, implementing Row-Level Security on all tables, role-based access control, and database webhooks to generate and track all running document numbers.
- Developed an AI-assisted quoting tool leveraging Anthropic and Google GenAI SDKs to accelerate quote generation, and integrated @react-pdf/renderer to create downloadable business documents with live-preview parity.
- Maintained rigorous version control and code quality via GitHub and ESLint, established a comprehensive CI testing strategy spanning unit and E2E tests using Vitest and Playwright, and deployed the production application on Render.

**Tech:** `Next.js` `Node.js` `TypeScript` `Tailwind CSS` `shadcn/ui` `Supabase` `PostgreSQL` `Row-Level Security` `Anthropic SDK` `Google GenAI SDK` `@react-pdf/renderer` `Vitest` `Playwright` `ESLint` `Render`

### Data Operations Engineer at Healthway Medical Group

*Internship · Singapore · Apr 2024 – Aug 2024*

- Managed sensitive digital health records across centralized databases and Excel sheets, ensuring strict adherence to PDPA privacy regulations and maintaining high data integrity.
- Queried relational databases using MySQL RDBMS to extract potential health risks, proactively identifying seniors susceptible to severe vaccine reactions to safeguard patient well-being.
- Maintained a system of records and leveraged monolithic Node.js and React internal support tools to accurately track patient admissions, registrations, and COVID-19 vaccination timelines, utilising GitHub for collaborative version control.
- Streamlined operational workflows by configuring HTTP webhooks to integrate data management and registration systems, improving the overall efficiency of healthcare administration and digital solutions for vulnerable populations.

**Tech:** `MySQL` `Node.js` `React` `HTTP Webhooks` `Excel` `GitHub`

### Signal Support System Specialist at MINDEF, Singapore Armed Forces

*Full-Time · Singapore · Sep 2021 – Jul 2023*

- Gained advanced networking and cybersecurity skills as a Signal Specialist.
- Developed expertise in managing personnel effectively.
- Acquired experience in financial administration processes.

### Frontend Software Engineer at Trustwave, Singapore Telecommunications Limited

*Internship · Singapore · Mar 2020 – Aug 2020*

- Prototyped and designed a Web Threat Dashboard from scratch for a client using Figma, translating specific requirements into an intuitive and visually appealing interface.
- Developed and optimised reusable frontend components using React.js, JavaScript, HTML, and CSS to deliver an efficient and scalable dashboard solution.
- Processed and analysed large datasets using MongoDB, integrating live data into customised widgets to extract meaningful threat insights and enhance the user experience.
- Coordinated project workflows using Kanban tools within a Sprint SDLC framework, managed administrative tasks, and delivered presentations to highlight development progress to stakeholders.

**Tech:** `React.js` `JavaScript` `HTML` `CSS` `MongoDB` `Figma` `Kanban`

## Projects

### PeerPrep

*Software Engineering · Jan 2026 – May 2026 · [GitHub](https://github.com/CS3219-AY2526S2/peerprep-g18)*

- Engineered a scalable interview-prep platform in a collaborative team setting for the CS3219 Software Engineering Principles module, architecting a robust microservices ecosystem.
- Built RESTful APIs and a real-time pub/sub frontend, leveraging Redis caching and Firebase NoSQL to execute CRUD operations and significantly optimise system responsiveness.
- Secured application endpoints by implementing JWT-based authentication and strict role-based access control (RBAC) to manage user permissions safely.
- Containerised the microservices using Docker and established automated continuous integration pipelines via GitHub to maintain code quality.
- Provisioned cloud infrastructure as code using Terraform, successfully deploying the distributed application across AWS Lambda and Elastic Container Service (ECS).

**Tech:** `TypeScript` `Express` `React` `Firebase` `AWS` `Redis`

### Singapore Financial Calculator

*Appsol Client Project · Dec 2025 – Apr 2026 · [Live site](https://singaporefinancialcalculator.com/) · [GitHub](https://github.com/FabianHeng/FinPort) · [Portfolio page](https://fabianheng.me/project.html?name=sfc)*

- Engineered a comprehensive personal finance web application in an exclusive client partnership with AIA, empowering users to accurately model CPF trajectories, housing affordability, and FIRE investment goals.
- Architected a strictly privacy-first system by migrating from Supabase to a fully client-side storage model using React 19 and Vite.
- Programmed highly complex localised financial algorithms to simulate dynamic CPF LIFE transitions and calculate IRAS income tax liabilities across more than 20 distinct tax relief categories.
- Implemented robust data portability and security features utilising html2pdf.js for localised report generation, JSON state backups, and hCaptcha, all delivered within a SEO Single Page Application.

**Tech:** `React` `Postgres`

### ClientNest

*Software Engineering · Feb 2025 – May 2025 · [GitHub](https://github.com/FabianHeng/ClientNest)*

- Developed a JavaFX desktop Client Relationship Management (CRM) application for the CS2103 Software Engineering module, tailored to help young financial advisors efficiently manage contacts and track appointments.
- Architected the application utilising a strict Model-View-Controller (MVC) pattern, ensuring a modular codebase that clearly separates the user interface from complex client data organization logic.
- Collaborated within an agile development team to implement software engineering best practices, establishing an automated CI/CD pipeline that enforced a 60% test code coverage threshold to guarantee application stability.
- Designed an intuitive and responsive UI/UX specifically optimised for financial advisory workflows, prioritising user experience, scalability, and long-term maintainability.

**Tech:** `Java` `JavaFX` `UML` `CSS` `IntelliJ` `Gradle`

### Trackspence

*NUS Orbital 2024 · May 2024 – Aug 2024 · [Live site](https://trackspence.netlify.app/) · [GitHub](https://github.com/FabianHeng/Trackspence) · [Portfolio page](https://fabianheng.me/project.html?name=trackspence)*

- Developed Trackspence, an all-in-one expense tracking web application to categorize expenses, set budgets, and provide real-time updates on spending habits.
- Created a robust friend system that includes adding/removing friends, splitting bills, and sending notifications. Enabled multi-currency support through API integration.
- Implemented enhanced user authentication with email verification and encrypted data storage to ensure privacy protection.
- Designed tools for investment and budget management to track portfolios, monitor financial performance, and visualize budget progress.
- Utilized the MERN stack (MongoDB, Express.js, React.js, Node.js) for scalable development and integrated APIs (AlphaVantage, FXratesAPI, Gemini API, Mailgun) for real-time data and communication.
- Ensured cross-platform accessibility with a focus on intuitive design and comprehensive functionality across devices.

**Tech:** `TypeScript` `JavaScript` `HTML` `CSS` `MongoDB` `Gemini API` `Netlify` `DaVinci Resolve`

### Scissors, Paper, Showdown!

*Hack & Roll Hackathon 2024 · Jan 2024 · [GitHub](https://github.com/FabianHeng/SPS-Showdown)*

- Developed a Java-based simulation of Scissors, Paper, Stone, featuring diverse bots with unique strategies for competitive play.
- Engineered each bot to leverage advanced tactics and strategies to gain an edge over opponents.
- Conducted over 100,000 simulated rounds to rigorously evaluate and identify the most effective strategies.
- Analysed results to determine optimal approaches and refine bot performance.
- Documented findings and insights to support strategic decision-making and enhance future bot designs.

**Tech:** `Java`

### Ultraflow Engineering Website

*Technical Manager, Ultraflow Engineering · Aug 2023 – Dec 2023 · [Live site](https://ultraflow.netlify.app/) · [Portfolio page](https://fabianheng.me/project.html?name=ultraflow)*

- Recreated a modern, responsive website showcasing the company's portfolio, significantly enhancing its online presence.
- Deployed the website using Netlify and GitHub's native hosting services for reliable and efficient performance.
- Improved the website's design, resulting in increased traffic, user retention, and overall productivity for the company.

**Tech:** `HTML` `CSS` `JavaScript` `Netlify`

### Digital Twinning & Automated Pentesting (DTAP)

*SP Final Year Project · Oct 2020 – Feb 2021 · [Video demo](https://www.youtube.com/watch?v=T6R6lDRXJ2E) · [Portfolio page](https://fabianheng.me/project.html?name=dtap)*

- Designed and developed an automated tool to streamline the deployment of target machines to the cloud and facilitate remote penetration testing.
- Leveraged Amazon Web Services (AWS) to integrate digital twin machines with AWS Cloud servers, enabling off-site penetration testing capabilities.
- Engineered a script using Python and PowerShell to automate deployment and testing processes, ensuring efficiency and reliability.
- Conducted advanced visualization and documentation of testing results.
- Coordinated cloud infrastructure and remote access features to support comprehensive, on-demand security assessments.
- Achieved 2nd place in the school's AY2020/2021 Semester 2 FYP Showcase.

**Tech:** `Python` `PowerShell` `Premier Pro` `Amazon Web Services`

### FishMon

*Internet of Things · Nov 2020 – Feb 2021 · [Video demo](https://www.youtube.com/watch?v=D9ga04qTOAE) · [GitHub](https://github.com/FabianHeng/FishMon) · [Portfolio page](https://fabianheng.me/project.html?name=iot)*

- Engineered FishMon, a comprehensive electrical sensor tool designed to monitor and analyse the conditions of a fish tank.
- Integrated cameras, actuators, and sensors to collect real-time data, which is then presented through a user-friendly data dashboard.
- Developed features to display current tank status, water level, fish movement and species tracking, water pollution levels, and more.
- Utilized Amazon Web Services to host the web application, with Kinesis and Sumerian for enhanced functionality and data processing.

**Tech:** `Python` `C++` `HTML` `JavaScript` `Flask` `Arduino` `AWS Kinesis` `AWS Sumerian` `Premier Pro`

### Web Threat Dashboard

*Software Engineer, Singtel · Mar 2020 – Aug 2020 · [Portfolio page](https://fabianheng.me/project.html?name=singtel)*

- Engaged in a dynamic project focused on extracting valuable insights from extensive datasets.
- Crafted efficient front-end components with React to build scalable and responsive user interfaces.
- Designed intuitive dashboards that seamlessly integrate live data for an enhanced user experience.
- Tailored features to meet specific client needs, optimizing functionality and user satisfaction.
- Handled project coordination, including organizing meetings and delivering key presentations to showcase progress and milestones.

**Tech:** `ReactJS` `SQL` `Figma` `MongoDB`

### SP SHARE

*Mobile Applications · Jan 2020 – Mar 2020 · [GitHub](https://github.com/FabianHeng/SPSHARE)*

- Developed a fully deployable Android application enabling users to share and manage personal notes on a collaborative platform.
- Implemented a backend database using Google Firebase to capture and store user-generated notes and images via form submissions.
- Incorporated a search feature to filter and retrieve notes based on keywords.
- Integrated location tracking and a customizable theme changer to enhance user experience and functionality.

**Tech:** `Java` `MySQL` `Google Firebase` `Android Studio`

### Game Robo

*Enterprise Application Development · June 2019 – Aug 2019 · [GitHub](https://github.com/FabianHeng/EAD-Assignment1)*

- Developed a website simulating a game store using MySQL, JavaScript, and HTML.
- Engineered the backend with MySQL database tables to manage game data and interactions.
- Enabled users to add new game details and display them dynamically on the website through query input.

**Tech:** `CSS` `HTML` `JavaScript` `MySQL`

### Sparklz

*Web Client Development · Mar 2019 – Apr 2019 · [Live site](https://sparklz.neocities.org/) · [Portfolio page](https://fabianheng.me/project.html?name=sparklz)*

- Created a responsive website simulating an online store specializing in necklaces and earrings.
- Implemented a fully functional shopping cart and integrated backend support for payment processing and checkout.

**Tech:** `CSS` `HTML` `JavaScript`

## Education

### National University of Singapore (NUS), Bachelor of Computing in Computer Science

*Singapore · Aug 2023 – Jun 2026 · GPA: 4.56 / 5.0 (Distinction)*

- President of NUS Korean Cultural Interest Group
- Programmes Committee of NUS SOC Freshmen Social Camp
- Volunteer Management Committee of NUS Project Action Speaks Louder

### Singapore Polytechnic (SP), Diploma in Infocomm Security Management

*Singapore · Apr 2018 – Mar 2021 · GPA: 3.888 / 4.0*

- Programmes Committee of SP Sign Language Club
- Student Ambassador of SP School of Computing Club
- Volunteer of SP Overseas Learning Express (in Yogyakarta)

### School of Science and Technology (SST)

*Singapore · Jan 2014 – Nov 2017*

- Sub-committee of SST Student EXCO Club
- Talent of SST Inc, Talent Development Program
- Member of the SST Floorball Club

## Organizations

### President, Korean Cultural Interest Group

*May 2024 – May 2025*

- Led and managed a CCA with over 300 active members, ensuring smooth execution of all club events and activities.
- Fostered strong skills in people management, task delegation, and financial management, including the proposal and processing of financial reimbursements.
- Drafted proposals and coordinated closely with vendors, suppliers, and club advisors to facilitate successful event planning and execution.
- Handled venue bookings, managed equipment maintenance, and ensured all logistical aspects were efficiently managed.
- Delivered a public speech to welcome new members to the club, demonstrating leadership and communication skills.
- Organized and hosted a variety of engaging events that catered to the interests of members, enhancing club participation and involvement.
- Took initiative to perform on stage, showcasing versatility and dedication to the club's activities.

### Volunteer Management Committee, NUS Project Action Speaks Louder

*Jan 2023 – Jul 2023*

- Managed the recruitment and interview process for new volunteers, conducting interviews and assessing candidates for project suitability.
- Oversaw administrative tasks and database management, ensuring accurate and efficient documentation.
- Developed proposals and safety management plans, including comprehensive safety forms.
- Served as a Safety Manager, ensuring the well-being of participants during events and maintaining a safe environment.
- Organized and hosted events for the d/Deaf community, actively participating in workshops and activities to enhance communication skills and deepen understanding of d/Deaf culture.

### Programmes Committee, NUS SOC Freshmen Social Camp

*Nov 2022 – Jun 2023*

- Drafted proposals for camp activities, including program flow, game selection, and point systems for scoring and awarding prizes.
- Ensured seamless execution of the program, overseeing the smooth operation of events.
- Took on the role of game master, managing time effectively to ensure the successful progression of multiple groups during station activities.

### Programmes Committee, SP Sign Language Club

*Apr 2019 – Mar 2021*

- Organized and coordinated events and camps for club members, ensuring engaging and meaningful experiences.
- Outlined comprehensive operation plans, handling event logistics, objectives, and timelines to ensure seamless execution.
- Facilitated regular meetings for club members, fostering a collaborative environment and effective communication.
- Led interviews and selection processes for potential committee members, identifying and onboarding individuals who align with the club's mission and values.
- Coordinated and participated in community service initiatives, promoting social responsibility and community engagement among members.
- Instructed and taught members basic sign language, enhancing communication skills and fostering inclusivity within the club.

### Student Ambassador, SP School of Computing Club

*Apr 2018 – Apr 2020*

- Facilitated Capture the Flag introduction games during the SP School of Computing Open House, engaging both students and parents in interactive learning experiences.
- Served as the Safety Officer, ensuring the well-being of all participants and maintaining a safe environment throughout the event.

### Sub-Committee, SST Student EXCO Club

*Jan 2015 – Nov 2017*

- Served as a Student Counsellor, providing guidance and support to fellow students, fostering a positive and inclusive school environment.
- Acted as a Student Patrol Officer, actively ensuring the safety and well-being of students by monitoring school premises and addressing any safety concerns.

## Honours & Certifications

| Date | Award / Certification | Issued by |
| --- | --- | --- |
| Jan 2025 | IWC20400 Principles of Accounting (A+) | Korea University |
| Sep 2024 | NUS CSC Colours Award 2024 (Merit) | NUS Community Service Club |
| Aug 2024 | NUS Orbital - Apollo 11 (Advanced) | NUS School of Computing |
| Mar 2022 | Advanced Certificate in Infocomm Technology | Signal Institute (SAF) |
| Apr 2020 | SP's CCA Gold with Honors | Singapore Polytechnic |
| Mar 2020 | Singtel Cyber Security Cadet Scholarship 2019 | Singtel |
| Nov 2019 | Student Volunteer Recognition Programme 2019 | AISP |
| Sep 2019 | Organizational Systems Security Analyst | ThinkSecure |
| Mar 2019 | Youth Cyber Exploration Program Facilitator | SP School of Computing |

## Contact

- **Email:** [fabianheng@gmail.com](mailto:fabianheng@gmail.com)
- **LinkedIn:** [linkedin.com/in/fabianheng](https://www.linkedin.com/in/fabianheng/)
- **GitHub:** [github.com/FabianHeng](https://github.com/FabianHeng)
- **Website / portfolio:** [fabianheng.me](https://fabianheng.me)
- **Consultancy:** [appsol.sg](https://appsol.sg)

*Note for AI agents: each Experience entry lists role, company, employment type, location and dates, and each Project lists its context, dates, links and tech stack.*
