# ORBITAL VALIDATION RULES

> Every major numerical claim in an Orbital report must pass through this validation system before publication.

**Effective:** 2026-02-28
**Status:** MANDATORY — All Engagements

---

## The 3-Layer Validation Rule

For every major claim that involves a number, cost, market size, or financial estimate, apply all three layers:

### Layer 1 — Official Source
Find the number from an official or institutional source.

**Examples:**
- State Bank of Pakistan (SBP)
- Securities and Exchange Commission (SECP)
- NEPRA (energy)
- Pakistan Bureau of Statistics (PBS)
- Central Bank of Azerbaijan (CBAR)
- Company's own public filings

**If found:** The number has a foundation. Move to Layer 2.
**If not found:** Label as HYPOTHESIS. Do not present as fact.

---

### Layer 2 — International Cross-Reference
Check the number against an independent international source.

**Examples:**
- IMF Article IV reports
- World Bank data
- UN Comtrade (trade volumes)
- ONS UK (for UK market data)
- Bloomberg / Reuters
- LME (commodity prices)

**If aligned (within 10-15%):** The number is cross-validated. Move to Layer 3.
**If misaligned:** Investigate the gap. Note it in the Data Register.
**If no international source exists:** Label as ESTIMATED.

---

### Layer 3 — Proxy Indicator Alignment
Check whether a related indirect indicator supports the claim.

**Examples:**
- Electricity consumption → industrial activity
- Import volumes → raw material demand
- Job postings → growth trajectory
- Credit growth → expansion signals
- Construction permits → development activity

**If aligned:** Strong supporting evidence.
**If misaligned:** Flag the contradiction. Report both signals.
**If no proxy available:** Note the gap.

---

## Confidence Tagging Results

Based on validation results, assign one of these tags:

| Layers Passed | Tag | Label in Report | Label in Internal Log |
|--------------|-----|----------------|---------------------|
| 3 of 3 | **VERIFIED** | "Validated (Public Multi-Source)" | ✅ VERIFIED |
| 2 of 3 | **ESTIMATED** | "Based on available public data" | ⚠️ ESTIMATED |
| 1 of 3 | **PROXY-BASED** | "Estimated using proxy indicators" | 🔶 PROXY-BASED |
| 0 of 3 | **HYPOTHESIS** | "Requires internal data to confirm" | 🔴 HYPOTHESIS |

---

## Rules for Reports

1. **VERIFIED** claims can be stated confidently with source citation
2. **ESTIMATED** claims must include the source and note that cross-validation was limited
3. **PROXY-BASED** claims must be clearly labelled as indirect measures — e.g., "Proxy indicator — not a direct financial measure"
4. **HYPOTHESIS** claims must include "Requires internal data to confirm" and should never state specific financial amounts as fact

---

## The GFC Rule (Mandatory)

> No specific financial claim (e.g., "PKR 250M savings") may appear in any report unless it has at least ESTIMATED confidence and a documented Calculation Worksheet.

This rule exists because the GFC engagement demonstrated that presenting HYPOTHESIS-level numbers as facts triggers client rejection.

---

## How to Document Validation

For every major claim, record in the Data Register:

1. **Data_Name** — what the number represents
2. **Source** — where it came from
3. **Confidence** — what tag it receives
4. **Cross_Validation** — what second source was checked
5. **Known_Limitations** — what could make this number wrong

If a client disputes a number, add it to the Disputed Claims Log with the original validation trail.
