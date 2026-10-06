// ============================================================================
// 🪝🐾💎 Critter Claw & Gold Miner! (100% Zero-Text Calibrated Edition)
// Swinging Golden Claw Winch • 3 Star Plush Capsules • Gold Nuggets & Diamonds
// Explosive TNT Barrels • Scurrying Gem Runners • Magnet & Turbo Winch Boosts
// ============================================================================

const W = 820;
const H = 540;
const SURFACE_Y = 112;
const WINCH_X = 410;
const WINCH_Y = 82;
const MIN_ROPE = 36;
const MAX_ROPE = 465;

const CRITTERS = [
  {
    id: 'dogday',
    img: 'icons/dogday.jpg',
    power: '☀️',
    color: '#ff922b',
    skyTop: '#fef3c7',
    skyBot: '#fde68a',
    caveTop: '#78350f',
    caveBot: '#451a03',
    ledgeColor: '#92400e'
  },
  {
    id: 'hoppy',
    img: 'icons/hoppy.jpg',
    power: '⚡',
    color: '#22c55e',
    skyTop: '#dcfce7',
    skyBot: '#bbf7d0',
    caveTop: '#064e3b',
    caveBot: '#022c22',
    ledgeColor: '#047857'
  },
  {
    id: 'bobby',
    img: 'icons/bobby.jpg',
    power: '💖',
    color: '#f43f5e',
    skyTop: '#ffe4e6',
    skyBot: '#fbcfe8',
    caveTop: '#831843',
    caveBot: '#500724',
    ledgeColor: '#be185d'
  },
  {
    id: 'picky',
    img: 'icons/picky.jpg',
    power: '🍉',
    color: '#fb7185',
    skyTop: '#ffedd5',
    skyBot: '#fed7aa',
    caveTop: '#7c2d12',
    caveBot: '#431407',
    ledgeColor: '#c2410c'
  },
  {
    id: 'bubba',
    img: 'icons/bubba.jpg',
    power: '🌊',
    color: '#38bdf8',
    skyTop: '#e0f2fe',
    skyBot: '#bae6fd',
    caveTop: '#0c4a6e',
    caveBot: '#082f49',
    ledgeColor: '#0369a1'
  },
  {
    id: 'craftycorn',
    img: 'icons/craftycorn.jpg',
    power: '🌈',
    color: '#a855f7',
    skyTop: '#f3e8ff',
    skyBot: '#e9d5ff',
    caveTop: '#4c1d95',
    skyAccent: '#c084fc',
    caveBot: '#2e1065',
    ledgeColor: '#6d28d9'
  },
  {
    id: 'kickin',
    img: 'icons/kickin.jpg',
    power: '🌟',
    color: '#eab308',
    skyTop: '#fef9c3',
    skyBot: '#fde047',
    caveTop: '#713f12',
    caveBot: '#422006',
    ledgeColor: '#a16207'
  },
  {
    id: 'catnap',
    img: 'icons/catnap.jpg',
    power: '🌙',
    color: '#8b5cf6',
    skyTop: '#ede9fe',
    skyBot: '#ddd6fe',
    caveTop: '#312e81',
    caveBot: '#1e1b4b',
    ledgeColor: '#4338ca'
  }
];

