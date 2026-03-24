const reflexItems = [
  { id: "stimulus", text: "Stimulus (tap on tendon)", target: "stimulus" },
  { id: "receptor", text: "Receptor (muscle spindle)", target: "receptor" },
  { id: "sensory", text: "Sensory neurone", target: "sensory" },
  { id: "relay", text: "Relay neurone in spinal cord", target: "relay" },
  { id: "motor", text: "Motor neurone", target: "motor" },
  { id: "effector", text: "Effector (quadriceps muscle)", target: "effector" },
  { id: "response", text: "Response (leg kicks)", target: "response" }
];

const compareItems = [
  { id: "c1", text: "Carries impulses from CNS to effectors", target: "motor" },
  { id: "c2", text: "Carries impulses from receptors to CNS", target: "sensory" },
  { id: "c3", text: "Has a cell body", target: "both" },
  { id: "c4", text: "Can be myelinated", target: "both" },
  { id: "c5", text: "Typically has the cell body in a dorsal root ganglion", target: "sensory" },
  { id: "c6", text: "Often synapses with muscle fibers", target: "motor" },
  { id: "c7", text: "Transmits action potentials", target: "both" }
];

const structures = {
  grey: {
    name: "Grey Matter",
    text: "Butterfly-shaped central region rich in neuron cell bodies and synapses.",
    legend: "Processes incoming sensory signals and coordinates outgoing motor responses."
  },
  white: {
    name: "White Matter",
    text: "Outer region composed mostly of myelinated axons.",
    legend: "Ascending and descending tracts carry information between spinal cord and brain."
  },
  central: {
    name: "Central Canal",
    text: "Small fluid-filled channel running through the center of the spinal cord.",
    legend: "Contains cerebrospinal fluid that cushions and supports neural tissue."
  },
  dorsal: {
    name: "Dorsal Horn",
    text: "Posterior horn where sensory neurones enter and synapse.",
    legend: "Primary area for sensory processing in spinal reflexes."
  },
  ventral: {
    name: "Ventral Horn",
    text: "Anterior horn containing motor neurone cell bodies.",
    legend: "Motor commands leave here to activate skeletal muscles."
  }
};

