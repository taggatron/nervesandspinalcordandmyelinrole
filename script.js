const reflexItems = [
  { id: "stimulus", text: "Stimulus", target: "stimulus" },
  { id: "receptor", text: "Receptor", target: "receptor" },
  { id: "sensory", text: "Sensory neurone", target: "sensory" },
  { id: "relay", text: "Relay neurone", target: "relay" },
  { id: "motor", text: "Motor neurone", target: "motor" },
  { id: "effector", text: "Effector", target: "effector" },
  { id: "response", text: "Response", target: "response" }
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
const REFLEX_ZONE_DEV_MODE = false;

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

  function clearCorrectHighlights() {
    document.querySelectorAll(".chip.correct-placed").forEach((chip) => {
      chip.classList.remove("correct-placed");
    });
  }

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

    clearCorrectHighlights();

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
    clearCorrectHighlights();
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
    clearCorrectHighlights();

    zones.forEach((zone) => {
      zone.classList.remove("filled");
      zone.querySelectorAll(".chip").forEach((chip) => chip.remove());
    });

    shuffle(reflexItems).forEach((item) => labels.appendChild(chipTemplate(item)));
  }

  document.getElementById("checkReflex").addEventListener("click", () => {
    clearCorrectHighlights();

    let correct = 0;
    reflexItems.forEach((item) => {
      const placedTarget = [...targetToItem.entries()].find(([, val]) => val === item.id)?.[0];
      if (placedTarget === item.target) {
        correct += 1;
        const chip = document.querySelector(`.chip[data-id="${item.id}"]`);
        chip?.classList.add("correct-placed");
      }
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
  const stage = document.getElementById("reflexArcStage");

  if (!playBtn) {
    return;
  }

  const svg = await ensureReflexSvgLoaded();
  if (!svg) {
    return;
  }

  const hammer = svg.querySelector("#reflexHammer");
  const hammerVisual = svg.querySelector("#reflexHammerVisual");
  const hammerHead = svg.querySelector("#rect10");
  const impulseDot = svg.querySelector("#reflexImpulseDot");
  const sensoryPath = svg.querySelector("#sensoryImpulsePath");
  const relayPath = svg.querySelector("#relayImpulsePath");
  const motorPath = svg.querySelector("#motorImpulsePath");
  const quadriceps = svg.querySelector("#quad, [inkscape\\:label=\"quad\"], #path2");
  const lowerLegGroup = svg.querySelector("#lowerLegGroup");
  const lowerLegTendon = svg.querySelector("#lowerLegGroup #path9");
  const patella = svg.querySelector("#circle5");

  if (!hammer || !impulseDot || !sensoryPath || !relayPath || !motorPath) {
    return;
  }

  let isAnimating = false;
  let lowerLegRaf = null;
  const hammerBaseTransform = hammer.getAttribute("transform") || "";
  const arcZones = stage ? [...stage.querySelectorAll(".arc-zone")] : [];

  function setArcZonesVisible(visible) {
    arcZones.forEach((zone) => {
      zone.style.display = visible ? "" : "none";
    });
  }

  function mirrorHammerAboutCurrentLocation() {
    if (!hammerVisual) {
      return;
    }

    const box = hammerVisual.getBBox();
    const cx = box.x + box.width / 2;
    const cy = box.y + box.height / 2;
    hammerVisual.setAttribute(
      "transform",
      `translate(${cx.toFixed(2)} ${cy.toFixed(2)}) scale(-1 1) translate(${(-cx).toFixed(2)} ${(-cy).toFixed(2)})`
    );
  }

  mirrorHammerAboutCurrentLocation();

  function parseTranslate(transformText) {
    const match = transformText.match(/translate\(\s*([-\d.]+)(?:[\s,]+([-\d.]+))?\s*\)/i);
    if (!match) {
      return { x: 0, y: 0 };
    }
    return {
      x: Number(match[1]) || 0,
      y: Number(match[2]) || 0
    };
  }

  function toSvgSpacePoint(el, x, y) {
    const ctm = el?.getCTM?.();
    if (!ctm) {
      return { x, y };
    }
    const p = new DOMPoint(x, y).matrixTransform(ctm);
    return { x: p.x, y: p.y };
  }

  function getTendonStrikePoint() {
    if (!lowerLegTendon) {
      return null;
    }

    const len = lowerLegTendon.getTotalLength();
    const local = lowerLegTendon.getPointAtLength(Math.min(len * 0.06, len));
    return toSvgSpacePoint(lowerLegTendon, local.x, local.y);
  }

  function getHammerHeadCenter() {
    const head = hammerHead || hammer;
    const box = head.getBBox();
    const cx = box.x + box.width / 2;
    const cy = box.y + box.height / 2;
    return toSvgSpacePoint(head, cx, cy);
  }

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

  function moveHammerToLowerLegTop() {
    return new Promise((resolve) => {
      if (!lowerLegGroup) {
        resolve({ tx: 0, ty: 0, pivotX: 603, pivotY: 264 });
        return;
      }

      const tendonPoint = getTendonStrikePoint();
      const targetPivotX = tendonPoint ? tendonPoint.x + 10 : 613;
      const targetPivotY = tendonPoint ? tendonPoint.y : 264;
      const baseTranslate = parseTranslate(hammerBaseTransform);
      const hammerHeadCenter = getHammerHeadCenter();

      const targetTranslate = {
        x: baseTranslate.x + (targetPivotX - hammerHeadCenter.x),
        y: baseTranslate.y + (targetPivotY - hammerHeadCenter.y)
      };

      const duration = 260;
      const start = performance.now();

      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - (1 - t) * (1 - t);
        const tx = baseTranslate.x + (targetTranslate.x - baseTranslate.x) * eased;
        const ty = baseTranslate.y + (targetTranslate.y - baseTranslate.y) * eased;
        hammer.setAttribute("transform", `translate(${tx.toFixed(2)} ${ty.toFixed(2)})`);

        if (t < 1) {
          requestAnimationFrame(tick);
          return;
        }

        resolve({ tx: targetTranslate.x, ty: targetTranslate.y, pivotX: targetPivotX, pivotY: targetPivotY });
      };

      requestAnimationFrame(tick);
    });
  }

  function strikeHammer(tx, ty, pivotX, pivotY) {
    return new Promise((resolve) => {
      const duration = 560;
      const start = performance.now();
      const keyTimes = [0, 0.45, 0.72, 1];
      const keyAngles = [0, -34, 12, 0];

      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        let angle = 0;

        for (let i = 0; i < keyTimes.length - 1; i += 1) {
          const t0 = keyTimes[i];
          const t1 = keyTimes[i + 1];
          if (t >= t0 && t <= t1) {
            const local = (t - t0) / (t1 - t0 || 1);
            angle = keyAngles[i] + (keyAngles[i + 1] - keyAngles[i]) * local;
            break;
          }
        }

        hammer.setAttribute(
          "transform",
          `translate(${tx.toFixed(2)} ${ty.toFixed(2)}) rotate(${angle.toFixed(2)} ${pivotX.toFixed(2)} ${pivotY.toFixed(2)})`
        );

        if (t < 1) {
          requestAnimationFrame(tick);
          return;
        }

        hammer.setAttribute("transform", `translate(${tx.toFixed(2)} ${ty.toFixed(2)})`);
        resolve();
      };

      requestAnimationFrame(tick);
    });
  }

  function moveHammerHome(fromTx, fromTy) {
    return new Promise((resolve) => {
      const baseTranslate = parseTranslate(hammerBaseTransform);
      const duration = 420;
      const start = performance.now();

      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - (1 - t) * (1 - t);
        const tx = fromTx + (baseTranslate.x - fromTx) * eased;
        const ty = fromTy + (baseTranslate.y - fromTy) * eased;
        hammer.setAttribute("transform", `translate(${tx.toFixed(2)} ${ty.toFixed(2)})`);

        if (t < 1) {
          requestAnimationFrame(tick);
          return;
        }

        hammer.setAttribute("transform", hammerBaseTransform);
        resolve();
      };

      requestAnimationFrame(tick);
    });
  }

  function contractQuadriceps() {
    if (!quadriceps) return;

    quadriceps.animate(
      [
        { transform: "scaleX(1)", transformOrigin: "center center", transformBox: "fill-box" },
        { transform: "scaleX(0.78)", transformOrigin: "center center", transformBox: "fill-box", offset: 0.45 },
        { transform: "scaleX(1)", transformOrigin: "center center", transformBox: "fill-box" }
      ],
      { duration: 520, easing: "cubic-bezier(0.2, 0.9, 0.3, 1)" }
    );
  }

  function kickLowerLeg() {
    if (!lowerLegGroup) return;

    const baseTransform = lowerLegGroup.getAttribute("transform") || "";
    const pivotX = patella ? Number(patella.getAttribute("cx")) : 571.41;
    const pivotY = patella ? Number(patella.getAttribute("cy")) : 231.02;

    if (!Number.isFinite(pivotX) || !Number.isFinite(pivotY)) {
      return;
    }

    if (lowerLegRaf) {
      cancelAnimationFrame(lowerLegRaf);
      lowerLegRaf = null;
    }

    const duration = 400;
    const maxKickDeg = -30;
    const split = 0.45;
    const startTime = performance.now();

    const easeInOut = (t) => 0.5 - 0.5 * Math.cos(Math.PI * t);

    const tick = (now) => {
      const t = Math.min(1, (now - startTime) / duration);
      let angle;

      if (t <= split) {
        angle = maxKickDeg * easeInOut(t / split);
      } else {
        angle = maxKickDeg * (1 - easeInOut((t - split) / (1 - split)));
      }

      const kickTransform = `${baseTransform} rotate(${angle.toFixed(2)} ${pivotX.toFixed(2)} ${pivotY.toFixed(2)})`.trim();
      lowerLegGroup.setAttribute("transform", kickTransform);

      if (t < 1) {
        lowerLegRaf = requestAnimationFrame(tick);
      } else {
        lowerLegGroup.setAttribute("transform", baseTransform);
        lowerLegRaf = null;
      }
    };

    lowerLegRaf = requestAnimationFrame(tick);
  }

  async function playReflexDemo() {
    if (isAnimating) return;
    isAnimating = true;
    playBtn.textContent = "Animating...";
    playBtn.disabled = true;
    setArcZonesVisible(false);

    // Keep the pulse marker visually above all SVG elements while animating.
    svg.appendChild(impulseDot);

    const hammerPlacement = await moveHammerToLowerLegTop();
    await strikeHammer(hammerPlacement.tx, hammerPlacement.ty, hammerPlacement.pivotX, hammerPlacement.pivotY);
    await moveHammerHome(hammerPlacement.tx, hammerPlacement.ty);

    impulseDot.style.opacity = "1";
    moveDotToPathStart(sensoryPath);
    await animateAlongPath(sensoryPath, 1020);
    await animateAlongPath(relayPath, 420);
    await animateAlongPath(motorPath, 940);
    contractQuadriceps();
    kickLowerLeg();

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
      setArcZonesVisible(true);
      playBtn.disabled = false;
      playBtn.textContent = "Play Knee-Jerk Animation";
      isAnimating = false;
    }, 380);
  }

  playBtn.addEventListener("click", playReflexDemo);
}