// ============================================================================
// Calibrated 8-Stage Underground Cave Layouts
// Item types:
// - 'plush':   Star Critter Capsule (`🎁⭐`, r: 31) -> Main Star Target!
// - 'diamond': Rainbow Diamond (`💎`, r: 22) -> High-value fast gem
// - 'gold':    Big Gold Nugget / Crown (`👑` / `🪙`, r: 27) -> Medium-heavy treasure
// - 'bag':     Lucky Mystery Bag (`🎒`, r: 25) -> Grants free Magnet or Turbo boost!
// - 'rock':    Cave Boulder (`🪨`, r: 26) -> Heavy blocker (can be blasted with 🧨!)
// - 'tnt':     TNT Barrel (`🧨`, r: 24) -> Explodes nearby rocks on contact!
// - 'runner':  Scurrying Gem Mole (`🐹💎`, r: 23, vx) -> Moving bonus target!
// ============================================================================
function buildStageItems(stageIdx) {
  const layouts = [
    // Stage 0: DogDay Sunny Gold Mine
    [
      { x: 185, y: 395, type: 'plush', critterIdx: 0, r: 31 },
      { x: 410, y: 455, type: 'plush', critterIdx: 1, r: 31 },
      { x: 645, y: 390, type: 'plush', critterIdx: 2, r: 31 },
      { x: 285, y: 275, type: 'gold', r: 27 },
      { x: 535, y: 275, type: 'diamond', r: 22 },
      { x: 410, y: 310, type: 'tnt', r: 24 },
      { x: 355, y: 335, type: 'rock', r: 25 },
      { x: 465, y: 335, type: 'rock', r: 25 },
      { x: 155, y: 255, type: 'bag', r: 25 },
      { x: 660, y: 255, type: 'gold', r: 27 }
    ],
    // Stage 1: Hoppy Emerald Crystal Cavern
    [
      { x: 175, y: 425, type: 'plush', critterIdx: 1, r: 31 },
      { x: 410, y: 460, type: 'plush', critterIdx: 3, r: 31 },
      { x: 645, y: 425, type: 'plush', critterIdx: 4, r: 31 },
      { x: 240, y: 295, type: 'tnt', r: 24 },
      { x: 190, y: 325, type: 'rock', r: 25 },
      { x: 580, y: 295, type: 'tnt', r: 24 },
      { x: 630, y: 325, type: 'rock', r: 25 },
      { x: 335, y: 365, type: 'diamond', r: 22 },
      { x: 485, y: 365, type: 'gold', r: 28 },
      { x: 410, y: 240, type: 'runner', r: 23, vx: 1.8, minX: 290, maxX: 530 }
    ],
    // Stage 2: Bobby Candy Quartz Mine
    [
      { x: 165, y: 435, type: 'plush', critterIdx: 2, r: 31 },
      { x: 410, y: 465, type: 'plush', critterIdx: 5, r: 31 },
      { x: 655, y: 435, type: 'plush', critterIdx: 6, r: 31 },
      { x: 310, y: 310, type: 'gold', r: 27 },
      { x: 510, y: 310, type: 'gold', r: 27 },
      { x: 410, y: 345, type: 'tnt', r: 24 },
      { x: 360, y: 375, type: 'rock', r: 25 },
      { x: 460, y: 375, type: 'rock', r: 25 },
      { x: 220, y: 250, type: 'diamond', r: 22 },
      { x: 600, y: 250, type: 'bag', r: 25 },
      { x: 410, y: 225, type: 'runner', r: 23, vx: 2.1, minX: 260, maxX: 560 }
    ],
    // Stage 3: PickyPiggy Ruby Berry Cave
    [
      { x: 195, y: 445, type: 'plush', critterIdx: 3, r: 31 },
      { x: 410, y: 460, type: 'plush', critterIdx: 7, r: 31 },
      { x: 625, y: 445, type: 'plush', critterIdx: 0, r: 31 },
      { x: 250, y: 335, type: 'tnt', r: 24 },
      { x: 200, y: 355, type: 'rock', r: 26 },
      { x: 570, y: 335, type: 'tnt', r: 24 },
      { x: 620, y: 355, type: 'rock', r: 26 },
      { x: 410, y: 345, type: 'rock', r: 25 },
      { x: 330, y: 270, type: 'diamond', r: 22 },
      { x: 490, y: 270, type: 'diamond', r: 22 },
      { x: 145, y: 255, type: 'gold', r: 27 },
      { x: 675, y: 255, type: 'bag', r: 25 }
    ],
    // Stage 4: Bubba Deep Ocean Treasure Trench
    [
      { x: 170, y: 440, type: 'plush', critterIdx: 4, r: 31 },
      { x: 410, y: 465, type: 'plush', critterIdx: 2, r: 31 },
      { x: 650, y: 440, type: 'plush', critterIdx: 5, r: 31 },
      { x: 300, y: 340, type: 'tnt', r: 24 },
      { x: 235, y: 360, type: 'rock', r: 26 },
      { x: 520, y: 340, type: 'tnt', r: 24 },
      { x: 585, y: 360, type: 'rock', r: 26 },
      { x: 410, y: 365, type: 'gold', r: 28 },
      { x: 240, y: 235, type: 'runner', r: 23, vx: 2.2, minX: 150, maxX: 370 },
      { x: 580, y: 235, type: 'runner', r: 23, vx: -2.2, minX: 450, maxX: 670 }
    ],
    // Stage 5: CraftyCorn Rainbow Geode Grotto
    [
      { x: 180, y: 445, type: 'plush', critterIdx: 5, r: 31 },
      { x: 410, y: 465, type: 'plush', critterIdx: 6, r: 31 },
      { x: 640, y: 445, type: 'plush', critterIdx: 7, r: 31 },
      { x: 295, y: 330, type: 'rock', r: 25 },
      { x: 350, y: 315, type: 'tnt', r: 24 },
      { x: 470, y: 315, type: 'tnt', r: 24 },
      { x: 525, y: 330, type: 'rock', r: 25 },
      { x: 410, y: 365, type: 'diamond', r: 22 },
      { x: 165, y: 295, type: 'gold', r: 27 },
      { x: 655, y: 295, type: 'bag', r: 25 },
      { x: 410, y: 225, type: 'runner', r: 23, vx: 2.4, minX: 250, maxX: 570 }
    ],
    // Stage 6: KickinChicken Starlight Vault
    [
      { x: 175, y: 450, type: 'plush', critterIdx: 6, r: 31 },
      { x: 410, y: 465, type: 'plush', critterIdx: 0, r: 31 },
      { x: 645, y: 450, type: 'plush', critterIdx: 1, r: 31 },
      { x: 235, y: 345, type: 'tnt', r: 24 },
      { x: 185, y: 365, type: 'rock', r: 26 },
      { x: 410, y: 350, type: 'tnt', r: 24 },
      { x: 360, y: 375, type: 'rock', r: 25 },
      { x: 460, y: 375, type: 'rock', r: 25 },
      { x: 585, y: 345, type: 'tnt', r: 24 },
      { x: 635, y: 365, type: 'rock', r: 26 },
      { x: 295, y: 255, type: 'diamond', r: 22 },
      { x: 525, y: 255, type: 'diamond', r: 22 }
    ],
    // Stage 7: CatNap Moonlight Amethyst Finale Mine
    [
      { x: 175, y: 450, type: 'plush', critterIdx: 7, r: 31 },
      { x: 410, y: 468, type: 'plush', critterIdx: 5, r: 31 },
      { x: 645, y: 450, type: 'plush', critterIdx: 0, r: 31 },
      { x: 245, y: 340, type: 'tnt', r: 24 },
      { x: 190, y: 365, type: 'rock', r: 26 },
      { x: 410, y: 345, type: 'tnt', r: 24 },
      { x: 355, y: 370, type: 'rock', r: 25 },
      { x: 465, y: 370, type: 'rock', r: 25 },
      { x: 575, y: 340, type: 'tnt', r: 24 },
      { x: 630, y: 365, type: 'rock', r: 26 },
      { x: 310, y: 235, type: 'runner', r: 23, vx: 2.5, minX: 160, maxX: 400 },
      { x: 510, y: 235, type: 'runner', r: 23, vx: -2.5, minX: 420, maxX: 660 }
    ]
  ];

  return layouts[stageIdx % layouts.length].map((item, idx) => ({
    id: idx + 1,
    x: item.x,
    y: item.y,
    r: item.r,
    type: item.type,
    critterIdx: item.critterIdx ?? (idx % CRITTERS.length),
    vx: item.vx || 0,
    minX: item.minX || 120,
    maxX: item.maxX || 700,
    grabbed: false,
    collected: false
  }));
}

