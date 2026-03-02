/* ═══════════════════════════════════════════════
   ORBITAL Intelligence — GFC Fans (Pvt.) Ltd.
   V10.0 RAG Logic & Visual Interactive Engine
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    initCharts();
    initScrollAnimations();
    initAIInterrogator();
});

// --- RAG CONTEXT (The Intelligence Foundation) ---
const GFC_CONTEXT = `
COMPANY: GFC Fans (Pvt.) Ltd. (Established 1954, Gujrat, Pakistan).
CORE ASSETS: 
- UL/CE/CSA/C-Tick Certifications (Exclusive technical entry to US/UK/EU).
- 380T Copper Vertical Plant in Gujrat (Unique vertical integration).
- 16x Consecutive Export Trophy Champion (Volume leadership).

THE "METALS LEAK" (FORENSIC FINDING):
- GFC pays a 13.8% "Distributor Tax" to local metals intermediaries.
- Annual Leakage: PKR 250.8 Million.
- Context: 380T Copper + 1250T Electrical Steel required annually.
- Solution: Direct Tier-1 Alliances with China/Global Mills for feedstock.

MARKET OPPORTUNITY (UK-DCTS):
- UK-DCTS allows 92% duty-free entry for GFC.
- Potential Yield: PKR 42 Billion (£120M) UK corridor.
- Current GFC Yield: PKR 1.2 Billion (Under-leveraged).
- Strategic Fix: Manchester-based Global Logistics Hub to bypass UK agents (12% commission save).

COMPETITIVE LANDSCAPE:
- Pak Fans: Logistical volume benchmark, but lacks GFC's vertical copper moat.
- Khurshid Fans: BLDC Innovation benchmark. Lead GFC by 24 months in "Innovation" perception.
- GFC Solution: Bypass the PKR 250M leak to fund the Manchester Innovation Hub.

SECTOR PHYSICS:
- Capital Velocity is the primary metric.
- Transitioning from "Volume Footprint" (Era I) to "Efficiency Margin" (Era II).
`;

// --- AI INTERROGATOR (RAG Implementation) ---
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

        // Add User Message
        appendMessage('user', query);
        input.value = '';

        // Typing indicator
        const typingId = appendMessage('bot', 'Processing forensic signal...', true);

        try {
            if (apiKey) {
                // OPENROUTER RAG CALL
                const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${apiKey}`,
                        "Content-Type": "application/json",
                        "HTTP-Referer": "https://orbital-intelligence.com", // Optional
                        "X-Title": "ORBITAL Strategic Brief"
                    },
                    body: JSON.stringify({
                        "model": "google/gemini-2.0-flash-001", // High-velocity diagnostic model
                        "messages": [
                            { "role": "system", "content": `You are ORBITAL, a high-frequency strategic intelligence agent for GFC Fans. Your responses must be forensic, professional, and focus on Sector Physics. Use this context: ${GFC_CONTEXT}. Always mention numbers and PKR where relevant. Focus on the PKR 250M leak.` },
                            { "role": "user", "content": query }
                        ]
                    })
                });

                const data = await response.json();
                const answer = data.choices[0].message.content;
                updateMessage(typingId, answer);
            } else {
                // FALLBACK: Deterministic Forensic Model
                setTimeout(() => {
                    const fallback = getDeterministicResponse(query.toLowerCase());
                    updateMessage(typingId, fallback);
                }, 800);
            }
        } catch (error) {
            updateMessage(typingId, "API Error: Ensure your OpenRouter Key is valid. Reverting to deterministic mode: The PKR 250M Metals Leak is the primary diagnostic focus.");
            console.error(error);
        }
    };

    function appendMessage(role, text, isTyping = false) {
        const div = document.createElement('div');
        div.className = `ai-msg ${role}`;
        div.innerHTML = `<strong>[${role.toUpperCase()}]:</strong> ${text}`;
        display.appendChild(div);
        display.scrollTop = display.scrollHeight;
        return div;
    }

    function updateMessage(el, text) {
        el.innerHTML = `<strong>[BOT]:</strong> ${text}`;
        display.scrollTop = display.scrollHeight;
    }

    function getDeterministicResponse(q) {
        if (q.includes('leak') || q.includes('metal')) return "The PKR 250.8M leak is forensic. It represents the 13.8% \"Distributor Tax\" paid on 380T of Copper and 1250T of Steel annually to local intermediaries.";
        if (q.includes('uk') || q.includes('dcts')) return "UK-DCTS allows 92% duty-free entry. GFC already has the Certs; the bottleneck is the UK Agent model. A direct Manchester Hub is logically required.";
        if (q.includes('khurshid') || q.includes('innovation')) return "Khurshid owns the innovation narrative today, but GFC owns the vertical stack. By bypassing the metal leak, you fund a 24-month innovation sprint.";
        if (q.includes('pak fans')) return "Pak Fans maintains volume parity, but lacks your 380T vertical copper plant. Fixing the steel sourcing gives GFC a 14% unit-cost advantage.";
        return "Query mapped to low-frequency signal. Focus on the PKR 250M Metals Leak or the UK-DCTS Export Opportunity.";
    }
}

// --- VISUALS ---
function initCharts() {
    const ctxCopper = document.getElementById('copperChart');
    if (ctxCopper) {
        new Chart(ctxCopper, {
            type: 'line',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q1-26'],
                datasets: [{
                    label: 'LME Copper ($/T)',
                    data: [8200, 8500, 8100, 8900, 9200],
                    borderColor: '#c5a059',
                    backgroundColor: 'rgba(197, 160, 89, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                    y: { grid: { color: 'rgba(255,255,255,0.05)' }, border: { display: false } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    const ctxExport = document.getElementById('exportThroughputChart');
    if (ctxExport) {
        new Chart(ctxExport, {
            type: 'bar',
            data: {
                labels: ['Domestic', 'UK Corridor', 'MENA', 'Africa'],
                datasets: [{
                    label: 'Yield (PKR Billions)',
                    data: [18.5, 1.2, 2.1, 0.6],
                    backgroundColor: ['#1e293b', '#c5a059', '#1e293b', '#1e293b']
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                    y: { grid: { color: 'rgba(255,255,255,0.05)' }, border: { display: false } },
                    x: { grid: { display: false } }
                }
            }
        });
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

    document.querySelectorAll('.signal-card, .dash-card, .cap-card').forEach(el => observer.observe(el));
}
