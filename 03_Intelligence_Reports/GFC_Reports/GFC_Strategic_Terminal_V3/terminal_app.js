/* GFC STRATEGIC TERMINAL V3.0 - INTERACTIVE LOGIC */

document.addEventListener('DOMContentLoaded', () => {
    initLeakChart();
    initRadarChart();
    initSliders();
    initInterrogator();
});

// 1. FORENSIC LEAK CHART
let leakChart;
function initLeakChart() {
    const ctx = document.getElementById('leakChart').getContext('2d');
    leakChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Distributor Cost', 'Direct Landed Cost', 'Middleman Premium', 'GFC Potential Savings'],
            datasets: [{
                label: 'PKR Millions',
                data: [5.45, 4.79, 0.66, 250.8],
                backgroundColor: [
                    'rgba(255, 255, 255, 0.1)',
                    'rgba(0, 255, 136, 0.3)',
                    'rgba(255, 75, 43, 0.3)',
                    'rgba(197, 160, 89, 0.4)'
                ],
                borderColor: ['#fff', '#00ff88', '#ff4b2b', '#c5a059'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#64748b' } },
                x: { grid: { display: false }, ticks: { color: '#64748b' } }
            }
        }
    });
}

// 2. COMPETITIVE RADAR
function initRadarChart() {
    const ctx = document.getElementById('radarChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Heritage', 'R&D Velocity', 'Market Trust', 'Export Certs', 'Vertical Integration', 'Urban Retail'],
            datasets: [{
                label: 'GFC Fans',
                data: [98, 65, 95, 92, 90, 68],
                backgroundColor: 'rgba(197, 160, 89, 0.2)',
                borderColor: '#c5a059',
                pointBackgroundColor: '#c5a059'
            }, {
                label: 'Khurshid Fans',
                data: [62, 94, 70, 60, 45, 52],
                backgroundColor: 'rgba(0, 255, 136, 0.1)',
                borderColor: '#00ff88',
                pointBackgroundColor: '#00ff88'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: { line: { borderWidth: 3 } },
            scales: {
                r: {
                    angleLines: { color: 'rgba(255,255,255,0.1)' },
                    grid: { color: 'rgba(255,255,255,0.1)' },
                    pointLabels: { color: '#94a3b8', font: { size: 10 } },
                    ticks: { display: false }
                }
            }
        }
    });
}

// 3. INTERACTIVE SLIDERS
function initSliders() {
    const slider = document.getElementById('steelSlider');
    const displayVal = document.getElementById('steelVal');
    const impactVal = document.getElementById('marginImpact');

    slider.addEventListener('input', () => {
        const val = parseInt(slider.value);
        displayVal.innerText = `PKR ${(val / 1000).toFixed(0)}K`;

        // Physics logic: Every 10k increase adds ~0.5% margin hit
        const baseline = 260000;
        const delta = (val - baseline) / 10000;
        const finalImpact = (2.18 + (delta * 0.48)).toFixed(2);

        impactVal.innerText = `-${finalImpact}%`;
        impactVal.className = finalImpact > 4 ? 'highlight-red animate-pulse' : 'highlight-red';
    });
}

// 4. THE INTERROGATOR (NB SYSTEM)
const responseEngine = {
    'leak': 'The PKR 250M leak is not a hypothetical; it is a structural variance. 380 Tons of Copper sourced via middlemen (PKR 5.45M/ton) vs Landed Direct (PKR 4.79M/ton) creates a PKR 0.66M/ton delta. Total annual leak: PKR 250.8 Million.',
    'bata': 'Bata closed 43 outlets in 2024. These are prime anchors in Dolmen (Khi) and Emporium (Lhr). If GFC takes these spots, we convert urban footfall into brand dominance while competitors are stuck in relationship-heavy local models.',
    'khurshid': 'Khurshid Fans owns the R&D narrative with BLDC, but they lack the 60-year pedigree GFC holds. Our task is to use GFC’s scaling supremacy to out-manufacture their innovation before they achieve mass-market trust.',
    'direct': 'Direct Sourcing is mathematically mandatory at >650 Tons/Year. GFC is currently at ~800 Combined Tons. Each day you stay in the distributor model, you are paying a PKR 680,000 "Middleman Tax".',
    'steel': 'Electrical Steel is 70% of your metal P&L. GFC has zero direct hedging for this. If LME Steel spikes 10%, your gross margins shrink by 1.8 points. We need a direct SRO-1151 import quota strategy immediately.',
    'verify': 'All signals are cross-referenced with PSX filings (Bata/Service), SBP industry reports, and trade manifests. This is not opinion; it is forensic probability modeling.'
};

function initInterrogator() {
    const input = document.getElementById('chatInput');
    const window = document.getElementById('chatWindow');
    const btn = document.getElementById('chatBtn');

    const addMessage = (role, text) => {
        const p = document.createElement('p');
        p.style.marginTop = '15px';
        p.className = (role === 'USER') ? 'highlight-gold' : 'highlight-blue';
        p.innerText = `[${role}]: ${text}`;
        window.appendChild(p);
        window.scrollTop = window.scrollHeight;
    };

    const processQuery = () => {
        const q = input.value.toLowerCase();
        if (!q) return;

        addMessage('USER', input.value);
        input.value = '';

        setTimeout(() => {
            let answer = "Query mapped to secondary signal layer. In Phase 1 of the Advisory, we will ingest internal ledgers to provide audit-grade precision. For now, focus on the PKR 250M Metals Leak.";

            for (let key in responseEngine) {
                if (q.includes(key)) {
                    answer = responseEngine[key];
                    break;
                }
            }
            addMessage('NB', answer);
        }, 800);
    };

    btn.addEventListener('click', processQuery);
    input.addEventListener('keypress', (e) => { if (e.key === 'Enter') processQuery(); });
}
