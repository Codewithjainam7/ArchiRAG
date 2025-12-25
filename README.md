<div align="center">

💠 ＡＲＣＨＩＲＡＧ 💠

ᴛʜᴇ ᴇɴᴛᴇʀᴘʀɪꜱᴇ ᴋɴᴏᴡʟᴇᴅɢᴇ ᴇɴɢɪɴᴇ

"Initializing Cognitive Matrix... Neural Link Established."

<!-- 🛑 REPLACE THIS URL WITH YOUR ACTUAL DEMO GIF OR SCREENSHOT -->

<img src="https://www.google.com/search?q=https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmEzMm14bnZ1bmEzMm14bnZ1bmEzMm14bnZ1bmEzMm14bnZ1bmEzMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LfpjDCLnAgMmY/giphy.gif" width="100%" alt="ArchiRAG Interface Demo" style="border-radius: 20px; border: 1px solid rgba(59, 130, 246, 0.3); box-shadow: 0 0 50px rgba(59, 130, 246, 0.2);"/>

</div>

🔮 System Overview

ArchiRAG is a production-grade Retrieval-Augmented Generation (RAG) engine wrapped in a high-fidelity, cinematic interface. It bridges the gap between raw unstructured data and neural intelligence, allowing users to ingest documents, visualize knowledge shards in real-time, and generate synthesized insights using Google's Gemini 1.5 Flash.

Built with a focus on UX Motion, Glassmorphism, and Data Transparency.

⚡ Core Modules

1. 🧠 Neural Workspace (Chat)

Contextual RAG: Uses a hybrid search strategy (Keyword + Semantic) to retrieve the most relevant "Knowledge Shards" [cite: services/ragEngine.ts].

Visual Citations: Interactive citations that open the exact source chunk in the Explorer [cite: components/ChatWindow.tsx].

Markdown Rendering: Custom styling for code blocks ("Neural Logic Buffers"), headers, and bullet points with a neon-terminal aesthetic.

2. 🗂️ Source Explorer (The Matrix)

Visual Inspection: See exactly what the AI is "reading" in real-time via the SourceExplorer component [cite: components/SourceExplorer.tsx].

Relevance Scoring: Displays the confidence score and "Proximity" of every retrieved chunk.

Heatmap Visualization: Animated bars showing data match integrity.

3. 🃏 Synthetic Memory (Flashcards)

Auto-Generation: One-click generation of study materials from any chat response using Gemini [cite: services/geminiService.ts].

3D Interactions: Fully 3D flip animations with "Holo-glow" effects via the FlashcardDeck component [cite: components/FlashcardDeck.tsx].

Gamified UX: "Snap" delete animations and kinetic feedback for card management.

4. ⚙️ Cognitive Calibration (Settings)

Temperature Control: Slider to adjust between "Strict Factuality" and "Creative Synthesis."

Retrieval Depth: Configurable Top-K retrieval to control how broad the search should be [cite: components/SettingsPanel.tsx].

Inference Strategy: Toggle between Concise, Standard, and Detailed output modes.

5. 🛡️ Security & Audit

Neural Shield: Visual confirmation of AES-GCM memory layer encryption.

Operation Trace: Real-time audit logging of every ingestion, query, and deletion event via the Audit Log tab [cite: App.tsx].

📸 Visual Protocol

Cinematic Boot Sequence

Holographic Flashcards

CRT Scanlines & Particle Flow

3D Perspective & Glassmorphism

<!-- INSERT BOOT GIF HERE -->

<!-- INSERT CARDS GIF HERE -->

BootScreen.tsx Logic

FlashcardDeck.tsx Physics

Neural Source Explorer

Data Ingestion

Animated Sliding Panels

PDF & Docx Processing

<!-- INSERT EXPLORER GIF HERE -->

<!-- INSERT INGEST GIF HERE -->

SourceExplorer.tsx

ragEngine.ts

🛠️ Deployment Protocols

Prerequisites

Node.js (v18+)

Google Gemini API Key

1. Clone the Repository

git clone [https://github.com/codewithjainam7/archirag.git](https://github.com/codewithjainam7/archirag.git)
cd archirag


2. Install Dependencies

npm install
# Installing Neural Dependencies...
# pdfjs-dist, mammoth, google-genai, framer-motion logic...


3. Environment Configuration

Create a .env file in the root directory:

GEMINI_API_KEY=your_gemini_api_key_here


4. Initiate System

npm run dev


System listening on http://localhost:3000 [cite: vite.config.ts]

🧬 Architecture

The system is built on a Modular Service-Based Architecture:

ragEngine.ts: The brain. Handles document ingestion, chunking algorithms (with overlap), hash generation for redundancy detection, and vector store management [cite: services/ragEngine.ts].

geminiService.ts: The interface to the LLM. Handles embedding generation, answer synthesis, and JSON schema enforcement [cite: services/geminiService.ts].

components/: Highly isolated UI components using Tailwind for styling and CSS animations for micro-interactions [cite: components/].

Tech Stack

Frontend: React 19, TypeScript

Build Tool: Vite

Styling: Tailwind CSS (Custom Config)

AI/ML: Google GenAI SDK (Gemini 1.5 Flash)

Document Processing: PDF.js, Mammoth

<div align="center">

"Data is static. Intelligence is fluid."

Report Bug • Request Feature

<p align="center">
<img src="https://www.google.com/search?q=https://capsule-render.vercel.app/api%3Ftype%3Dwaving%26color%3D0ea5e9%26height%3D100%26section%3Dfooter" />
</p>

</div>
