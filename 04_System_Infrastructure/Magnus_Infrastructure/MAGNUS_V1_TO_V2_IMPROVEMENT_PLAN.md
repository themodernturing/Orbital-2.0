# MAGNUS V1 → V2: CONSOLIDATED IMPROVEMENT PLAN
## Lessons from the Nishat Mills Dossier + Institutional Review Feedback
**Date: Feb 2026 | Living Document — Updated After Each Dossier**

---

## WHAT WORKED (KEEP AS-IS)

| Element | Why It Works |
|---|---|
| **"Claims vs Physics" framing** | The report keeps returning to the core Magnus promise: divergence intelligence. That coherence is rare |
| **Executive → Signal Audit → Contradictions → Questions → Blind Spots** | This flow makes the dossier *usable* for a deal team — not just readable |
| **Interrogation brief with "red flag vs good answer"** | This is where a PE partner feels: "My diligence team wouldn't ask these." IC memos love this format |
| **Confidence grading (A/B/C/U)** | Explicitly communicating *how sure you are* is a trust builder |
| **"What Would Change My Mind"** | Intellectual honesty differentiates us from consultancy theatre |
| **$0 cost model** | 60-70% of intelligence collected at zero cost — proves the economics |
| **Explicit blind spots section** | Stating what we DON'T know IS intelligence |

---

## ALL IDENTIFIED IMPROVEMENTS (13 TOTAL)

Merged from our own gap analysis + external institutional review. Organized by priority.

---

### TIER 1: MUST-HAVE FOR V2 (Make the system visible)

---

#### 1. NDI CLAIM LEDGER ⭐ HIGHEST PRIORITY
**Source:** External review
**Problem:** NDI = 67 is a number without a visible backbone. The reader can't see which claims were evaluated or how each was scored.

**Fix:** Add a 1-page "Narrative Claim Ledger" section:

| Claim | Source | Observable Proxy | Status | Confidence |
|---|---|---|---|---|
| "Solar transition reduces energy costs" | Annual report commentary | Fuel mix %, kWh cost | **DIVERGENT** | High |
| "Competitive edge via efficiency" | CEO statement | Margin vs peers | **UNVERIFIED** | Medium |
| "Diversifying markets" | Investor presentation | Export mix shift data | **UNVERIFIED** | Medium |

**Why it matters:** This is where Magnus becomes "structural interrogation engine," not "smart writeup." Every claim management makes is tracked, tested, and graded.

