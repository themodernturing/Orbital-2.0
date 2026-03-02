# MAGNUS — MASTER SIGNAL LIBRARY

This document logs all reusable structural signals discovered across Magnus dossiers.  
Only add signals that are reusable across multiple companies or introduce a new structural category.

Signals represent the core intelligence building blocks of Magnus.  
They must be structural, observable, and measurable through defined proxy metrics.

Do **not** log one-off insights.  
Only log signals that can be applied again.

---

## Signal Entry Template

Each signal must follow this exact format:

---

**SIGNAL ID: S-XXX**

**Signal Name:**  

**Category:** (Financial / Operational / Regulatory / Market / Governance / Other)  

**Definition:**  
Clear one-paragraph explanation of what this signal detects and why it matters structurally.

**Proxy Metric(s):**  
List the measurable indicators used to observe this signal.

**First Used In (Company + Dossier #):**  

**Confidence Pattern So Far:**  
Typical grades observed when this signal appears (A / B / C / Mixed / TBD).

**Accuracy So Far:**  
(e.g., 3/4 predictive hits, 2/5, TBD — update only when predictions resolve.)

**Weight Adjustment Recommendation:**  
(Low / Medium / High influence on MSRI scoring — adjust only after sufficient data.)

**Notes / Observations:**  
Any refinements, sector-specific behavior, limitations, or pattern recognition notes.

---

## Signal Logging Rules

1. Signal IDs must be sequential (S-001, S-002, S-003…).  
   Never reuse or renumber IDs.

2. Only log signals that:
   - Are reusable across companies  
   - Represent a structural pattern  
   - Have observable proxy metrics  

3. Accuracy must be based only on resolved predictions.

4. Do not delete old signals.  
   If a signal weakens over time, update its notes instead.

5. Keep this document clean and disciplined.  
   Quality over quantity.

---

## Logged Signals

---

**SIGNAL ID: S-001**

**Signal Name:** Regulatory Conversion Lag

**Category:** Regulatory

**Definition:**
The elapsed time between a company's public announcement of a regulatory transformation (e.g., license conversion) and the regulator's formal approval. Extended lag (>3 years) may indicate undisclosed regulatory friction, capital deficiency, or operational unreadiness.

**Proxy Metric(s):**
Months between first public announcement and regulatory approval date.

**First Used In (Company + Dossier #):** Faysal Bank — MAGNUS_FAYSAL_CONVERSION_REPORT V1.0

**Confidence Pattern So Far:** B (single data point — FABL's ~8.75 year lag)

**Accuracy So Far:** TBD

**Weight Adjustment Recommendation:** Medium

**Notes / Observations:**
FABL's total elapsed time significantly exceeds the 3-year maximum in IBD Circular 01/2017. Signal is most valuable when cross-referenced with in-principle approval dates (often not public).

---

**SIGNAL ID: S-002**

**Signal Name:** Deposit Migration Velocity

**Category:** Financial

**Definition:**
The rate at which an institution's deposit base transitions between product categories during a structural change. High velocity (>10%/quarter) with stable total deposits suggests successful execution. Low velocity with declining deposits suggests customer flight.

**Proxy Metric(s):**
% of deposit book in new product category per reporting period; total deposit growth YoY.

**First Used In (Company + Dossier #):** Faysal Bank — MAGNUS_FAYSAL_CONVERSION_REPORT V1.0

**Confidence Pattern So Far:** A (FABL: deposits grew from PKR 458B to PKR 1T+ during conversion)

**Accuracy So Far:** TBD

**Weight Adjustment Recommendation:** High

**Notes / Observations:**
FABL's deposit migration showed acceleration, not flight — exceptional outcome. May not replicate for smaller banks or in different macro environments.

---

**SIGNAL ID: S-003**

**Signal Name:** Asset Purification Drag

**Category:** Financial

**Definition:**
The financial cost of disposing non-compliant assets during a regulatory transformation. Measured by volume of assets disposed, discount to market value, and charity fund disbursements for non-compliant income.

**Proxy Metric(s):**
PKR value of non-compliant securities sold; charity fund disclosures; spread between book and disposal value.

**First Used In (Company + Dossier #):** Faysal Bank — MAGNUS_FAYSAL_CONVERSION_REPORT V1.0

**Confidence Pattern So Far:** B (FABL: ~PKR 70B T-Bills/PIBs disposed; exact charity amounts not publicly itemized)

**Accuracy So Far:** TBD

**Weight Adjustment Recommendation:** Medium

**Notes / Observations:**
FABL's strong profitability (+79% PAT in 2023) suggests the drag was absorbed without material impact. Signal will be more informative for smaller institutions.

---

**SIGNAL ID: S-004**

**Signal Name:** Shariah Governance Readiness

**Category:** Governance

**Definition:**
The maturity of an institution's Shariah governance infrastructure, measured by Shariah Board composition vs. regulatory minimum, tenure of members, internal compliance department existence, and Resident Shariah Board Member appointment.

**Proxy Metric(s):**
Number of Shariah Board members vs. minimum (3); years of operation before conversion; SCD existence; Resident SBM appointment.

**First Used In (Company + Dossier #):** Faysal Bank — MAGNUS_FAYSAL_CONVERSION_REPORT V1.0

**Confidence Pattern So Far:** A (FABL: 4 members, 2 appointed 7+ years before license)

**Accuracy So Far:** TBD

**Weight Adjustment Recommendation:** High

**Notes / Observations:**
FABL's front-loading of governance infrastructure (Shariah Board from 2015, license in 2023) correlates with smooth conversion. Banks without pre-existing Shariah governance will face longer timelines.

---

Magnus intelligence compounds through structured signal memory.  
After 50–100 dossiers, this library becomes a strategic asset.