function setupMicroscopy() {
  const stage = document.getElementById("microscopyStage");
  const microscopyImage = document.getElementById("microscopyImage");
  const scanLine = document.getElementById("scanLine");
  const title = document.getElementById("structureTitle");
  const text = document.getElementById("structureText");
  const legend = document.getElementById("structureLegend");
  const hotspots = [...document.querySelectorAll(".hotspot")];
  const fadingHotspots = [...document.querySelectorAll(".hotspot.fade-in-target")];

  if (!stage || !microscopyImage || !scanLine) return;

  let revealStep = 2;
  let revealStarted = false;

  function applyMicroscopyReveal() {
    const progress = Math.min(1, Math.max(0.2, revealStep / 10));
    const grayscale = Math.round((1 - progress) * 100);
    const saturation = progress.toFixed(2);

    microscopyImage.style.opacity = progress.toFixed(2);
    microscopyImage.style.filter = `grayscale(${grayscale}%) saturate(${saturation}) contrast(1.03)`;

    fadingHotspots.forEach((spot) => {
      spot.style.opacity = progress.toFixed(2);
    });
  }

  applyMicroscopyReveal();

  function advanceMicroscopyReveal() {
    revealStep = Math.min(10, revealStep + 1);
    applyMicroscopyReveal();
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || revealStarted) return;
        revealStarted = true;
        stage.classList.add("reveal-active");
        observer.disconnect();
      });
    },
    { threshold: 0.35 }
  );

  observer.observe(stage);
  scanLine.addEventListener("animationiteration", () => {
    if (!revealStarted || revealStep >= 10) return;
    advanceMicroscopyReveal();
  });

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
          { transform: "scale(1)" },
          { transform: "scale(1.015)" },
          { transform: "scale(1)" }
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
  const highlightedParts = [];

  svg.innerHTML = "";
  neuroneName.textContent = data.name;
  neuroneDesc.textContent = data.desc;

  function registerPart(el, role, partKind) {
    el.classList.add("neurone-part", `role-${role}`);
    el.classList.add(partKind === "fill" ? "part-fill" : "part-stroke");
    return el;
  }

  function clearHighlights() {
    highlightedParts.forEach((el) => el.classList.remove("highlighted"));
    highlightedParts.length = 0;
  }

  function highlightRoles(roles) {
    clearHighlights();
    roles.forEach((role) => {
      svg.querySelectorAll(`.neurone-part.role-${role}`).forEach((el) => {
        if (!el.classList.contains("highlighted")) {
          el.classList.add("highlighted");
          highlightedParts.push(el);
        }
      });
    });
  }

  function rolesForNode(node) {
    const title = node.title.toLowerCase();

    if (title.includes("cell body")) return ["cell-body"];
    if (title.includes("myelin sheath")) return ["myelin-sheath"];
    if (title.includes("axon terminals")) return ["axon-terminals"];
    if (title.includes("synaptic terminal")) return ["axon-terminals"];
    if (title.includes("dendrites")) return ["dendrites"];
    if (title.includes("receptor ending")) return ["dendrites"];
    if (title.includes("axon")) return ["axon"];
    if (title.includes("peripheral process")) return ["axon"];
    if (title.includes("central process")) return ["axon"];

    return ["axon"];
  }

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", data.path);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "#155ca7");
  path.setAttribute("stroke-width", "9");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-dasharray", "1600");
  path.setAttribute("stroke-dashoffset", "1600");
  path.style.animation = "dash 1.3s ease forwards";
  registerPart(path, "axon", "stroke");
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
    registerPart(dendrite, "dendrites", "stroke");
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
    registerPart(soma, "cell-body", "fill");
    svg.appendChild(soma);

    const nucleus = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    nucleus.setAttribute("cx", data.soma.x + 5);
    nucleus.setAttribute("cy", data.soma.y - 3);
    nucleus.setAttribute("r", Math.max(5, data.soma.r * 0.32));
    nucleus.setAttribute("fill", "#ffd166");
    nucleus.setAttribute("stroke", "#d58a1d");
    nucleus.setAttribute("stroke-width", "1.5");
    registerPart(nucleus, "cell-body", "fill");
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
    registerPart(sheath, "myelin-sheath", "fill");
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
    registerPart(branch, "axon-terminals", "stroke");
    svg.appendChild(branch);

    const bouton = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    bouton.setAttribute("cx", terminal.x2);
    bouton.setAttribute("cy", terminal.y2);
    bouton.setAttribute("r", "4");
    bouton.setAttribute("fill", "#155ca7");
    registerPart(bouton, "axon-terminals", "fill");
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
      highlightRoles(rolesForNode(node));
      neuroneDesc.textContent = `${node.title}: ${node.text}`;
    }

    labelBox.addEventListener("mouseenter", activateLabel);
    labelBox.addEventListener("click", activateLabel);
    labelBox.addEventListener("touchstart", activateLabel, { passive: true });
    labelBox.addEventListener("focus", activateLabel);

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
  let ionAnimFrame = null;
  let ionDrift = 0;

  const svgNs = "http://www.w3.org/2000/svg";
  const ionNaMarker = document.createElementNS(svgNs, "text");
  ionNaMarker.setAttribute("class", "salt-ion-marker na");
  ionNaMarker.textContent = "Na+ in";

  const ionKMarker = document.createElementNS(svgNs, "text");
  ionKMarker.setAttribute("class", "salt-ion-marker k");
  ionKMarker.textContent = "K+ out";

  const ionDotsNa = [];
  const ionDotsK = [];
  const chargeLabels = [];

  nodes.forEach((node, index) => {
    const cx = Number(node.getAttribute("cx"));
    const cy = Number(node.getAttribute("cy"));

    const charge = document.createElementNS(svgNs, "text");
    charge.setAttribute("class", "salt-charge-label neutral");
    charge.setAttribute("x", String(cx - 4));
    charge.setAttribute("y", String(cy - 17));
    charge.textContent = "0";
    charge.dataset.nodeIndex = String(index);
    chargeLabels.push(charge);
    saltSvg.appendChild(charge);
  });

  for (let i = 0; i < 12; i += 1) {
    const na = document.createElementNS(svgNs, "circle");
    na.setAttribute("class", "salt-ion-dot na");
    na.setAttribute("r", "1.35");
    na.dataset.dotIndex = String(i);
    ionDotsNa.push(na);
    saltSvg.appendChild(na);

    const k = document.createElementNS(svgNs, "circle");
    k.setAttribute("class", "salt-ion-dot k");
    k.setAttribute("r", "1.35");
    k.dataset.dotIndex = String(i);
    ionDotsK.push(k);
    saltSvg.appendChild(k);
  }

  saltSvg.appendChild(ionNaMarker);
  saltSvg.appendChild(ionKMarker);

  function setIonFlowVisible(isVisible) {
    [...ionDotsNa, ...ionDotsK, ...chargeLabels].forEach((el) => {
      el.classList.toggle("show", isVisible);
    });
  }

  function renderIonParticles() {
    const phase = ionPhases[ionPhaseStep % ionPhases.length];
    const segmentCount = jumps.length;

    ionDotsNa.forEach((dot, idx) => {
      const segmentIndex = (currentNode + idx) % segmentCount;
      const jump = jumps[segmentIndex];
      const x1 = Number(jump.getAttribute("x1"));
      const x2 = Number(jump.getAttribute("x2"));
      const y = Number(jump.getAttribute("y1"));
      const t = (idx / ionDotsNa.length + ionDrift) % 1;
      const x = x1 + (x2 - x1) * t;
      const yOffset = idx % 2 === 0 ? -1.6 : 1.6;

      dot.setAttribute("cx", String(x));
      dot.setAttribute("cy", String(y + yOffset));
      dot.classList.toggle("phase-active", phase.id === "na");
    });

    ionDotsK.forEach((dot, idx) => {
      const segmentIndex = (currentNode + idx + 1) % segmentCount;
      const jump = jumps[segmentIndex];
      const x1 = Number(jump.getAttribute("x1"));
      const x2 = Number(jump.getAttribute("x2"));
      const y = Number(jump.getAttribute("y1"));
      const t = (idx / ionDotsK.length + ionDrift * 0.9) % 1;
      const x = x2 - (x2 - x1) * t;
      const aroundOffset = idx % 2 === 0 ? -17 : 17;

      dot.setAttribute("cx", String(x));
      dot.setAttribute("cy", String(y + aroundOffset));
      dot.classList.toggle("phase-active", phase.id === "k");
    });
  }

  function renderNodeCharges() {
    const phase = ionPhases[ionPhaseStep % ionPhases.length];

    chargeLabels.forEach((label, idx) => {
      label.classList.remove("positive", "negative", "neutral", "mixed");

      if (idx === currentNode) {
        if (phase.id === "na") {
          label.textContent = "+";
          label.classList.add("positive");
        } else if (phase.id === "k") {
          label.textContent = "±";
          label.classList.add("mixed");
        } else {
          label.textContent = "-";
          label.classList.add("negative");
        }
        return;
      }

      if (idx < currentNode) {
        label.textContent = "-";
        label.classList.add("negative");
        return;
      }

      label.textContent = "0";
      label.classList.add("neutral");
    });
  }

  function stopIonAnimation() {
    if (ionAnimFrame) {
      cancelAnimationFrame(ionAnimFrame);
      ionAnimFrame = null;
    }
  }

  function runIonAnimation() {
    stopIonAnimation();

    const tick = () => {
      ionDrift = (ionDrift + Math.max(0.005, 850 / (intervalMs * 180))) % 1;
      renderIonParticles();
      ionAnimFrame = requestAnimationFrame(tick);
    };

    ionAnimFrame = requestAnimationFrame(tick);
  }

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
      setIonFlowVisible(false);
      stopIonAnimation();
      return;
    }

    if (!ionModeEnabled) {
      ionStatus.textContent = "Ion mode is off. Enable it to see Na+ and K+ behavior at the active node.";
      ionNaMarker.classList.remove("show");
      ionKMarker.classList.remove("show");
      setIonFlowVisible(false);
      stopIonAnimation();
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
    setIonFlowVisible(true);

    if (phase.id === "na") {
      active.classList.add("ion-na");
      spark.classList.add("ion-na");
    } else if (phase.id === "k") {
      active.classList.add("ion-k");
      spark.classList.add("ion-k");
    }

    renderNodeCharges();
    renderIonParticles();
    runIonAnimation();

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
  const checkCompareBtn = document.getElementById("checkCompare");
  const drops = {
    motor: document.getElementById("motorDrop"),
    sensory: document.getElementById("sensoryDrop"),
    both: document.getElementById("bothDrop")
  };

  function clearCompareSuccessState() {
    checkCompareBtn.classList.remove("compare-correct");
  }

  function reset() {
    bank.innerHTML = "";
    feedback.textContent = "";
    feedback.className = "feedback";
    clearCompareSuccessState();

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
        clearCompareSuccessState();
      });
    });

    setDropHandlers(bank, (id) => {
      if (!id) return;
      const chip = document.querySelector(`.chip[data-id="${id}"]`);
      if (!chip) return;
      bank.appendChild(chip);
      clearCompareSuccessState();
    });
  }

  checkCompareBtn.addEventListener("click", () => {
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
      checkCompareBtn.classList.add("compare-correct");
      return;
    }

    clearCompareSuccessState();
    feedback.textContent = `You have ${correct}/${total} correct. Revisit impulse direction and cell body location.`;
    feedback.className = "feedback bad";
  });

  document.getElementById("resetCompare").addEventListener("click", reset);
  reset();
}

