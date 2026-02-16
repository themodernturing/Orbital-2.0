# ORBITAL BAE: MOBILE COMMANDER ARCHITECTURE
**V6.0 | FROM IDE TO POCKET WEAPON**

---

## 1. The "On-the-Go" User Experience
A PE Partner is in a car heading to a factory in Faisalabad. They open the **ORBITAL BAE** web app on their phone.

1.  **The Input**: They enter "Masood Textile Mills."
2.  **The Check**: System: *"Sector (Textile) Unlocked. Generating Audit..."*
3.  **The Wait**: They put their phone in their pocket.
4.  **The Notification**: 180 seconds later, they get a WhatsApp/Push notification: *"Audit Complete: ORBITAL Score 68 (Red). 12% Variance detected."*
5.  **The Weapon**: They open the PDF on their phone and walk into the meeting with "Physical Truth."

---

## 2. Technical Stack (The Cloud Brain)

| Component | Technology | Role |
|---|---|---|
| **Frontend** | **Next.js (PWA)** | Mobile-first, high-status UI. Optimized for "Pocket View." |
| **Backend** | **Node.js / Express** | Hosting the `KhaldunPEAssembler` logic and API routes. |
| **Brain** | **OpenRouter API** | Autonomous sector research and report synthesis. |
| **Data Engine** | **Cloud Tasks / BullMQ** | Asynchronous workers to handle the 15-min calibration without timing out. |
| **Database** | **PostgreSQL/Supabase** | Storing Sector Physics (Library) and historical deal reports. |
| **Notifications** | **Twilio / WhatsApp API** | Delivering the final "Verdict" link to the user's pocket. |

---

## 3. The "High-Status" Mobile UX Flow
1.  **Search Input**: Enter Target Name.
2.  **Tier Selection**: Select **Tactical PDF** or **Interactive War Room**.
3.  **Live Signal Load**: Tactical checklist initiates...
    - `[SUCCESS]` Sector Profiling identified.
    - `[FETCHING]` Trade Manifests...
    - `[DEPLOYING]` Digital War Room Environment (if selected)...
4.  **The Verdict**: Animated Reveal.
5.  **Secure Delivery**: WhatsApp link with 24hr TTL.

---

## 4. The Deterministic Moat (No Fantasy Layer)
The system logic is **Immutable at Runtime**.
*   **Physics Library**: Every sector has a `[sector]_signals.json` file.
*   **The Guard**: The AI (OpenRouter) is strictly forbidden from editing weights or formulas. It is used ONLY to translate mathematical variances into institutional prose.
*   **Human-in-the-Loop**: No new sector profile goes live without a manual "Logic Lock" session between the Agent and the Operator.

---

## 5. Security & Persistence
*   **Authentication**: Multi-factor auth required for PE Partners.
*   **Data Masking**: No raw P&L data stored; only anonymized **Variance Data**.
*   **Deployment**: Vercel/Supabase with encrypted environment variables for all API hooks.

---
**ORBITAL STRATEGIC INTELLIGENCE**
*Intelligence is only valuable if it reaches the pocket before the decision.*