const neuroneData = {
  motor: {
    name: "Motor Neurone",
    desc: "Multipolar neurone sending impulses from CNS to muscles or glands.",
    path: "M120,180 C180,85 260,85 300,180 C330,220 355,220 390,180 C460,110 545,115 620,180 C700,248 760,250 840,180",
    soma: { x: 108, y: 182, r: 22 },
    dendrites: [
      "M92,168 C66,145 55,127 62,104",
      "M90,184 C58,184 40,195 34,216",
      "M98,198 C70,220 58,239 62,258"
    ],
    myelinSegments: [
      { x: 445, y: 134, angle: -27 },
      { x: 512, y: 128, angle: -10 },
      { x: 584, y: 151, angle: 18 },
      { x: 654, y: 201, angle: 32 },
      { x: 730, y: 242, angle: 12 }
    ],
    terminals: [
      { x1: 840, y1: 180, x2: 865, y2: 162 },
      { x1: 840, y1: 180, x2: 866, y2: 178 },
      { x1: 840, y1: 180, x2: 862, y2: 194 }
    ],
    flowArrows: [
      { x: 278, y: 133, angle: 30 },
      { x: 532, y: 128, angle: 12 },
      { x: 772, y: 236, angle: -12 }
    ],
    nodes: [
      { x: 108, y: 182, title: "Cell body", text: "Contains nucleus and organelles for metabolic control." },
      { x: 320, y: 184, title: "Axon", text: "Long projection carrying impulses away from cell body." },
      { x: 552, y: 180, title: "Myelin sheath", text: "Insulating layers that increase conduction speed and stop electrical interference from nearby neurones." },
      { x: 806, y: 182, title: "Axon terminals", text: "Release neurotransmitters at the neuromuscular junction." }
    ]
  },
  sensory: {
    name: "Sensory Neurone",
    desc: "Pseudo-unipolar neurone carrying impulses from receptors into CNS.",
    path: "M70,180 C170,182 225,182 305,180 C385,177 420,95 506,95 C590,95 620,178 705,180 C765,182 820,182 875,180",
    soma: { x: 505, y: 95, r: 20 },
    dendrites: [
      "M70,180 C50,170 38,160 30,145",
      "M70,180 C50,188 35,198 26,214"
    ],
    myelinSegments: [
      { x: 205, y: 181, angle: 0 },
      { x: 266, y: 180, angle: 0 },
      { x: 638, y: 173, angle: 16 },
      { x: 706, y: 181, angle: 0 },
      { x: 778, y: 182, angle: 0 }
    ],
    terminals: [
      { x1: 875, y1: 180, x2: 898, y2: 166 },
      { x1: 875, y1: 180, x2: 900, y2: 180 },
      { x1: 875, y1: 180, x2: 896, y2: 194 }
    ],
    flowArrows: [
      { x: 240, y: 181, angle: 0 },
      { x: 457, y: 95, angle: 0 },
      { x: 738, y: 181, angle: 0 }
    ],
    nodes: [
      { x: 122, y: 180, title: "Receptor ending", text: "Detects stimulus energy and initiates nerve impulse." },
      { x: 505, y: 95, title: "Cell body", text: "Located off to the side in dorsal root ganglion." },
      { x: 350, y: 180, title: "Peripheral process", text: "Carries impulses from receptor toward cell body region." },
      { x: 770, y: 180, title: "Central process", text: "Continues into CNS and synapses with relay neurones." }
    ]
  },
  relay: {
    name: "Relay Neurone",
    desc: "Short interneurone inside CNS linking sensory to motor pathways.",
    path: "M170,210 C230,110 310,105 370,208 C430,300 520,303 580,208 C640,112 720,115 790,208",
    soma: { x: 375, y: 208, r: 21 },
    dendrites: [
      "M362,195 C322,165 298,144 283,118",
      "M360,220 C322,246 302,265 286,294",
      "M387,191 C420,158 436,138 448,112",
      "M391,225 C425,252 442,270 455,295"
    ],
    myelinSegments: [
      { x: 515, y: 295, angle: 5 },
      { x: 590, y: 200, angle: -35 },
      { x: 662, y: 132, angle: -8 },
      { x: 734, y: 142, angle: 34 }
    ],
    terminals: [
      { x1: 790, y1: 208, x2: 815, y2: 194 },
      { x1: 790, y1: 208, x2: 818, y2: 210 },
      { x1: 790, y1: 208, x2: 814, y2: 224 }
    ],
    flowArrows: [
      { x: 297, y: 112, angle: 28 },
      { x: 489, y: 299, angle: 8 },
      { x: 692, y: 121, angle: 22 }
    ],
    nodes: [
      { x: 178, y: 210, title: "Dendrites", text: "Receive input from sensory neurones." },
      { x: 375, y: 208, title: "Cell body", text: "Integration center for local CNS circuits." },
      { x: 577, y: 208, title: "Axon", text: "Transmits signal toward motor neurone." },
      { x: 790, y: 208, title: "Synaptic terminal", text: "Communicates with target neurone across synapse." }
    ]
  }
};

let draggedChipId = null;
let selectedChipId = null;
let selectedChipEl = null;
const REFLEX_ZONE_DEV_MODE = true;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function chipTemplate(item) {
  const div = document.createElement("div");
  div.className = "chip";
  div.draggable = true;
  div.dataset.id = item.id;
  div.textContent = item.text;

  div.addEventListener("dragstart", (event) => {
    draggedChipId = item.id;
    event.dataTransfer.setData("text/plain", item.id);
  });

  div.addEventListener("click", () => {
    if (selectedChipEl) {
      selectedChipEl.classList.remove("selected");
    }
    selectedChipId = item.id;
    selectedChipEl = div;
    div.classList.add("selected");
  });

  return div;
}

function setDropHandlers(el, onDropItem) {
  el.addEventListener("dragover", (event) => {
    event.preventDefault();
    el.classList.add("active");
  });

  el.addEventListener("dragleave", () => {
    el.classList.remove("active");
  });

  el.addEventListener("drop", (event) => {
    event.preventDefault();
    el.classList.remove("active");
    const id = event.dataTransfer.getData("text/plain") || draggedChipId;
    onDropItem(id, el);
  });

  el.addEventListener("click", () => {
    if (selectedChipId) {
      onDropItem(selectedChipId, el);
      selectedChipEl?.classList.remove("selected");
      selectedChipId = null;
      selectedChipEl = null;
    }
  });
}

