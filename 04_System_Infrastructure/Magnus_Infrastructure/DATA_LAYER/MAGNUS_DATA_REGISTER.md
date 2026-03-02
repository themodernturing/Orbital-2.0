# MAGNUS MASTER DATA REGISTER

> Every number in every Magnus dossier must trace back to this register.
> This register works alongside the Playbook's Source Registry (Section 9) — the Source Registry says WHERE to get data, this register tracks the ACTUAL data points used.

**Last Updated:** 2026-02-28
**Maintained By:** Magnus Markets Intelligence
**Cross-Reference:** MAGNUS_MASTER_PLAYBOOK.md → Section 9 (Source Registry)

---

## Confidence Mapping (Magnus ↔ Data Register)

Magnus uses A/B/C/U grading. This register maps them to data-level tags:

| Magnus Grade | Data Register Tag | Minimum Requirement |
|-------------|------------------|-------------------|
| **A** — Multiple sources | **VERIFIED** | 2+ independent sources confirm |
| **B** — Single credible source | **ESTIMATED** | One official/institutional source |
| **C** — Weak evidence / logical inference | **PROXY-BASED** | Inferred from related indicator |
| **U** — No data available | **HYPOTHESIS** | Logical inference, no hard data |

---

## Register: Steel Sector (FF Steel Engagement)

| Data Point | Value | Source | Confidence | Cross-Validated With | Used In | Known Limitations |
|-----------|-------|--------|------------|---------------------|---------|------------------|
| FF Steel PAT (FY22) | PKR 1.4B | VIS Credit Rating | VERIFIED | Annual report | Signal 3 (Financial) | Single year, may not reflect current |
| FF Steel credit rating | A/A-1 | VIS Credit Rating | VERIFIED | PACRA cross-check | Signal 1 (Disclosure) | Rating agency methodology |
| Mughal Steel rebar price (Lahore) | PKR 253K/ton | Dealer network | VERIFIED | PALSP, industry sources | Signal 10 (Pricing Power) | Snapshot price, fluctuates |
| Agha Steel rebar price (Karachi) | PKR 254K/ton | Dealer network | VERIFIED | Market check | Signal 10 (Pricing Power) | Snapshot price |
| FF Steel Grade 80 claim | "Sole producer" | Company website | **DISPROVEN** | Competitor search found Agha, SJ, Markhor, Ittehad | Signal 6 (Moat) | **V2 stated as fact → V3 corrected. Lesson L8.** |
| Grade 80 standard | PS:1879-2021 | PSQCA | VERIFIED | ASTM cross-ref | Signal 6 (Moat) | Standard exists, not exclusive |
| Mughal PAT collapse | PKR 186M (H1 FY25) | PSX filings | VERIFIED | Quarterly reports | Signal 4 (PIFR) | Recovery to 926M in Q1 FY26 |
| ISL EPS growth | +202% (H1 FY26) | PSX filings | VERIFIED | Annual report | Signal 4 (PIFR) | Single half, not full year |
| Amreli losses | PKR 6.1B (FY24-25) | PSX filings | VERIFIED | Annual report | Signal 4 (PIFR) | Cumulative two years |
| Aisha Steel losses | PKR 1.7B | PSX filings | VERIFIED | Annual report | Signal 4 (PIFR) | — |
| Processing spread | PKR 96-108K/ton | PALSP / dealer data | VERIFIED | LME + local price delta | Signal 10 (Pricing) | Feb 2026 snapshot |
| KSE-100 peak | 115,000+ | PSX | VERIFIED | Bloomberg, TradingEcon | Signal 2 (IPO Window) | — |
| Construction sector forecast | Return to growth by CY2027 | GlobalData | ESTIMATED | SBP sector report | Signal 8 (Tailwinds) | Forecast, not fact |
| NEPRA avg industrial tariff | ~PKR 55-65/kWh | NEPRA | VERIFIED | SBP, PALSP | Signal 5 (Cost) | Varies by category/province |
| FF Steel Karachi plant | Not operational | Company website + site checks | ESTIMATED | LinkedIn hiring patterns | Signal 2 (IPO) | May have changed since last check |
| IPO filing status | Not filed as of Feb 2026 | PSX | VERIFIED | SECP filings | Signal 2 (IPO) | Could file any time |

---

## Register: Textile Sector (Nishat Mills Engagement)

| Data Point | Value | Source | Confidence | Cross-Validated With | Used In | Known Limitations |
|-----------|-------|--------|------------|---------------------|---------|------------------|
| Nishat Mills revenue | (from annual report) | PSX filing | VERIFIED | VIS/PACRA | Signal 3 | Public listed company |
| Nishat gross margins | (from quarterly results) | PSX filing | VERIFIED | Peer comparison | Signal 3 | Quarter-to-quarter variation |
| APTMA sector production data | (from APTMA reports) | APTMA | ESTIMATED | PBS trade data | Signal 8 | Association data, may have reporting lag |
| SBP policy rate impact | (current rate) | SBP | VERIFIED | Bloomberg | Signal 5 (Cost) | — |

> **Note:** Nishat Mills data to be fully populated when V1.5 dossier is reviewed.

---

## Register: Banking Sector (Faysal Bank Engagement)

| Data Point | Value | Source | Confidence | Cross-Validated With | Used In | Known Limitations |
|-----------|-------|--------|------------|---------------------|---------|------------------|
| FABL conversion timeline | ~8.75 years | SECP + SBP announcements | VERIFIED | Press, annual reports | Signal S-001 (Reg Lag) | Exact in-principle date may not be public |
| FABL deposit growth | PKR 458B → PKR 1T+ | Annual reports | VERIFIED | SBP banking data | Signal S-002 (Deposit Migration) | Total deposits, not broken by product |
| FABL PAT growth | +79% (2023) | Annual report | VERIFIED | PSX filings | Financial analysis | Single year |
| Non-compliant asset disposal | ~PKR 70B (T-Bills/PIBs) | Annual report disclosures | ESTIMATED | SBP data | Signal S-003 (Asset Purification) | Charity amounts not publicly itemized |
| Shariah Board composition | 4 members (from 2015) | Annual report | VERIFIED | SBP regulations | Signal S-004 (Shariah Governance) | Minimum is 3 |

---

## Register: Pakistan Macro (Cross-Sector)

| Data Point | Value | Source | Confidence | Cross-Validated With | Used In | Known Limitations |
|-----------|-------|--------|------------|---------------------|---------|------------------|
| SBP Policy Rate | (current) | SBP | VERIFIED | Bloomberg | All sectors | — |
| CPI Inflation | (current) | PBS | VERIFIED | SBP, IMF | All sectors | Base year methodology |
| PKR/USD Exchange Rate | (current) | SBP | VERIFIED | xe.com, Bloomberg | All sectors | Open market may differ |
| KSE-100 Index | (current) | PSX | VERIFIED | Bloomberg | Capital markets analysis | — |
| Pakistan GDP growth | (current) | PBS / World Bank | VERIFIED | IMF Article IV | Sector context | — |
| Industrial electricity tariff | (current) | NEPRA | VERIFIED | SBP, PALSP | Industrial cost analysis | Varies by category |

> **Note:** Macro data must be refreshed at the start of each new engagement.
