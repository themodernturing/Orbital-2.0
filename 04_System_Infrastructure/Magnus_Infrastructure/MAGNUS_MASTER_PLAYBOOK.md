# MAGNUS MASTER PLAYBOOK
## The Definitive Intelligence Methodology — Living Document
**Khaldun Systems | Version 1.0 | Created: Feb 22, 2026**
**Last Updated: Feb 22, 2026 | After: FF Steel V3 Dossier**

---

> **HOW TO USE THIS DOCUMENT**
> 1. Read this FIRST before starting any new dossier
> 2. Follow the Build Process (Section 1) step by step
> 3. Use the Signal Framework (Section 2) to structure every analysis
> 4. Score using the exact formulas in Sections 3-4
> 5. After completing a report, update the Lessons Learned (Section 7) and Prediction Registry (Section 8)
> 6. This document gets smarter with every report. Never skip the update step.

---

## 1. BUILD PROCESS — Step-by-Step Report Construction

Every Magnus dossier follows this exact sequence. Do not skip steps.

### Step 1: Multi-Source Data Collection
Pull data from ALL 6 source categories. No single source is trusted alone.

| # | Source Type | What to Pull | Where to Find It | Reliability |
|---|---|---|---|---|
| 1 | **Credit Rating Agencies** | Financial data, risk assessments, management quality | VIS, PACRA, JCR-VIS annual reports (free PDFs) | ⭐⭐⭐⭐⭐ Highest |
| 2 | **Stock Exchange Filings** | Peer financials, sector benchmarks, quarterly results | PSX website, annual reports of listed peers | ⭐⭐⭐⭐⭐ Highest |
| 3 | **Industry Associations** | Sector production data, costs, policy impact | PALSP (steel), APTMA (textile), PSMA, SBP sector reports | ⭐⭐⭐⭐ High |
| 4 | **Trade Databases** | Import/export volumes, pricing trends, supply chains | PBS (Pakistan Bureau of Statistics), Volza, ImportGenius | ⭐⭐⭐⭐ High |
| 5 | **Company Sources** | Claims, timelines, product info, press, social media | Company website, FAQ, LinkedIn, press releases, SECP filings | ⭐⭐⭐ Medium (narrative-controlled) |
| 6 | **Regulatory/Government** | Policy, standards, sector outlook, market indices | SECP, PSQCA, KSE-100, SBP, provincial budgets | ⭐⭐⭐⭐ High |

**RULE: Every claim must be checked against at least 2 independent sources.**

### Step 2: AI Cross-Referencing & Triangulation
- Extract every claim the company makes publicly
- Check each claim against independent data sources
- Classify each claim as:
  - **ALIGNED** — Multiple sources confirm
  - **PARTIAL** — True with caveats (e.g., was true, market changed)
  - **UNVERIFIED** — Cannot confirm or deny
  - **DIVERGENT** — Evidence contradicts the claim

### Step 3: Signal-by-Signal Analysis
- Apply the 12-signal framework (Section 2) to the company
- Score each signal 0-100 (Section 3)
- Grade confidence A/B/C/U for each signal
- Calculate MSRI and NDI (Section 3-4)

### Step 4: Report Assembly
- Use the HTML template (Section 6)
- Follow the exact section order
- Include all mandatory sections (see Non-Negotiables below)

### Step 5: Prediction Registry
- Log 5-8 testable, falsifiable predictions
- Each prediction needs: check date, source signal, confidence grade
- Review any previous predictions that can now be resolved

### Step 6: Update This Playbook
- Add new lessons to Section 7
- Update the Source Registry if new sources found
- Update the Prediction Master (Section 8) with any resolved predictions
- Note any methodology refinements

---

## 2. SIGNAL FRAMEWORK — The 12-Signal Taxonomy

Every company is analyzed through these 12 signal categories. Not all will apply to every company — mark inapplicable signals as "N/A" with explanation.

### Universal Signals (Apply to Every Company)

| # | Signal Name | What It Measures | Key Question | Data Sources |
|---|---|---|---|---|
| 1 | **Disclosure Readiness** | Financial transparency and data availability | "Can we see enough to make a judgment?" | SECP filings, annual reports, credit ratings |
| 2 | **IPO/Listing Behavior** | Timeline credibility, milestone completion | "Are they progressing toward stated goals?" | PSX announcements, company website, press |
| 3 | **Financial Performance** | Revenue, margins, profitability trends | "Is the company actually making money?" | Annual reports, credit ratings, PSX filings |
| 4 | **Sector Position** | Performance relative to peers | "Are they an outlier or following the sector?" | Peer quarterly filings, industry data |
| 5 | **Cost Structure** | Input costs, energy, raw materials | "Can they survive cost pressures?" | PALSP, NEPRA, commodity data, trade data |
| 6 | **Competitive Moat** | Unique advantages, market position, barriers | "What stops competitors from taking share?" | Company claims, competitor websites, standards bodies |
| 7 | **Governance & Perception** | Board quality, ownership structure, conflicts | "Would institutional investors be comfortable?" | SECP, company website, LinkedIn, PSX listing rules |

