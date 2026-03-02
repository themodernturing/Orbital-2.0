// ═══════════════════════════════════════════════
// ORBITAL Intelligence — GFC Fans (Pvt.) Ltd.
// Visualizations + OpenRouter GPT Chatbot
// ═══════════════════════════════════════════════

// ── Chart.js Global Config ──
Chart.defaults.color = '#8888a0';
Chart.defaults.borderColor = 'rgba(255,255,255,0.06)';
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.font.size = 11;

document.addEventListener('DOMContentLoaded', () => {
    initRadarChart();
    initRevenueChart();
    initImportSourceChart();
    initCogsChart();
    initFxChart();
    initGaugeAnimation();
    initScrollAnimations();

    // Close floating chat or methodology modal when clicking outside
    document.addEventListener('mousedown', (e) => {
        const chatPanel = document.getElementById('chatPanel');
        const chatToggle = document.getElementById('chatToggle');
        if (chatPanel && chatPanel.classList.contains('open')) {
            if (!chatPanel.contains(e.target) && !chatToggle.contains(e.target)) {
                toggleChat();
            }
        }

        const modal = document.getElementById('methodologyModal');
        if (modal && modal.classList.contains('open') && e.target === modal) {
            toggleMethodology();
        }
    });
});

function toggleMethodology() {
    const modal = document.getElementById('methodologyModal');
    modal.classList.toggle('open');
}

// ── 1. RADAR CHART — Capability Comparison ──
function initRadarChart() {
    const ctx = document.getElementById('radarChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Export Reach', 'Vertical Integration', 'Certifications', 'BLDC/Innovation', 'Energy Efficiency', 'Direct Sourcing', 'Brand Heritage', 'Domestic Scale'],
            datasets: [
                {
                    label: 'GFC Fans',
                    data: [8, 9, 10, 3, 3, 2, 8, 7],
                    backgroundColor: 'rgba(99,102,241,0.15)',
                    borderColor: '#6366f1',
                    borderWidth: 2,
                    pointBackgroundColor: '#6366f1',
                    pointRadius: 4
                },
                {
                    label: 'Khurshid Fans',
                    data: [5, 5, 6, 9, 8, 7, 5, 4],
                    backgroundColor: 'rgba(16,185,129,0.1)',
                    borderColor: '#10b981',
                    borderWidth: 2,
                    pointBackgroundColor: '#10b981',
                    pointRadius: 3
                },
                {
                    label: 'Pak Fans',
                    data: [7, 6, 5, 4, 5, 5, 7, 10],
                    backgroundColor: 'rgba(245,158,11,0.08)',
                    borderColor: '#f59e0b',
                    borderWidth: 1.5,
                    pointBackgroundColor: '#f59e0b',
                    pointRadius: 3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 10,
                    ticks: { stepSize: 2, display: false },
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    pointLabels: { font: { size: 10 }, color: '#8888a0' },
                    angleLines: { color: 'rgba(255,255,255,0.05)' }
                }
            },
            plugins: {
                legend: { position: 'bottom', labels: { padding: 16, usePointStyle: true, pointStyle: 'circle', font: { size: 11 } } }
            }
        }
    });
}

// ── 2. REVENUE BAR CHART ──
function initRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Pak Fans', 'GFC Fans', 'Royal Fans', 'Khurshid', 'Millat'],
            datasets: [{
                data: [26.5, 22.4, 15.8, 12.5, 9.2],
                backgroundColor: ['rgba(16,185,129,0.6)', 'rgba(99,102,241,0.7)', 'rgba(255,255,255,0.15)', 'rgba(245,158,11,0.5)', 'rgba(255,255,255,0.1)'],
                borderColor: ['#10b981', '#6366f1', 'rgba(255,255,255,0.3)', '#f59e0b', 'rgba(255,255,255,0.2)'],
                borderWidth: 1.5,
                borderRadius: 6,
                barPercentage: 0.7
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: (c) => `PKR ${c.raw}B` } }
            },
            scales: {
                x: { grid: { color: 'rgba(255,255,255,0.03)' }, ticks: { callback: v => `${v}B` } },
                y: { grid: { display: false } }
            }
        }
    });
}

