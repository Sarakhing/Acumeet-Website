/**
 * Fixed-size hero composition (Industries and Use Cases heroes). Each item is a
 * mock-up placed at Figma coordinates relative to the visual origin
 * (wash heroes: 1440-frame x 700, y 64 — copy 600 at x 80 + 20 gap; centred
 * heroes: x 80, top of the topmost card). Leave ~64px of bottom room in
 * `height` for the float shadows; SolutionHero's ScaleToFit shrinks it.
 * items: [{ x, y, node, rotate? }] — `rotate` is in CSS degrees (clockwise),
 *   pivoting on the item's top-left like Figma (Figma's +6° = CSS -6°).
 */
export default function HeroCanvas({ width = 660, height, items = [] }) {
  return (
    <div className="relative" style={{ width, height }}>
      {items.map(({ x, y, node, rotate }, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: x,
            top: y,
            ...(rotate ? { transform: `rotate(${rotate}deg)`, transformOrigin: '0 0' } : null),
          }}
        >
          {node}
        </div>
      ))}
    </div>
  );
}