// ============================================================================
// WebAudio Cute Sound Synthesizer
// ============================================================================
class SoundBox {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type = 'sine', duration = 0.14, gainVal = 0.14, slideFreq = null) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      if (slideFreq) {
        osc.frequency.exponentialRampToValueAtTime(slideFreq, now + duration);
      }
      gain.gain.setValueAtTime(gainVal, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + duration);
    } catch (_) {}
  }

  playShoot() {
    this.playTone(340, 'sine', 0.16, 0.14, 190);
  }

  playGrabGood() {
    this.playTone(520, 'triangle', 0.15, 0.17, 880);
  }

  playGrabRock() {
    this.playTone(160, 'square', 0.14, 0.14, 110);
  }

  playBoom() {
    this.playTone(145, 'sawtooth', 0.28, 0.22, 46);
  }

  playStar() {
    this.playTone(587, 'sine', 0.12, 0.16, 880);
    setTimeout(() => this.playTone(880, 'sine', 0.18, 0.16, 1174), 70);
  }

  playWin() {
    [523, 659, 784, 1046].forEach((n, i) => {
      setTimeout(() => this.playTone(n, 'triangle', 0.22, 0.16), i * 110);
    });
  }
}

const sfx = new SoundBox();

// ============================================================================
// Game State & Image Preloader
// ============================================================================
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const critterImages = {};
CRITTERS.forEach((c) => {
  const img = new Image();
  img.src = c.img;
  critterImages[c.id] = img;
});

let currentLevel = 0;
let completedLevels = new Set();
let starsEarned = 0;
let treasuresCollected = 0;
let hasLaunchedThisLevel = false;
let levelWon = false;
let animTick = 0;

// Active Boost Toggles
let magnetOn = false;
let turboOn = false;

// Claw State Machine: `'swing' | 'extend' | 'retract'`
let claw = {
  state: 'swing',
  angle: Math.PI / 2,
  swingDir: 1,
  length: MIN_ROPE,
  carriedItem: null
};

let items = [];
let particles = [];
let shockwaves = [];

// ============================================================================
// DOM Elements & UI Builders
// ============================================================================
const levelNavBar = document.getElementById('levelNavBar');
const sideCritterImg = document.getElementById('sideCritterImg');
const critterPowerBadge = document.getElementById('critterPowerBadge');
const targetSlotsRow = document.getElementById('targetSlotsRow');
const floatingToast = document.getElementById('floatingToast');

const btnLaunchClaw = document.getElementById('btnLaunchClaw');
const btnMagnetMode = document.getElementById('btnMagnetMode');
const btnTurboReel = document.getElementById('btnTurboReel');
const btnBlastRocks = document.getElementById('btnBlastRocks');
const btnResetLevel = document.getElementById('btnResetLevel');
const btnSoundToggle = document.getElementById('btnSoundToggle');

const winModal = document.getElementById('winModal');
const winCritterImg = document.getElementById('winCritterImg');
const winPowerBadge = document.getElementById('winPowerBadge');
const btnWinReplay = document.getElementById('btnWinReplay');
const btnWinNext = document.getElementById('btnWinNext');

const finaleModal = document.getElementById('finaleModal');
const finaleCrittersGrid = document.getElementById('finaleCrittersGrid');
const btnFinaleClose = document.getElementById('btnFinaleClose');

