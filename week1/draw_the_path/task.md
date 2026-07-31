- Starting Sitemap

  ![Sitemap](sitemap.png)

- Toolkit Setup

  ![Project Setup](project_setup.png)

  - Custom Instruction:

    ```markdown
    I am a 3rd year undergraduate in CompSci, exploring backend development.

    Proof Statement:
    I design type-safe, strictly-validated API layers with clear endpoint documentation so frontend teams can integrate without friction. I build predictable backend systems for Senior Backend Engineers and Tech Leads who value code hygiene and are looking to hire a junior developer they can mentor. If you need a reliable junior backend engineer on your team, email me to discuss an open intern or junior role.

    Act as a tutor that explains their reasoning.
    ```

- Prompt:

  Here is the sitemap I created, please review this.
  This is a sitemap of a junior backend dev.

- Prompt Response By Claude:

  I'll review this thoughtfully. Let me start by understanding what you're showing, then give you honest feedback on how it positions you.Let me work with what you've described. Based on your sitemap and the codebase you shared, here's my tutor's perspective:

  ## What's Working Well ✓

  **1. You're leading with proof, not claims**
  Your structure goes Hero → Projects → Contact. This is smart. You're not drowning hiring managers in "I'm excellent at X"—you're showing the work immediately. That's high-leverage.

  **2. Your proof statement is specific**
  "Type-safe, strictly-validated API layers with clear endpoint documentation" isn't generic. It names a real pain point (frontend integration friction) and a real solution (type safety + docs).

  **3. Both projects show different scope**

  - **Notes App**: Linear complexity, backend-focused, manageable scope
  - **Resume Analyzer**: Full-stack complexity, orchestrates multiple systems (parsing, embeddings, persistence)

  This breadth matters to hiring managers.

  ***

  ## Areas to Strengthen

  ### **1. Your sitemap doesn't match your proof statement yet**

  Your proof says: _"I design type-safe, strictly-validated API layers"_

  But your sitemap just says: _"Schema / API Docs"_

  **Why this matters:** A hiring manager looking for a junior backend engineer who "values code hygiene" is looking for _evidence of specific patterns_, not just documentation existing. They want to see:

  - How you handle validation at the edge
  - How you structure error responses consistently
  - How you enforce type safety

  **What to add:** Instead of just "Schema / API Docs," show:

  - "Zod validation schemas + middleware integration"
  - "Type-safe request/response contracts"
  - Or literally link to a `/docs` endpoint showing structured examples

  ### **2. "Building: Backend is done" is ambiguous**

  This phrase suggests the project is _incomplete_, which undercuts your credibility. Either:

  - **Mark it "Complete"** if the backend is production-ready
  - **Or rename it** to "Fullstack Notes App (Backend Lead)" to clarify you owned that piece
  - **Or show what's left**: "Fullstack Notes App [Backend: Complete | Frontend: React UI]"

  ### **3. Missing a hook in "Proof/Project Showcase"**

  Your hero says "I design type-safe, strictly-validated API layers..." but your project showcase doesn't _immediately_ show that promise being kept.

  **Better framing:**

  ```
  Proof/Project Showcase

  ├─ Fullstack Notes App
  │  └─ Type-Safe CRUD APIs (TypeScript + Zod)
  │  └─ JWT auth, hashed passwords, schema validation
  │
  └─ AI Resume Analyzer
     └─ Multi-Service Orchestration (Parsing → Embeddings → Persistence)
     └─ Typed repositories, semantic engine integration
  ```

  This immediately connects your _claim_ to your _evidence_.

  ***

  ## Concrete Suggestions (Priority Order)

  ### **High Priority:**

  1. **In your Hero Section**, add a 1-sentence technical specificity hook:
     - ❌ "I design type-safe API layers"
     - ✅ "I design type-safe, validated API layers using TypeScript + Zod—so your frontend team never guesses what your API returns"
  2. **Rename "Schema / API Docs" to be more descriptive:**
     - Show a snippet of your validation schemas or a sample request/response
     - Or: "Zod Schemas + OpenAPI Docs" (if you have them)
  3. **Clarify project status:**
     - Notes App: Is the backend production-ready? If yes, mark "Complete"
     - Include what makes each backend interesting (auth? validation? architecture pattern?)

  ### **Medium Priority:**

  1. **Add a "How It's Built" micro-section** for each project:

     ```
     Fullstack Notes App
     Backend: TypeScript, Express, Prisma, PostgreSQL
     Architecture: Middleware validation, JWT auth, role-based access

     AI Resume Analyzer
     Backend: Python, Ollama embeddings, MySQL, repositories pattern
     ```

  2. **Link directly to code** on the project showcase:
     - "View Source (GitHub)"
     - Hiring managers want to see your actual patterns, not just a description

  ***

  ## Why This Matters (The Tutor Angle)

  You're trying to signal to senior backend engineers: _"I understand the patterns that make their lives easier."_

  Your code _already shows this_:

  - ✅ Zod validation middleware (not scattered validation logic)
  - ✅ Typed repositories (not raw SQL sprinkled everywhere)
  - ✅ Clear error handling structure
  - ✅ JWT tokens with proper cookie flags (`httpOnly`, `sameSite`)

  **But your sitemap doesn't yet highlight these wins.** You're burying your best evidence under generic labels.

  ***

  ## One More Thing: Your "Action" Section

  **"Email Me"** is functional but forgettable. Consider:

  - "Let's talk about an internship or junior role" (shows what you want)
  - Include a LinkedIn link or GitHub link _before_ the email (easier to explore first)
  - Add a brief, direct CTA: "Senior devs mentoring juniors: I'd love to join your team"

  ***

  **Bottom line:** Your sitemap structure is solid. Your proof statement is sharp. Now make them _talk to each other_ on the page. Don't make hiring managers connect the dots between your claim and your code—do it for them.

  Would you like me to help you draft more specific project descriptions or review the actual project cards you'll display?

- Things I would change:
  - A specific hook on the Landing page
    - "I design type-safe, validated API layers using TypeScript + Zod—so your frontend team never guesses what your API returns”
  - Show some snippets of schema and validations as proof under the projects
  - Add links to the code
  - Action section needs to have:
    - Links to my socials
    - "Let's talk about an internship or junior role”
