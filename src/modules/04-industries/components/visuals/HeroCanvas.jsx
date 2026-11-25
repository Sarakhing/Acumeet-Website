/**
 * Fixed-size hero composition for the Industries wash heroes. Each item is a
 * mock-up placed at Figma coordinates relative to the visual column origin
 * (1440-frame x 700, y 64 — copy 600 at x 80 + 20 gap). Leave ~64px of bottom
 * room in `height` for the float shadows; SolutionHero's ScaleToFit shrinks it.
 * items: [{ x, y, node }]
 */
export default function HeroCanvas({ width = 660, height, items = [] }) {
  return (
    <div className="relative" style={{ width, height }}>
      {items.map(({ x, y, node }, i) => (
        <div key={i} className="absolute" style={{ left: x, top: y }}>
          {node}
        </div>
      ))}
    </div>
  );
}
