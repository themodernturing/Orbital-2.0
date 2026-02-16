# PE Audit Logic: Retail & Footwear Sector Physics

This document defines the irrefutable "Industry Physics" used by the Khaldun PE Audit Engine to find anomalies in target company data.

---

## 1. Inventory Turnover (The Liquidity Wall)
*   **Benchmark (Gold Standard)**: 3.5x - 4.5x (Bata/Service).
*   **Physics Rule**: Any company operating at < 2.5x with a Claimed Revenue of > PKR 5B is mathematically "Trapping" at least 15% of its capital in dead stock.
*   **Audit Prompt**: *"Calculate the capital drag by comparing Target ITR against the 3.5x Benchmark. If Delta > 1.0, flag as 'RED: Trapped Capital Risk'."*

## 2. Trade Velocity (The Growth Truth)
*   **Benchmark**: YoY Import growth must correlate with Claimed Revenue growth within a 10% margin of error.
*   **Physics Rule**: If Volza shows a **-20% YoY drop in raw material imports** (HS 6403) while the target claims **+15% Revenue growth**, the company is either (a) Lying about growth or (b) Facing a massive stock-out event.
*   **Audit Prompt**: *"Flag any divergence between Import Volume (Volza) and Financial Claims as 'RED: Growth Integrity Risk'."*

## 3. Geographic Yield (The Monopoly Signal)
*   **Benchmark**: Revenue per Square Foot (RPSF) in Tier-1 Malls (Packages, Emporium, LuckyOne).
*   **Physics Rule**: Footwear RPSF in Tier-1 malls should be between PKR 120k - 180k.
*   **Audit Prompt**: *"If Target RPSF in primary malls is < 100k, identify 'Amber: Productivity Gap' and calculate the PKR 1.0B Upside Potential."*

## 4. Sentiment Decay (The Repatriation Warning)
*   **Benchmark**: Trustpilot / Google Rating > 3.5.
*   **Physics Rule**: A rating decay of > 0.5 points over 6 months triggers an "Institutional Warning." It means the brand is "Leaking Value" faster than it can acquire it.
*   **Audit Prompt**: *"Analyze the slope of Trustpilot ratings. If slope is Negative, flag as 'RED: Sentiment Leak'."*

## 5. Supply Chain Concentration
*   **Benchmark**: < 40% dependency on a single Chinese trader.
*   **Physics Rule**: 90% dependency on a single supplier (Volza Data) is a "Single Point of Failure" that discounts valuation by at least 10%.
*   **Audit Prompt**: *"Calculate concentration ratio from Volza. Flag > 60% as 'RED: Supply Chain Dependency Risk'."*

---
> [!IMPORTANT]
> **Conclusion**: The AI Auditor must not "guess." It must apply these mathematical constants to the external signals to generate the **Verdict.**