**Effort:** 1-2 hours per dossier (review company's public narrative, extract claims, match against signals)

---

#### 2. MSRI COMPOSITION APPENDIX
**Source:** External review + our own Gap 3
**Problem:** MSRI 52 looks like a magic number. No visible "math spine." A client will ask "how did you get 52?" and we can't show the work.

**Fix:** Add a 1-page appendix:
- **Signal weights:** List each signal and its weight band (even if coarse)
- **Per-signal score:** What each signal scored individually (0-100)
- **Score sensitivity:** "What moves the MSRI by 10 points?" — shows which signals dominate
- **Interpretation guide:** 0-30 = Low Risk, 30-50 = Moderate, 50-70 = Elevated, 70-100 = High Risk

**Formula (transparent, auditable):**
```
MSRI = Σ (Signal_Score × Weight × Confidence_Multiplier) / Σ (Weight × Confidence_Multiplier)

Where Confidence_Multiplier:
  Grade A = 1.0
  Grade B = 0.7
  Grade C = 0.4
  Grade U = 0.1
```

**Why it matters:** Converts "smart report" → "system." Clients can audit and challenge the score.

**Effort:** 2-3 hours to define formula + test across 3 companies

---

#### 3. TRACE CHAINS (Source Citations)
**Source:** External review
**Problem:** We reference "PSX filings" and "analyst reports" generically. No document titles, dates, page numbers, or specific data extraction points.

**Fix:** For every Grade A and B finding, add a mini-trace:
```
Source: PSX NML FY24 Annual Report, Financial Statements, Pg 42
Metric: Gross Profit / Net Revenue = 10.81%
Date: Published Aug 2024
```

Even a lightweight citation style massively upgrades credibility. A skeptical analyst needs to be able to CHECK our claims.

**Effort:** 30-60 min per dossier (verify and cite during research phase)

---

#### 4. PREDICTION REGISTRY
**Source:** Our own Gap 4
**Problem:** The dossier makes implied predictions but doesn't log them formally. Without logged predictions, we can never prove Magnus works.

**Fix:** Every dossier ends with 5 specific, falsifiable predictions:
```
PREDICTION #1: Nishat's gross margins will remain below 13% in FY26
  unless energy package benefits materialize.
  Check Date: Q1 FY26 results
  Source Signal: Signal 2 (Gross Margin Collapse)
  Confidence: B
  
  RESULT: [To be filled — CORRECT / WRONG / PARTIAL]
```

**Why it matters:** After 10+ predictions resolve, we can say "Magnus predicted X correctly Y% of the time." That's the sales pitch.

**Effort:** 30 min per dossier + monthly review (1 hour)

---

### TIER 2: SHOULD-HAVE FOR V2 (Make the analysis deeper)

---

#### 5. OPERATING vs BELOW-THE-LINE DECOMPOSITION
**Source:** External review
**Problem:** The revenue-profit divergence conflates four different things: operational margin deterioration, finance cost environment, tax timing, and other income normalization. A smart reader will say "but interest rates went up everywhere."

**Fix:** Add a 2×2 decomposition table:

| Component | Trend | Controllable? |
|---|---|---|
| **Core Ops:** Gross margin | ↓ 33% → 11% | Partially (input costs + product mix) |
| **Core Ops:** EBITDA margin | Need to calculate | Partially |
| **Below-the-line:** Finance costs | ↑ significantly | No (macro rates) |
| **Below-the-line:** Other income | ↓ sharply | No (investment returns) |
| **Below-the-line:** Tax rate | ↑ (super tax) | No (government policy) |

**The payoff:** We can then say: *"Even adjusting for rates and taxes, operating performance is deteriorating"* — OR — *"Core operations are stable; the PAT decline is entirely below-the-line."* Either conclusion is more precise and more damning.

**Effort:** 1 hour (requires reading P&L notes more carefully)

---

#### 6. GROSS MARGIN DEFINITION SANITY CHECK
**Source:** External review
**Problem:** Q2 FY24 gross margin at 33.52% vs full-year at 10.81% is a 23pp gap. A skeptical analyst will assume we're mixing definitions or comparing incompatible periods (standalone vs consolidated, or segment margins vs company margins).

**Fix:** Add one defensive line per metric:
- "Gross margin = Gross Profit / Net Sales per unconsolidated financial statements"
- "Quarterly margin volatility likely driven by: product mix shifts / exchange rate effects / inventory revaluation / seasonal patterns"
- If the discrepancy can't be explained, flag it honestly: "This variance requires clarification from management — see Question X"

**Why it matters:** One factual error destroys credibility of the entire dossier. This is defensive accuracy.

**Effort:** 30 min (verify the definition used in each source)

---

#### 7. PEER MARGIN MATRIX
**Source:** Our own Gap 2 + external review
**Problem:** We say Nishat's margins collapsed to 11% but can't say whether this is company-specific or sector-wide. Without peer data, the finding is incomplete.

**Fix: Competitive Position Matrix Lite**

| Metric | Nishat Mills | Interloop | Gul Ahmed | Industry |
|---|---|---|---|---|
| Export value | $350M | $530M | $372M | — |
| Market cap | ? | Largest in PSX textiles | ? | — |
| Gross margin | 10-11% | ? | ? | ? |
| Product focus | Fashion + technical fabrics | Hosiery (60%+ share) | Composite | — |
| Energy strategy | 38MW solar, 83% grid | ? | ? | — |

**Upgrade:** Move beyond export ranking to unit economics — "Where exactly are you outperforming peers, and why doesn't it show in margins?"

**Effort:** 2-3 searches per peer, 1 hour total (free)

---

#### 8. WORKING CAPITAL PHYSICS
**Source:** External review
**Problem:** We hint at working capital stress (PKR 7B Sukuk) but don't quantify the cycle. This is exactly what a PE financial diligence team calculates.

**Fix:** Add working capital trend:
- Inventory days (trend over 2-3 years)
- Receivables days (trend)
- Payables days (trend)
- Cash conversion cycle (computed)

Even 2 years of trend data is deal-relevant.

**Effort:** 1-2 hours (requires reading balance sheet details from annual reports)

---

#### 9. CATALYST MONITOR BOX
**Source:** External review
**Problem:** The dossier is a snapshot. It doesn't tell the reader what to watch next, which limits its shelf life.

**Fix:** Add a "What to Watch in FY26" box at the end:

| Catalyst | What to monitor | Target | Signal if missed |
|---|---|---|---|
| Roshan Maeshat energy package | Energy cost per kWh | ↓ from 35-38 to ~23 | Margin recovery thesis fails |
| Interest rate cycle | Finance costs in quarterly filings | ↓ 20-25% YoY | PAT recovery delayed |
| Gross margin recovery | Quarterly gross margin | ↑ above 13% | Structural compression confirmed |
| Export volume growth | Monthly export data | ↑ 15% value growth | Competitive drift continues |

**Why it matters:** Turns a one-time report into a living surveillance document. That's recurring revenue.

**Effort:** 30 min per dossier

---

#### 10. "OTHER INCOME" CLASSIFICATION
**Source:** External review
**Problem:** We identified "other income dependency" as a finding but didn't classify what "other income" actually is. The inference is strong but unfounded without decomposition.

**Fix:** Classify other income into buckets:
- Associate company dividends
- Investment/capital gains
- Foreign exchange gains
- One-off items

Even a rough split turns inference into forensic finding.

**Effort:** 1 hour (requires reading annual report notes)

---

### TIER 3: CLIENT-PACKAGING IMPROVEMENTS (V3+)

---

#### 11. OPERATIONAL INTELLIGENCE SIGNALS
**Source:** Our own Gap 1
**Problem:** 7/9 signals come from financial data. We're reading what every analyst reads. Magnus's moat is operational intelligence — trade manifests, hiring, customer behavior.

**Fix:**
- Trade manifest data (Volza or targeted web search for import/export records)
- Job postings (LinkedIn, Rozee.pk) for hiring/firing signals
- Specific customer shifts (is H&M increasing competitor orders?)
- Equipment purchases (proxy for real capacity investment)

**Effort:** 4-6 additional targeted searches per company (free)

---

#### 12. HINDSIGHT BACKTEST
**Source:** Our own Gap 6
**Problem:** We didn't test: "If Magnus ran 12 months ago, would its predictions have been correct?"

**Fix:** For first 3-5 companies:
1. Look at signals visible 12 months ago
2. Ask what Magnus would have predicted
3. Compare against what actually happened
4. Score accuracy

**Effort:** 1-2 hours per company (free)

---

#### 13. DILIGENCE KILL CHAIN
**Source:** External review
**Problem:** The interrogation questions are strong but lack a decision framework — "so what if they can't answer?"

**Fix:** Add a 1-page "Kill Chain":
```
IF management cannot quantitatively answer Q1 (margin decomposition) 
  AND Q3 (Sukuk + expansion funding)
  AND Q5 (other income classification)
THEN:
  → Downgrade investment thesis
  → Increase discount rate by X bps
  → Adjust valuation by Y%
  → Recommend: additional 30-day forensic diligence before LOI
```

**Why it matters:** Makes the report directly investable. The PE partner knows exactly how to act on the findings.

**Effort:** 30 min per dossier (requires understanding the deal context)

---

## IMPLEMENTATION SEQUENCE

### V1.5 (IMMEDIATE — Next 2-3 hours on Nishat dossier)

| # | Improvement | Priority |
|---|---|---|
| 1 | NDI Claim Ledger | ⭐ Highest |
| 2 | MSRI Composition Appendix | ⭐ High |
| 3 | Trace Chains on Grade A findings | ⭐ High |
| 4 | Prediction Registry (5 predictions) | ⭐ High |
| 6 | Gross Margin Definition Sanity Check | High |
| 9 | Catalyst Monitor Box | High |

### V2 (NEXT 3-5 DOSSIERS — Calibration phase)

| # | Improvement | Priority |
|---|---|---|
| 5 | Operating vs Below-the-Line Decomposition | High |
| 7 | Peer Margin Matrix | High |
| 8 | Working Capital Physics | High |
| 10 | Other Income Classification | Medium |
| 11 | Operational Intelligence Signals | Medium |
| 12 | Hindsight Backtest on 3+ companies | Medium |

### V3 (PRODUCTION — Paid client reports)

| # | Improvement | Priority |
|---|---|---|
| 13 | Diligence Kill Chain | High |
| — | Full HTML/PDF report with Imperial Footwear visual standard | High |
| — | API-assisted deep collection ($0.10-0.15/report) | Medium |
| — | Backtesting evidence in pitch materials | Medium |

---

## QUALITY LADDER (UPDATED)

| Version | Quality | What's Added | Suitable For |
|---|---|---|---|
| **V1 (done)** | 60-70% | Basic signals, contradictions, questions | Internal proof of concept |
| **V1.5 (next)** | 75-80% | + Claim ledger, MSRI appendix, trace chains, predictions, catalysts | Internal review, refine methodology |
| **V2** | 80-85% | + Peer matrix, working capital, operating decomposition, backtests | Pilot reports to trusted contacts |
| **V3** | 90%+ | + Kill chain, operational signals, HTML/PDF output, accuracy evidence | Paid client engagements |

---

## THE NON-NEGOTIABLES (EVERY DOSSIER, EVERY TIME)

Regardless of version, every Magnus dossier MUST have:

1. ✅ At least 7 distinct signals with confidence grades
2. ✅ At least 3 contradictions identified and graded
3. ✅ 10 interrogation questions with "red flag vs good answer"
4. ✅ "What Would Change My Mind" for every A/B finding
5. ✅ Explicit blind spots section ("What Magnus Does Not Know")
6. ✅ Source citations for every claim
7. ✅ NDI Claim Ledger (starting V1.5)
8. ✅ MSRI Composition Appendix (starting V1.5)
9. ✅ Prediction Registry with 5+ falsifiable predictions (starting V1.5)
10. ✅ Catalyst Monitor (starting V1.5)

---

*This is a living document. Updated after each dossier with new lessons.*

---

# SYSTEM MEMORY & COMPOUNDING INTELLIGENCE

Magnus improves through structured repetition and disciplined logging.

After every dossier, the following must be updated:

## 1. MASTER SIGNAL LIBRARY (Separate Document)

Log any new reusable structural signals discovered.

Only add signals that:
- Are reusable across multiple companies  
- Represent a structural pattern  
- Have observable proxy metrics  

Signals must follow the standard Signal Entry Template.

---

## 2. PREDICTION REGISTRY (Separate Document)

Log a minimum of 5 falsifiable predictions per dossier.

Each prediction must include:
- Source signal  
- Confidence level  
- Check date  
- Outcome (once resolved)  

Accuracy tracking is mandatory.  
Resolved outcomes must update both the Prediction Registry and the Signal Library accuracy fields.

---

## 3. IMPROVEMENT PLAN (This Document)

After each dossier:
- Add new lessons learned  
- Add structural upgrades if required  
- Mark completed improvements  
- Refine methodology only if recurring patterns justify it  

---

Magnus intelligence compounds through:

Dossier → Signals → Predictions → Outcomes → Structural Refinement

Discipline over time creates the edge.  
No overengineering. Only consistency.