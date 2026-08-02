### Voice Card

> `"Direct, technical, plain, no buzzwords."`

---

## Case Study: Node.js & TypeScript CRUD API

#### The Problem

Building a standard Todo-list CRUD API often leads to tightly coupled routes, unstructured data handling, and unhandled edge cases like malformed database IDs or missing resources. The goal was to build a clean, typed REST API (`POST`, `GET`, `PUT`, `DELETE` on `/tasks`) using Node.js, Express, TypeScript, and MongoDB without falling back on messy boilerplate.

#### What I Did (and Decided)

- **Architecture:** Structured the codebase to separate concerns cleanly—keeping `server.ts` for routing, `taskControllers.ts` for logic, `taskQueries.ts` for data access, and `db.ts` for the connection lifecycle.
- **Validation:** Integrated Zod-based validation middleware using a dedicated `schemas.ts` file to ensure request payloads match expected types before hitting the database layer.
- **Error Handling:** Implemented a centralized error-handling middleware downstream of the routes to catch propagated errors from controller `try/catch` blocks, sanitize responses, and prevent raw stack traces from leaking to clients.
- **Testing & Infrastructure:** Configured environment variables securely using a git-ignored `.env` file connected to a MongoDB Atlas instance, and used `curl` alongside Swagger UI for endpoint verification.

#### What Came of It

Delivered a robust, modular REST API with predictable error handling, strict type safety, and clean separation of concerns, providing a reliable foundation for task management operations

---

#### Bio & CTA

- **Bio:** Backend developer focused on clean system architecture, low-level programming, and reliable APIs.
- **Contact:** Reach out via GitHub or email to discuss backend development and software engineering.

#### Before / After (AI Copy Comparison)

- **Generic AI Line (Before):**

> "Leveraged a cutting-edge, scalable TypeScript and Node.js stack with MongoDB integration to engineer a high-performance, results-driven task management API equipped with robust enterprise-grade validation frameworks."

- **Edited Version (After):**

> "Built a typed Node.js and Express REST API with MongoDB, using Zod for payload validation and a centralized error handler to catch edge cases cleanly."

### Voice Card

> `"Direct, technical, plain, no buzzwords."`

---

## Case Study: Full-Stack Notes Application

#### The Problem

Building a full-stack CRUD application often leads to fragmented architectures, weak typing across the client-server boundary, and messy database abstraction. The goal was to build a clean, end-to-end typed notes application using React, TypeScript, TailwindCSS, Express.js, Prisma, and a PostgreSQL database hosted on Neon, ensuring clear state management and reliable persistence.

#### What I Did (and Decided)

- **Stack & Type Safety:** Implemented a full-stack TypeScript environment—utilizing React and Vite on the frontend with TailwindCSS for styling, paired with an Express.js and Prisma ORM backend to maintain strict compile-time type consistency from schema to client.
- **Database & Persistence:** Configured Prisma with a Neon-hosted PostgreSQL database, defining explicit relational schemas for note entities and managing migrations cleanly through Prisma's toolchain.
- **API Layer & Modular Routing:** Separated data-fetching and business logic by structuring backend endpoints cleanly, ensuring predictable HTTP method handling for note creation, retrieval, updates, and deletion.
- **Build & Debug Workflow:** Resolved Vite compilation errors and managed package dependencies explicitly across the workspace to ensure smooth hot-reloading and production bundling.

#### What Came of It

Delivered a functional, fully typed full-stack notes manager with clean separation between the React UI, Express backend, and Prisma data layer, eliminating type mismatches and runtime surprises.

---

### Bio & CTA

**Bio:** Backend and full-stack developer focused on clean system architecture, low-level programming, and reliable APIs.
**Contact:** Reach out via GitHub or email to discuss backend development and software engineering.

---

### Before / After (AI Copy Comparison)

- **Generic AI Line (Before):**

> _"Engineered a next-generation, hyper-scalable full-stack notes ecosystem utilizing a cutting-edge React, TypeScript, and Prisma-powered PostgreSQL architecture to deliver an immersive, lightning-fast user experience."_

- **Edited Version (After):**

> _"Built a full-stack notes app with React, TypeScript, Express, and Prisma, backed by a PostgreSQL database for type-safe data handling."_

### Voice Card

> `"Direct, technical, plain, no buzzwords."`

---

## Case Study: AI Resume Analyzer

#### The Problem

Traditional keyword-matching applicant tracking systems often overlook qualified candidates due to rigid formatting constraints or alternative terminology. The goal was to build a context-aware AI Resume Analyzer using a Retrieval-Augmented Generation (RAG) architecture to evaluate resumes against target job descriptions accurately.

#### What I Did (and Decided)

- **Stack & Framework:** Engineered a Python application utilizing Streamlit for the user interface, paired with a MySQL/MariaDB database to manage state and persistent data.
- **LLM Integration:** Integrated Gemma 3 models running locally via Ollama to perform semantic matching and generate targeted feedback without relying on external third-party API dependencies.
- **Data Management:** Implemented content-hashing and deduplication logic directly into the database schema to track document versions and prevent redundant processing.
- **Workflow Design:** Structured parsing pipelines to extract and compare core competencies, identifying specific skill gaps between user resumes and target job criteria.

#### What Came of It

Delivered a functional local RAG-based analysis tool that provides semantic evaluation, skill gap identification, and structured recommendations through an interactive web interface.

---

### Bio & CTA

**Bio:** Backend and full-stack developer focused on clean system architecture, low-level programming, and reliable APIs.
**Contact:** Reach out via GitHub or email to discuss backend development and software engineering.

---

### Before / After (AI Copy Comparison)

- **Generic AI Line (Before):**

> _"Architected an enterprise-grade, state-of-the-art RAG-powered cognitive talent intelligence platform leveraging cutting-edge LLMs to disrupt the recruitment space and maximize candidate placement velocity."_

- **Edited Version (After):**

> _"Built an AI resume analyzer using Python, Streamlit, and local Gemma 3 models via Ollama, with a MySQL database to handle content hashing and track document comparisons."_