// ── 3. BLDC PATENT SHARE DONUT ──
function initImportSourceChart() {
    const ctx = document.getElementById('importSourceChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Khurshid', 'GFC', 'Others'],
            datasets: [{ data: [55, 15, 30], backgroundColor: ['#ef4444', '#6366f1', 'rgba(255,255,255,0.1)'], borderWidth: 0 }]
        },
        options: {
            cutout: '65%',
            responsive: true,
            plugins: {
                legend: { position: 'bottom', labels: { padding: 8, usePointStyle: true, font: { size: 10 } } },
                tooltip: { callbacks: { label: (c) => `${c.label}: ${c.raw}%` } }
            }
        }
    });
}

// ── 4. COGS DONUT ──
function initCogsChart() {
    const ctx = document.getElementById('cogsChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Raw Materials', 'Energy', 'Labor', 'Overhead'],
            datasets: [{ data: [48.5, 22.3, 17.8, 11.4], backgroundColor: ['#ef4444', '#f59e0b', '#6366f1', 'rgba(255,255,255,0.08)'], borderWidth: 0 }]
        },
        options: {
            cutout: '65%',
            responsive: true,
            plugins: {
                legend: { position: 'bottom', labels: { padding: 8, usePointStyle: true, font: { size: 10 } } },
                tooltip: { callbacks: { label: (c) => `${c.label}: ${c.raw}%` } }
            }
        }
    });
}

// ── 5. LME COPPER LINE CHART ──
function initFxChart() {
    const ctx = document.getElementById('fxChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan 25', 'Mar 25', 'Jun 25', 'Sep 25', 'Dec 25', 'Mar 26', 'Jun 26', 'Sep 26', 'Dec 26'],
            datasets: [
                {
                    label: 'LME Copper (Actual)',
                    data: [8200, 8450, 8800, 9000, 9200, null, null, null, null],
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99,102,241,0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: '#6366f1',
                    borderWidth: 2.5
                },
                {
                    label: 'LME Copper (Forecast)',
                    data: [null, null, null, null, 9200, 9500, 9800, 10100, 10400],
                    borderColor: '#f59e0b',
                    borderDash: [6, 4],
                    backgroundColor: 'rgba(245,158,11,0.05)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 3,
                    pointBackgroundColor: '#f59e0b',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { position: 'bottom', labels: { padding: 16, usePointStyle: true, font: { size: 11 } } },
                tooltip: { callbacks: { label: (c) => `${c.dataset.label}: $${c.raw}/T` } }
            },
            scales: {
                y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { callback: v => `$${v}` } },
                x: { grid: { color: 'rgba(255,255,255,0.03)' } }
            }
        }
    });
}

// ── 6. GAUGE ANIMATION ──
function initGaugeAnimation() {
    const gaugeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target.querySelector('.gauge-fill');
                if (fill) {
                    // 2.1/10 = 21%, arc length 251, so offset = 251 * (1 - 0.21) ~198
                    setTimeout(() => { fill.style.strokeDashoffset = '198'; }, 300);
                }
                gaugeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.gauge-container').forEach(el => gaugeObserver.observe(el));
}

