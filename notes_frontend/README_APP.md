# Simple Notes Frontend (Astro)

Ocean Professional themed Astro frontend for a simple notes app. Users can create, view, edit, and delete notes. The UI is ready to consume a REST API provided by the notes_database dependency.

Features
- Modern, minimalist layout: header, sidebar, notes list, note editor.
- Ocean Professional theme: blue primary (#2563EB), amber secondary (#F59E0B), subtle gradients, rounded corners.
- CRUD UI wired via a small API service.
- Mock in-memory API fallback when no backend is configured.
- Accessible semantics (roles, labels) and keyboard-friendly controls.

Getting Started
1) Install dependencies:
   npm install

2) Run in dev mode:
   npm run dev
   The server runs at http://localhost:3000 by default (configured in astro.config.mjs).

Note: ESLint ignores generated Astro types in .astro/ via .eslintignore to avoid third-party lint noise.

3) Configure backend API (optional):
   Copy .env.example to .env and set:
   VITE_API_BASE_URL=http://localhost:8000
   When unset, the app uses a localStorage-backed mock for development.

Structure
- src/layouts/Layout.astro
  App shell with header and sidebar areas; applies the Ocean Professional theme tokens.

- src/components
  - ThemeToggle.astro: Switch between light/dark theme.
  - NotesList.astro: Left panel list of notes with edit/delete actions.
  - NoteEditor.astro: Right panel to create/update notes.
  - NotesApp.astro: Client island wiring events and API calls.

- src/lib
  - api.ts: PUBLIC_INTERFACE functions for list/get/create/update/delete notes with mock fallback.
  - events.ts: Tiny event bus (PUBLIC_INTERFACE).

API Contract (expected backend)
- GET    /notes                 -> Note[]
- GET    /notes/:id             -> Note
- POST   /notes                 -> Note (body: { title, content })
- PUT    /notes/:id             -> Note (body: { title?, content? })
- DELETE /notes/:id             -> { ok: true }

Note model
{
  id: string;
  title: string;
  content: string;
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
}

Styling
- Uses CSS variables in Layout.astro to provide colors, shadows, and radii.
- Subtle gradients add depth; rounded corners and soft shadows keep it modern.

Accessibility
- Clear aria-labels, roles, and button labels.
- Keyboard-friendly form fields and interactive elements.

```Instructions for future agent
- Integrate real authentication and user profile menu in the header once available.
- If notes_database openapi spec becomes available, generate a typed client and replace src/lib/api.ts accordingly.
- Consider replacing the event bus with a state management solution if the app grows.```
