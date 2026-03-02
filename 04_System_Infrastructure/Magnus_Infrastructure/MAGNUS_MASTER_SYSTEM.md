# MAGNUS MARKETS: THE MASTER SYSTEM DOCUMENT
## Structural Intelligence Infrastructure for PE & Pre-IPO Capital
**Khaldun Systems — Version 3.0 — Feb 2026**

---

## 0. THE PROBLEM MAGNUS SOLVES

In every PE deal or pre-IPO evaluation, there is an **information asymmetry** between the seller and the buyer.

The seller knows:
- The real state of their order pipeline
- Which customers are at risk of churning
- The actual machine utilization rates
- The true energy cost per unit
- Which supplier relationships are fragile

The buyer knows:
- Audited financial statements (12-18 months stale)
- Management-curated presentations
- A due diligence report that mostly parrots the above

**The buyer is flying blind. The seller controls the narrative.**

Magnus exists to **break this asymmetry** — not by accessing private data, but by **reconstructing the seller's reality from the outside** using public signals, commercial databases, and intelligent inference.

> **Magnus answers the question a PE firm cannot answer with a spreadsheet:**
> *"What is actually happening inside this company right now — and is it consistent with what they're telling us?"*

---

## 1. THE INTELLIGENCE THESIS

Magnus does not produce reports. Magnus produces **intelligence that doesn't exist elsewhere.**

The value proposition is simple:

| What Exists Today | What Magnus Produces |
|---|---|
| Financial statements (historical, curated) | **Live structural position** (current, uncurated) |
| Management presentations (narrative-controlled) | **Narrative Divergence Detection** (what they say vs. what signals show) |
| Sector reports (generic, top-down) | **Company-specific signal physics** (bottom-up, forensic) |
| Due diligence checklist (compliance-focused) | **Structural risk indexing** (predictive, calibrated) |
| Competitor analysis (public info repackaged) | **Competitive divergence tracking** (measured via proxy signals) |

**The intelligence moat is not in any single data source. It is in the COMBINATION and INFERENCE across multiple sources that no human analyst would perform.**

---

## 2. THE INTELLIGENCE PIPELINE

Magnus operates as a 4-layer intelligence pipeline:

```
┌─────────────────────────────────────────────────────┐
│  LAYER 1: SIGNAL INGESTION                          │
│  (Raw data acquisition from 6+ source categories)   │
├─────────────────────────────────────────────────────┤
│  LAYER 2: SIGNAL PHYSICS                            │
│  (Sector-specific transformation into structural     │
│   indicators with known lead/lag properties)         │
├─────────────────────────────────────────────────────┤
│  LAYER 3: INFERENCE ENGINE                          │
│  (Cross-signal triangulation, divergence detection,  │
│   simulation, and scenario modeling)                 │
├─────────────────────────────────────────────────────┤
│  LAYER 4: INTELLIGENCE OUTPUT                       │
│  (Board-ready deliverables with trace chains and     │
│   probability-calibrated conclusions)                │
└─────────────────────────────────────────────────────┘
```

Each layer is described in full detail below.

---

## 3. LAYER 1 — SIGNAL INGESTION

Magnus ingests data from **6 categories of external sources**. No source alone is sufficient. The power is in the combination.

### 3.1 Trade & Customs Proxies
- **Sources**: Volza, ImportGenius, Panjiva, Pakistan Customs (WebOC proxy)
- **What We Get**: Shipment volumes, consignee names, HS codes, port activity, supplier identities
- **Why It Matters**: If a company claims 15% revenue growth but their import volumes are down 10%, that's a **structural divergence** no financial statement reveals
- **Refresh**: 24-72 hours
- **API**: Volza API (commercial license), ImportGenius bulk export

### 3.2 Commodity & Input Cost Physics
- **Sources**: LME (metals), ICE (cotton futures), Platts (energy), NEPRA (local grid tariffs), local mandi rates
- **What We Get**: Real-time raw material costs, energy landed costs, currency-adjusted input prices
- **Why It Matters**: When cotton prices spike 30% but a textile company's COGS guidance stays flat, Magnus detects the **margin compression lag** before it hits earnings
- **Refresh**: Intraday to weekly
- **API**: LME API, commodities data feeds

