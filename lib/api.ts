/**
 * API client for Idenpet backend.
 *
 * Currently returns mock data. When the API is ready,
 * replace the mock imports with fetch calls to NEXT_PUBLIC_API_URL.
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

async function apiGet<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: { Accept: "application/json" },
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

async function apiPost<T>(endpoint: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

// --- Future API endpoints ---
// GET  /api/pets              → List user's pets
// GET  /api/pets/:id          → Single pet profile
// POST /api/pets              → Create pet profile
// GET  /api/pets/:id/qr       → Get QR code data
// GET  /api/documents         → List pet documents
// POST /api/documents         → Upload document
// GET  /api/travel/checklists → Travel checklists
// POST /api/waitlist          → Join waitlist
// POST /api/newsletter        → Newsletter signup
// GET  /api/blog              → List blog posts
// GET  /api/blog/:slug        → Single blog post
// GET  /api/guides            → List guides
// GET  /api/guides/:slug      → Single guide

export { apiGet, apiPost, API_BASE };
