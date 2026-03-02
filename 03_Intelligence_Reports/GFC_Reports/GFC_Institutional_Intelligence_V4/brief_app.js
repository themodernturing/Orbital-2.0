/* ═══════════════════════════════════════════════
   ORBITAL Intelligence — GFC Fans (Pvt.) Ltd.
   Ultimate Interactive Engine V11.0
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    initSimulator();
    initAIInterrogator();
    initScrollAnimations();
});

// --- RAG & FORENSIC CONTEXT ---
const GFC_CONTEXT = `
COMPANY: GFC Fans (Pvt.) Ltd. (Gujrat, Pakistan).
CORE FINDING: PKR 250M annual structural leak due to un-hedged local metals sourcing.
VALUATION: PKR 42 Billion UK-DCTS Corridor potential. All figures in PKR.
THE "SOURCING TRAP": Buying un-hedged local billets from middlemen vs Direct China alliances. 
DISTRIBUTOR TAX: 13.8% premium paid locally on 380T Copper and 1250T Steel.
SOLUTION: Direct Tier-1 alliances (Baosteel/China proxies) to hedge price and capture 15% margin.
`;

// --- SIMULATOR (MAD V8 FEATURE) ---
function initSimulator() {
    const slider = document.getElementById('simSlider');
    const display = document.getElementById('simVal');

    if (!slider || !display) return;

    slider.oninput = () => {
        const efficiency = parseInt(slider.value);
        // Base leak is PKR 250.8M. Slider 0 = 0 recovery, 100 = 250M recovery.
        const recovered = (250.8 * (efficiency / 100)).toFixed(1);
        display.innerText = `PKR ${recovered}M`;

        // Visual feedback based on achievement
        if (efficiency > 80) display.style.color = 'var(--accent)';
        else if (efficiency > 40) display.style.color = 'var(--warning)';
        else display.style.color = 'var(--danger)';
    };
}

// --- VISUALS ---
function initCharts() {
    // 1. Capability Radar
    const ctxRadar = document.getElementById('radarChart');
    if (ctxRadar) {
        new Chart(ctxRadar, {
            type: 'radar',
            data: {
                labels: ['UL/CE Certs', 'Brand Heritage', 'Export Footprint', 'BLDC Hub Tech', 'Vertical Wire Plant', 'Sourcing Integrity'],
                datasets: [
                    {
                        label: 'GFC Fans',
                        data: [10, 10, 8, 7, 10, 3],
                        borderColor: '#c5a059',
                        backgroundColor: 'rgba(197, 160, 89, 0.1)',
                        pointBackgroundColor: '#c5a059'
                    },
                    {
                        label: 'Cluster Peer',
                        data: [6, 8, 5, 6, 2, 4],
                        borderColor: 'rgba(255,255,255,0.2)',
                        backgroundColor: 'rgba(255,255,255,0.05)'
                    }
                ]
            },
            options: {
                scales: {
                    r: { grid: { color: 'rgba(255,255,255,0.05)' }, angleLines: { color: 'rgba(255,255,255,0.05)' }, ticks: { display: false }, pointLabels: { color: '#64748b' } }
                },
                plugins: { legend: { labels: { color: '#94a3b8' } } }
            }
        });
    }

    // 2. Revenue Benchmark
    const ctxRev = document.getElementById('revenueChart');
    if (ctxRev) {
        new Chart(ctxRev, {
            type: 'bar',
            data: {
                labels: ['Pak Fans', 'GFC Fans', 'Royal Fans'],
                datasets: [{
                    data: [26.5, 22.4, 15.8],
                    backgroundColor: ['#1e293b', '#c5a059', '#1e293b'],
                    borderRadius: 4
                }]
            },
            options: {
                plugins: { legend: { display: false } },
                scales: {
                    y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
                    x: { ticks: { color: '#94a3b8' } }
                }
            }
        });
    }

    // 3. FX Exposure
    const ctxFx = document.getElementById('fxChart');
    if (ctxFx) {
        new Chart(ctxFx, {
            type: 'line',
            data: {
                labels: ['Q1 25', 'Q2 25', 'Q3 25', 'Q4 25', 'Q1 26(F)'],
                datasets: [{
                    label: 'GBP/PKR Spot (Import Load)',
                    data: [344, 352, 365, 378, 405],
                    borderColor: '#c5a059',
                    tension: 0.4
                }]
            },
            options: {
                plugins: { legend: { display: false } },
                scales: {
                    y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
                    x: { ticks: { color: '#94a3b8' } }
                }
            }
        });
    }
}

// --- AI INTERROGATOR (RAG + V7 GROUNDING) ---
function initAIInterrogator() {
    const input = document.getElementById('aiInput');
    const keyInput = document.getElementById('apiKeyInput');
    const btn = document.getElementById('aiBtn');
    const display = document.getElementById('aiMessages');

    if (!btn) return;

    btn.onclick = async () => {
        const query = input.value.trim();
        const apiKey = keyInput.value.trim();
        if (!query) return;

        appendMsg('user', query);
        input.value = '';

        const typingId = appendMsg('bot', 'Processing forensic signal...', true);

        try {
            if (apiKey) {
                // RAG REQUEST TO OPENROUTER
                const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                    method: "POST",
                    headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json" },
                    body: JSON.stringify({
                        "model": "google/gemini-2.0-flash-001",
                        "messages": [
                            { "role": "system", "content": `You are ORBITAL, a forensic strategist for GFC Fans. Use this context: ${GFC_CONTEXT}. Focus on the PKR 250M Metals Leak. Be professional, quantitative, and blunt about efficiency gaps.` },
                            { "role": "user", "content": query }
                        ]
                    })
                });
                const data = await response.json();
                updateMsg(typingId, data.choices[0].message.content);
            } else {
                // V7 DETERMINISTIC FORENSIC FALLBACK
                setTimeout(() => {
                    updateMsg(typingId, getForensicFallback(query.toLowerCase()));
                }, 800);
            }
        } catch (e) {
            updateMsg(typingId, "Connection Error. Reverting to Offline Forensics: The PKR 250M Metals Leak is caused by a 13.8% Distributor Tax.");
        }
    };

    function appendMsg(role, text, isTyping = false) {
        const div = document.createElement('div');
        div.className = `ai-msg ${role}`;
        div.innerHTML = `<strong>[${role.toUpperCase()}]:</strong> ${text}`;
        display.appendChild(div);
        display.scrollTop = display.scrollHeight;
        return div;
    }

    function updateMsg(el, text) {
        el.innerHTML = `<strong>[BOT]:</strong> ${text}`;
        display.scrollTop = display.scrollHeight;
    }

    function getForensicFallback(q) {
        if (q.includes('leak') || q.includes('metal')) return "The PKR 250.8M leak is forensic. It represents the 13.8% \"Distributor Tax\" paid on 380T of Copper and 1250T of Electrical Steel annually to local intermediaries in Gujrat.";
        if (q.includes('trap')) return "The 'Sourcing Trap' is the reliance on un-hedged local scrap billeting. By moving to Direct China Alliances, you hedge price shocks and unlock 15% margin expansion.";
        if (q.includes('uk') || q.includes('dcts')) return "The UK corridor represents PKR 42 Billion in capacity yield. GFC has the certs; the roadblock is the 12% commission paid to intermediary agents vs a direct Manchester hub.";
        if (q.includes('china')) return "Direct Tier-1 China Alliances refer to Baosteel/Wisco proxies. This allows GFC to fix-price hedge for 12 months, bypassing Gujrat middlemen weekly shocks.";
        return "Query mapped to forensic metadata. Focus on the PKR 250M Metals Leak or the China-Direct Steel Strategy.";
    }
}

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.asset-card, .simulator-box, .radar-card').forEach(el => observer.observe(el));
}