### 3.3 Digital Footprint & Sentiment
- **Sources**: Trustpilot, Google Reviews, Glassdoor, social media sentiment (via Perplexity/Tavily)
- **What We Get**: Customer satisfaction trends, employee sentiment, brand perception trajectory
- **Why It Matters**: A B2C brand with a declining Trustpilot score is a **brand equity time bomb** that no P&L shows until it's too late
- **Refresh**: Daily
- **API**: Perplexity API (for real-time web synthesis), Trustpilot API, Google Places API

### 3.4 Competitive & Market Structure
- **Sources**: PSX filings, annual reports of listed peers, industry association data, SBP sector reports
- **What We Get**: Peer financial ratios, market share estimates, pricing benchmarks, capacity utilization proxies
- **Why It Matters**: Magnus doesn't evaluate a company in isolation. It measures **competitive divergence** — how fast is the target drifting from the sector leaders?
- **Refresh**: Monthly to quarterly
- **API**: PSX data feeds, SEC EDGAR (for international peers)

### 3.5 Infrastructure & Operational Proxies
- **Sources**: NEPRA tariff schedules, satellite imagery (optional), job posting analysis, equipment import manifests
- **What We Get**: Energy cost structure, workforce expansion/contraction signals, capex activity indicators
- **Why It Matters**: If a company claims "solar transition" but their grid-tariff exposure is rising, Magnus detects the **infrastructure narrative gap**
- **Refresh**: Event-based to monthly
- **API**: NEPRA public data, job board APIs

### 3.6 AI-Synthesized Intelligence Layer
- **Sources**: Perplexity API, Tavily API, custom RAG over sector knowledge bases
- **What We Get**: Real-time synthesis of news, regulatory changes, industry gossip, and expert commentary
- **Why It Matters**: This is the "peripheral vision" layer. It catches signals that structured databases miss — a new regulation, a competitor's quiet factory expansion, a buyer relationship shift
- **Refresh**: On-demand (query-driven)
- **API**: Perplexity API (sonar-pro model), Tavily search API

---

## 4. LAYER 2 — SIGNAL PHYSICS

Raw data is noise. Magnus transforms raw signals into **structural indicators** using sector-specific physics models.

### 4.1 What is a "Signal"?

A Signal in Magnus is NOT a data point. It is a **calibrated structural indicator** with:

| Property | Description |
|---|---|
| **Definition** | What the signal measures in plain language |
| **Sector Binding** | Which industries it applies to |
| **Data Sources** | Which Layer 1 inputs feed it |
| **Lead/Lag** | How far ahead of financial outcomes it predicts |
| **Correlation** | Measured correlation to outcomes (e.g., margin surprise) |
| **Stability** | How robust the signal is across market cycles |
| **Failure Modes** | Known conditions where the signal breaks |
| **Weight Band** | Its contribution range in the overall score |
| **Validation Status** | Whether it's been backtested and vetted |

### 4.2 The Signal Library (Sector Examples)

#### TEXTILE SECTOR
| Signal | What It Detects | Lead Time |
|---|---|---|
| **Cotton Ingestion Lag** | Divergence between LME cotton price and company COGS | 30-60 days |
| **ITR-Wall** | Inventory lockup exceeding 2.5x turnover threshold | 1 quarter |
| **Trade Manifest Delta** | Gap between claimed export volume and port-verified shipments | Real-time |
| **Buyer Concentration Risk** | Revenue dependency on <3 customers (via consignee analysis) | Structural |
| **Energy Grid Stress** | Real grid reliance vs. claimed solar/renewable transition | Monthly |
| **GSP+ Binary Risk** | Compliance audit trajectory for EU trade preference access | 6-12 months |
| **Unit-Value Erosion** | Revenue/kg declining relative to sector leaders | Quarterly |
| **Workforce Expansion Delta** | Job postings vs. claimed production capacity growth | Monthly |

