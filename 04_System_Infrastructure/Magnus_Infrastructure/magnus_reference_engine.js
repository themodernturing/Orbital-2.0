/* 
   MAGNUS MARKETS: INSTITUTIONAL INTELLIGENCE ENGINE
   Case Study: Masood Textile Mills (MTM)
   Reference Standard: Imperial Footwear V2
*/

const OPENAI_KEY = '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';

Chart.defaults.color = '#8888a0';
Chart.defaults.borderColor = 'rgba(255,255,255,0.06)';
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.font.size = 11;

document.addEventListener('DOMContentLoaded', () => {
    console.log("Magnus Engine: Initializing...");
    initMSRIGauge();
    initRadarChart();
    initYieldChart();
    initTradeIntegrityChart();
    initInventoryChart();
    initScrollAnimations();
    console.log("Magnus Engine: Initialization complete.");
});

// 1. MSRI GAUGE (Critical Divergence)
function initMSRIGauge() {
    const gaugeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target.querySelector('.gauge-fill');
                if (fill) {
                    // MSRI Score 68/100 -> ~208 offset (as seen in Imperial)
                    setTimeout(() => { fill.style.strokeDashoffset = '208'; }, 300);
                }
                gaugeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    document.querySelectorAll('.gauge-container').forEach(el => gaugeObserver.observe(el));
}

// 2. RADAR CHART: MTM vs Sector "Gold Standard" (Interloop/SGFL)
function initRadarChart() {
    const ctx = document.getElementById('radarChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['GSP+ Compliance', 'Energy Yield', 'ITR Efficiency', 'Unit Premium', 'Export Diversification', 'Digital Integrator', 'Traceability', 'Capital Velocity'],
            datasets: [
                {
                    label: 'MTM (Observed)',
                    data: [9, 4, 3, 5, 2, 3, 6, 3],
                    backgroundColor: 'rgba(197, 160, 89, 0.15)',
                    borderColor: '#c5a059',
                    borderWidth: 2,
                    pointBackgroundColor: '#c5a059'
                },
                {
                    label: 'Interloop (Benchmark)',
                    data: [10, 8, 9, 8, 9, 7, 9, 8],
                    backgroundColor: 'rgba(16, 185, 129, 0.05)',
                    borderColor: '#10b981',
                    borderWidth: 1.5,
                    pointBackgroundColor: '#10b981'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { r: { beginAtZero: true, max: 10, ticks: { display: false }, grid: { color: 'rgba(255,255,255,0.05)' } } },
            plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, font: { size: 10 } } } }
        }
    });
}

// 3. YIELD CHART: Energy Yield Stress
function initYieldChart() {
    const ctx = document.getElementById('yieldChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan 25', 'Mar 25', 'Jun 25', 'Sep 25', 'Dec 25', 'Feb 26'],
            datasets: [{
                label: 'Claimed Self-Sufficiency',
                data: [90, 92, 95, 95, 96, 98],
                borderColor: 'rgba(255,255,255,0.2)',
                borderDash: [5, 5],
                fill: false
            }, {
                label: 'Observed Grid Stress',
                data: [82, 78, 70, 65, 62, 58],
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { font: { size: 10 } } } },
            scales: { y: { beginAtZero: true, max: 100 } }
        }
    });
}

// 4. TRADE INTEGRITY: Export Manifest Delta
function initTradeIntegrityChart() {
    const ctx = document.getElementById('tradeIntegrityChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['EU Route', 'US Route', 'Regional'],
            datasets: [{
                label: 'Guidance (Volume)',
                data: [100, 80, 50],
                backgroundColor: 'rgba(255,255,255,0.1)'
            }, {
                label: 'Port Proxy (Actual)',
                data: [82, 65, 48],
                backgroundColor: '#c5a059'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { font: { size: 10 } } } }
        }
    });
}

// 5. INVENTORY CHART: The ITR-Wall
function initInventoryChart() {
    const ctx = document.getElementById('inventoryChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Raw Cotton', 'Sized Yarn', 'Grey Fabric', 'Finished Goods'],
            datasets: [{
                label: 'Inventory Days',
                data: [60, 45, 160, 40],
                backgroundColor: (c) => c.index === 2 ? '#ef4444' : 'rgba(197, 160, 89, 0.5)',
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { title: { display: true, text: 'Days Ageing', color: '#8888a0' } } }
        }
    });
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Magnus Engine: Revealing element", entry.target);
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0 }); // Set threshold to 0 to ensure trigger

    document.querySelectorAll('.signal-card, .stat-card, .chart-box, .trace-step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// CHATBOT (GPT-4o) - Grounded in 9-Signal MTM Analysis
const SYSTEM_PROMPT = `You are MAGNUS, a deterministic institutional advisor for Masood Textile Mills (MTM). You focus on "Structural Intelligence" and "Divergence Auditing."

9-SIGNAL MTM DIAGNOSTICS:
1. Brand/Trust Integrity: 91% dependency on EU GSP+ trade routes creates a binary regulatory risk profile for 2026.
2. Geo-Yield Gap: Under-utilization of "Desert Clusters" vs. Punjab hubs identifies a PKR 150M logistical leak.
3. Sourcing Lag: Cotton sourcing lag vs. LME price spikes identified a 12% margin compression risk.
4. Lead-Time Latency: Observed shipping manifests trailing claimed throughput by 18%.
5. Competitor Moat: MTM is trailing Interloop in Unit-Value Premium by $1.20/kg.
6. Trade Underutilization: Unused UK-DCTS duty-free quotas identifying PKR 200M+ leakage.
7. Trapped Capital: PKR 1.8B trapped in "Grey Fabric" aging (160 days vs. 110 benchmark).
8. ROI Stress: Grid-dependency costing 14% more than modeled solar yield during peak hours.
9. Latent Upside: Operational throughput optimization targets PKR 2B+ annual revenue upside.

Tone: High-status, forensic, board-dominant. Frame findings as "Deterministic Signals."`;

let chatHistory = [{ role: 'system', content: SYSTEM_PROMPT }];

async function processChat(msg) {
    const input = document.getElementById('chatInput');
    const container = document.getElementById('chatMessages');
    if (!msg) return;

    input.value = '';
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg user';
    userMsg.textContent = msg;
    container.appendChild(userMsg);

    chatHistory.push({ role: 'user', content: msg });

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENAI_KEY}` },
            body: JSON.stringify({ model: 'gpt-4o', messages: chatHistory, temperature: 0.7, max_tokens: 800 })
        });
        const data = await response.json();
        const botMsg = data.choices[0].message.content;

        const botMsgEl = document.createElement('div');
        botMsgEl.className = 'chat-msg bot';
        botMsgEl.innerHTML = `<span class="msg-text">${botMsg.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')}</span>`;
        container.appendChild(botMsgEl);
        container.scrollTop = container.scrollHeight;
        chatHistory.push({ role: 'assistant', content: botMsg });
    } catch (e) { console.error(e); }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    processChat(input.value.trim());
}

function toggleChat() {
    const panel = document.getElementById('chatPanel');
    panel.classList.toggle('open');
}