function renderTopBar() {
  levelNavBar.innerHTML = '';
  CRITTERS.forEach((c, idx) => {
    const btn = document.createElement('button');
    btn.className = 'level-pill' +
      (idx === currentLevel ? ' active' : '') +
      (completedLevels.has(idx) ? ' completed' : '');
    btn.setAttribute('aria-label', c.id);

    const img = document.createElement('img');
    img.src = c.img;
    img.alt = '';
    btn.appendChild(img);

    const badge = document.createElement('span');
    badge.className = 'pill-stars';
    badge.textContent = completedLevels.has(idx) ? '⭐⭐⭐' : c.power;
    btn.appendChild(badge);

    btn.addEventListener('click', () => {
      sfx.playGrabGood();
      loadLevel(idx);
    });
    levelNavBar.appendChild(btn);
  });
}

function updateDockButtonsUI() {
  btnMagnetMode.classList.toggle('active', magnetOn);
  btnTurboReel.classList.toggle('active', turboOn);
}

function updateVisualHUD() {
  const critter = CRITTERS[currentLevel];
  sideCritterImg.src = critter.img;
  critterPowerBadge.textContent = critter.power;

  for (let i = 0; i < 3; i++) {
    const slot = document.getElementById(`starSlot${i}`);
    if (slot) {
      slot.classList.toggle('collected', i < starsEarned);
    }
  }

  targetSlotsRow.innerHTML = '';
  const plushItems = items.filter((it) => it.type === 'plush');
  plushItems.forEach((pl) => {
    const pill = document.createElement('div');
    pill.className = 'hud-target-pill' + (pl.collected ? ' popped' : '');
    pill.textContent = pl.collected ? '⭐' : '🎁';
    targetSlotsRow.appendChild(pill);
  });

  updateDockButtonsUI();
}

let toastTimer = null;
function showEmojiToast(emojis) {
  floatingToast.textContent = emojis;
  floatingToast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    floatingToast.classList.add('hidden');
  }, 1100);
}

// ============================================================================
// Level Initialization
// ============================================================================
function loadLevel(idx) {
  currentLevel = (idx + CRITTERS.length) % CRITTERS.length;
  winModal.classList.add('hidden');
  finaleModal.classList.add('hidden');

  starsEarned = 0;
  treasuresCollected = 0;
  hasLaunchedThisLevel = false;
  levelWon = false;

  claw.state = 'swing';
  claw.angle = Math.PI / 2;
  claw.swingDir = 1;
  claw.length = MIN_ROPE;
  claw.carriedItem = null;

  items = buildStageItems(currentLevel);
  particles = [];
  shockwaves = [];

  renderTopBar();
  updateVisualHUD();
}

// ============================================================================
// Claw Actions, TNT Explosions & Dynamite Helper
// ============================================================================
function launchClaw(optionalTargetPt = null) {
  if (levelWon || claw.state !== 'swing') return;
  hasLaunchedThisLevel = true;

  // If player tapped directly on a cave treasure and the claw is swinging reasonably near that angle,
  // gently nudge the angle 45% toward the tapped spot so aiming feels responsive!
  if (optionalTargetPt && optionalTargetPt.y > SURFACE_Y + 20) {
    const targetAngle = Math.atan2(optionalTargetPt.y - WINCH_Y, optionalTargetPt.x - WINCH_X);
    const clampedTarget = Math.max(Math.PI * 0.14, Math.min(Math.PI * 0.86, targetAngle));
    if (Math.abs(clampedTarget - claw.angle) < 0.42) {
      claw.angle = claw.angle * 0.55 + clampedTarget * 0.45;
    }
  }

  claw.state = 'extend';
  sfx.playShoot();
}

function detonateTNT(tntItem) {
  if (tntItem.collected) return;
  tntItem.collected = true;
  sfx.playBoom();
  showEmojiToast('🧨💥🪨');

  shockwaves.push({
    x: tntItem.x,
    y: tntItem.y,
    r: 18,
    maxR: 135,
    color: '#f97316',
    alpha: 1.0
  });
  spawnBurst(tntItem.x, tntItem.y, '💥', 12);

  // Blast nearby rocks (never destroys Star Plush Capsules or Diamonds!)
  const blastRadius = 130;
  items.forEach((other) => {
    if (other.collected || other === tntItem) return;
    if (Math.hypot(other.x - tntItem.x, other.y - tntItem.y) <= blastRadius) {
      if (other.type === 'rock') {
        other.collected = true;
        spawnBurst(other.x, other.y, '🪨', 6);
      } else if (other.type === 'tnt') {
        detonateTNT(other);
      }
    }
  });
}