#### RETAIL / FOOTWEAR SECTOR
| Signal | What It Detects | Lead Time |
|---|---|---|
| **RPSF (Revenue per Sq Ft)** | Store productivity vs. benchmarks | Quarterly |
| **Sentiment Decay** | Brand perception trajectory (Trustpilot/Google) | 3-6 months |
| **Import Source Shift** | Changes in raw material sourcing countries | 60-90 days |
| **Franchise Velocity** | Speed of new franchise openings vs. closures | Structural |
| **SKU Conversion Gap** | Digital traffic vs. actual purchase conversion | Monthly |
| **Supplier Concentration** | Single-source dependency risk | Structural |

### 4.3 The MSRI Score (Magnus Structural Risk Index)

All signals for a target company are weighted and combined into a single **MSRI Score (0-100)**:

- **80-100**: GREEN — Structural position is sound, aligned with sector physics
- **60-79**: AMBER — Meaningful structural divergences detected, requires investigation
- **40-59**: RED — Material structural risk identified, possible narrative-reality gap
- **0-39**: BLACK — Severe structural deterioration, high probability of misrepresentation

**The MSRI is NOT a credit rating.** It is a structural position indicator. A company can have a good credit rating but a terrible MSRI if their narrative diverges from their physics.

---

## 5. LAYER 3 — THE INFERENCE ENGINE

**This is where Magnus becomes truly intelligent.** Layer 1 gives us data. Layer 2 gives us signals. Layer 3 produces **intelligence that doesn't exist anywhere else.**

### 5.1 Cross-Signal Triangulation

No single signal is conclusive. Magnus produces novel intelligence by **triangulating across signals**:

**Example — Detecting Hidden Margin Compression:**
```
Signal A: Cotton prices up 30% (LME)
Signal B: Company guidance says "stable margins"
Signal C: Import manifests show 15% volume increase in raw cotton
Signal D: Export manifests show flat finished goods volume

INFERENCE: Company is stockpiling raw material at peak prices 
while output is flat. This creates a COGS compression bomb 
that will detonate in 2 quarters. Estimated margin impact: -400bps.

THIS INTELLIGENCE DOES NOT EXIST IN ANY SINGLE DATABASE.
```

**Example — Detecting Narrative Divergence:**
```
Signal A: Management claims "aggressive solar transition"
Signal B: NEPRA tariff filings show increasing grid consumption
Signal C: Equipment import manifests show no solar panel shipments
Signal D: Job postings show no renewable energy engineer hires

INFERENCE: Solar transition narrative is not supported by 
observable physics. Energy cost guidance is likely overly 
optimistic by 12-18%.

NO DUE DILIGENCE FIRM WOULD EVER COMBINE THESE DATA POINTS.
```

### 5.2 Narrative Divergence Indicator (NDI)

The NDI is Magnus's signature intelligence product. It measures the **gap between what a company says and what external signals show.**

The NDI engine:
1. **Ingests** the company's public narrative (presentations, press releases, management commentary)
2. **Maps** each narrative claim to observable signal physics
3. **Measures** the divergence between claim and reality
4. **Scores** each claim on a confidence scale (ALIGNED / UNVERIFIED / DIVERGENT)
5. **Outputs** a board-ready "Narrative Audit" showing where the story breaks

### 5.3 Simulation Engine

Magnus runs **Monte Carlo simulations** using signal inputs to model scenarios:

- **Margin Trajectory**: Given current input costs, trade volumes, and energy prices, what is the probability distribution of gross margins in the next 2-4 quarters?
- **Cash Flow Stress**: Given inventory lockup, receivables aging, and capex commitments, what is the probability of a liquidity crunch?
- **Competitive Drift**: Given current unit-value erosion and competitor capex, when does the target company lose its competitive position?

### 5.4 The "Lemon Detector"

For PE firms, the highest-value intelligence is **detecting a bad deal before they commit capital.**

Magnus's Lemon Detector combines:
- High narrative divergence (NDI > 60)
- Declining trade physics (export manifests down while revenue claims up)
- Inventory bloat (ITR below sector floor)
- Sentiment decay (customer/employee signals negative)

**If Magnus flags a target as a "Lemon," the PE firm saves millions in avoided bad deals. This alone justifies the Magnus fee many times over.**

---