### Sector-Specific Signals (Adapt per Industry)

| # | Signal Name | Applies To | Key Question |
|---|---|---|---|
| 8 | **Sector Headwinds/Tailwinds** | All sectors | "Is the tide rising or falling for this industry?" |
| 9 | **Supply Chain Dependencies** | Manufacturing, trading | "Where are the single points of failure?" |
| 10 | **Pricing Power** | Manufacturing, commodities | "Can they hold prices when costs change?" |
| 11 | **Working Capital Physics** | Capital-intensive sectors | "Can they fund operations without distress?" |
| 12 | **Related-Party Transactions** | Family-owned companies | "Is money flowing to the right places?" |

### Confidence Grading

| Grade | Definition | What It Means |
|---|---|---|
| **A** | Multiple independent sources confirm | High confidence — act on this |
| **B** | Single credible source or strong inference | Moderate confidence — investigate further |
| **C** | Weak evidence or logical inference only | Low confidence — flag as assumption |
| **U** | No data available | Unobserved — framework defined, data missing |

---

## 3. MSRI SCORING — Market Structural Risk Index

### Formula
```
MSRI = Σ (Signal_Score × Weight × Confidence_Multiplier) / Σ (Weight × Confidence_Multiplier)

Where:
  Signal_Score = 0-100 (0 = no risk, 100 = maximum risk)
  Weight = 1.0 to 1.5 (importance of the signal)
  Confidence_Multiplier:
    Grade A = 1.0
    Grade B = 0.7
    Grade C = 0.4
    Grade U = 0.1
```

### Interpretation
| Range | Label | Meaning |
|---|---|---|
| 0-30 | LOW RISK | Structural position is sound |
| 31-50 | MODERATE RISK | Some concerns, manageable |
| 51-70 | ELEVATED RISK | Material issues, investigation needed |
| 71-100 | HIGH RISK | Severe structural problems detected |

### Floor Rules
These override the formula when triggered:

| Condition | Floor | Reasoning |
|---|---|---|
| No audited financials available (recent 2 years) | MSRI ≥ 50 | Cannot assess risk without financial data |
| No independent board members | MSRI ≥ 45 | Governance gap is material for listing |
| Related-party transactions unaudited | MSRI ≥ 48 | Potential conflicts cannot be cleared |

### Signal Weights (Calibrated from FF Steel + Nishat Mills)

| Signal | Weight | Rationale |
|---|---|---|
| 1. Disclosure Readiness | 1.5 | Foundational — without data, everything is uncertain |
| 2. IPO/Listing Behavior | 1.3 | For pre-IPO: timeline credibility is critical |
| 3. Financial Performance | 1.0 | Standard — but may be stale for private companies |
| 4. Sector Position | 1.3 | Relative performance reveals more than absolute |
| 5. Cost Structure | 1.2 | In Pakistan, energy/input costs determine survival |
| 6. Competitive Moat | 1.3 | Drives long-term value — but verify claims! |
| 7. Governance | 1.0 | Standard — escalate if political connections exist |
| 8-12 | 1.0 each | Sector-specific, standard weight |

---

## 4. NDI SCORING — Narrative Divergence Index

### What It Measures
The gap between what the company SAYS and what the data SHOWS.

### How to Calculate
1. Extract every public claim the company makes (website, press, presentations, rating agency narrative)
2. For each claim, find the observable proxy (the data point that would confirm or deny it)
3. Score each claim:

| Status | Weight | Meaning |
|---|---|---|
| **ALIGNED** | 0 points | Claim matches data |
| **UNVERIFIED** | +5 points | Can't confirm or deny |
| **PARTIAL** | +8 points | Was true but conditions changed |
| **DIVERGENT** | +12 points | Data contradicts the claim |

4. Sum the points. Normalize to 0-100 scale based on number of claims evaluated.