// ── 7. SCROLL ANIMATIONS ──
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('.signal-card, .radar-card, .payback-card, .flow-node, .chart-box, .fs-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ═══════════════════════════════════════════════
// CHATBOT — Local-First + OpenRouter Fallback
// ═══════════════════════════════════════════════

// Comprehensive context for AI fallback
const GFC_CONTEXT = `
COMPANY: GFC Fans (Pvt.) Ltd. (Established 1954, Gujrat, Pakistan). Revenue: PKR 22.4 Billion.
CORE ASSETS:
- UL/CE/CSA Certifications (Best in Pakistan, allows duty-free UK/EU/US entry)
- 380-Ton Copper Wire Plant in Gujrat (Only company that makes its own copper wire)
- 16x Consecutive TDAP Export Trophy Winner
- 70+ years of brand heritage

FINDING 1 — RAW MATERIAL OVERSPENDING (PKR 250M/year lost):
- GFC buys copper and steel from local Gujrat middlemen instead of directly from Chinese mills.
- GFC pays 13.8% more than international prices — this is called the "Distributor Tax".
- Annual consumption: 380 tons Copper + 1,250 tons Electrical Steel.
- If GFC buys directly from mills like Baosteel/Wisco: saves PKR 20.8M per month.
- Millberry copper scrap in Pakistan: PKR 5,500/kg vs LME equivalent PKR 3,542/kg (55% premium to middlemen).
- Pakistan copper scrap imports dropped 87% (2021-2024), local scrap market is drying up.
- Refined copper imports increased 141.78% — industry is switching to proper imports but still through middlemen.

FINDING 2 — BRITISH MARKET OPPORTUNITY (PKR 850M potential):
- Britain gives 92% duty-free access for Pakistani products.
- Total British fan market: PKR 42 Billion. GFC currently sells only PKR 1.2 Billion (2.8%).
- Britain's middlemen take a 12% cut of every sale = PKR 144M/year going to these middlemen.
- Solution: Direct Manchester warehouse (setup cost PKR 80M, pays for itself in 7 months).
- Most successful exporters ship directly to retailers instead of using high-cost middlemen.

FINDING 3 — COMPETITOR GETTING AHEAD (Khurshid BLDC):
- Khurshid filed 3x more energy-efficient fan (BLDC) patents in 2024-25.
- Khurshid uses solar power: energy score 0.54 vs GFC's 0.82 (lower is better).
- GFC has the copper plant to make BLDC fans but needs R&D investment.

FINDING 4 — COPPER PRICES RISING:
- LME Copper: +39% in 13 months (Jan 2025: $8,965 → Feb 2026: $12,480-12,975/T).
- Without price protection, every increase costs GFC more. The middleman's profit grows faster.

FINDING 5 — MIDDLE EAST OPPORTUNITY:
- Gulf countries (Dubai, Riyadh, Doha) need 5x more fans than GFC sells there.
- PKR 8.4 Billion opportunity currently taken by Chinese brands.
- GFC already has UL/CE certifications needed — no new certs required.

FINDING 6 — HIGH ELECTRICITY COSTS:
- GFC: 82% grid-dependent (energy score 0.82). Khurshid: 0.54 (uses solar).
- At NEPRA PKR 54.2/kWh, GFC pays PKR 38M more per year than it should.

FINDING 7 — DISTRIBUTION FEES IN BRITAIN:
- Middlemen take 12% of every shipment to Britain = PKR 144M/year.
- Manchester warehouse setup: PKR 80M, ROI in 7 months.

TOTAL HIDDEN PROFIT: PKR 1.1 Billion WITHOUT building any new factory.
- PKR 250M from buying materials directly
- PKR 850M from increasing sales in Britain by removing middleman fees

COMPETITORS:
- Pak Fans: PKR 26.5B revenue, largest volume, UL cert only
- GFC Fans: PKR 22.4B, own copper plant + UL/CE/CSA (best certs)
- Royal Fans: PKR 15.8B, strong domestically
- Khurshid Fans: PKR 12.5B, BLDC technology + solar power
- Millat Fans: PKR 9.2B, low-price segment

GUJRAT FAN CLUSTER: ~300 of Pakistan's 450 fan companies, 90-98% of national production.
Raw materials = 70-80% of production costs.
`;

const OPENROUTER_KEY = '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';

const GFC_KNOWLEDGE = {
    'metals': `**Raw Material Overspending — PKR 250.8M Lost Every Year**\n\nGFC currently buys Copper (380 tons) and Steel (1,250 tons) from local Gujrat middlemen. The local price is **13.8% higher** than what GFC would pay buying directly from large Chinese mills (like Baosteel or Wisco).\n\n**How to fix it:**\n• Buy directly from mills → 12-month fixed prices\n• Save 15% on material costs\n• **Get back PKR 20.8M every month**\n\n*This is the single biggest way GFC can save money right now.*`,

    'khurshid': `**GFC vs Khurshid — The Technology Gap**\n\nKhurshid is **24 months ahead** in energy-efficient fan (BLDC) branding:\n• Filed 3× more BLDC patents in 2024-25\n• Uses 30% less electricity (energy score: 0.54 vs GFC's 0.82)\n• Has solar power, reducing grid dependence by 30%\n\n**GFC's Advantages:**\n• Own 380-ton Copper Wire Plant (no competitor has this)\n• UL/CE/CSA certifications (Khurshid only has UL)\n• 70-year brand + 16× TDAP export trophies\n\n*GFC has the hardware to make BLDC fans. What's missing is the research investment.*`,

    'uk': `**British Market — PKR 42 Billion Opportunity**\n\nDuty-free access (DCTS) allows **92% of GFC products to enter Britain without import tax**.\n\n**Right Now:**\n• GFC sells PKR 1.2B in Britain (only 2.8% of the market)\n• Middlemen in Britain take a 12% cut of every sale (PKR 144M/year goes to them)\n\n**What GFC Should Do:**\n• Set up a small Manchester warehouse (cost: PKR 80M)\n• This pays for itself in just 7 months\n• Target: PKR 2.1B in sales (+PKR 850M more than today)\n\n*GFC already has the certifications. The problem is the cost of using middlemen, not the product.*`,

    'mena': `**Middle East — 5× More Demand Than GFC Supplies**\n\nGulf cities (Dubai, Riyadh, Doha) need **5 times more fans** than GFC currently sells there.\n\n**The Opportunity:**\n• PKR 8.4 Billion market that Chinese brands are currently taking\n• GFC already has UL/CE certifications — no new certs needed\n• Gulf premium stores require exactly the kind of quality GFC makes\n\n*Selling directly to one Gulf distributor could bring in more money than the entire raw material savings.*`,

    'energy': `**Electricity Costs — GFC Pays PKR 38M Extra Per Year**\n\nGFC depends almost entirely on grid electricity (energy score: 0.82 out of 1.0).\nKhurshid uses solar and mixed energy (score: 0.54).\n\nAt NEPRA rate of PKR 54.2 per unit, GFC pays about **PKR 38 Million more per year** in electricity.\nKhurshid saves 30% because of solar power.\n\n*Investing in solar would reduce costs and improve GFC's competitive position.*`,

    'copper': `**Copper Prices Are Rising Fast**\n\nInternational copper prices went up **39% in just 13 months**:\n• Jan 2025: $8,965/ton\n• Feb 2026: $12,480-12,975/ton\n\nBecause GFC buys from local dealers without any price protection, every increase directly raises production costs.\nGFC pays **PKR 3.5M more every month** compared to a company that buys directly from mills.\n\n*The middleman's profit grows faster than GFC's costs. This is a risk that gets worse every month.*`,

    'total': `**The Total Picture — PKR 1.1 Billion Hidden Profit**\n\nGFC can gain PKR 1.1 Billion **without building anything new**:\n\n1. **Save PKR 250M** by buying raw materials directly from Chinese mills instead of through Gujrat middlemen\n2. **Earn PKR 850M more** from Britain by setting up a direct warehouse and removing the 12% middleman fee.\n\nBoth of these only require one change: **stop depending on middlemen**.\nGFC's factory, certifications, and brand are already world-class.`
};

let chatHistory = [];

function toggleChat() {
    const panel = document.getElementById('chatPanel');
    const toggle = document.getElementById('chatToggle');
    panel.classList.toggle('open');
    toggle.style.display = panel.classList.contains('open') ? 'none' : 'flex';
}

// Returns a local response if keywords match, or null if no match
function getLocalResponse(msg) {
    const lower = msg.toLowerCase();
    if (lower.includes('metal') || lower.includes('250') || lower.includes('leak') || lower.includes('sourcing') || lower.includes('billet') || lower.includes('copper plant') || lower.includes('raw material') || lower.includes('middlem') || lower.includes('overspend')) return GFC_KNOWLEDGE.metals;
    if (lower.includes('khurshid') || lower.includes('bldc') || lower.includes('innovation') || lower.includes('patent') || lower.includes('competitor') || lower.includes('energy-efficient') || lower.includes('energy efficient')) return GFC_KNOWLEDGE.khurshid;
    if (lower.includes('uk') || lower.includes('dcts') || lower.includes('corridor') || lower.includes('manchester') || lower.includes('agent') || lower.includes('commission') || lower.includes('britain') || lower.includes('british')) return GFC_KNOWLEDGE.uk;
    if (lower.includes('mena') || lower.includes('gulf') || lower.includes('dubai') || lower.includes('saudi') || lower.includes('riyadh') || lower.includes('doha') || lower.includes('middle east') || lower.includes('qatar')) return GFC_KNOWLEDGE.mena;
    if (lower.includes('energy') || lower.includes('electricity') || lower.includes('solar') || lower.includes('nepra') || lower.includes('grid') || lower.includes('wapda')) return GFC_KNOWLEDGE.energy;
    if (lower.includes('copper') && (lower.includes('price') || lower.includes('rising') || lower.includes('lme') || lower.includes('increas'))) return GFC_KNOWLEDGE.copper;
    if (lower.includes('total') || lower.includes('1.1') || lower.includes('billion') || lower.includes('hidden') || lower.includes('overall') || lower.includes('summary') || lower.includes('big picture')) return GFC_KNOWLEDGE.total;
    return null; // No local match — will trigger OpenRouter fallback
}

async function processChat(msg, source) {
    const isInline = source === 'inline';
    const inputId = isInline ? 'inlineChatInput' : 'chatInput';
    const btnId = isInline ? 'inlineSendBtn' : 'sendBtn';

    const input = document.getElementById(inputId);
    const btn = document.getElementById(btnId);

    input.value = '';

    addMessage(msg, 'user', 'chatMessages');
    addMessage(msg, 'user', 'inlineChatMessages');

    btn.disabled = true;
    const floatingTyping = addTypingIndicator('chatMessages');
    const inlineTyping = addTypingIndicator('inlineChatMessages');

    // Step 1: Try local knowledge base first
    let response = getLocalResponse(msg);
    let usedAI = false;

    if (response) {
        // Local match found — use it with a brief thinking delay
        await new Promise(r => setTimeout(r, 600 + Math.random() * 800));
    } else {
        // Step 2: No local match — try OpenRouter AI as fallback
        try {
            const apiResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${OPENROUTER_KEY}`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': 'https://orbital-intelligence.com',
                    'X-Title': 'ORBITAL GFC Brief'
                },
                body: JSON.stringify({
                    model: 'google/gemini-2.0-flash-001',
                    messages: [
                        { role: 'system', content: `You are ORBITAL, a strategic intelligence assistant for GFC Fans (Pvt.) Ltd. You speak in clear, simple English that non-native speakers can easily understand. Avoid jargon. Be direct, factual, and use numbers from the data provided. Use markdown bold (**text**) for key numbers. Keep answers concise (max 150 words). Here is all the data you know about GFC Fans:\n\n${GFC_CONTEXT}` },
                        ...chatHistory.slice(-4),
                        { role: 'user', content: msg }
                    ]
                })
            });
            const data = await apiResponse.json();
            if (data.choices && data.choices[0]) {
                response = data.choices[0].message.content;
                usedAI = true;
                chatHistory.push({ role: 'user', content: msg });
                chatHistory.push({ role: 'assistant', content: response });
            } else {
                response = GFC_KNOWLEDGE.total; // Fallback to summary
            }
        } catch (err) {
            console.error('OpenRouter fallback failed:', err);
            response = `I couldn't connect to the AI service, but here's what I know:\n\n` + GFC_KNOWLEDGE.total;
        }
    }

    if (floatingTyping && floatingTyping.parentNode) floatingTyping.remove();
    if (inlineTyping && inlineTyping.parentNode) inlineTyping.remove();

    const floatingBotEl = addMessage('', 'bot', 'chatMessages');
    const inlineBotEl = addMessage('', 'bot', 'inlineChatMessages');
    const floatingTextEl = floatingBotEl ? floatingBotEl.querySelector('.msg-text') : null;
    const inlineTextEl = inlineBotEl ? inlineBotEl.querySelector('.msg-text') : null;

    // Streaming simulation
    let displayed = '';
    const words = response.split(' ');
    for (let i = 0; i < words.length; i++) {
        displayed += (i > 0 ? ' ' : '') + words[i];
        const formatted = formatMd(displayed);
        if (floatingTextEl) floatingTextEl.innerHTML = formatted;
        if (inlineTextEl) inlineTextEl.innerHTML = formatted;
        scrollChat('chatMessages');
        scrollChat('inlineChatMessages');
        await new Promise(r => setTimeout(r, usedAI ? 10 : 20 + Math.random() * 30));
    }

    btn.disabled = false;
    input.focus();
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const msg = input.value.trim();
    if (msg) processChat(msg, 'floating');
}

function sendInlineMessage() {
    const input = document.getElementById('inlineChatInput');
    const msg = input.value.trim();
    if (msg) processChat(msg, 'inline');
}

function sendPill(msg) {
    processChat(msg, 'inline');
}

function addMessage(text, role, containerId) {
    const c = document.getElementById(containerId);
    if (!c) return null;
    const d = document.createElement('div');
    d.className = `chat-msg ${role}`;
    d.innerHTML = role === 'bot' ? `<span class="msg-text">${formatMd(text)}</span>` : text;
    c.appendChild(d);
    scrollChat(containerId);
    return d;
}

function addTypingIndicator(containerId) {
    const c = document.getElementById(containerId);
    if (!c) return null;
    const d = document.createElement('div');
    d.className = 'chat-msg bot';
    d.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
    c.appendChild(d);
    scrollChat(containerId);
    return d;
}

function scrollChat(containerId) {
    const c = document.getElementById(containerId);
    if (c) c.scrollTop = c.scrollHeight;
}

function formatMd(t) {
    return t.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n/g, '<br>');
}