function triggerDynamiteHelper() {
  if (levelWon) return;

  // 1. If currently reeling in a heavy rock on the claw, blow it up immediately!
  if (claw.carriedItem && claw.carriedItem.type === 'rock') {
    const rk = claw.carriedItem;
    rk.collected = true;
    claw.carriedItem = null;
    sfx.playBoom();
    spawnBurst(rk.x, rk.y, '💥', 10);
    showEmojiToast('🧨💥🪨');
    return;
  }

  // 2. Otherwise detonate any uncollected TNT barrel or blast 2 blocking rocks in the cave!
  const tnt = items.find((it) => !it.collected && it.type === 'tnt');
  if (tnt) {
    detonateTNT(tnt);
    return;
  }

  const rocks = items.filter((it) => !it.collected && it.type === 'rock').slice(0, 2);
  if (rocks.length > 0) {
    sfx.playBoom();
    showEmojiToast('🧨💥🪨');
    rocks.forEach((rk) => {
      rk.collected = true;
      spawnBurst(rk.x, rk.y, '💥', 9);
      shockwaves.push({
        x: rk.x,
        y: rk.y,
        r: 14,
        maxR: 85,
        color: '#ef4444',
        alpha: 0.9
      });
    });
  } else {
    showEmojiToast('✨💎✨');
  }
}

function onItemReeledIn(item) {
  item.collected = true;
  claw.carriedItem = null;

  if (item.type === 'plush') {
    starsEarned = Math.min(3, starsEarned + 1);
    treasuresCollected++;
    sfx.playStar();
    showEmojiToast('🎁⭐🥳');
    spawnBurst(WINCH_X, WINCH_Y, '⭐', 12);
  } else if (item.type === 'diamond' || item.type === 'runner') {
    treasuresCollected++;
    sfx.playStar();
    showEmojiToast('💎✨');
    spawnBurst(WINCH_X, WINCH_Y, '💎', 9);
  } else if (item.type === 'gold') {
    treasuresCollected++;
    sfx.playGrabGood();
    showEmojiToast('👑🪙✨');
    spawnBurst(WINCH_X, WINCH_Y, '🪙', 8);
  } else if (item.type === 'bag') {
    treasuresCollected++;
    magnetOn = true;
    turboOn = true;
    sfx.playStar();
    showEmojiToast('🎒🧲⚡');
    spawnBurst(WINCH_X, WINCH_Y, '🌈', 10);
  } else {
    sfx.playGrabRock();
  }

  updateVisualHUD();
  checkStageWin();
}

function checkStageWin() {
  if (levelWon) return;
  const remainingPlush = items.filter((it) => it.type === 'plush' && !it.collected).length;
  if (remainingPlush > 0 && starsEarned < 3) return;

  levelWon = true;
  starsEarned = 3;
  completedLevels.add(currentLevel);
  renderTopBar();
  updateVisualHUD();
  sfx.playWin();
  showEmojiToast('🎉⭐⭐⭐🎉');

  setTimeout(() => {
    if (completedLevels.size === CRITTERS.length) {
      showFinaleModal();
    } else {
      const critter = CRITTERS[currentLevel];
      winCritterImg.src = critter.img;
      winPowerBadge.textContent = critter.power;
      winModal.classList.remove('hidden');
    }
  }, 850);
}

function showFinaleModal() {
  finaleCrittersGrid.innerHTML = '';
  CRITTERS.forEach((c) => {
    const badge = document.createElement('div');
    badge.className = 'finale-critter-tile';
    const img = document.createElement('img');
    img.src = c.img;
    img.alt = '';
    const sp = document.createElement('span');
    sp.textContent = c.power;
    badge.appendChild(img);
    badge.appendChild(sp);
    finaleCrittersGrid.appendChild(badge);
  });
  finaleModal.classList.remove('hidden');
}

function spawnBurst(x, y, emoji, count = 8) {
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
    const speed = 2.0 + Math.random() * 4.6;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 1.5,
      emoji,
      size: 18 + Math.random() * 8,
      life: 1.0
    });
  }
}