## 6. LAYER 4 — INTELLIGENCE OUTPUT

### 6.1 The Magnus Underwriting Package

Delivered at deal inception. Board-ready. Covers:

1. **Executive Intelligence Summary** (2 pages)
   - MSRI Score with traffic-light classification
   - Top 3 structural divergences identified
   - Lemon/No-Lemon verdict with confidence level

2. **Signal-by-Signal Forensic Audit** (10-15 pages)
   - Each signal presented as: CLAIM → SIGNAL → REALITY → TRACE CHAIN
   - Every conclusion is traceable to specific data points
   - All data sources cited with timestamps

3. **Narrative Divergence Report** (3-5 pages)
   - Management claims mapped against observable physics
   - Each claim scored: ALIGNED / UNVERIFIED / DIVERGENT
   - "Pressure Points" for due diligence interrogation

4. **Competitive Position Matrix** (3-5 pages)
   - Target benchmarked against 3-5 sector peers
   - Divergence trajectory (improving/deteriorating)
   - Specific moat analysis (what the target has that peers don't, and vice versa)

5. **Scenario Simulation Output** (2-3 pages)
   - Base/Bull/Bear margin and cash flow trajectories
   - Key assumptions documented and sensitivity-tested
   - "Break Points" — what conditions would cause the thesis to fail?

6. **Intelligence Q&A Portal** (30-day access)
   - RAG-powered chatbot trained on all Magnus signals for the target
   - Allows deal teams to query specific intelligence in natural language

### 6.2 The Magnus Surveillance Subscription

Post-deal continuous monitoring. Covers:
- Monthly MSRI recalibration with drift alerts
- Quarterly NDI refresh
- Real-time trade proxy alerts
- Ongoing portal access

---

## 7. TECHNICAL ARCHITECTURE

### 7.1 Data Pipeline

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  API LAYER   │     │  PROCESSING  │     │  INFERENCE   │
│              │     │              │     │              │
│ Volza API    │────▶│ ETL Pipeline │────▶│ Signal       │
│ LME API      │     │ (Python)     │     │ Physics      │
│ Perplexity   │     │              │     │ Engine       │
│ Trustpilot   │     │ Normalization│     │              │
│ NEPRA Data   │     │ & Validation │     │ Cross-Signal │
│ PSX Feeds    │     │              │     │ Triangulator │
│ Tavily       │     │ Storage      │     │              │
│ Google APIs  │     │ (PostgreSQL) │     │ NDI Engine   │
│              │     │              │     │              │
│ Custom       │     │ Signal       │     │ Simulation   │
│ Scrapers     │     │ Extraction   │     │ Engine       │
└──────────────┘     └──────────────┘     └──────────────┘
                                                │
                                                ▼
                                          ┌──────────────┐
                                          │  OUTPUT      │
                                          │              │
                                          │ Report Gen   │
                                          │ (HTML/PDF)   │
                                          │              │
                                          │ RAG Portal   │
                                          │ (Chat + Q&A) │
                                          │              │
                                          │ Alert System │
                                          │ (Email/SMS)  │
                                          └──────────────┘
```

### 7.2 Core Technology Stack

| Component | Technology | Purpose |
|---|---|---|
| **Data Ingestion** | Python (requests, scrapy) | API calls, web scraping, data collection |
| **Processing** | Python (pandas, numpy) | ETL, normalization, signal extraction |
| **Storage** | PostgreSQL + Redis | Persistent signal storage + real-time cache |
| **Inference Engine** | Python + deterministic formulas | MSRI scoring, NDI calculation, simulations |
| **AI Synthesis** | Perplexity API (sonar-pro) | Real-time web intelligence, gap-filling |
| **AI Inference** | GPT-4o / Claude API | Narrative analysis, report generation, Q&A |
| **Report Generation** | Jinja2 → HTML/PDF | Institutional-grade output formatting |
| **RAG Portal** | LangChain + Vector DB | Client-facing intelligence query interface |
| **Frontend** | Next.js or Static HTML | Client portal and report delivery |
| **Monitoring** | Cron + webhooks | Continuous signal refresh and drift alerts |

### 7.3 API Integration Specifications

| API | Model/Endpoint | Use Case | Cost Estimate |
|---|---|---|---|
| **Perplexity** | `sonar-pro` | Real-time web synthesis for any target company | ~$5/1000 queries |
| **Tavily** | Search API | Structured web search for specific data points | ~$1/1000 searches |
| **Volza** | Commercial API | Trade/customs data for import/export verification | Subscription-based |
| **LME** | Data API | Real-time commodity pricing | Subscription-based |
| **OpenAI** | GPT-4o | Narrative analysis, report drafting, Q&A bot | ~$5/report |
| **Google** | Places API | Review/sentiment collection | Free tier available |
| **PSX** | Data feeds | Listed peer financial data | Public/scraping |

---

## 8. THE COMMERCIAL MOAT

### 8.1 Why PEs Would Pay

1. **Avoid a Bad Deal**: If Magnus flags a "Lemon" and saves a PE firm from a $5M bad investment, the $10K Magnus fee is irrelevant. The ROI is 500x.

2. **Negotiate Better**: If Magnus identifies PKR 1.8B in trapped inventory capital, the PE firm uses this to negotiate a lower entry price. The intelligence directly impacts deal economics.

3. **Monitor Continuously**: Post-acquisition, Magnus provides the PE firm with an early-warning system for structural deterioration — something no portfolio company will self-report.

4. **Unique Intelligence**: No consulting firm, no due diligence provider, and no financial advisor combines Volza customs data with LME commodity physics with Trustpilot sentiment with NEPRA energy tariffs into a single structural picture. **This combination is the moat.**

### 8.2 Why Competitors Can't Replicate This

- **Big 4 accounting firms**: They have access to internal data but not the inference engine or the signal library. They audit backwards, not forwards.
- **Management consultants**: They produce strategy recommendations, not structural intelligence. They don't have the signal pipeline.
- **Credit rating agencies**: They measure creditworthiness, not structural position. They don't triangulate across disparate data sources.
- **Bloomberg / Capital IQ**: They aggregate financial data. They don't produce company-specific inferences from non-financial signals.

**Magnus occupies the white space between all of these.**

---

## 9. THE FIRST PROOF: MTM CASE STUDY

To prove Magnus works, the MTM report must demonstrate intelligence that:

1. **No financial statement shows** (e.g., the Cotton Ingestion Lag creating a margin compression bomb)
2. **No due diligence report would catch** (e.g., cross-referencing NEPRA tariffs with claimed solar transition)
3. **No competitor analysis provides** (e.g., unit-value erosion measured via actual trade manifests)
4. **Changes the deal economics** (e.g., identifying PKR 1.8B in recoverable trapped capital)

**The MTM report is not a demo. It is a proof of concept that Magnus intelligence changes how a PE firm thinks about a deal.**

---

## 10. BUILD SEQUENCE

### Phase 1: Signal Pipeline (Weeks 1-4)
- [ ] Set up Perplexity API integration for real-time web synthesis
- [ ] Set up Volza API or manual customs data ingestion
- [ ] Build commodity price feed (LME/ICE)
- [ ] Build sentiment collection pipeline (Trustpilot/Google)
- [ ] Build PSX peer data scraper

### Phase 2: Inference Engine (Weeks 3-6)
- [ ] Formalize Signal Physics models for Textile & Retail sectors
- [ ] Build Cross-Signal Triangulation engine
- [ ] Build NDI (Narrative Divergence Indicator) engine
- [ ] Build Monte Carlo simulation module
- [ ] Build MSRI scoring calculator

### Phase 3: Output System (Weeks 5-8)
- [ ] Design the institutional report template (HTML + PDF)
- [ ] Build the signal-by-signal forensic audit generator
- [ ] Build the RAG-powered Q&A portal
- [ ] Build the drift alert notification system

### Phase 4: First Client Delivery (Weeks 7-10)
- [ ] Complete MTM proof-of-concept with live data
- [ ] Deliver to first PE partner for feedback
- [ ] Iterate based on intelligence gaps identified
- [ ] Package for repeatable delivery

---

**MAGNUS MARKETS**
*Intelligence that doesn't exist elsewhere. That's the product.*
