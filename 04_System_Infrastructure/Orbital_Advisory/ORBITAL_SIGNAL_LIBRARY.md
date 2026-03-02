# ORBITAL — MASTER SIGNAL LIBRARY

This document logs all reusable structural signals discovered across Orbital reports.  
Only add signals that are reusable across multiple companies or introduce a new structural category.

Signals represent the core intelligence building blocks of Orbital.  
They must be structural, observable, and measurable through defined proxy metrics.

Do **not** log one-off insights.  
Only log signals that can be applied again.

---

## Signal Entry Template

Each signal must follow this exact format:

---

**SIGNAL ID: OS-XXX**

**Signal Name:**  

**Category:** (Brand / Competitive / Geographic / Cost / Working Capital / Revenue / Governance / Workforce / Supply Chain / Digital / Other)  

**Definition:**  
Clear one-paragraph explanation of what this signal detects and why it matters structurally.

**Proxy Metric(s):**  
List the measurable indicators used to observe this signal.

**First Used In (Company + Report):**  

**Confidence Pattern So Far:**  
Typical grades observed when this signal appears (A / B / C / Mixed / TBD).

**Accuracy So Far:**  
(e.g., 3/4 predictive hits, 2/5, TBD — update only when predictions resolve.)

**Weight Adjustment Recommendation:**  
(Low / Medium / High influence on ORI scoring — adjust only after sufficient data.)

**Notes / Observations:**  
Any refinements, sector-specific behavior, limitations, or pattern recognition notes.

---

## Signal Logging Rules

1. Signal IDs must be sequential (OS-001, OS-002, OS-003…).  
   Never reuse or renumber IDs. The "OS" prefix distinguishes Orbital signals from Magnus signals (S-XXX).

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

**SIGNAL ID: OS-001**

**Signal Name:** Borrowed Brand Equity

**Category:** Brand

**Definition:**
When a company's consumer-facing brand perception is entirely dependent on third-party partnerships (e.g., hotel management brands, franchise names, licensed trademarks) rather than its own brand. The company may believe it IS the brand, but consumers associate the quality with the partner. If the partner exits, the residual brand value is untested.

**Proxy Metric(s):**
- Consumer review count under the company's own name vs. partner brand name
- Brand visibility on review platforms (Booking.com, Google Reviews, TripAdvisor) under own brand vs. partner brand
- Price premium attributable to partner brand vs. company's own projects

**First Used In (Company + Report):** PASHA Real Estate Group — ORBITAL_PASHA_RE Phase 0

**Confidence Pattern So Far:** B (PASHA: 0 residential reviews under own brand vs. 9.5+ hotel ratings under partner brands)

**Accuracy So Far:** TBD

**Weight Adjustment Recommendation:** High — This signal directly impacts asset valuation and brand dependency risk

**Notes / Observations:**
Discovered in PASHA RE where Four Seasons/Marriott/Ritz-Carlton brands carry all consumer equity. PASHA's own residential projects have near-zero public reviews. Signal is applicable to any company that operates primarily through branded partnerships (franchise restaurants, licensed retailers, white-label manufacturers). The "gut-punch" framing — "your brand is invisible" — creates immediate executive engagement.

---

**SIGNAL ID: OS-002**

**Signal Name:** Project Timeline Drag

**Category:** Working Capital

**Definition:**
When a flagship development project's timeline significantly exceeds industry benchmarks, suggesting phased financing, construction interruptions, design changes, or capital efficiency problems. Extended timelines lock capital without generating returns and create market timing risk (project designed for one market cycle may deliver into another).

**Proxy Metric(s):**
- Years from construction start to full operational status vs. global benchmarks for comparable projects
- Number of phases or restarts visible in public records
- Ratio of project timeline to industry standard (>2x = signal triggered)

**First Used In (Company + Report):** PASHA Real Estate Group — ORBITAL_PASHA_RE Phase 0

**Confidence Pattern So Far:** A (Crescent Bay: 13 years vs. 3–5 year global luxury benchmark — verified from multiple sources)

**Accuracy So Far:** TBD

**Weight Adjustment Recommendation:** High — Directly measures capital efficiency

