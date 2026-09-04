// Hand-drawn line art of Lucknow's monuments, used as background decoration in
// the footer. Every shape is stroked with `currentColor`, so the colour and the
// opacity are set by the parent.

const BASE = 190;

// Places a shape (drawn around x = 0, sitting on y = BASE) at `x`, scaled by `s`
// while keeping it on the baseline.
const at = (x: number, s = 1) => `translate(${x} ${BASE - BASE * s}) scale(${s})`;

const Chhatri = () => (
  <>
    <path d="M-22 190V150M22 190V150" />
    <path d="M-30 150H30" />
    <path d="M-22 150Q0 112 22 150" />
    <path d="M0 112V96" />
    <circle cx="0" cy="92" r="4" />
  </>
);

const Mosque = () => (
  <>
    <path d="M-90 190V128H90V190" />
    <path d="M-60 190V158Q-45 138 -30 158V190" />
    <path d="M-15 190V158Q0 138 15 158V190" />
    <path d="M30 190V158Q45 138 60 158V190" />
    <path d="M-46 128Q0 56 46 128" />
    <path d="M0 56V38" />
    <circle cx="0" cy="34" r="5" />
    <path d="M-104 190V96M-84 190V96M-104 96H-84" />
    <path d="M-102 96Q-94 74 -86 96" />
    <path d="M-94 74V60" />
    <path d="M104 190V96M84 190V96M104 96H84" />
    <path d="M102 96Q94 74 86 96" />
    <path d="M94 74V60" />
  </>
);

const Gate = () => (
  <>
    <path d="M-160 190V120H-70M160 190V120H70" />
    <path d="M-140 190V158Q-128 142 -116 158V190" />
    <path d="M-104 190V158Q-92 142 -80 158V190" />
    <path d="M80 190V158Q92 142 104 158V190" />
    <path d="M116 190V158Q128 142 140 158V190" />
    <path d="M-70 190V96Q0 12 70 96V190" />
    <path d="M-46 190V112Q0 54 46 112V190" />
    <path d="M-22 190V140Q0 118 22 140V190" />
    <path d="M-14 54Q0 28 14 54" />
    <path d="M0 28V12" />
    <path d="M-88 190V104M-72 190V104" />
    <path d="M-88 104Q-80 84 -72 104" />
    <path d="M72 190V104M88 190V104" />
    <path d="M72 104Q80 84 88 104" />
  </>
);

const Imambara = () => (
  <>
    <path d="M-130 190V126H130V190" />
    {[-3, -2, -1, 0, 1, 2, 3].map((i) => (
      <path
        key={i}
        d={`M${i * 36 - 14} 190V160Q${i * 36} 142 ${i * 36 + 14} 160V190`}
      />
    ))}
    <path d="M-40 126Q0 58 40 126" />
    <path d="M0 58V40" />
    <path d="M-100 126Q-76 92 -52 126" />
    <path d="M52 126Q76 92 100 126" />
  </>
);

const ClockTower = () => (
  <>
    <path d="M-24 190V70H24V190" />
    <path d="M-30 70H30" />
    <path d="M-18 70V26H18V70" />
    <circle cx="0" cy="46" r="11" />
    <path d="M-24 26L0 -2L24 26" />
    <path d="M0 -2V-18" />
    <path d="M-10 190V150Q0 132 10 150V190" />
  </>
);

const DomedHall = () => (
  <>
    <path d="M-70 190V120H70V190" />
    <path d="M-40 120Q0 60 40 120" />
    <path d="M0 60V44" />
    <path d="M-52 190V152Q-40 134 -28 152V190" />
    <path d="M-12 190V152Q0 134 12 152V190" />
    <path d="M28 190V152Q40 134 52 152V190" />
  </>
);

const Birds = ({ x, y, s = 1 }: { x: number; y: number; s?: number }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M0 0q5-5 10 0q5-5 10 0" />
    <path d="M22 14q4-4 8 0q4-4 8 0" />
    <path d="M-16 20q3-3 6 0q3-3 6 0" />
  </g>
);

/** Wide skyline band that sits behind the footer columns. */
export const CitySkyline = ({ className = '' }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 1600 200"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <g transform={at(120, 0.8)}>
      <Chhatri />
    </g>

    <g transform={at(330, 0.9)}>
      <Mosque />
    </g>

    <g transform={at(510, 0.6)}>
      <Chhatri />
    </g>

    <g transform={at(760)}>
      <Gate />
    </g>

    <g transform={at(1045, 0.85)}>
      <Imambara />
    </g>

    <g transform={at(1225, 0.9)}>
      <ClockTower />
    </g>

    <g transform={at(1400, 0.85)}>
      <DomedHall />
    </g>

    <g transform={at(1545, 0.7)}>
      <Chhatri />
    </g>

    <Birds x={470} y={62} s={0.9} />
    <Birds x={1120} y={48} s={0.8} />
    <Birds x={1330} y={78} s={0.7} />
  </svg>
);

/** Single gate, used inside the light call-to-action banner. */
export const GateOutline = ({ className = '' }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 400 200"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <g transform={at(200, 0.92)}>
      <Gate />
    </g>

    <Birds x={54} y={44} s={0.75} />
    <Birds x={320} y={30} s={0.65} />
  </svg>
);
