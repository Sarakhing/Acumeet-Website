import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';

/**
 * Industries "06 · Responsible Information Handling" row (Banking 48:288199):
 * 34px title (440 column) + 17px copy with two outlined buttons, 80px gap,
 * 1200px content (px-120), py-112, white. Stacks below lg.
 * ctas: [{ label, to }] (optional — Security "02 · Protect the information…" has none).
 * tone: 'white' (default) | 'subtle' (#fafafb, Security 06.01 / 06.05).
 */
export default function InfoNote({ title, body, ctas = [], tone = 'white' }) {
  return (
    <section className={cn(tone === 'subtle' ? 'bg-surface-muted' : 'bg-surface-white', 'py-16 lg:py-28')}>
      <Container className="flex flex-col gap-6 lg:flex-row lg:gap-20">
        <h2 className="text-[28px] font-medium leading-[1.28] tracking-[-0.84px] text-ink-800 lg:w-[440px] lg:shrink-0 lg:text-[34px] lg:tracking-[-1.02px]">
          {title}
        </h2>
        <div className="flex min-w-0 flex-1 flex-col gap-[18px]">
          <p className="text-[16px] leading-[1.55] text-ink-700 sm:text-[17px]">{body}</p>
          {ctas.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-2">
              {ctas.map((c) => (
                <Button key={c.label} to={c.to} intent="secondary">
                  {c.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