// ============================================================================
// Physics Update Step
// ============================================================================
function updatePhysics() {
  animTick++;

  // Move scurrying gem runners back & forth
  items.forEach((it) => {
    if (it.collected || it.grabbed || it.type !== 'runner') return;
    it.x += it.vx;
    if (it.x < it.minX || it.x > it.maxX) {
      it.vx = -it.vx;
    }
  });

  // Update Claw Pendulum / Extension / Retraction
  if (claw.state === 'swing') {
    const swingSpeed = 0.023;
    claw.angle += claw.swingDir * swingSpeed;
    if (claw.angle > Math.PI * 0.86) {
      claw.angle = Math.PI * 0.86;
      claw.swingDir = -1;
    } else if (claw.angle < Math.PI * 0.14) {
      claw.angle = Math.PI * 0.14;
      claw.swingDir = 1;
    }
  } else if (claw.state === 'extend') {
    claw.length += 12.0;
    const tipX = WINCH_X + Math.cos(claw.angle) * claw.length;
    const tipY = WINCH_Y + Math.sin(claw.angle) * claw.length;

    // Optional Magnet pull on nearby treasures (`plush`, `diamond`, `gold`, `bag`)
    if (magnetOn) {
      items.forEach((it) => {
        if (it.collected || it.grabbed || it.type === 'rock' || it.type === 'tnt') return;
        const d = Math.hypot(tipX - it.x, tipY - it.y);
        if (d < it.r + 58) {
          it.x += (tipX - it.x) * 0.18;
          it.y += (tipY - it.y) * 0.18;
        }
      });
    }

    // Check collision with cave items
    for (const it of items) {
      if (it.collected) continue;
      const hitPad = (it.type === 'plush' || it.type === 'diamond') ? 8 : 3;
      if (Math.hypot(tipX - it.x, tipY - it.y) <= it.r + hitPad) {
        if (it.type === 'tnt') {
          detonateTNT(it);
          claw.state = 'retract';
          break;
        }
        it.grabbed = true;
        claw.carriedItem = it;
        claw.state = 'retract';
        if (it.type === 'rock') sfx.playGrabRock();
        else sfx.playGrabGood();
        break;
      }
    }

    // Check cave boundaries
    if (tipX < 28 || tipX > W - 28 || tipY > H - 24 || claw.length >= MAX_ROPE) {
      claw.state = 'retract';
    }
  } else if (claw.state === 'retract') {
    let reelSpeed = 18.0; // Fast empty return!
    if (claw.carriedItem) {
      const t = claw.carriedItem.type;
      if (t === 'rock') reelSpeed = 5.4;
      else if (t === 'plush' || t === 'gold') reelSpeed = 8.4;
      else reelSpeed = 11.8;

      if (turboOn) reelSpeed *= 2.1;
    }

    claw.length -= reelSpeed;
    const tipX = WINCH_X + Math.cos(claw.angle) * claw.length;
    const tipY = WINCH_Y + Math.sin(claw.angle) * claw.length;

    if (claw.carriedItem) {
      claw.carriedItem.x = tipX;
      claw.carriedItem.y = tipY + claw.carriedItem.r * 0.45;
    }

    if (claw.length <= MIN_ROPE) {
      claw.length = MIN_ROPE;
      claw.state = 'swing';
      if (claw.carriedItem) {
        onItemReeledIn(claw.carriedItem);
      }
    }
  }

  // Update shockwaves
  for (let i = shockwaves.length - 1; i >= 0; i--) {
    const sw = shockwaves[i];
    sw.r += 8;
    sw.alpha -= 0.06;
    if (sw.alpha <= 0 || sw.r >= sw.maxR) {
      shockwaves.splice(i, 1);
    }
  }

  // Update particles
  for (let i = particles.length - 1; i >= 0; i--) {
    const pt = particles[i];
    pt.x += pt.vx;
    pt.y += pt.vy;
    pt.vy += 0.16;
    pt.life -= 0.03;
    if (pt.life <= 0) {
      particles.splice(i, 1);
    }
  }
}