### NDI Interpretation
| Range | Label | Meaning |
|---|---|---|
| 0-30 | LOW | Company narrative matches reality |
| 31-50 | MODERATE | Some gaps — normal for marketing |
| 51-70 | MOD-HIGH | Meaningful divergences — investigate |
| 71-100 | HIGH | Narrative significantly disconnected from reality |

### NDI Claim Ledger Format
Every dossier must include a Claim Ledger table:

| # | Claim | Source | Observable Proxy | Status | Divergence |
|---|---|---|---|---|---|
| 1 | "We are the sole producer of X" | Company website | Competitor product listings | DIVERGENT | +12 |
| 2 | "IPO coming soon" | Website FAQ | PSX filings, milestones | PARTIAL | +8 |

---

## 5. PEER-IMPLIED FINANCIAL RECONSTRUCTION (PIFR)

### When to Use
When a company is **private** and has no recent audited financials, but has listed peers in the same sector.

### Method
1. Identify 3-5 listed peers in the same sector and geography
2. Pull their quarterly/annual results (revenue, margins, PAT, EPS)
3. Note the sector trend: Are peers all declining? Recovering? Diverging?
4. Use the target company's last known financials as a baseline
5. Apply the sector trend to estimate current performance
6. Check against any company-specific signals (credit rating, capacity changes, product mix)

### Critical Rules
- **PIFR estimates are proxies, NOT substitutes for audited financials**
- Always label PIFR estimates as "Peer-Implied" in the report
- State the confidence level and the key assumptions
- Include the peer data table so the reader can see the logic

### Example (from FF Steel V3)
```
Known: FF Steel PAT = PKR 1.4B (FY22), credit rating A/A-1
Peers: 
  - Amreli: Lost PKR 6.1B (FY24-25)
  - Mughal: PAT collapsed to PKR 186M (H1 FY25), recovered to PKR 926M (Q1 FY26)
  - ISL: H1 FY26 EPS up 202%
  - Aisha: Lost PKR 1.7B

PIFR Estimate: FF Steel likely maintained profitability through FY23-25
  (strong FY22 base + maintained credit rating while peers collapsed)
Confidence: MODERATE — inferred, not observed
```

---

## 6. REPORT TEMPLATE — Mandatory Sections

Every Magnus dossier follows this exact section order:

| # | Section | Purpose | Mandatory? |
|---|---|---|---|
| 1 | **Cover Page** | Title, version, MSRI, NDI, verdict, classification, date | ✅ Always |
| 2 | **Market Snapshot** | Sector context — 8-10 key indicators with sources | ✅ Always (added V3) |
| 3 | **Executive Intelligence Summary** | Top 3 findings + score table — STRENGTHS FIRST, then risks | ✅ Always |
| 4 | **Company Profile** | Basic facts, products, leadership, recent activity | ✅ Always |
| 5 | **NDI Claim Ledger** | Every company claim tracked and scored | ✅ Always (added V1.5) |
| 6 | **Signal-by-Signal Audit** | Each signal with evidence, tables, and assessment | ✅ Always |
| 7 | **Interrogation Brief** | Top 5 questions with follow-up traps | ✅ Always |
| 8 | **Conditions to Clear** | Go/No-Go gates for investment decision | ✅ Always (added V2) |
| 9 | **MSRI Composition Appendix** | Full scoring breakdown — show the math | ✅ Always (added V1.5) |
| 10 | **MSRI Sensitivity / Adjustment Table** | What events would change the score and by how much | ✅ Always |
| 11 | **Prediction Registry** | 5-8 testable predictions with check dates | ✅ Always (added V1.5) |
| 12 | **Catalyst Monitor** | What to watch next, with targets and failure signals | ✅ Always (added V1.5) |
| 13 | **Confidence Scorecard** | Version comparison — shows system improvement | ✅ Always (added V2) |
| 14 | **Remaining Blind Spots** | What we don't know — explicit honesty | ✅ Always |
| 15 | **How This Report Was Built** | Methodology section for credibility | ✅ Always (added V3) |
| 16 | **Scope of Analysis** | What becomes possible with more data (listed companies) | ✅ Always (added V3) |

### Executive Summary Rule: STRENGTHS FIRST
Always lead with what the company does well, then present risks. This positions Magnus as balanced and fair, not adversarial. The order should be:
1. **[STRENGTH]** — What they do right
2. **[STRENGTH]** — Their competitive advantage (verified)
3. **[RISK]** — The biggest concern