function setupNerveImpulseMeasurement() {
  const measureGrid = document.querySelector(".measure-grid");
  const bank = document.getElementById("hhElectrodeBank");
  const insideDrop = document.getElementById("hhInsideDrop");
  const outsideDrop = document.getElementById("hhOutsideDrop");
  const electrodes = [...document.querySelectorAll(".electrode-chip")];
  const feedback = document.getElementById("hhFeedback");
  const trace = document.getElementById("hhTrace");
  const readout = document.getElementById("hhScopeReadout");
  const stimulateBtn = document.getElementById("hhStimulate");
  const wireA = document.getElementById("hhWireA");
  const wireB = document.getElementById("hhWireB");
  const wireBankA = document.getElementById("hhWireBankA");
  const wireBankB = document.getElementById("hhWireBankB");
  const leadA = document.getElementById("hhLeadA");
  const leadB = document.getElementById("hhLeadB");
  const wireLayer = document.getElementById("hhWireLayer");
  const jackA = document.getElementById("hhJackA");
  const jackB = document.getElementById("hhJackB");

  if (!measureGrid || !bank || !insideDrop || !outsideDrop || !electrodes.length || !trace || !readout || !feedback || !stimulateBtn || !wireA || !wireB || !jackA || !jackB || !wireBankA || !wireBankB || !leadA || !leadB || !wireLayer) {
    return;
  }

  let draggedId = null;
  let draggingId = null;
  let mobileDrag = null;
  let scopeFrame = null;
  let apProgress = null;
  let idlePhase = 0;

  const wireMap = {
    A: { path: wireA, jack: jackA },
    B: { path: wireB, jack: jackB }
  };

  const leadMap = {
    A: leadA,
    B: leadB
  };

  function toGridPoint(clientX, clientY) {
    const gridRect = measureGrid.getBoundingClientRect();
    return {
      x: clientX - gridRect.left,
      y: clientY - gridRect.top
    };
  }

  function syncWireViewport() {
    const gridRect = measureGrid.getBoundingClientRect();
    wireLayer.setAttribute("viewBox", `0 0 ${gridRect.width.toFixed(2)} ${gridRect.height.toFixed(2)}`);
  }

  function elementCenterInGrid(el) {
    const rect = el.getBoundingClientRect();
    return toGridPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
  }

  function drawWire(pathEl, from, to) {
    const dx = to.x - from.x;
    const dir = dx >= 0 ? 1 : -1;
    const bend = Math.max(65, Math.abs(dx) * 0.42);
    const c1x = from.x + dir * bend;
    const c1y = from.y;
    const c2x = to.x - dir * bend;
    const c2y = to.y;
    return `M ${from.x.toFixed(2)} ${from.y.toFixed(2)} C ${c1x.toFixed(2)} ${c1y.toFixed(2)} ${c2x.toFixed(2)} ${c2y.toFixed(2)} ${to.x.toFixed(2)} ${to.y.toFixed(2)}`;
  }

  function setWire(pathEl, from, to) {
    pathEl.setAttribute("d", drawWire(pathEl, from, to));
  }

  function bankAnchorInGrid(ratioY) {
    const bankRect = bank.getBoundingClientRect();
    const narrowScreen = window.matchMedia("(max-width: 900px)").matches;
    return toGridPoint(
      narrowScreen ? bankRect.left : bankRect.right,
      bankRect.top + bankRect.height * ratioY
    );
  }

  function electrodeBackInGrid(el) {
    const rect = el.getBoundingClientRect();
    return toGridPoint(rect.left, rect.top + rect.height / 2);
  }

  function updateBankConnectionWires() {
    const narrowScreen = window.matchMedia("(max-width: 900px)").matches;
    const jackAPoint = elementCenterInGrid(jackA);
    const jackBPoint = elementCenterInGrid(jackB);

    if (narrowScreen) {
      const bankMid = bankAnchorInGrid(0.53);
      const trunkJoin = {
        x: Math.min(jackAPoint.x, jackBPoint.x) - 26,
        y: (jackAPoint.y + jackBPoint.y) / 2
      };

      const trunk = drawWire(wireBankA, bankMid, trunkJoin);
      const branchA = drawWire(wireBankA, trunkJoin, jackAPoint);
      wireBankA.setAttribute("d", `${trunk} ${branchA}`);

      setWire(wireBankB, trunkJoin, jackBPoint);
      return;
    }

    setWire(wireBankA, bankAnchorInGrid(0.35), jackAPoint);
    setWire(wireBankB, bankAnchorInGrid(0.72), jackBPoint);
  }

  function updateWires(pointerById = {}) {
    syncWireViewport();
    updateBankConnectionWires();

    ["A", "B"].forEach((id) => {
      const electrode = document.querySelector(`.electrode-chip[data-id="${id}"]`);
      const targetWire = wireMap[id];
      const leadWire = leadMap[id];
      if (!electrode || !targetWire || !leadWire) return;

      const bankAnchor = bankAnchorInGrid(id === "A" ? 0.35 : 0.72);
      if (bank.contains(electrode) && !pointerById[id]) {
        leadWire.setAttribute("d", "");
      } else {
        const leadStart = pointerById[id] || electrodeBackInGrid(electrode);
        setWire(leadWire, leadStart, bankAnchor);
      }

      // Direct electrode-to-jack paths are intentionally hidden so each electrode
      // reads as one continuous cable via the bank on all layouts.
      targetWire.path.setAttribute("d", "");
    });
  }

  function clearDropHighlights() {
    insideDrop.classList.remove("active");
    outsideDrop.classList.remove("active");
    bank.classList.remove("active");
  }

  function resolveDropTargetFromPoint(clientX, clientY) {
    const el = document.elementFromPoint(clientX, clientY);
    if (!el) return null;
    return el.closest("#hhInsideDrop, #hhOutsideDrop, #hhElectrodeBank");
  }

  function isMobilePointer(event) {
    return event.pointerType === "touch" || event.pointerType === "pen" || window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  }

  function startMobileDrag(event, electrodeEl) {
    if (!isMobilePointer(event)) return;

    event.preventDefault();

    const rect = electrodeEl.getBoundingClientRect();
    const ghost = electrodeEl.cloneNode(true);
    ghost.removeAttribute("id");
    ghost.style.position = "fixed";
    ghost.style.left = `${rect.left.toFixed(2)}px`;
    ghost.style.top = `${rect.top.toFixed(2)}px`;
    ghost.style.width = `${rect.width.toFixed(2)}px`;
    ghost.style.zIndex = "2200";
    ghost.style.pointerEvents = "none";
    ghost.classList.add("mobile-drag-ghost");
    document.body.appendChild(ghost);

    draggedId = electrodeEl.dataset.id;
    draggingId = draggedId;

    mobileDrag = {
      id: draggedId,
      source: electrodeEl,
      ghost,
      pointerId: event.pointerId,
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top
    };

    electrodeEl.style.visibility = "hidden";
    updateWires({ [draggedId]: toGridPoint(event.clientX, event.clientY) });
  }

  function moveMobileDrag(event) {
    if (!mobileDrag) return;
    event.preventDefault();

    const { ghost, offsetX, offsetY, id } = mobileDrag;
    ghost.style.left = `${(event.clientX - offsetX).toFixed(2)}px`;
    ghost.style.top = `${(event.clientY - offsetY).toFixed(2)}px`;

    const target = resolveDropTargetFromPoint(event.clientX, event.clientY);
    clearDropHighlights();
    target?.classList.add("active");

    updateWires({ [id]: toGridPoint(event.clientX, event.clientY) });
  }

  function endMobileDrag(event) {
    if (!mobileDrag) return;

    const { source, ghost, id } = mobileDrag;
    const target = resolveDropTargetFromPoint(event.clientX, event.clientY);

    if (target === insideDrop || target === outsideDrop) {
      placeElectrode(target, id);
    } else if (target === bank) {
      bank.appendChild(source);
      updateMeasurementState();
      updateWires();
    } else {
      updateWires();
    }

    source.style.visibility = "";
    ghost.remove();
    mobileDrag = null;
    draggingId = null;
    clearDropHighlights();
    updateWires();
  }

  electrodes.forEach((el) => {
    el.addEventListener("dragstart", (event) => {
      draggedId = el.dataset.id;
      draggingId = draggedId;
      event.dataTransfer.setData("text/plain", draggedId);
      updateWires();
    });

    el.addEventListener("drag", (event) => {
      if (!draggingId || event.clientX <= 0 || event.clientY <= 0) return;
      const pointer = toGridPoint(event.clientX, event.clientY);
      updateWires({ [draggingId]: pointer });
    });

    el.addEventListener("dragend", () => {
      draggingId = null;
      updateWires();
    });

    el.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse") return;
      el.setPointerCapture(event.pointerId);
      startMobileDrag(event, el);
    });

    el.addEventListener("pointermove", (event) => {
      if (!mobileDrag || mobileDrag.id !== el.dataset.id || mobileDrag.pointerId !== event.pointerId) return;
      moveMobileDrag(event);
    });

    const finishPointerDrag = (event) => {
      if (!mobileDrag || mobileDrag.id !== el.dataset.id || mobileDrag.pointerId !== event.pointerId) return;
      endMobileDrag(event);
      if (el.hasPointerCapture(event.pointerId)) {
        el.releasePointerCapture(event.pointerId);
      }
    };

    el.addEventListener("pointerup", finishPointerDrag);
    el.addEventListener("pointercancel", finishPointerDrag);
  });

  function placeElectrode(dropEl, id) {
    if (!id) return;
    const electrode = document.querySelector(`.electrode-chip[data-id="${id}"]`);
    if (!electrode) return;

    const occupied = dropEl.querySelector(".electrode-chip");
    if (occupied && occupied.dataset.id !== id) {
      bank.appendChild(occupied);
    }

    dropEl.appendChild(electrode);
    updateMeasurementState();
    updateWires();
  }

  function wireDropzone(dropEl) {
    dropEl.addEventListener("dragover", (event) => {
      event.preventDefault();
      dropEl.classList.add("active");
    });

    dropEl.addEventListener("dragleave", () => {
      dropEl.classList.remove("active");
    });

    dropEl.addEventListener("drop", (event) => {
      event.preventDefault();
      dropEl.classList.remove("active");
      const id = event.dataTransfer.getData("text/plain") || draggedId;
      placeElectrode(dropEl, id);
    });
  }

  wireDropzone(insideDrop);
  wireDropzone(outsideDrop);

  bank.addEventListener("dragover", (event) => {
    event.preventDefault();
    bank.classList.add("active");
  });

  bank.addEventListener("dragleave", () => {
    bank.classList.remove("active");
  });

  bank.addEventListener("drop", (event) => {
    event.preventDefault();
    bank.classList.remove("active");
    const id = event.dataTransfer.getData("text/plain") || draggedId;
    if (!id) return;
    const electrode = document.querySelector(`.electrode-chip[data-id="${id}"]`);
    if (!electrode) return;
    bank.appendChild(electrode);
    updateMeasurementState();
    updateWires();
  });

  function inCorrectRecordingState() {
    const hasInside = Boolean(insideDrop.querySelector(".electrode-chip"));
    const hasOutside = Boolean(outsideDrop.querySelector(".electrode-chip"));
    return hasInside && hasOutside;
  }

  function actionPotentialValue(t) {
    if (t < 0.12) return -70;
    if (t < 0.2) return -70 + ((t - 0.12) / 0.08) * 105;
    if (t < 0.34) return 35 - ((t - 0.2) / 0.14) * 117;
    if (t < 0.5) return -82 + ((t - 0.34) / 0.16) * 12;
    return -70;
  }

  function voltageToY(v) {
    const clamped = Math.max(-90, Math.min(40, v));
    // Keep 0 mV aligned to the drawn 0-axis at y=130 while preserving -90 mV at y=240.
    return 130 - clamped * (110 / 90);
  }

  function renderScopeTrace(isRecording) {
    const points = [];
    const sampleCount = 120;

    for (let i = 0; i <= sampleCount; i += 1) {
      const x = 80 + (i / sampleCount) * 530;
      let v;

      if (!isRecording) {
        // Low-amplitude environmental noise around 0 mV before measurement is configured.
        v =
          Math.sin((i / sampleCount + idlePhase) * Math.PI * 8) * 0.85 +
          Math.sin((i / sampleCount + idlePhase * 1.7) * Math.PI * 17) * 0.25;
      } else if (apProgress === null) {
        v = -70;
      } else {
        const waveT = i / sampleCount - apProgress + 0.18;
        if (waveT >= 0 && waveT <= 1) {
          v = actionPotentialValue(waveT);
        } else {
          v = -70;
        }
      }

      points.push(`${x.toFixed(1)},${voltageToY(v).toFixed(1)}`);
    }

    trace.setAttribute("points", points.join(" "));
  }

  function stopScopeAnimation() {
    if (scopeFrame) {
      cancelAnimationFrame(scopeFrame);
      scopeFrame = null;
    }
  }

  function startScopeAnimation() {
    stopScopeAnimation();

    const tick = () => {
      const recording = inCorrectRecordingState();
      if (!recording) {
        idlePhase = (idlePhase + 0.01) % 1;
      }

      if (recording && apProgress !== null) {
        apProgress += 0.009;
        if (apProgress > 1.25) {
          apProgress = null;
        }
      }

      renderScopeTrace(recording);

      if (recording) {
        if (apProgress !== null) {
          const t = Math.max(0, Math.min(1, apProgress));
          readout.textContent = `Vm: ${actionPotentialValue(t).toFixed(1)} mV | Time window: 10 ms`;
        } else {
          readout.textContent = "Vm: -70.0 mV | Resting membrane potential";
        }
      } else {
        readout.textContent = "Vm: 0.0 mV | Place electrodes to begin recording.";
      }

      scopeFrame = requestAnimationFrame(tick);
    };

    scopeFrame = requestAnimationFrame(tick);
  }

  function updateMeasurementState() {
    const recording = inCorrectRecordingState();
    insideDrop.classList.toggle("placed", Boolean(insideDrop.querySelector(".electrode-chip")));
    outsideDrop.classList.toggle("placed", Boolean(outsideDrop.querySelector(".electrode-chip")));
    stimulateBtn.disabled = !recording;

    if (recording) {
      feedback.textContent = "Recording configured. Click Stimulate Neuron to trigger an action potential.";
      feedback.className = "feedback good";
      return;
    }

    apProgress = null;

    feedback.textContent = "Place one electrode inside the axon and the other outside to measure membrane potential.";
    feedback.className = "feedback bad";
  }

  stimulateBtn.addEventListener("click", () => {
    if (!inCorrectRecordingState()) {
      feedback.textContent = "Place one electrode inside and one outside before stimulating.";
      feedback.className = "feedback bad";
      return;
    }

    apProgress = 0;
    feedback.textContent = "Neuron stimulated. Action potential propagating across the oscilloscope trace.";
    feedback.className = "feedback good";
  });

  window.addEventListener("resize", () => {
    updateWires();
  });

  window.addEventListener("scroll", () => {
    updateWires();
  }, { passive: true });

  updateMeasurementState();
  renderScopeTrace(false);
  updateWires();
  startScopeAnimation();
}