**Notes / Observations:**
Crescent Bay (2012–2025, 13 years) vs. Burj Khalifa (5 years), The Shard (3 years), Etihad Towers (4 years). The comparison benchmarks make this signal immediately compelling. Applicable to any sector with major capital projects — infrastructure, manufacturing plants, hotel developments. The signal is strongest when the company positions the project as a "flagship."

---

**SIGNAL ID: OS-003**

**Signal Name:** Sovereign Governance Nexus

**Category:** Governance

**Definition:**
When a company's ownership structure is directly linked to a country's ruling family or senior political figures, creating structural advantages (government contracts, regulatory treatment, market access) that also create structural risks (reputational risk with international partners, transition risk if political leadership changes, competitive market distortion).

**Proxy Metric(s):**
- Ownership ties to heads of state, senior ministers, or ruling family members (verified through investigative journalism)
- Government contract share without competitive tender
- International media coverage of political connections
- Regulatory treatment relative to competitors

**First Used In (Company + Report):** PASHA Real Estate Group — ORBITAL_PASHA_RE Phase 0

**Confidence Pattern So Far:** A (PASHA: ownership by President's daughters verified by Guardian, RFE/RL, Carnegie, The Sentry, Intellinews)

**Accuracy So Far:** TBD

**Weight Adjustment Recommendation:** High — Material impact on ORI governance component

**Notes / Observations:**
This is structurally different from a "family-run business" signal. The key distinction is sovereign-level political proximity, not just family ownership. The signal must be documented with investigative journalism sources, not inference. Handle with diplomatic precision in client-facing reports — surface the factual ownership structure without editorializing.

---

**SIGNAL ID: OS-004**

**Signal Name:** Counter-Cyclical Launch Timing

**Category:** Revenue

**Definition:**
When a company launches new products or projects that depend on buyer financing (mortgages, loans, credit) during a period when that financing is tightening or declining. The mismatch between supply (new launches) and demand conditions (tightening credit) creates absorption risk.

**Proxy Metric(s):**
- Number of new project launches vs. mortgage/lending volume trend
- Central bank interest rate trajectory vs. product launch timeline
- "Available for Sale" listings count relative to absorption rate

**First Used In (Company + Report):** PASHA Real Estate Group — ORBITAL_PASHA_RE Phase 0

**Confidence Pattern So Far:** A (PASHA: multiple new launches while AMCGF mortgage volumes declining 2024–2025)

**Accuracy So Far:** TBD

**Weight Adjustment Recommendation:** Medium — Impact depends on buyer segment (ultra-luxury buyers may not use mortgages)

**Notes / Observations:**
In Ultra-luxury real estate, this signal may be weaker because buyers are cash-rich. But for mid-luxury and mass-market, declining mortgage availability directly constrains demand. The signal is most predictive when applied alongside price growth data — if prices are rising but lending is declining, the growth is unsustainable.

---

**SIGNAL ID: OS-005**

**Signal Name:** Digital Capability Gap

**Category:** Digital

**Definition:**
When a company's digital presence and online sales infrastructure significantly trails both global peers and local competitors, indicating missed revenue from digital channels and vulnerability to digitally-native competitors. Particularly significant for B2C companies where online sales are a growing share of revenue.

**Proxy Metric(s):**
- Website functionality audit (virtual tours, online booking, interactive features vs. static pages)
- E-commerce capability vs. competitors
- SEO ranking vs. peers
- Gap between marketing claims about technology ("AI-powered," "innovative") and observable digital products

**First Used In (Company + Report):** Imperial Footwear — ORBITAL_Imperial Phase 0 (brand perception gap detected), reinforced in PASHA RE (static website vs. Emaar benchmark)

**Confidence Pattern So Far:** B (observed in 2/2 Orbital reports)

**Accuracy So Far:** TBD

**Weight Adjustment Recommendation:** Medium — Sector-dependent (critical in retail, less critical in B2B)

**Notes / Observations:**
Both Imperial Footwear and PASHA RE showed significant digital gaps vs. global peers. Imperial's Google rating (1.7/5) vs. Bata (3.5/5). PASHA's static website vs. Emaar's virtual tours and online booking. The signal is most powerful when combined with competitor comparison data.

---

**SIGNAL ID: OS-006**

**Signal Name:** National Contribution as Strength

**Category:** Governance

**Definition:**
When a company actively builds national infrastructure, participates in government-priority projects (reconstruction, memorials, ecological restoration), or partners with international organisations on national goals (COP, UN programmes). This signals alignment with government priorities, long-term commitment to the country, and creates goodwill with regulators and international partners. It is the positive counterpart to OS-003 (Sovereign Governance Nexus) — where OS-003 surfaces political risk, OS-006 surfaces political alignment as a strength.

**Proxy Metric(s):**
- Number and scale of non-commercial national projects (memorials, reconstruction, ecological)
- Partnerships with government bodies or international organisations (UN, COP)
- Public recognition by head of state (inaugurations, official events)
- ESG commitments visible in public communications

**First Used In (Company + Report):** PASHA Real Estate Group — ORBITAL_PASHA_RE Phase 0 V2

**Confidence Pattern So Far:** A (PASHA: Victory Park inaugurated by President Nov 2024, Agdam City Hotel opened Sept 2024, Hilton Garden Inn Agdam Dec 2025, Zangilan reforestation — all verified from president.az, pasha-holding.az, hilton.com)

**Accuracy So Far:** TBD

**Weight Adjustment Recommendation:** Medium — Strengthens governance score but doesn't offset structural ownership risks by itself

**Notes / Observations:**
This signal is most powerful when a company's governance profile has BOTH risks AND strengths. Presenting only risks makes the report look biased. PASHA's national contribution work (Victory Park, Karabakh hotels, COP29 programme) provides balance. Applicable to any company operating in countries with active nation-building or reconstruction programmes (post-conflict zones, developing economies, major infrastructure drives).

---

**SIGNAL ID: OS-007**

**Signal Name:** IPO as Governance Shift

**Category:** Governance

**Definition:**
When a private company (or its subsidiary) announces plans to go public, it signals a structural shift from opacity to transparency. Public listing requires audited financial statements, independent board members, regulatory compliance, and public disclosure — directly addressing governance blind spots identified in Phase 0. The signal is strongest when the company is currently scored as having limited financial transparency.

**Proxy Metric(s):**
- Official IPO announcement or filing with stock exchange
- Planned listing timeline and share offering size
- Underwriter appointment
- Expected impact on exchange market capitalisation (signals size and significance)

**First Used In (Company + Report):** PASHA Real Estate Group — ORBITAL_PASHA_RE Phase 0 V2

**Confidence Pattern So Far:** A (PASHA Bank: Spring 2026 IPO confirmed, 5% share offering, PASHA Capital as underwriter, expected to increase Baku Stock Exchange market cap by 25–30% — verified from pashabank.az, bfb.az, azernews.az, trend.az)

**Accuracy So Far:** TBD

**Weight Adjustment Recommendation:** Medium — Reduces governance risk score IF the IPO actually proceeds. Until listing is confirmed, it's a signal of intent, not execution

**Notes / Observations:**
The gap between "announced IPO" and "completed IPO" is important. Many announced IPOs get delayed or cancelled. The signal should be surfaced as a positive direction indicator, not as a resolved governance fix. For PASHA, the subsidiary (PASHA Bank) going public doesn't directly open PASHA Development's books — but it creates precedent and institutional pressure for broader transparency across the holding group. Applicable to any private company or family-owned group where governance opacity is a finding.

---

**SIGNAL ID: OS-008**

**Signal Name:** Oil-GDP Cascade

**Category:** Revenue

**Definition:**
When a company's entire revenue model (both domestic demand and foreign investment flows) is structurally tethered to a single commodity price through the host country's GDP composition. The company may not directly trade the commodity, but the cascade effect — commodity price → government revenue → fiscal spending → consumer purchasing power → real estate/hotel demand — creates an indirect but powerful dependency. The signal is most dangerous when the company has no geographic diversification outside the commodity-dependent economy.

**Proxy Metric(s):**
- Host country oil/gas share of GDP (>25% = signal triggered)
- Historical GDP vs. commodity price correlation (r² > 0.7 = strong signal)
- Currency peg reliance on commodity revenue
- Company's geographic revenue concentration within the commodity-dependent country

**First Used In (Company + Report):** PASHA Real Estate Group — ORBITAL_PASHA_Group_Strategic_Outlook (Section 05: Oil Shock Sensitivity)

**Confidence Pattern So Far:** A (Azerbaijan: 35% GDP from oil, 2014-2016 crash caused 3.1% contraction + 50% AZN devaluation — historical validation)

**Accuracy So Far:** TBD

**Weight Adjustment Recommendation:** High — Macro-level signal that overrides micro operational performance

**Notes / Observations:**
Tested against 2014-2016 Azerbaijan oil crash data. The cascade model (Oil → GDP → AZN → Demand → Revenue) maps cleanly to PASHA's actual experience. The signal is most valuable for companies in resource-dependent economies (Azerbaijan, Saudi Arabia, UAE, Nigeria, Kazakhstan). Should be cross-referenced with OS-004 (Counter-Cyclical Launch Timing) — launching projects during a commodity downturn in a commodity-dependent economy compounds risk.

---

**SIGNAL ID: OS-009**

**Signal Name:** Conglomerate Circular Dependency

**Category:** Supply Chain

**Definition:**
When a company operates within a group structure where multiple entities depend on each other in a circular chain (e.g., Bank finances Construction → Construction delivers to Real Estate → Real Estate supports Holding value → Holding owns Bank). Stress at any single node cascades through the entire chain. The signal is most dangerous when one link has no external diversification (e.g., 100% of construction is done by the in-house entity with no third-party contractors).

**Proxy Metric(s):**
- Number of intercompany dependency links in the value chain
- Highest single-link dependency intensity (% of operations dependent on a single group entity)
- Evidence of external contractor/supplier diversification
- Holding company ownership structure circularity

**First Used In (Company + Report):** PASHA Real Estate Group — ORBITAL_PASHA_Group_Strategic_Outlook (Section 06: Structural Risk)

**Confidence Pattern So Far:** A (PASHA: Construction→RE dependency at 90% estimated; Bank→Construction financing dependency at 70%; complete ownership loop identified)

**Accuracy So Far:** TBD

**Weight Adjustment Recommendation:** High — Structural risk that compounds under stress

**Notes / Observations:**
The "weakest link" in PASHA's chain is Construction→Real Estate (90% dependency, no contractor diversification visible). This signal is applicable to any family-owned conglomerate with vertically integrated operations: manufacturing groups where the trading company sells 100% of factory output, or holding groups where the bank finances all subsidiary projects. The signal can be visualized as a circular chain diagram — the visual is highly compelling in executive presentations.

---

**SIGNAL ID: OS-010**

**Signal Name:** Brand Portfolio Concentration Risk

**Category:** Brand

**Definition:**
When a company's premium positioning depends on a small number of external brand partners, where the exit of any single partner would fundamentally reshape the project's market position and pricing power. Different from OS-001 (Borrowed Brand Equity) which measures the gap between company vs. partner brand recognition. OS-010 specifically measures the financial impact of partner exit — what happens to pricing, occupancy, and valuation.

**Proxy Metric(s):**
- Number of external brand partners vs. total brand-dependent revenue
- Exit impact modeling: estimated pricing drop if top brand exits (>20% = signal triggered)
- Brand partner contract renewal dates (upcoming renewals = elevated risk)
- Brand dependency score per partner (0-100 scale)

**First Used In (Company + Report):** PASHA Real Estate Group — ORBITAL_PASHA_Group_Strategic_Outlook (Section 07: Brand Analysis)

**Confidence Pattern So Far:** B (PASHA: Four Seasons exit modeled at -25-40% room rate impact; brand premium estimated at +75-125% across segments — significant but based on comparable market analysis, not internal data)

**Accuracy So Far:** TBD

**Weight Adjustment Recommendation:** Medium — High impact but low probability for established partnerships

**Notes / Observations:**
PASHA has three brand partners (Four Seasons: 85/100 dependency score, JW Marriott: 65/100, Mandarin Oriental: 45/100). Four Seasons is the critical one — its exit would reprice the entire project from "ultra-luxury" to "luxury." This signal applies to any company that derives pricing power from licensed or managed brands: franchise hotel operators, licensed fashion retailers, managed resort developers. The "what happens if they leave" framing creates immediate board-level attention.

---

Orbital intelligence compounds through structured signal memory.  
After 50–100 reports, this library becomes a strategic asset.