function createReflexTask() {
  const labels = document.getElementById("reflexLabels");
  const zones = [...document.querySelectorAll(".arc-zone")];
  const feedback = document.getElementById("reflexFeedback");

  const targetToItem = new Map();

  function findItemTarget(id) {
    return [...targetToItem.entries()].find(([, val]) => val === id)?.[0];
  }

  function setZoneFilledState(targetKey, filled) {
    const zone = zones.find((z) => z.dataset.target === targetKey);
    if (!zone) return;
    zone.classList.toggle("filled", filled);
  }

  function dropIntoZone(id, dropEl) {
    if (!id) return;

    const chip = document.querySelector(`.chip[data-id="${id}"]`);
    if (!chip) return;

    const previousTarget = findItemTarget(id);
    if (previousTarget) {
      targetToItem.delete(previousTarget);
      setZoneFilledState(previousTarget, false);
    }

    const currentTarget = dropEl.dataset.target;
    const occupant = targetToItem.get(currentTarget);
    if (occupant && occupant !== id) {
      const occupiedChip = document.querySelector(`.chip[data-id="${occupant}"]`);
      if (occupiedChip) labels.appendChild(occupiedChip);
    }

    targetToItem.set(currentTarget, id);
    dropEl.appendChild(chip);
    setZoneFilledState(currentTarget, true);
  }

  zones.forEach((zone) => {
    setDropHandlers(zone, dropIntoZone);
  });

  setDropHandlers(labels, (id) => {
    if (!id) return;
    const chip = document.querySelector(`.chip[data-id="${id}"]`);
    if (!chip) return;
    const previousTarget = findItemTarget(id);
    if (previousTarget) {
      targetToItem.delete(previousTarget);
      setZoneFilledState(previousTarget, false);
    }
    labels.appendChild(chip);
  });

  function reset() {
    labels.innerHTML = "";
    feedback.textContent = "";
    feedback.className = "feedback";
    targetToItem.clear();

    zones.forEach((zone) => {
      zone.classList.remove("filled");
      zone.querySelectorAll(".chip").forEach((chip) => chip.remove());
    });

    shuffle(reflexItems).forEach((item) => labels.appendChild(chipTemplate(item)));
  }

  document.getElementById("checkReflex").addEventListener("click", () => {
    let correct = 0;
    reflexItems.forEach((item) => {
      const placedTarget = [...targetToItem.entries()].find(([, val]) => val === item.id)?.[0];
      if (placedTarget === item.target) correct += 1;
    });

    const total = reflexItems.length;
    const done = targetToItem.size === total;

    if (!done) {
      feedback.textContent = `You have placed ${targetToItem.size}/${total}. Complete all slots first.`;
      feedback.className = "feedback bad";
      return;
    }

    if (correct === total) {
      feedback.textContent = "Excellent. You sequenced the reflex arc correctly.";
      feedback.className = "feedback good";
      return;
    }

    feedback.textContent = `You got ${correct}/${total} correct. Re-check signal direction through the spinal cord.`;
    feedback.className = "feedback bad";
  });

  document.getElementById("resetReflex").addEventListener("click", reset);
  reset();
}

