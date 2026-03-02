---
description: mandatory system update after every intelligence report is generated
---

# Post-Report System Update

> **MANDATORY** — Run this workflow immediately after generating any Orbital or Magnus report.
> Do NOT wait until end of day. Update while context is fresh.

---

## Step 1: Identify the System

Determine if the report is **Orbital** or **Magnus**:
- **Orbital** = reports FOR companies (PASHA, Imperial, any enterprise client)
- **Magnus** = reports ON companies (FF Steel, Faysal Bank, external analysis)

Only update the correct system's files. Do NOT cross-contaminate.

---

## Step 2: Update Prediction Registry

**Orbital:** `04_System_Infrastructure/Orbital_Advisory/ORBITAL_PREDICTION_REGISTRY.md`
**Magnus:** `04_System_Infrastructure/Magnus_Infrastructure/PREDICTION_REGISTRY.md`

For each report, extract **at least 3 falsifiable predictions** and add them:
- Use sequential IDs (OP-XXX for Orbital, P-XXX for Magnus)
- Include: Company, Report Version, Theme, Claim, Basis, Monitoring Indicators, Failure Condition, Confidence, Check Date
- Update the Accuracy Dashboard total count

---

## Step 3: Update Signal Library

**Orbital:** `04_System_Infrastructure/Orbital_Advisory/ORBITAL_SIGNAL_LIBRARY.md`
**Magnus:** `04_System_Infrastructure/Magnus_Infrastructure/MASTER_SIGNAL_LIBRARY.md`

Only add signals that are **reusable** across companies. Ask:
- Is this a structural pattern, not a one-off insight?
- Could this signal appear in another company's report?
- Does it have measurable proxy metrics?

If yes → add it with sequential ID (OS-XXX for Orbital, S-XXX for Magnus).

---

## Step 4: Update Client Data Log

**Orbital:** `04_System_Infrastructure/Orbital_Advisory/DATA_LAYER/03_CLIENT_DATA_LOGS/[CLIENT_NAME]/CLIENT_DATA_LOG.md`
**Magnus:** `04_System_Infrastructure/Magnus_Infrastructure/DATA_LAYER/03_CLIENT_DATA_LOGS/[CLIENT_NAME]/CLIENT_DATA_LOG.md`

Update:
- Report inventory table (add new report)
- Data sources table (add any new sources used)
- Key calculations table (add any new calculations)
- Assumptions (add any new assumptions made)
- Files section (add new report file path)

---

## Step 5: Update Data Register

**Orbital:** `04_System_Infrastructure/Orbital_Advisory/DATA_LAYER/ORBITAL_DATA_REGISTER.md`
**Magnus:** `04_System_Infrastructure/Magnus_Infrastructure/DATA_LAYER/MAGNUS_DATA_REGISTER.md`

Add any **new data points** introduced in the report:
- Every number must have: Value, Source, Link, Confidence tag, Cross-validation, Known Limitations
- Update the "Last Updated" date

---

## Step 6: Update Master System Document

**Orbital:** `04_System_Infrastructure/Orbital_Advisory/ORBITAL_MASTER_SYSTEM_V2.md`
**Magnus:** `04_System_Infrastructure/Magnus_Infrastructure/MAGNUS_MASTER_SYSTEM.md`

Update:
- Prediction Registry dashboard count
- Update Log table (add new row with date, engagement, changes made)
- Sector Signal Library (if new sector-specific measurements were discovered)

---

## Step 7: Update JSON Registry (if applicable)

`04_System_Infrastructure/Magnus_Infrastructure/PREDICTION_REGISTRY.json`

Add structured JSON entries for key predictions (machine-readable format).
Use `ORB-XXX` prefix for Orbital, `MAG-XXX` for Magnus.

---

## Step 8: Update Sector Library (if applicable)

**Orbital:** `04_System_Infrastructure/Orbital_Advisory/DATA_LAYER/02_SECTOR_LIBRARIES/[SECTOR]/`
**Magnus:** `04_System_Infrastructure/Magnus_Infrastructure/DATA_LAYER/02_SECTOR_LIBRARIES/[SECTOR]/`

If the report introduced new sector-specific benchmarks, competitive frameworks, or lessons:
- Update the sector library file
- Add new lessons learned

---

## Completion Checklist

After completing all steps, confirm:
- [ ] Prediction Registry updated (new predictions + dashboard count)
- [ ] Signal Library updated (if new reusable signals found)
- [ ] Client Data Log updated (report inventory + sources + calculations)
- [ ] Data Register updated (new data points + date)
- [ ] Master System updated (prediction count + update log)
- [ ] JSON Registry updated (structured entries)
- [ ] Sector Library updated (if applicable)

---

> **Remember:** The system compounds. Every update makes the next report smarter.
> Skip this workflow = intelligence debt that compounds negatively.