// ============================================================================
// Canvas Rendering (100% Zero Text, Full Opaque Emojis)
// ============================================================================
function drawScene() {
  const stageCritter = CRITTERS[currentLevel];

  // 1. Top Surface Sky Banner (`y = 0..SURFACE_Y`)
  const skyGrad = ctx.createLinearGradient(0, 0, 0, SURFACE_Y);
  skyGrad.addColorStop(0, stageCritter.skyTop);
  skyGrad.addColorStop(1, stageCritter.skyBot);
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, W, SURFACE_Y);

  // 2. Underground Cave / Trench Backdrop (`y = SURFACE_Y..H`)
  const caveGrad = ctx.createLinearGradient(0, SURFACE_Y, 0, H);
  caveGrad.addColorStop(0, stageCritter.caveTop);
  caveGrad.addColorStop(1, stageCritter.caveBot);
  ctx.fillStyle = caveGrad;
  ctx.fillRect(0, SURFACE_Y, W, H - SURFACE_Y);

  // Decorative Cave Strata Ledges
  ctx.fillStyle = stageCritter.ledgeColor;
  ctx.fillRect(0, SURFACE_Y, W, 12);

  ctx.save();
  ctx.globalAlpha = 0.22;
  ctx.fillStyle = stageCritter.ledgeColor;
  roundRect(ctx, 40, 235, 740, 18, 9);
  ctx.fill();
  roundRect(ctx, 70, 365, 680, 18, 9);
  ctx.fill();
  ctx.restore();

  // 3. Winch Minecart & Stage Smiling Critter Operator at Top-Center
  drawWinchCart(stageCritter);

  // 4. Dotted Aim Ray while Swinging
  if (claw.state === 'swing' && !levelWon) {
    const cos = Math.cos(claw.angle);
    const sin = Math.sin(claw.angle);
    const rainbow = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#a855f7'];
    for (let s = 1; s <= 8; s++) {
      const dist = MIN_ROPE + 16 + s * 22;
      const ax = WINCH_X + cos * dist;
      const ay = WINCH_Y + sin * dist;
      ctx.save();
      ctx.fillStyle = magnetOn ? rainbow[s % rainbow.length] : '#facc15';
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(ax, ay, Math.max(3, 6.5 - s * 0.35), 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }
  }

  // 5. Buried Cave Treasures, Star Plush Capsules, Rocks & TNT
  items.forEach((it) => {
    if (it.collected) return;
    drawCaveItem(it);
  });

  // 6. Golden Cable & 2-Pronged Claw Hook
  drawClawAndCable(stageCritter);

  // 7. Shockwaves & Emoji Particles
  shockwaves.forEach((sw) => {
    ctx.save();
    ctx.strokeStyle = sw.color;
    ctx.globalAlpha = Math.max(0, sw.alpha);
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(sw.x, sw.y, sw.r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  });

  particles.forEach((pt) => {
    ctx.save();
    ctx.globalAlpha = Math.max(0, pt.life);
    ctx.fillStyle = '#ffffff';
    ctx.font = `${Math.round(pt.size)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(pt.emoji, pt.x, pt.y);
    ctx.restore();
  });

  // 8. Animated Finger Tutorial Guide (Before first launch)
  if (!hasLaunchedThisLevel && claw.state === 'swing') {
    drawVisualTutorialGuide();
  }
}

function drawWinchCart(stageCritter) {
  ctx.save();
  ctx.translate(WINCH_X, WINCH_Y);

  // Golden Winch Arch & Cart
  ctx.fillStyle = '#1e293b';
  ctx.strokeStyle = '#facc15';
  ctx.lineWidth = 4;
  roundRect(ctx, -58, -46, 116, 56, 18);
  ctx.fill();
  ctx.stroke();

  // Critter Portrait Inside the Winch Cart
  const img = critterImages[stageCritter.id];
  if (img && img.complete && img.naturalWidth > 0) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, -22, 22, 0, Math.PI * 2);
    ctx.clip();
    ctx.drawImage(img, -22, -44, 44, 44);
    ctx.restore();

    ctx.strokeStyle = stageCritter.color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, -22, 22, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Cart Wheels
  ctx.fillStyle = '#f59e0b';
  ctx.beginPath();
  ctx.arc(-36, 14, 10, 0, Math.PI * 2);
  ctx.arc(36, 14, 10, 0, Math.PI * 2);
  ctx.fill();

  // Active Boost Badges on the Cart (`🧲`, `⚡`)
  ctx.globalAlpha = 1;
  ctx.fillStyle = '#ffffff';
  ctx.font = '20px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  if (magnetOn) ctx.fillText('🧲', -40, -20);
  if (turboOn) ctx.fillText('⚡', 40, -20);

  ctx.restore();
}

function drawClawAndCable(stageCritter) {
  const tipX = WINCH_X + Math.cos(claw.angle) * claw.length;
  const tipY = WINCH_Y + Math.sin(claw.angle) * claw.length;

  ctx.save();
  // Cable Rope
  ctx.strokeStyle = turboOn ? '#38bdf8' : '#facc15';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(WINCH_X, WINCH_Y);
  ctx.lineTo(tipX, tipY);
  ctx.stroke();

  // Claw Head Pivot & Pincers
  ctx.translate(tipX, tipY);
  ctx.rotate(claw.angle - Math.PI / 2);

  // Magnet Halo if Magnet Mode is active
  if (magnetOn) {
    ctx.fillStyle = 'rgba(56, 189, 248, 0.28)';
    ctx.beginPath();
    ctx.arc(0, 8, 28, 0, Math.PI * 2);
    ctx.fill();
  }

  const gripAngle = claw.carriedItem ? 0.15 : 0.45;
  ctx.strokeStyle = '#fde047';
  ctx.lineWidth = 5.5;
  ctx.lineCap = 'round';

  // Left prong
  ctx.save();
  ctx.rotate(gripAngle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-15, 14);
  ctx.lineTo(-8, 26);
  ctx.stroke();
  ctx.restore();

  // Right prong
  ctx.save();
  ctx.rotate(-gripAngle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(15, 14);
  ctx.lineTo(8, 26);
  ctx.stroke();
  ctx.restore();

  // Pivot joint
  ctx.fillStyle = stageCritter.color;
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(0, 0, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.restore();
}

function drawCaveItem(it) {
  ctx.save();
  ctx.translate(it.x, it.y);

  if (it.type === 'plush') {
    // Glowing Golden Star Plush Capsule containing a Smiling Critter!
    const pulse = 1 + Math.sin(animTick * 0.08 + it.id) * 0.05;
    ctx.scale(pulse, pulse);

    ctx.fillStyle = 'rgba(250, 204, 21, 0.26)';
    ctx.beginPath();
    ctx.arc(0, 0, it.r + 8, 0, Math.PI * 2);
    ctx.fill();

    const c = CRITTERS[it.critterIdx % CRITTERS.length];
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#facc15';
    ctx.lineWidth = 4.5;
    ctx.beginPath();
    ctx.arc(0, 0, it.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    const img = critterImages[c.id];
    if (img && img.complete && img.naturalWidth > 0) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(0, 0, it.r - 4, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(img, -(it.r - 4), -(it.r - 4), (it.r - 4) * 2, (it.r - 4) * 2);
      ctx.restore();
    }

    ctx.globalAlpha = 1;
    ctx.fillStyle = '#ffffff';
    ctx.font = '20px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('⭐', it.r * 0.7, -it.r * 0.7);
    ctx.restore();
    return;
  }

  if (it.type === 'diamond') {
    ctx.fillStyle = 'rgba(56, 189, 248, 0.32)';
    ctx.strokeStyle = '#7dd3fc';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, it.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.globalAlpha = 1;
    ctx.fillStyle = '#ffffff';
    ctx.font = '26px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('💎', 0, 1);
    ctx.restore();
    return;
  }

  if (it.type === 'gold') {
    ctx.fillStyle = '#f59e0b';
    ctx.strokeStyle = '#fef08a';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.arc(0, 0, it.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.globalAlpha = 1;
    ctx.fillStyle = '#ffffff';
    ctx.font = '26px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(it.id % 2 === 0 ? '👑' : '🪙', 0, 1);
    ctx.restore();
    return;
  }

  if (it.type === 'bag') {
    ctx.fillStyle = '#ec4899';
    ctx.strokeStyle = '#fbcfe8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, it.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.globalAlpha = 1;
    ctx.fillStyle = '#ffffff';
    ctx.font = '25px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🎒', 0, 1);
    ctx.restore();
    return;
  }

  if (it.type === 'tnt') {
    ctx.fillStyle = '#ef4444';
    ctx.strokeStyle = '#991b1b';
    ctx.lineWidth = 3.5;
    roundRect(ctx, -it.r, -it.r, it.r * 2, it.r * 2, 8);
    ctx.fill();
    ctx.stroke();

    ctx.globalAlpha = 1;
    ctx.fillStyle = '#ffffff';
    ctx.font = '24px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🧨', 0, 1);
    ctx.restore();
    return;
  }

  if (it.type === 'runner') {
    ctx.fillStyle = 'rgba(168, 85, 247, 0.38)';
    ctx.strokeStyle = '#e9d5ff';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, it.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.globalAlpha = 1;
    ctx.fillStyle = '#ffffff';
    ctx.font = '24px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🐹', -5, 1);
    ctx.font = '16px sans-serif';
    ctx.fillText('💎', 12, -8);
    ctx.restore();
    return;
  }

  // Default: Cave Boulder (`rock`)
  ctx.fillStyle = '#64748b';
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.arc(0, 0, it.r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.globalAlpha = 1;
  ctx.fillStyle = '#ffffff';
  ctx.font = '25px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('🪨', 0, 1);
  ctx.restore();
}

function drawVisualTutorialGuide() {
  const pulse = Math.sin(animTick * 0.08) * 10;
  ctx.save();
  ctx.globalAlpha = 1;
  ctx.fillStyle = '#ffffff';
  ctx.font = '40px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('👆', WINCH_X, 205 + pulse);
  ctx.restore();
}

function roundRect(context, x, y, w, h, r) {
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + w, y, x + w, y + h, r);
  context.arcTo(x + w, y + h, x, y + h, r);
  context.arcTo(x, y + h, x, y, r);
  context.arcTo(x, y, x + w, y, r);
  context.closePath();
}

// ============================================================================
// Pointer & Touch Controls + Left Dock Buttons
// ============================================================================
function getCanvasCoords(e) {
  const rect = canvas.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  return {
    x: ((clientX - rect.left) / rect.width) * W,
    y: ((clientY - rect.top) / rect.height) * H
  };
}

canvas.addEventListener('pointerdown', (e) => {
  if (levelWon) return;
  const pt = getCanvasCoords(e);
  launchClaw(pt);
});

btnLaunchClaw.addEventListener('click', () => {
  launchClaw(null);
});

btnMagnetMode.addEventListener('click', () => {
  magnetOn = !magnetOn;
  sfx.playStar();
  updateDockButtonsUI();
  showEmojiToast(magnetOn ? '🧲💎✨' : '🪝');
});

btnTurboReel.addEventListener('click', () => {
  turboOn = !turboOn;
  sfx.playStar();
  updateDockButtonsUI();
  showEmojiToast(turboOn ? '⚡🚀' : '🪝');
});

btnBlastRocks.addEventListener('click', () => {
  triggerDynamiteHelper();
});

btnResetLevel.addEventListener('click', () => {
  sfx.playGrabGood();
  loadLevel(currentLevel);
  showEmojiToast('🔁✨');
});

btnSoundToggle.addEventListener('click', () => {
  sfx.enabled = !sfx.enabled;
  btnSoundToggle.textContent = sfx.enabled ? '🔊' : '🔇';
  btnSoundToggle.classList.toggle('muted', !sfx.enabled);
  if (sfx.enabled) sfx.playGrabGood();
});

btnWinReplay.addEventListener('click', () => {
  sfx.playGrabGood();
  loadLevel(currentLevel);
});

btnWinNext.addEventListener('click', () => {
  sfx.playStar();
  loadLevel((currentLevel + 1) % CRITTERS.length);
});

btnFinaleClose.addEventListener('click', () => {
  sfx.playWin();
  completedLevels.clear();
  loadLevel(0);
});

// ============================================================================
// Main Loop
// ============================================================================
function gameLoop() {
  updatePhysics();
  drawScene();
  requestAnimationFrame(gameLoop);
}

loadLevel(0);
requestAnimationFrame(gameLoop);
