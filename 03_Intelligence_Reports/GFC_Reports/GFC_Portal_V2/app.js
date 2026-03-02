/* GFC STRATEGIC INTELLIGENCE PORTAL V2.0 - CORE LOGIC */

document.addEventListener('DOMContentLoaded', () => {
    initPhysicsChart();
    initRadarChart();
    initInterrogator();
    initSliders();
});

// 1. METAL PHYSICS STRESS ENGINE
let physicsChart;
function initPhysicsChart() {
    const ctx = document.getElementById('physicsChart').getContext('2d');
    physicsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Current', '+10%', '+20%', '+30%', '+40%', '+50%'],
            datasets: [{
                label: 'Gross Margin Impact (pp)',
                data: [-2.1, -4.5, -7.8, -11.2, -14.2, -18.5],
                borderColor: '#ff4444',
                backgroundColor: 'rgba(255, 68, 68, 0.1)',
                fill: true,
                tension: 0.4,
                borderWidth: 3,
                pointRadius: 4,
                pointBackgroundColor: '#ff4444'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#64748b' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#64748b' }
                }
            }
        }
    });
}

function initSliders() {
    const steelRange = document.getElementById('steelRange');
    const aluRange = document.getElementById('aluRange');
    const steelVal = document.getElementById('steelPriceVal');
    const aluVal = document.getElementById('aluPriceVal');
    const impactVal = document.getElementById('marginImpactVal');

    const updateImpact = () => {
        const sPrice = parseInt(steelRange.value);
        const aPrice = parseInt(aluRange.value);
        
        steelVal.innerText = `PKR ${sPrice}K`;
        aluVal.innerText = `$${aPrice}`;
        
        // Linear approximation of physics impact
        const baseImpact = -2.1;
        const sDelta = (sPrice - 260) * 0.12;
        const aDelta = (aPrice - 3000) * 0.004;
        const finalImpact = (baseImpact - sDelta - aDelta).toFixed(1);
        
        impactVal.innerText = `${finalImpact}pp`;
        
        // Update Chart Data (Simulated shift)
        physicsChart.data.datasets[0].data = physicsChart.data.datasets[0].data.map(v => v - (sDelta * 0.1));
        physicsChart.update();
    };

    steelRange.addEventListener('input', updateImpact);
    aluRange.addEventListener('input', updateImpact);
}

// 2. COMPETITIVE RADAR
function initRadarChart() {
    const ctx = document.getElementById('radarChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Heritage', 'R&D/Innovation', 'Export Growth', 'Vertical Integration', 'Retail Footprint', 'Energy Efficiency'],
            datasets: [{
                label: 'GFC Fans',
                data: [95, 65, 85, 90, 70, 75],
                fill: true,
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                borderColor: '#2563eb',
                pointBackgroundColor: '#2563eb',
                pointBorderColor: '#fff'
            }, {
                label: 'Khurshid Fans',
                data: [60, 95, 60, 40, 50, 92],
                fill: true,
                backgroundColor: 'rgba(0, 255, 136, 0.1)',
                borderColor: '#00ff88',
                pointBackgroundColor: '#00ff88',
                pointBorderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
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

// 3. THE INTERROGATOR (NB SYSTEM)
const responses = {
    'leak': 'The PKR 250M leak is forensic, not narrative. It is calculated by multiplying the 380T copper usage by the PKR 0.66M/ton price delta currently trapped in the distributor model.',
    'khrushid': 'Khurshid Fans has a current 9.2% cost advantage in exports due to their direct-sourcing ratio (45%). GFC’s heritage is a scale advantage, but their innovation ratio is a current liability.',
    'bldc': 'GFC pioneered modern engineering, but BLDC is an R&D race. Without direct sourcing, your BLDC margins will be 4-6pp lower than peers who own their import chain.',
    'import': 'Direct import requires 650T/year to hit mathematical breakeven. GFC is current at ~800T. To remain in the distributor model is to voluntarily pay an 13% "Middleman Tax".',
    'metal': 'Electrical steel sheets are 70-80% of your metal P&L. GFC’s own copper plant is a masterstroke, but the lack of direct steel sourcing is the primary open wound.'
};

function initInterrogator() {
    const display = document.getElementById('chatDisplay');
    const input = document.getElementById('chatInput');
    const btn = document.getElementById('sendBtn');

    const addMsg = (role, text) => {
        const p = document.createElement('p');
        p.style.marginTop = '15px';
        p.className = (role === 'USER') ? 'text-accent-gold' : 'text-accent-blue';
        p.innerText = `[${role}]: ${text}`;
        display.appendChild(p);
        display.scrollTop = display.scrollHeight;
    };

    const handleQuery = () => {
        const query = input.value.toLowerCase();
        if(!query) return;

        addMsg('USER', input.value);
        input.value = '';

        setTimeout(() => {
            let found = false;
            for(let key in responses) {
                if(query.includes(key)) {
                    addMsg('NB', responses[key]);
                    found = true;
                    break;
                }
            }
            if(!found) addMsg('NB', 'Query mapped to low-frequency signal. In Phase 1, we ingest your internal ledger to calibrate this specific diagnostic. For now, focus on the PKR 250M Metals Leak.');
        }, 600);
    };

    btn.addEventListener('click', handleQuery);
    input.addEventListener('keypress', (e) => { if(e.key === 'Enter') handleQuery(); });
}