### Non-Negotiables (Every Dossier, Every Time)
1. ✅ At least 7 distinct signals with confidence grades
2. ✅ At least 3 contradictions identified and graded
3. ✅ 10 interrogation questions with "red flag vs good answer"
4. ✅ "What Would Change My Mind" for every A/B finding
5. ✅ Explicit blind spots section
6. ✅ Source citations for every claim
7. ✅ NDI Claim Ledger
8. ✅ MSRI Composition Appendix with full formula
9. ✅ Prediction Registry with 5+ falsifiable predictions
10. ✅ Catalyst Monitor with targets and failure signals
11. ✅ Market Snapshot with sourced sector data
12. ✅ Methodology section explaining the process

---

## 7. LESSONS LEARNED REGISTRY

> **RULE: After every report, add new lessons here. This is how the system compounds intelligence.**

### From Nishat Mills V1 → V1.5 (First Dossier)

| # | Lesson | Impact | Applied Since |
|---|---|---|---|
| L1 | NDI needs a visible claim ledger, not just a score | Readers need to see the work | V1.5 |
| L2 | MSRI needs a transparent formula, not a magic number | Credibility requires show-the-math | V1.5 |
| L3 | Every finding needs a trace chain (source, date, page) | One unsourced claim kills trust | V1.5 |
| L4 | Predictions must be logged formally or they can't be proven | Prediction registry = evidence of intelligence | V1.5 |
| L5 | "What Would Change My Mind" builds more trust than certainty | Intellectual honesty differentiates from consultancy | V1 |
| L6 | Quarterly margins may use different definitions than annual | Always specify: "Gross Profit / Net Revenue per unconsolidated financials" | V1.5 |
| L7 | Other income must be decomposed (dividends vs capital gains vs FX) | Blanket "other income dependency" is incomplete analysis | V2 target |

### From FF Steel V1.5 → V2 → V3 (Second Company)

| # | Lesson | Impact | Applied Since |
|---|---|---|---|
| L8 | **ALWAYS verify monopoly/exclusivity claims with competitor searches** | V2 said "sole producer" — V3 found 4 competitors. Biggest correction so far | V3 |
| L9 | Search for competing PRODUCTS by name, not just by company | "Grade 80 rebar Pakistan" found competitors that "FF Steel competitors" did not | V3 |
| L10 | Include real-time pricing data with named brands and city averages | Generic "~PKR 230K" is weak; "Mughal PKR 253K, Agha PKR 254K" is intelligence | V3 |
| L11 | KSE-100 / market index data strengthens IPO delay arguments | Exact peak + percentage gains makes the "missed window" argument undeniable | V3 |
| L12 | Lead with strengths in the Executive Summary | Positions Magnus as balanced, not adversarial — critical for company-facing reports | V3 |
| L13 | Market Snapshot before the analysis provides essential context | Reader needs sector context before they can evaluate company-specific signals | V3 |
| L14 | Methodology section builds credibility with sophisticated readers | "How did you do this?" is the first question — answer it proactively | V3 |
| L15 | Self-correction (updating past predictions) is MORE credible than perfection | V3 marking its own V2 prediction as DISPROVEN shows honesty, not weakness | V3 |
| L16 | For private companies, PIFR (peer-implied financials) is the best available proxy | Use listed peer data to bracket what a private company is likely experiencing | V3 |
| L17 | Independent directors should be explicitly checked and flagged if missing | PSX listing requires them — their absence is a governance signal | V3 |
| L18 | Always check Pakistan Standards (PSQCA) for product specification verification | PS:1879-2021 confirmed Grade 80 is a recognized standard — adds technical credibility | V3 |
| L19 | "Scope of Analysis" section shows what MORE is possible with better data | Positions Magnus capabilities for listed company work — commercial expansion tool | V3 |

---

## 8. PREDICTION REGISTRY — Master Tracker

All predictions across all reports, tracked for accuracy measurement.

### FF Steel Predictions

| # | Prediction | Check Date | Status | Outcome |
|---|---|---|---|---|
| FF-1 | IPO filing by Aug 2026 or "soon" has zero credibility | Aug 2026 | ☐ Pending | — |
| FF-2 | FY24-FY25 GM compressed to 8-12% range; still leads peers | Prospectus | ☐ Pending | — |
| FF-3 | No domestic competitor announces G80 within 12 months | Feb 2027 | **❌ DISPROVEN** | V3: Agha, SJ, Markhor, Ittehad all produce G80 |
| FF-4 | Karachi plant not operational by Aug 2026 | Aug 2026 | ☐ Pending | — |
| FF-5 | Processing spread stays > PKR 40K/ton | FY26 Q data | **✅ CONFIRMED** | Feb 2026: Spread = PKR 96-108K/ton |
| FF-6 | Construction sector returns to positive growth by CY2027 | 2027 | ☐ Pending | — |
| FF-7 | No meaningful industrial tariff relief before mid-2026 | Jun 2026 | ☐ Pending | — |
| FF-8 | Independent directors announced before IPO filing | IPO filing | ☐ Pending | — |

