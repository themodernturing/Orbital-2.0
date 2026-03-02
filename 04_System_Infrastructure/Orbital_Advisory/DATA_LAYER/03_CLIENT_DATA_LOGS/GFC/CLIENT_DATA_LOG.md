# CLIENT DATA LOG — GFC (Gujrat Fan Company)

**Engagement:** Magnus Intelligence Dossier
**Report Version:** V1 (Pre-Data Architecture)
**Report Date:** 2025
**Data Collection Period:** 2025

---

## ⚠️ POST-MORTEM NOTE

This engagement experienced significant client backlash. Key claims were challenged and rejected.
The Data Architecture system was built specifically to prevent this from recurring.

**Root Cause:** Several major financial claims were presented with HYPOTHESIS-level confidence
but delivered in the report as if they were VERIFIED facts. The client had internal data that contradicted
the claims, and the report had no visible evidence trail to defend the numbers.

---

## Data Sources Used

| Source | Type | What We Got | Confidence |
|--------|------|------------|------------|
| LME | Commodity exchange | International copper prices | VERIFIED |
| Local dealer survey | Market estimate | Local copper/steel prices | ESTIMATED |
| ONS UK | Government statistics | UK fan market size | ESTIMATED |
| UN Comtrade | Trade data | Export volumes, HS codes | VERIFIED |
| GFC website | Company site | Product range, brand info | VERIFIED |
| LinkedIn | Public platform | Employee data, hiring | VERIFIED |
| Companies House (UK) | Public registry | UK subsidiary info | VERIFIED |

---

## Disputed Claims

| # | Claim Made | Value | Confidence Used | Should Have Been | Client Objection | Lesson |
|---|-----------|-------|----------------|-----------------|-----------------|--------|
| 1 | Material cost savings from direct sourcing | PKR 250.8M/year | Stated as fact | **HYPOTHESIS** | "If we buy direct, it's MORE expensive, not less" — they have internal cost data we didn't have | Never present calculated savings as fact without internal data |
| 2 | Annual copper usage | 380 tons | Stated as fact | **HYPOTHESIS** | Client implied this was wrong | We estimated from industry benchmarks, not actual data |
| 3 | Annual electrical steel usage | 1,250 tons | Stated as fact | **HYPOTHESIS** | Client implied this was wrong | Same as above |
| 4 | UK market share | 2.8% | Stated as fact | **ESTIMATED** | "Our UK business is going well" — they rejected the framing | Total market vs addressable market confusion |
| 5 | UK market size | £900M+ / PKR 42B | Stated as fact | **ESTIMATED** | Not directly disputed but credibility damaged by other claims | Should have used range instead of specific number |

---

## Key Lessons (Integrated into System)

1. **No specific PKR/$ claim without Calculation Worksheet** → Now mandatory (see Validation Rules)
2. **No HYPOTHESIS presented as fact** → Now tagged and gated by Pre-Report Checklist
3. **Competitor comparisons must be neutral** → "What you believe" language removed from system
4. **Client should be offered verification path** → Evidence Chains now standard

---

## Resolution Status

| # | Status |
|---|--------|
| 1 | ❌ Withdrawn — claim removed from consideration |
| 2 | ⚠️ Adjusted — acknowledged as estimate |
| 3 | ⚠️ Adjusted — acknowledged as estimate |
| 4 | ⚠️ Adjusted — reframed |
| 5 | ⚠️ Adjusted — qualified with "estimated" |

---

## Files

- Original Report: `03_Intelligence_Reports/GFC_Reports/GFC_Institutional_Intelligence_V4/GFC_Strategic_Intelligence_Brief.html`