async function ensureReflexSvgLoaded() {
  const host = document.getElementById("reflexArcSvgHost");
  if (!host) return null;

  let svg = host.querySelector("#reflexArcSvg");
  if (svg) return svg;

  try {
    const response = await fetch("reflex-arc.svg", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Unable to load reflex-arc.svg (${response.status})`);
    }

    const markup = await response.text();
    host.innerHTML = markup;
    svg = host.querySelector("#reflexArcSvg");
    return svg;
  } catch {
    host.innerHTML = "<p class=\"structure-text\">Reflex diagram could not be loaded.</p>";
    return null;
  }
}

async function setupReflexZoneAlignment() {
  const stage = document.getElementById("reflexArcStage");
  const host = document.getElementById("reflexArcSvgHost");
  if (!stage || !host) return;

  const zones = [...stage.querySelectorAll(".arc-zone[data-x][data-y]")];
  if (!zones.length) return;

  const svg = await ensureReflexSvgLoaded();
  if (!svg) return;

  const targetLabels = {
    stimulus: "Stimulus",
    receptor: "Receptor",
    sensory: "Sensory neurone",
    relay: "Relay neurone",
    motor: "Motor neurone",
    effector: "Effector",
    response: "Response"
  };

  function getGeometry() {
    const stageRect = stage.getBoundingClientRect();
    const svgRect = svg.getBoundingClientRect();
    const vb = svg.viewBox?.baseVal;

    const vbX = vb?.x ?? 0;
    const vbY = vb?.y ?? 0;
    const vbWidth = vb?.width || 760;
    const vbHeight = vb?.height || 420;

    const offsetLeft = svgRect.left - stageRect.left;
    const offsetTop = svgRect.top - stageRect.top;

    return {
      stageRect,
      svgRect,
      vbX,
      vbY,
      vbWidth,
      vbHeight,
      offsetLeft,
      offsetTop
    };
  }

  function viewBoxToStagePx(x, y, geom) {
    const leftPx = geom.offsetLeft + ((x - geom.vbX) / geom.vbWidth) * geom.svgRect.width;
    const topPx = geom.offsetTop + ((y - geom.vbY) / geom.vbHeight) * geom.svgRect.height;
    return { leftPx, topPx };
  }

  function stagePxToViewBox(leftPx, topPx, geom) {
    const x = ((leftPx - geom.offsetLeft) / geom.svgRect.width) * geom.vbWidth + geom.vbX;
    const y = ((topPx - geom.offsetTop) / geom.svgRect.height) * geom.vbHeight + geom.vbY;
    return {
      x: Math.max(geom.vbX, Math.min(geom.vbX + geom.vbWidth, x)),
      y: Math.max(geom.vbY, Math.min(geom.vbY + geom.vbHeight, y))
    };
  }

  function updateZoneDebug(zone) {
    if (!REFLEX_ZONE_DEV_MODE) return;
    let debug = zone.querySelector(".arc-zone-debug");
    if (!debug) return;

    const x = Number(zone.dataset.x);
    const y = Number(zone.dataset.y);
    if (Number.isNaN(x) || Number.isNaN(y)) return;
    const label = targetLabels[zone.dataset.target] || zone.dataset.target;

    debug.textContent = `${label} | X ${x.toFixed(2)} Y ${y.toFixed(2)}`;
  }

  function ensureZoneDebugElements() {
    if (!REFLEX_ZONE_DEV_MODE) return;
    stage.classList.add("reflex-dev-mode");

    zones.forEach((zone) => {
      if (zone.querySelector(".arc-zone-debug")) return;
      const debug = document.createElement("div");
      debug.className = "arc-zone-debug";
      zone.appendChild(debug);
      updateZoneDebug(zone);
    });
  }

  function setupZoneDragEditing() {
    if (!REFLEX_ZONE_DEV_MODE) return;

    let dragState = null;

    zones.forEach((zone) => {
      zone.addEventListener("pointerdown", (event) => {
        if (event.pointerType === "mouse" && event.button !== 0) return;

        const geom = getGeometry();
        const zoneRect = zone.getBoundingClientRect();
        const zoneCenterLeft = zoneRect.left - geom.stageRect.left + zoneRect.width / 2;
        const zoneCenterTop = zoneRect.top - geom.stageRect.top + zoneRect.height / 2;

        dragState = {
          zone,
          pointerId: event.pointerId,
          offsetX: event.clientX - (geom.stageRect.left + zoneCenterLeft),
          offsetY: event.clientY - (geom.stageRect.top + zoneCenterTop)
        };

        zone.classList.add("zone-moving");
        zone.setPointerCapture(event.pointerId);
        event.preventDefault();
        event.stopPropagation();
      });

      zone.addEventListener("pointermove", (event) => {
        if (!dragState || dragState.zone !== zone || dragState.pointerId !== event.pointerId) return;

        const geom = getGeometry();
        const leftPx = Math.max(0, Math.min(geom.stageRect.width, event.clientX - geom.stageRect.left - dragState.offsetX));
        const topPx = Math.max(0, Math.min(geom.stageRect.height, event.clientY - geom.stageRect.top - dragState.offsetY));

        zone.style.left = `${leftPx}px`;
        zone.style.top = `${topPx}px`;

        const vbPoint = stagePxToViewBox(leftPx, topPx, geom);
        zone.dataset.x = vbPoint.x.toFixed(2);
        zone.dataset.y = vbPoint.y.toFixed(2);
        updateZoneDebug(zone);

        event.preventDefault();
      });

      const endDrag = (event) => {
        if (!dragState || dragState.zone !== zone || dragState.pointerId !== event.pointerId) return;
        zone.classList.remove("zone-moving");
        dragState = null;
      };

      zone.addEventListener("pointerup", endDrag);
      zone.addEventListener("pointercancel", endDrag);
    });
  }

  function projectZones() {
    const geom = getGeometry();

    zones.forEach((zone) => {
      const x = Number(zone.dataset.x);
      const y = Number(zone.dataset.y);
      if (Number.isNaN(x) || Number.isNaN(y)) return;

      const { leftPx, topPx } = viewBoxToStagePx(x, y, geom);

      zone.style.left = `${leftPx}px`;
      zone.style.top = `${topPx}px`;
      updateZoneDebug(zone);
    });
  }

  ensureZoneDebugElements();
  setupZoneDragEditing();
  projectZones();

  let rafId = null;
  const scheduleProjection = () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      projectZones();
      rafId = null;
    });
  };

  window.addEventListener("resize", scheduleProjection);
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", scheduleProjection);
  }
}

async function setupReflexArcAnimation() {
  const playBtn = document.getElementById("playReflexDemo");

  if (!playBtn) {
    return;
  }

  const svg = await ensureReflexSvgLoaded();
  if (!svg) {
    return;
  }

  const hammer = svg.querySelector("#reflexHammer");
  const impulseDot = svg.querySelector("#reflexImpulseDot");
  const sensoryPath = svg.querySelector("#sensoryImpulsePath");
  const relayPath = svg.querySelector("#relayImpulsePath");
  const motorPath = svg.querySelector("#motorImpulsePath");
  const quadriceps = svg.querySelector("#quad");

  if (!hammer || !impulseDot || !sensoryPath || !relayPath || !motorPath) {
    return;
  }

  let isAnimating = false;

  function moveDotToPathStart(path) {
    const start = path.getPointAtLength(0);
    impulseDot.setAttribute("cx", String(start.x));
    impulseDot.setAttribute("cy", String(start.y));
  }

  function animateAlongPath(path, duration) {
    return new Promise((resolve) => {
      const totalLength = path.getTotalLength();
      const startTime = performance.now();

      function tick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const point = path.getPointAtLength(totalLength * progress);
        impulseDot.setAttribute("cx", String(point.x));
        impulseDot.setAttribute("cy", String(point.y));

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          resolve();
        }
      }

      requestAnimationFrame(tick);
    });
  }

  function strikeHammer() {
    hammer.animate(
      [
        { transform: "rotate(0deg)", transformOrigin: "603px 264px" },
        { transform: "rotate(-34deg)", transformOrigin: "603px 264px", offset: 0.45 },
        { transform: "rotate(12deg)", transformOrigin: "603px 264px", offset: 0.72 },
        { transform: "rotate(0deg)", transformOrigin: "603px 264px" }
      ],
      { duration: 560, easing: "ease-in-out" }
    );
  }

  function contractQuadriceps() {
    if (!quadriceps) return;

    quadriceps.animate(
      [
        { transform: "scaleX(1)", transformOrigin: "center center", transformBox: "fill-box" },
        { transform: "scaleX(0.9)", transformOrigin: "center center", transformBox: "fill-box", offset: 0.45 },
        { transform: "scaleX(1)", transformOrigin: "center center", transformBox: "fill-box" }
      ],
      { duration: 420, easing: "ease-out" }
    );
  }

  async function playReflexDemo() {
    if (isAnimating) return;
    isAnimating = true;
    playBtn.textContent = "Animating...";
    playBtn.disabled = true;

    // Keep the pulse marker visually above all SVG elements while animating.
    svg.appendChild(impulseDot);

    strikeHammer();

    impulseDot.style.opacity = "1";
    moveDotToPathStart(sensoryPath);
    await animateAlongPath(sensoryPath, 1020);
    await animateAlongPath(relayPath, 420);
    await animateAlongPath(motorPath, 940);
    contractQuadriceps();

    impulseDot.animate(
      [
        { transform: "scale(1)", opacity: 1 },
        { transform: "scale(1.35)", opacity: 0.75 },
        { transform: "scale(1)", opacity: 0 }
      ],
      { duration: 420, easing: "ease-out" }
    );

    setTimeout(() => {
      impulseDot.style.opacity = "0";
      playBtn.disabled = false;
      playBtn.textContent = "Play Knee-Jerk Animation";
      isAnimating = false;
    }, 380);
  }

  playBtn.addEventListener("click", playReflexDemo);
}

function setupMicroscopy() {
  const stage = document.getElementById("microscopyStage");
  const title = document.getElementById("structureTitle");
  const text = document.getElementById("structureText");
  const legend = document.getElementById("structureLegend");
  const hotspots = [...document.querySelectorAll(".hotspot")];

  hotspots.forEach((spot) => {
    spot.addEventListener("click", () => {
      hotspots.forEach((h) => h.classList.remove("active"));
      spot.classList.add("active");

      const data = structures[spot.dataset.target];
      title.textContent = data.name;
      text.textContent = data.text;
      legend.textContent = data.legend;

      stage.animate(
        [
          { transform: "scale(1)", filter: "saturate(1)" },
          { transform: "scale(1.015)", filter: "saturate(1.1)" },
          { transform: "scale(1)", filter: "saturate(1)" }
        ],
        { duration: 650, easing: "ease-out" }
      );
    });
  });
}

function drawNeurone(type) {
  const svg = document.getElementById("neuroneSvg");
  const neuroneName = document.getElementById("neuroneName");
  const neuroneDesc = document.getElementById("neuroneDesc");
  const data = neuroneData[type];

  svg.innerHTML = "";
  neuroneName.textContent = data.name;
  neuroneDesc.textContent = data.desc;

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", data.path);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "#155ca7");
  path.setAttribute("stroke-width", "9");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-dasharray", "1600");
  path.setAttribute("stroke-dashoffset", "1600");
  path.style.animation = "dash 1.3s ease forwards";
  svg.appendChild(path);

  data.dendrites.forEach((dendritePath) => {
    const dendrite = document.createElementNS("http://www.w3.org/2000/svg", "path");
    dendrite.setAttribute("d", dendritePath);
    dendrite.setAttribute("fill", "none");
    dendrite.setAttribute("stroke", "#3d85c6");
    dendrite.setAttribute("stroke-width", "4");
    dendrite.setAttribute("stroke-linecap", "round");
    dendrite.setAttribute("stroke-linejoin", "round");
    dendrite.setAttribute("opacity", "0.85");
    svg.appendChild(dendrite);
  });

  if (data.soma) {
    const soma = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    soma.setAttribute("cx", data.soma.x);
    soma.setAttribute("cy", data.soma.y);
    soma.setAttribute("r", data.soma.r);
    soma.setAttribute("fill", "#ffe8a2");
    soma.setAttribute("stroke", "#e59d26");
    soma.setAttribute("stroke-width", "2.5");
    svg.appendChild(soma);

    const nucleus = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    nucleus.setAttribute("cx", data.soma.x + 5);
    nucleus.setAttribute("cy", data.soma.y - 3);
    nucleus.setAttribute("r", Math.max(5, data.soma.r * 0.32));
    nucleus.setAttribute("fill", "#ffd166");
    nucleus.setAttribute("stroke", "#d58a1d");
    nucleus.setAttribute("stroke-width", "1.5");
    svg.appendChild(nucleus);
  }

  data.myelinSegments.forEach((segment) => {
    const sheath = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    sheath.setAttribute("x", segment.x - 18);
    sheath.setAttribute("y", segment.y - 8);
    sheath.setAttribute("width", "36");
    sheath.setAttribute("height", "16");
    sheath.setAttribute("rx", "8");
    sheath.setAttribute("fill", "#fff1bf");
    sheath.setAttribute("stroke", "#da9b2c");
    sheath.setAttribute("stroke-width", "1.5");
    sheath.setAttribute("transform", `rotate(${segment.angle} ${segment.x} ${segment.y})`);
    svg.appendChild(sheath);
  });

  data.terminals.forEach((terminal) => {
    const branch = document.createElementNS("http://www.w3.org/2000/svg", "line");
    branch.setAttribute("x1", terminal.x1);
    branch.setAttribute("y1", terminal.y1);
    branch.setAttribute("x2", terminal.x2);
    branch.setAttribute("y2", terminal.y2);
    branch.setAttribute("stroke", "#155ca7");
    branch.setAttribute("stroke-width", "5");
    branch.setAttribute("stroke-linecap", "round");
    svg.appendChild(branch);

    const bouton = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    bouton.setAttribute("cx", terminal.x2);
    bouton.setAttribute("cy", terminal.y2);
    bouton.setAttribute("r", "4");
    bouton.setAttribute("fill", "#155ca7");
    svg.appendChild(bouton);
  });

  data.flowArrows.forEach((arrow) => {
    const tip = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    tip.setAttribute("points", `${arrow.x},${arrow.y} ${arrow.x - 9},${arrow.y - 5} ${arrow.x - 9},${arrow.y + 5}`);
    tip.setAttribute("fill", "#0f4f95");
    tip.setAttribute("opacity", "0.78");
    tip.setAttribute("transform", `rotate(${arrow.angle} ${arrow.x} ${arrow.y})`);
    svg.appendChild(tip);
  });

  data.nodes.forEach((node) => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", node.x);
    circle.setAttribute("cy", node.y);
    circle.setAttribute("r", "12");
    circle.setAttribute("fill", "#ffe59d");
    circle.setAttribute("stroke", "#ec9b23");
    circle.setAttribute("stroke-width", "2");

    const labelBox = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    labelBox.setAttribute("x", node.x - 58);
    labelBox.setAttribute("y", node.y - 50);
    labelBox.setAttribute("width", "116");
    labelBox.setAttribute("height", "26");
    labelBox.setAttribute("rx", "12");
    labelBox.setAttribute("class", "neurone-label");
    labelBox.setAttribute("tabindex", "0");

    const labelText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    labelText.setAttribute("x", node.x);
    labelText.setAttribute("y", node.y - 33);
    labelText.setAttribute("text-anchor", "middle");
    labelText.setAttribute("class", "neurone-label-text");
    labelText.textContent = node.title;

    function activateLabel() {
      [...svg.querySelectorAll(".neurone-label")].forEach((el) => el.classList.remove("active"));
      labelBox.classList.add("active");
      neuroneDesc.textContent = `${node.title}: ${node.text}`;
    }

    labelBox.addEventListener("mouseenter", activateLabel);
    labelBox.addEventListener("click", activateLabel);
    labelBox.addEventListener("focus", activateLabel);

    g.appendChild(circle);
    g.appendChild(labelBox);
    g.appendChild(labelText);
    svg.appendChild(g);
  });
}

function setupNeurones() {
  const tabs = [...document.querySelectorAll(".tab-btn")];

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      drawNeurone(tab.dataset.neurone);
    });
  });

  drawNeurone("motor");
}

function setupSaltatoryConduction() {
  const saltSvg = document.getElementById("saltatorySvg");
  const nodes = [...document.querySelectorAll(".salt-node")];
  const jumps = [...document.querySelectorAll(".salt-jump")];
  const spark = document.getElementById("saltSpark");
  const status = document.getElementById("saltStatus");
  const playPause = document.getElementById("saltPlayPause");
  const stepBtn = document.getElementById("saltStep");
  const resetBtn = document.getElementById("saltReset");
  const speed = document.getElementById("saltSpeed");
  const speedValue = document.getElementById("saltSpeedValue");
  const ionRevealBtn = document.getElementById("saltToggleIon");
  const ionPanel = document.getElementById("saltIonPanel");
  const ionModeBtn = document.getElementById("saltIonMode");
  const ionStatus = document.getElementById("saltIonStatus");

  if (!saltSvg || !nodes.length || !spark || !status || !playPause || !stepBtn || !resetBtn || !speed || !speedValue) {
    return;
  }

  const ionPhases = [
    {
      id: "na",
      title: "Depolarization",
      ionText: "Na+ influx",
      detail: "Voltage-gated sodium channels open, causing rapid membrane depolarization."
    },
    {
      id: "k",
      title: "Repolarization",
      ionText: "K+ efflux",
      detail: "Sodium channels inactivate and potassium channels open to restore membrane potential."
    },
    {
      id: "rest",
      title: "Refractory reset",
      ionText: "Na+/K+ pump recovery",
      detail: "Ionic gradients are re-established, limiting immediate re-firing at this node."
    }
  ];

  let currentNode = 0;
  let timer = null;
  let intervalMs = Number(speed.value);
  let ionModeEnabled = false;
  let ionPhaseStep = 0;

  const svgNs = "http://www.w3.org/2000/svg";
  const ionNaMarker = document.createElementNS(svgNs, "text");
  ionNaMarker.setAttribute("class", "salt-ion-marker na");
  ionNaMarker.textContent = "Na+ in";

  const ionKMarker = document.createElementNS(svgNs, "text");
  ionKMarker.setAttribute("class", "salt-ion-marker k");
  ionKMarker.textContent = "K+ out";

  saltSvg.appendChild(ionNaMarker);
  saltSvg.appendChild(ionKMarker);

  function updateStatus() {
    status.textContent = `Impulse at Node ${currentNode + 1} of ${nodes.length}.`;
  }

  function paintState() {
    nodes.forEach((node, index) => {
      node.classList.toggle("active", index === currentNode);
      node.classList.remove("ion-na", "ion-k");
    });

    jumps.forEach((jump, index) => {
      jump.classList.toggle("active", index < currentNode);
    });

    const active = nodes[currentNode];
    spark.setAttribute("cx", active.getAttribute("cx"));
    spark.setAttribute("cy", active.getAttribute("cy"));
    spark.classList.remove("ion-na", "ion-k");
    updateStatus();
  }

  function updateIonView() {
    if (!ionPanel || !ionStatus) {
      return;
    }

    if (ionPanel.hidden) {
      ionNaMarker.classList.remove("show");
      ionKMarker.classList.remove("show");
      return;
    }

    if (!ionModeEnabled) {
      ionStatus.textContent = "Ion mode is off. Enable it to see Na+ and K+ behavior at the active node.";
      ionNaMarker.classList.remove("show");
      ionKMarker.classList.remove("show");
      return;
    }

    const phase = ionPhases[ionPhaseStep % ionPhases.length];
    const active = nodes[currentNode];
    if (!active) {
      return;
    }

    const cx = Number(active.getAttribute("cx"));
    const cy = Number(active.getAttribute("cy"));

    ionNaMarker.setAttribute("x", String(cx - 20));
    ionNaMarker.setAttribute("y", String(cy - 28));
    ionKMarker.setAttribute("x", String(cx - 20));
    ionKMarker.setAttribute("y", String(cy + 34));

    ionNaMarker.classList.toggle("show", phase.id === "na");
    ionKMarker.classList.toggle("show", phase.id === "k");

    if (phase.id === "na") {
      active.classList.add("ion-na");
      spark.classList.add("ion-na");
    } else if (phase.id === "k") {
      active.classList.add("ion-k");
      spark.classList.add("ion-k");
    }

    ionStatus.textContent = `Node ${currentNode + 1}: ${phase.title} (${phase.ionText}). ${phase.detail}`;
  }

  function stepForward() {
    currentNode = (currentNode + 1) % nodes.length;
    if (ionModeEnabled) {
      ionPhaseStep += 1;
    }
    paintState();
    updateIonView();
  }

  function stopAuto() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    playPause.textContent = "Play";
  }

  function startAuto() {
    stopAuto();
    playPause.textContent = "Pause";
    timer = setInterval(stepForward, intervalMs);
  }

  playPause.addEventListener("click", () => {
    if (timer) {
      stopAuto();
    } else {
      startAuto();
    }
  });

  stepBtn.addEventListener("click", () => {
    stopAuto();
    stepForward();
  });

  resetBtn.addEventListener("click", () => {
    stopAuto();
    currentNode = 0;
    ionPhaseStep = 0;
    paintState();
    status.textContent = `Impulse ready at Node 1 of ${nodes.length}.`;
    updateIonView();
  });

  if (ionRevealBtn && ionPanel) {
    ionRevealBtn.addEventListener("click", () => {
      const nextHidden = !ionPanel.hidden;
      ionPanel.hidden = nextHidden;
      ionRevealBtn.setAttribute("aria-expanded", String(!nextHidden));
      ionRevealBtn.textContent = nextHidden ? "Show Na+/K+ Ion Simulation" : "Hide Na+/K+ Ion Simulation";
      updateIonView();
    });
  }

  if (ionModeBtn) {
    ionModeBtn.addEventListener("click", () => {
      ionModeEnabled = !ionModeEnabled;
      ionModeBtn.textContent = ionModeEnabled ? "Disable Ion Mode" : "Enable Ion Mode";
      if (ionModeEnabled) {
        ionPhaseStep = currentNode;
      }
      updateIonView();
    });
  }

  speed.addEventListener("input", () => {
    intervalMs = Number(speed.value);
    speedValue.textContent = `${intervalMs} ms`;
    const transitionMs = Math.max(200, Math.floor(intervalMs * 0.55));
    spark.style.transitionDuration = `${transitionMs}ms`;

    if (timer) {
      startAuto();
    }
  });

  paintState();
  updateIonView();
  speed.dispatchEvent(new Event("input"));
}

function setupCompareTask() {
  const bank = document.getElementById("compareBank");
  const feedback = document.getElementById("compareFeedback");
  const drops = {
    motor: document.getElementById("motorDrop"),
    sensory: document.getElementById("sensoryDrop"),
    both: document.getElementById("bothDrop")
  };

  function reset() {
    bank.innerHTML = "";
    feedback.textContent = "";
    feedback.className = "feedback";

    shuffle(compareItems).forEach((item) => {
      bank.appendChild(chipTemplate(item));
    });

    Object.values(drops).forEach((list) => {
      list.innerHTML = "";
      setDropHandlers(list, (id, dropEl) => {
        if (!id) return;
        const chip = document.querySelector(`.chip[data-id="${id}"]`);
        if (!chip) return;
        dropEl.appendChild(chip);
      });
    });

    setDropHandlers(bank, (id) => {
      if (!id) return;
      const chip = document.querySelector(`.chip[data-id="${id}"]`);
      if (!chip) return;
      bank.appendChild(chip);
    });
  }

  document.getElementById("checkCompare").addEventListener("click", () => {
    let correct = 0;

    compareItems.forEach((item) => {
      const chip = document.querySelector(`.chip[data-id="${item.id}"]`);
      if (!chip || !chip.parentElement) return;

      const parent = chip.parentElement.id;
      const category = parent.replace("Drop", "");
      if (category === item.target) correct += 1;
    });

    const total = compareItems.length;
    if (correct === total) {
      feedback.textContent = "Perfect sort. You can now articulate key similarities and differences.";
      feedback.className = "feedback good";
      return;
    }

    feedback.textContent = `You have ${correct}/${total} correct. Revisit impulse direction and cell body location.`;
    feedback.className = "feedback bad";
  });

  document.getElementById("resetCompare").addEventListener("click", reset);
  reset();
}

function initRevealOnScroll() {
  const cards = document.querySelectorAll(".card, .hero, .footer");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((c) => observer.observe(c));
}

const style = document.createElement("style");
style.textContent = `
@keyframes dash {
  to { stroke-dashoffset: 0; }
}
`;
document.head.appendChild(style);

createReflexTask();
setupReflexZoneAlignment();
setupReflexArcAnimation();
setupMicroscopy();
setupNeurones();
setupSaltatoryConduction();
setupCompareTask();
initRevealOnScroll();
