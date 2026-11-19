import { Link } from 'react-router';
import Logo from '@/components/ui/Logo';
import Container from '@/components/ui/Container';
import { FOOTER_COLUMNS, FOOTER_CONTACT } from '@/constants/navigation';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';

const link = 'text-body-sm text-white/78 transition-colors hover:text-white';

/** Figma "Footer" (19:15204). Dark surface, 6 columns → 2-3 columns on small screens. */
export default function Footer() {
  return (
    <footer className="bg-surface-dark pb-[30px] pt-16">
      <Container className="flex flex-col gap-[46px]">
        <div className="grid grid-cols-2 gap-x-7 gap-y-10 sm:grid-cols-3 lg:flex lg:gap-7">
          <div className="col-span-2 flex flex-col gap-2.5 sm:col-span-3 lg:w-[190px] lg:shrink-0">
            <Logo variant="footer" />
            <div className="h-1.5" />
            <ul className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6 lg:flex-col lg:gap-2.5">
              {FOOTER_CONTACT.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={link}
                    {...(item.href.startsWith('http') && { target: '_blank', rel: 'noreferrer' })}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div
              key={col.title}
              className={cn(
                'flex flex-col gap-2',
                col.wide ? 'lg:w-[220px] lg:shrink-0' : 'lg:min-w-0 lg:flex-1',
              )}
            >
              <p className="text-caption text-white/50">{col.title}</p>
              <div className="h-1.5" />
              <ul className="flex flex-col gap-2">
                {col.links.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className={link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-t border-white/13 pt-5 text-caption text-white/45 sm:flex-row sm:justify-between">
          <p>Copyright © {new Date().getFullYear()}. Acumeet. All rights reserved.</p>
          <p className="flex gap-3">
            <Link to={ROUTES.legal.privacy} className="hover:text-white">
              Privacy policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link to={ROUTES.legal.terms} className="hover:text-white">
              Terms and conditions
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