### Nishat Mills Predictions
*(To be populated from Nishat Mills V1.5 dossier on next review)*

### Accuracy Scorecard
| Metric | Value |
|---|---|
| Total predictions made | 8 |
| Confirmed correct | 1 (12.5%) |
| Disproven | 1 (12.5%) |
| Pending | 6 (75%) |
| **Current accuracy (of resolved)** | **50%** |

> **Target: 70%+ accuracy across 20+ resolved predictions = commercially credible**

---

## 9. DATA SOURCE REGISTRY — Verified Sources

### Credit Rating Agencies
| Source | URL Pattern | What We Get | Last Used |
|---|---|---|---|
| VIS Credit Rating | vis.com.pk | Financial data, credit grades, management assessment | FF Steel V3 |
| PACRA | pacra.com.pk | Credit ratings, sector reports | Not yet |
| JCR-VIS | jcrvis.com.pk | Islamic finance ratings, specialized assessments | Not yet |

### Stock Exchange & Market Data
| Source | URL Pattern | What We Get | Last Used |
|---|---|---|---|
| PSX (Pakistan Stock Exchange) | psx.com.pk | Listed company filings, quarterly results, announcements | FF Steel V3 |
| KSE-100 Index | TradingEconomics / PSX | Market performance, IPO window assessment | FF Steel V3 |
| Rebar pricing | Industry sources, dealer networks | Current branded steel prices by city | FF Steel V3 |

### Industry Associations
| Source | What We Get | Sector | Last Used |
|---|---|---|---|
| PALSP (Pakistan Assoc. of Large Steel Producers) | Energy costs, production data, policy advocacy | Steel | FF Steel V3 |
| APTMA (All Pakistan Textile Mills Assoc.) | Textile sector costs, production, export data | Textile | Nishat Mills V1.5 |
| PSMA (Pakistan Steel Melters Assoc.) | EAF sector data, scrap imports | Steel | FF Steel V2 |

### Trade & Economic Data
| Source | What We Get | Last Used |
|---|---|---|
| PBS (Pakistan Bureau of Statistics) | Import/export volumes, trade data | FF Steel V3 |
| SBP (State Bank of Pakistan) | Interest rates, monetary policy, sector reports | Nishat Mills V1.5 |
| PSQCA (Pakistan Standards & Quality) | Product standards (e.g., PS:1879-2021 for rebar grades) | FF Steel V3 |
| GlobalData | Sector forecasts, construction outlook | FF Steel V2 |

### Company-Specific Sources
| Source Type | What We Get | Reliability Warning |
|---|---|---|
| Company website / FAQ | Product claims, leadership, timelines | ⚠️ Narrative-controlled — always verify |
| LinkedIn profiles | Board members, CMO, hiring patterns | ⚠️ May be incomplete |
| SECP filings | Conversion dates, company type, directors | ✅ Regulatory — reliable |
| Press releases / news | Partnerships, events, announcements | ⚠️ PR-driven — cross-reference |

---

## 10. QUALITY LADDER — Version Standards

| Version | Quality | What's Required | Suitable For |
|---|---|---|---|
| **V1** | 60-70% | Basic signals, contradictions, questions, blind spots | Internal proof of concept |
| **V1.5** | 75-80% | + Claim ledger, MSRI appendix, trace chains, predictions, catalysts | Internal review, methodology refinement |
| **V2** | 80-85% | + Peer matrix, working capital, decision trees, interrogation traps | Pilot reports to trusted contacts |
| **V3** | 90%+ | + Market snapshot, self-correction, methodology section, PIFR, scope section | Shareable intelligence product |

---

## 11. UPDATE LOG

| Date | Report | Changes Made to Playbook |
|---|---|---|
| Feb 22, 2026 | FF Steel V3 | **Playbook created.** All 8 sections populated from FF Steel + Nishat Mills experience. 19 lessons documented. 8 predictions tracked. Signal framework formalized. |

---

> **REMEMBER: This document gets updated after EVERY report. The next report starts by reading THIS document. That's how Magnus compounds intelligence.**

---

**MAGNUS MARKETS INTELLIGENCE — Khaldun Systems**
*The playbook that makes every report smarter than the last.*
