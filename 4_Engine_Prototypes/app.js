// ═══════════════════════════════════════════════
// ORBITAL Intelligence — Imperial Footwear
// Visualizations + OpenAI GPT-4o Chatbot
// ═══════════════════════════════════════════════

const OPENAI_KEY = 'REPLACE_WITH_YOUR_KEY';

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
      labels: ['Export Reach', 'Brand Heritage', 'Retail Scale', 'Digital/E-comm', 'Credit Rating', 'Analytics/ERP', 'Supply Chain QC', 'Franchise Model'],
      datasets: [
        {
          label: 'Unze London',
          data: [2, 9, 3, 5, 1, 2, 2, 8],
          backgroundColor: 'rgba(99,102,241,0.15)',
          borderColor: '#6366f1',
          borderWidth: 2,
          pointBackgroundColor: '#6366f1',
          pointRadius: 4
        },
        {
          label: 'SGFL',
          data: [10, 3, 1, 3, 9, 8, 9, 1],
          backgroundColor: 'rgba(16,185,129,0.1)',
          borderColor: '#10b981',
          borderWidth: 2,
          pointBackgroundColor: '#10b981',
          pointRadius: 3
        },
        {
          label: 'Service Industries',
          data: [7, 6, 9, 6, 7, 8, 7, 1],
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
      labels: ['Servis', 'Bata PK', 'Unze London', 'Stylo'],
      datasets: [{
        data: [125, 18.3, 20, 5],
        backgroundColor: ['rgba(16,185,129,0.6)', 'rgba(255,255,255,0.15)', 'rgba(99,102,241,0.7)', 'rgba(255,255,255,0.1)'],
        borderColor: ['#10b981', 'rgba(255,255,255,0.3)', '#6366f1', 'rgba(255,255,255,0.2)'],
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

// ── 3. IMPORT SOURCE DONUT ──
function initImportSourceChart() {
  const ctx = document.getElementById('importSourceChart');
  if (!ctx) return;
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['China', 'India', 'Other'],
      datasets: [{ data: [88, 8, 4], backgroundColor: ['#ef4444', '#f59e0b', 'rgba(255,255,255,0.1)'], borderWidth: 0 }]
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
      labels: ['Raw Materials', 'Labor', 'Overhead', 'Other'],
      datasets: [{ data: [53.8, 20, 16.2, 10], backgroundColor: ['#ef4444', '#6366f1', '#f59e0b', 'rgba(255,255,255,0.08)'], borderWidth: 0 }]
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

// ── 5. FX LINE CHART ──
function initFxChart() {
  const ctx = document.getElementById('fxChart');
  if (!ctx) return;
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan 25', 'Mar 25', 'Jun 25', 'Sep 25', 'Dec 25', 'Mar 26', 'Jun 26', 'Sep 26', 'Dec 26'],
      datasets: [
        {
          label: 'GBP/PKR (Actual)',
          data: [344, 350, 358, 365, 376, null, null, null, null],
          borderColor: '#6366f1',
          backgroundColor: 'rgba(99,102,241,0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          pointBackgroundColor: '#6366f1',
          borderWidth: 2.5
        },
        {
          label: 'GBP/PKR (Forecast)',
          data: [null, null, null, null, 376, 385, 395, 405, 415],
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
        tooltip: { callbacks: { label: (c) => `${c.dataset.label}: PKR ${c.raw}` } }
      },
      scales: {
        y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { callback: v => `PKR ${v}` } },
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
          // 1.7/5 = 34%, arc length 251, so offset = 251 * (1 - 0.34) = ~165
          setTimeout(() => { fill.style.strokeDashoffset = '208'; }, 300);
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
// CHATBOT — OpenAI GPT-4o
// ═══════════════════════════════════════════════

const SYSTEM_PROMPT = `You are ORBITAL, an AI institutional advisor for Imperial Footwear (Pvt.) Ltd. / Unze London. You provide strategic diagnostic analysis, not simple data scraping. Your tone is high-status, professional (McKinsey/BCG style), and focuses on "Institutional Friction" and "Capital Velocity."

STRATEGIC PILLAR DATA:
- Parent: Imperial Footwear (Pvt.) Ltd. | Brand: Unze London (est. 1989 UK).
- Scale: 25+ Flagship stores in Tier-1 Malls. Vertically integrated manufacturing base in Lahore.

INSTITUTIONAL DIAGNOSTICS:
1. Brand Equity Latency: UK Trustpilot (1.7/5) identifies a significant valuation leak. Legacy perceptions in the UK create a structural drag on the global "Bridge-Luxury" premiumization strategy.
2. Geographic Yield Optimization: Strategic under-indexing in Karachi (1 store for 25M pop) identifies a revenue vacuum. Capturing the Karachi-Punjab multiplier is the key path to Tier-1 dominance.
3. Sourcing Integrity: Dependency on intermediary traders vs. direct factory alliances creates a 15-20% margin leak. Aligning with the "Institutional Sourcing" model pioneered by SGFL is critical as material costs (composition leather) surge 264%.
4. E-commerce SKU Latency: Intent-to-Purchase digital leaks (conversion cap 1.5%) suggest PKR 150M in unlocked revenue through design-velocity alignment.
5. Capital Lockup: PKR 300M remains trapped in aged inventory. A 10% liquidity release targets PKR 150M for expansion capital.
6. ROI Frontier: Domestic expansion yield (18-22%) significantly exceeds UK retail benchmarks (8-12%).

Be direct, analytical, and frame findings as opportunities for efficiency and velocity.
IMPORTANT: State explicitly that all financial projections (PKR 300M lockup, PKR 1B upside, etc.) are "ORBITAL Modeled Estimates" derived from sector benchmarks (Bata, PBC, Service Industries) to trigger internal diagnostic verification.`;

let chatHistory = [{ role: 'system', content: SYSTEM_PROMPT }];

function toggleChat() {
  const panel = document.getElementById('chatPanel');
  const toggle = document.getElementById('chatToggle');
  panel.classList.toggle('open');
  toggle.style.display = panel.classList.contains('open') ? 'none' : 'flex';
}

// ── Shared Chat Logic ──

async function processChat(msg, source) {
  const isInline = source === 'inline';
  const inputId = isInline ? 'inlineChatInput' : 'chatInput';
  const btnId = isInline ? 'inlineSendBtn' : 'sendBtn';
  const containerId = isInline ? 'inlineChatMessages' : 'chatMessages';

  const input = document.getElementById(inputId);
  const btn = document.getElementById(btnId);
  const container = document.getElementById(containerId);

  // Clear input
  input.value = '';

  // Add to both containers for sync
  addMessage(msg, 'user', 'chatMessages');
  addMessage(msg, 'user', 'inlineChatMessages');

  btn.disabled = true;
  const floatingTyping = addTypingIndicator('chatMessages');
  const inlineTyping = addTypingIndicator('inlineChatMessages');

  chatHistory.push({ role: 'user', content: msg });

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENAI_KEY}` },
      body: JSON.stringify({ model: 'gpt-4o', messages: chatHistory, temperature: 0.7, max_tokens: 800, stream: true })
    });

    floatingTyping.remove();
    inlineTyping.remove();

    if (!response.ok) { const err = await response.json(); throw new Error(err.error?.message || 'API error'); }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let botMsg = '';

    // Create bot message elements in both
    const floatingBotEl = addMessage('', 'bot', 'chatMessages');
    const inlineBotEl = addMessage('', 'bot', 'inlineChatMessages');
    const floatingTextEl = floatingBotEl.querySelector('.msg-text');
    const inlineTextEl = inlineBotEl.querySelector('.msg-text');

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      const lines = chunk.split('\n').filter(l => l.startsWith('data: '));
      for (const line of lines) {
        const data = line.slice(6);
        if (data === '[DONE]') break;
        try {
          const parsed = JSON.parse(data);
          const delta = parsed.choices?.[0]?.delta?.content;
          if (delta) {
            botMsg += delta;
            const formatted = formatMd(botMsg);
            floatingTextEl.innerHTML = formatted;
            inlineTextEl.innerHTML = formatted;
            scrollChat('chatMessages');
            scrollChat('inlineChatMessages');
          }
        } catch (e) { }
      }
    }
    chatHistory.push({ role: 'assistant', content: botMsg });
  } catch (error) {
    if (floatingTyping.parentNode) floatingTyping.remove();
    if (inlineTyping.parentNode) inlineTyping.remove();
    addMessage(`Error: ${error.message}`, 'bot', 'chatMessages');
    addMessage(`Error: ${error.message}`, 'bot', 'inlineChatMessages');
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
  // Pill always sends through the inline context visually first
  processChat(msg, 'inline');
  // If floating is closed, maybe pulse it? 
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