function setupActionPotentials() {
  const model = document.getElementById("apNodeModel");
  const naChannel = document.getElementById("apNaChannel");
  const kChannel = document.getElementById("apKChannel");
  const pump = document.getElementById("apPump");
  const phaseLabel = document.getElementById("apPhaseLabel");
  const status = document.getElementById("apStatus");
  const phaseList = document.getElementById("apPhaseList");
  const playPauseBtn = document.getElementById("apPlayPause");
  const stepBtn = document.getElementById("apStep");
  const resetBtn = document.getElementById("apReset");
  const traceBase = document.getElementById("apTraceBase");
  const traceMarker = document.getElementById("apTraceMarker");
  const chargeOut = model.querySelector(".ap-charge-out");
  const chargeIn = model.querySelector(".ap-charge-in");
  const diffusionIons = [...model.querySelectorAll(".ap-ion")];
  const randomIons = [...model.querySelectorAll(".ap-random-ion")];

  if (!model || !naChannel || !kChannel || !pump || !phaseLabel || !status || !phaseList || !playPauseBtn || !stepBtn || !resetBtn || !traceBase || !traceMarker || !chargeOut || !chargeIn) {
    return;
  }

  const phases = [
    {
      id: "resting",
      label: "Resting potential",
      text: "Voltage-gated Na+ and K+ channels are closed. Na+/K+ ATPase maintains ion gradients."
    },
    {
      id: "threshold",
      label: "Threshold potential",
      text: "Small depolarizing inputs bring the membrane toward threshold, priming the channel to open in the next phase."
    },
    {
      id: "depolarization",
      label: "Depolarization",
      text: "Voltage-gated Na+ channels open. Na+ rushes into the axon at this node of Ranvier."
    },
    {
      id: "repolarization",
      label: "Repolarization",
      text: "Na+ channels inactivate while voltage-gated K+ channels open, driving K+ out of the cell."
    },
    {
      id: "hyperpolarization",
      label: "Hyperpolarization",
      text: "K+ channels remain open briefly, causing membrane potential to dip below resting level."
    },
    {
      id: "recovery",
      label: "Recovery",
      text: "Na+/K+ ATPase helps restore the baseline ionic distribution for the next impulse."
    }
  ];

  let phaseIndex = 0;
  let phaseId = phases[0].id;
  let isPlaying = false;
  let timer = null;
  let diffusionTimer = null;
  let randomIonTimer = null;
  let pumpTimer = null;
  const crossingTimers = new Set();
  const pumpTransitTimers = new Set();

  const diffusionStates = diffusionIons.map((ion) => ({
    el: ion,
    type: ion.classList.contains("ap-ion-na") ? "na" : "k",
    side: ion.classList.contains("ap-ion-na") ? "outside" : "inside",
    crossing: false,
    pumping: false,
    releaseCooldownUntil: 0,
    x: ion.offsetLeft,
    y: ion.offsetTop
  }));
  const maxDynamicDiffusionIons = 34;

  function actionPotentialValue(t) {
    if (t < 0.12) return -70;
    if (t < 0.2) return -70 + ((t - 0.12) / 0.08) * 15;
    if (t < 0.28) return -55 + ((t - 0.2) / 0.08) * 90;
    if (t < 0.42) return 35 - ((t - 0.28) / 0.14) * 117;
    if (t < 0.58) return -82 + ((t - 0.42) / 0.16) * 12;
    return -70;
  }

  function voltageToTraceY(v) {
    const clamped = Math.max(-90, Math.min(40, v));
    return 85 - clamped * (65 / 90);
  }

  function tracePointForT(t) {
    const x = 60 + t * 320;
    const y = voltageToTraceY(actionPotentialValue(t));
    return { x, y };
  }

  function buildTracePoints(startT, endT, steps) {
    const points = [];
    for (let i = 0; i <= steps; i += 1) {
      const t = startT + ((endT - startT) * i) / steps;
      const p = tracePointForT(t);
      points.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
    }
    return points.join(" ");
  }

  const segmentRanges = {
    resting: [0, 0.12],
    threshold: [0.12, 0.2],
    depolarization: [0.2, 0.28],
    repolarization: [0.28, 0.42],
    hyperpolarization: [0.42, 0.58],
    recovery: [0.58, 1]
  };

  const chargeByPhase = {
    resting: { out: "+", in: "-" },
    threshold: { out: "+", in: "-" },
    depolarization: { out: "-", in: "+" },
    repolarization: { out: "+", in: "-" },
    hyperpolarization: { out: "+", in: "-" },
    recovery: { out: "+", in: "-" }
  };

  traceBase.setAttribute("points", buildTracePoints(0, 1, 140));

  Object.entries(segmentRanges).forEach(([id, range]) => {
    const seg = document.getElementById(`apTraceSeg-${id}`);
    if (!seg) return;
    seg.setAttribute("points", buildTracePoints(range[0], range[1], 24));
  });

  function setCharge(el, sign) {
    const changed = el.textContent !== sign;
    el.textContent = sign;
    el.classList.toggle("positive", sign === "+");
    el.classList.toggle("negative", sign === "-");

    if (changed) {
      el.classList.remove("swap");
      // Force reflow so the swap animation restarts on each sign change.
      void el.offsetWidth;
      el.classList.add("swap");
    }
  }

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function getChannelCenterX(channelEl) {
    const channelRect = channelEl.getBoundingClientRect();
    const modelRect = model.getBoundingClientRect();
    return channelRect.left - modelRect.left + channelRect.width / 2;
  }

  function getDiffusionBounds(type, side) {
    const width = model.clientWidth;
    const height = model.clientHeight;
    const membraneY = height / 2;

    const sideTop = side === "outside" ? 20 : membraneY + 70;
    const sideBottom = side === "outside" ? membraneY - 78 : height - 26;

    if (type === "na") {
      return {
        minX: 16,
        maxX: Math.min(width * 0.56, width - 36),
        minY: sideTop,
        maxY: Math.max(sideTop + 8, sideBottom)
      };
    }

    return {
      minX: Math.max(16, width * 0.44),
      maxX: width - 36,
      minY: sideTop,
      maxY: Math.max(sideTop + 8, sideBottom)
    };
  }

  function applyIonPosition(state) {
    state.el.style.left = `${state.x.toFixed(1)}px`;
    state.el.style.top = `${state.y.toFixed(1)}px`;
  }

  function setIonTransportVisibility(state, visible) {
    state.el.style.opacity = visible ? "1" : "0";
  }

  function teleportIonWithoutTransition(state, x, y) {
    const prevTransition = state.el.style.transition;
    state.el.style.transition = "none";
    state.x = x;
    state.y = y;
    applyIonPosition(state);
    // Force style flush so the next move uses normal transitions.
    void state.el.offsetWidth;
    state.el.style.transition = prevTransition;
  }

  function createInjectedIon(type, side) {
    const ion = document.createElement("span");
    ion.className = `ap-ion ap-ion-${type}`;
    ion.setAttribute("aria-hidden", "true");
    ion.textContent = type === "na" ? "Na+" : "K+";
    model.appendChild(ion);

    const state = {
      el: ion,
      type,
      side,
      crossing: false,
      pumping: false,
      releaseCooldownUntil: 0,
      x: 0,
      y: 0
    };

    diffusionStates.push(state);
    return state;
  }

  function seedDiffusionPositions() {
    diffusionStates.forEach((state) => {
      const bounds = getDiffusionBounds(state.type, state.side);
      state.x = randomBetween(bounds.minX, bounds.maxX);
      state.y = randomBetween(bounds.minY, bounds.maxY);
      applyIonPosition(state);
    });
  }

  function clearCrossingTimers() {
    crossingTimers.forEach((id) => clearTimeout(id));
    crossingTimers.clear();
  }

  function clearPumpTransitTimers() {
    pumpTransitTimers.forEach((id) => clearTimeout(id));
    pumpTransitTimers.clear();
  }

  function startChannelCrossing(state, channelEl, destinationSide) {
    if (state.crossing) return;

    const membraneY = model.clientHeight / 2;
    const channelX = getChannelCenterX(channelEl);
    const approachY = destinationSide === "inside" ? membraneY - 46 : membraneY + 46;
    const destinationBounds = getDiffusionBounds(state.type, destinationSide);
    const destinationY = destinationSide === "inside"
      ? randomBetween(Math.max(destinationBounds.minY, membraneY + 84), destinationBounds.maxY)
      : randomBetween(destinationBounds.minY, Math.min(destinationBounds.maxY, membraneY - 84));

    state.crossing = true;
    state.x = clamp(channelX + randomBetween(-5, 5), destinationBounds.minX, destinationBounds.maxX);
    state.y = approachY;
    applyIonPosition(state);

    const travelTimer = setTimeout(() => {
      state.x = clamp(channelX + randomBetween(-9, 9), destinationBounds.minX, destinationBounds.maxX);
      state.y = destinationY;
      applyIonPosition(state);
      crossingTimers.delete(travelTimer);
    }, 170);

    const settleTimer = setTimeout(() => {
      state.side = destinationSide;
      state.crossing = false;
      crossingTimers.delete(settleTimer);
    }, 620);

    crossingTimers.add(travelTimer);
    crossingTimers.add(settleTimer);
  }

  function buildRepulsionVectors(states) {
    const vectors = new Map();
    const repulsionRadius = 34;
    const repulsionRadiusSq = repulsionRadius * repulsionRadius;
    const repulsionStrength = 4.8;
    const minDistance = 3;

    states.forEach((state) => {
      vectors.set(state, { x: 0, y: 0 });
    });

    for (let i = 0; i < states.length; i += 1) {
      for (let j = i + 1; j < states.length; j += 1) {
        const a = states[i];
        const b = states[j];

        if (a.side !== b.side) continue;

        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distSq = dx * dx + dy * dy;

        if (distSq > repulsionRadiusSq) continue;

        const distance = Math.max(minDistance, Math.sqrt(distSq));
        const falloff = 1 - distance / repulsionRadius;
        const force = falloff * falloff * repulsionStrength;
        const ux = dx / distance;
        const uy = dy / distance;

        const vecA = vectors.get(a);
        const vecB = vectors.get(b);

        vecA.x += ux * force;
        vecA.y += uy * force;
        vecB.x -= ux * force;
        vecB.y -= uy * force;
      }
    }

    return vectors;
  }

  function stepDiffusion() {
    const naOpen = phaseId === "depolarization";
    const kOpen = phaseId === "repolarization" || phaseId === "hyperpolarization";
    const naCrossChance = phaseId === "depolarization" ? 0.22 : 0;
    const activeStates = diffusionStates.filter((state) => !state.crossing && !state.pumping);
    const repulsion = buildRepulsionVectors(activeStates);

    activeStates.forEach((state) => {
      const repel = repulsion.get(state) || { x: 0, y: 0 };

      const bounds = getDiffusionBounds(state.type, state.side);
      state.x = clamp(state.x + randomBetween(-7, 7) + repel.x, bounds.minX, bounds.maxX);
      state.y = clamp(state.y + randomBetween(-5, 5) + repel.y, bounds.minY, bounds.maxY);
      applyIonPosition(state);

      if (state.type === "na" && state.side === "outside" && naOpen && Math.random() < naCrossChance) {
        startChannelCrossing(state, naChannel, "inside");
      }

      if (state.type === "k" && state.side === "inside" && kOpen && Math.random() < 0.12) {
        startChannelCrossing(state, kChannel, "outside");
      }
    });
  }

  function stopDiffusionMotion() {
    if (diffusionTimer) {
      clearInterval(diffusionTimer);
      diffusionTimer = null;
    }
    clearCrossingTimers();
  }

  function startDiffusionMotion() {
    stopDiffusionMotion();
    if (!diffusionStates.length) return;
    diffusionTimer = setInterval(stepDiffusion, 220);
  }

  function getPumpBounds() {
    const pumpRect = pump.getBoundingClientRect();
    const modelRect = model.getBoundingClientRect();
    return {
      left: pumpRect.left - modelRect.left,
      right: pumpRect.right - modelRect.left,
      top: pumpRect.top - modelRect.top,
      bottom: pumpRect.bottom - modelRect.top,
      centerX: pumpRect.left - modelRect.left + pumpRect.width / 2
    };
  }

  function pickTransportIons(type, side, count) {
    const candidates = diffusionStates.filter((state) => state.type === type && state.side === side && !state.crossing && !state.pumping);
    for (let i = candidates.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
    }
    return candidates.slice(0, count);
  }

  function queuePumpPhase(cb, delay) {
    const id = setTimeout(() => {
      cb();
      pumpTransitTimers.delete(id);
    }, delay);
    pumpTransitTimers.add(id);
  }

  function feedPumpSubstrates() {
    if (diffusionStates.length > maxDynamicDiffusionIons - 5) return;

    const naFeed = [
      createInjectedIon("na", "inside"),
      createInjectedIon("na", "inside"),
      createInjectedIon("na", "inside")
    ];
    const kFeed = [
      createInjectedIon("k", "outside"),
      createInjectedIon("k", "outside")
    ];

    const naBounds = getDiffusionBounds("na", "inside");
    const kBounds = getDiffusionBounds("k", "outside");

    naFeed.forEach((state, idx) => {
      state.side = "inside";
      state.crossing = true;
      state.x = clamp(randomBetween(naBounds.minX, naBounds.maxX) + idx * 4, naBounds.minX, naBounds.maxX);
      setIonTransportVisibility(state, true);
      teleportIonWithoutTransition(state, state.x, model.clientHeight + 90);

      queuePumpPhase(() => {
        state.y = clamp(naBounds.maxY - randomBetween(2, 16), naBounds.minY, naBounds.maxY);
        applyIonPosition(state);
      }, 30);

      queuePumpPhase(() => {
        state.crossing = false;
      }, 680);
    });

    kFeed.forEach((state, idx) => {
      state.side = "outside";
      state.crossing = true;
      state.x = clamp(randomBetween(kBounds.minX, kBounds.maxX) - idx * 5, kBounds.minX, kBounds.maxX);
      setIonTransportVisibility(state, true);
      teleportIonWithoutTransition(state, state.x, -90);

      queuePumpPhase(() => {
        state.y = clamp(kBounds.minY + randomBetween(2, 16), kBounds.minY, kBounds.maxY);
        applyIonPosition(state);
      }, 30);

      queuePumpPhase(() => {
        state.crossing = false;
      }, 680);
    });
  }

  function runPumpTransportCycle() {
    if (!(phaseId === "resting" || phaseId === "recovery")) return;

    const pumpFeedInMs = 760;
    const pumpEdgeStickMs = 700;
    const pumpTransitMs = 900;
    const pumpReleaseSettleMs = 1200;

    feedPumpSubstrates();

    queuePumpPhase(() => {
      const naToMove = pickTransportIons("na", "inside", 3);
      const kToMove = pickTransportIons("k", "outside", 2);

      if (naToMove.length < 3 || kToMove.length < 2) return;

      const bounds = getPumpBounds();
      const naIntakeY = bounds.bottom - 10;
      const naReleaseY = bounds.top - 20;
      const kIntakeY = bounds.top + 8;
      const kReleaseY = bounds.bottom + 18;

      naToMove.forEach((state, idx) => {
        state.pumping = true;
        state.crossing = true;
        state.x = bounds.centerX - 20 + idx * 12;
        state.y = naIntakeY;
        setIonTransportVisibility(state, true);
        applyIonPosition(state);
      });

      kToMove.forEach((state, idx) => {
        state.pumping = true;
        state.crossing = true;
        state.x = bounds.centerX - 8 + idx * 16;
        state.y = kIntakeY;
        setIonTransportVisibility(state, true);
        applyIonPosition(state);
      });

      queuePumpPhase(() => {
        naToMove.forEach((state, idx) => {
          const outBounds = getDiffusionBounds("na", "outside");
          state.x = clamp(bounds.centerX - 24 + idx * 12, outBounds.minX, outBounds.maxX);
          state.y = clamp(naReleaseY, outBounds.minY, outBounds.maxY);
          setIonTransportVisibility(state, true);
          applyIonPosition(state);
        });

        kToMove.forEach((state, idx) => {
          const inBounds = getDiffusionBounds("k", "inside");
          state.x = clamp(bounds.centerX - 8 + idx * 16, inBounds.minX, inBounds.maxX);
          state.y = clamp(kReleaseY, inBounds.minY, inBounds.maxY);
          setIonTransportVisibility(state, true);
          applyIonPosition(state);
        });
      }, pumpEdgeStickMs + pumpTransitMs);

      queuePumpPhase(() => {
        const releaseCooldownMs = 2800;
        const releaseUntil = Date.now() + releaseCooldownMs;

        naToMove.forEach((state) => {
          state.side = "outside";
          state.crossing = false;
          state.pumping = false;
          state.releaseCooldownUntil = releaseUntil;
        });

        kToMove.forEach((state) => {
          state.side = "inside";
          state.crossing = false;
          state.pumping = false;
          state.releaseCooldownUntil = releaseUntil;
        });
      }, pumpEdgeStickMs + pumpTransitMs + pumpReleaseSettleMs);
    }, pumpFeedInMs);
  }

  function stopPumpTransport() {
    if (pumpTimer) {
      clearInterval(pumpTimer);
      pumpTimer = null;
    }
    clearPumpTransitTimers();
    diffusionStates.forEach((state) => {
      state.crossing = false;
      state.pumping = false;
      setIonTransportVisibility(state, true);
    });
  }

  function startPumpTransport() {
    stopPumpTransport();
    runPumpTransportCycle();
    pumpTimer = setInterval(runPumpTransportCycle, 3600);
  }

  function rebalanceForRestingPotential() {
    const naOutsideGoal = Math.max(5, Math.floor(diffusionStates.filter((s) => s.type === "na").length * 0.7));
    const kInsideGoal = Math.max(3, Math.floor(diffusionStates.filter((s) => s.type === "k").length * 0.6));
    let naOutsideCount = 0;
    let kInsideCount = 0;

    diffusionStates.forEach((state) => {
      if (state.crossing || state.pumping) return;

      let targetSide;
      if (state.type === "na") {
        targetSide = naOutsideCount < naOutsideGoal ? "outside" : "inside";
        if (targetSide === "outside") naOutsideCount += 1;
      } else {
        targetSide = kInsideCount < kInsideGoal ? "inside" : "outside";
        if (targetSide === "inside") kInsideCount += 1;
      }
      state.side = targetSide;

      const bounds = getDiffusionBounds(state.type, targetSide);
      state.x = randomBetween(bounds.minX, bounds.maxX);
      state.y = randomBetween(bounds.minY, bounds.maxY);
      applyIonPosition(state);
    });
  }

  function getRandomIonBounds(kind) {
    const naChannelLeft = model.clientWidth * 0.2;
    const kChannelRight = model.clientWidth * 0.78;

    if (kind === "na") {
      return {
        minX: 14,
        maxX: Math.max(20, naChannelLeft),
        minY: 20,
        maxY: 84
      };
    }

    return {
      minX: Math.max(14, kChannelRight - 22),
      maxX: Math.max(kChannelRight, model.clientWidth - 44),
      minY: 170,
      maxY: Math.max(176, model.clientHeight - 28)
    };
  }

  function positionRandomIon(ion, drift = true) {
    const kind = ion.dataset.ion;
    const bounds = getRandomIonBounds(kind);

    let x;
    let y;

    const previousX = Number.parseFloat(ion.dataset.x || "");
    const previousY = Number.parseFloat(ion.dataset.y || "");
    const hasPrevious = Number.isFinite(previousX) && Number.isFinite(previousY);

    if (!drift || !hasPrevious) {
      x = randomBetween(bounds.minX, bounds.maxX);
      y = randomBetween(bounds.minY, bounds.maxY);
    } else {
      x = clamp(previousX + randomBetween(-28, 28), bounds.minX, bounds.maxX);
      y = clamp(previousY + randomBetween(-16, 16), bounds.minY, bounds.maxY);
    }

    ion.dataset.x = x.toFixed(1);
    ion.dataset.y = y.toFixed(1);
    ion.style.left = `${x.toFixed(1)}px`;
    ion.style.top = `${y.toFixed(1)}px`;
  }

  function stopRandomIonMotion() {
    if (randomIonTimer) {
      clearInterval(randomIonTimer);
      randomIonTimer = null;
    }
  }

  function startRandomIonMotion() {
    stopRandomIonMotion();
    if (!randomIons.length) return;

    randomIons.forEach((ion) => positionRandomIon(ion, false));
    randomIonTimer = setInterval(() => {
      randomIons.forEach((ion) => positionRandomIon(ion, true));
    }, 1200);
  }

  function applyPhase() {
    const phase = phases[phaseIndex];
    phaseId = phase.id;
    model.className = `ap-node-model phase-${phase.id}`;
    phaseLabel.textContent = `Phase: ${phase.label}`;
    status.textContent = phase.text;

    phaseList.querySelectorAll("li[data-phase]").forEach((item) => {
      item.classList.toggle("active", item.dataset.phase === phase.id);
    });

    document.querySelectorAll(".ap-trace-seg").forEach((seg) => {
      seg.classList.toggle("active", seg.id === `apTraceSeg-${phase.id}`);
    });

    const range = segmentRanges[phase.id] || [0, 0.12];
    const mid = tracePointForT((range[0] + range[1]) / 2);
    traceMarker.setAttribute("cx", mid.x.toFixed(1));
    traceMarker.setAttribute("cy", mid.y.toFixed(1));

    const chargeState = chargeByPhase[phase.id] || chargeByPhase.resting;
    setCharge(chargeOut, chargeState.out);
    setCharge(chargeIn, chargeState.in);

    const pumpActive = phase.id === "resting" || phase.id === "recovery";
    if (pumpActive) {
      startRandomIonMotion();
      startPumpTransport();
    } else {
      stopRandomIonMotion();
      stopPumpTransport();
    }

    if (phase.id === "resting") {
      rebalanceForRestingPotential();
    }
  }

  function stopPlayback() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    isPlaying = false;
    playPauseBtn.textContent = "Play";
  }

  function nextPhase() {
    phaseIndex = (phaseIndex + 1) % phases.length;
    applyPhase();
  }

  function startPlayback() {
    stopPlayback();
    isPlaying = true;
    playPauseBtn.textContent = "Pause";
    timer = setInterval(nextPhase, 1300);
  }

  playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
      stopPlayback();
      return;
    }
    startPlayback();
  });

  stepBtn.addEventListener("click", () => {
    stopPlayback();
    nextPhase();
  });

  resetBtn.addEventListener("click", () => {
    stopPlayback();
    phaseIndex = 0;
    applyPhase();
  });

  phaseList.querySelectorAll("li[data-phase]").forEach((item) => {
    item.addEventListener("click", () => {
      stopPlayback();
      const idx = phases.findIndex((phase) => phase.id === item.dataset.phase);
      if (idx >= 0) {
        phaseIndex = idx;
        applyPhase();
      }
    });
  });

  seedDiffusionPositions();
  startDiffusionMotion();
  applyPhase();

  window.addEventListener("resize", () => {
    diffusionStates.forEach((state) => {
      const bounds = getDiffusionBounds(state.type, state.side);
      state.x = clamp(state.x, bounds.minX, bounds.maxX);
      state.y = clamp(state.y, bounds.minY, bounds.maxY);
      applyIonPosition(state);
    });
  });

  window.addEventListener("beforeunload", () => {
    stopPumpTransport();
    stopDiffusionMotion();
    stopRandomIonMotion();
  });
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

function setupFunctionalOrganisationNavigation() {
  const section = document.getElementById("functionalOrganisationSection");
  const triggers = [...document.querySelectorAll(".js-open-functional-org")];

  if (!section || !triggers.length) {
    return;
  }

  function revealAndScroll() {
    if (section.hasAttribute("hidden")) {
      section.removeAttribute("hidden");
      section.style.animationPlayState = "running";
    }

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      revealAndScroll();
    });
  });
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
setupNerveImpulseMeasurement();
setupActionPotentials();
setupFunctionalOrganisationNavigation();
initRevealOnScroll();
