import { useLocation } from 'react-router';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

/** Temporary page for sections not yet built. */
export default function ComingSoon() {
  const { pathname } = useLocation();
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-4 py-24 text-center">
      <p className="font-mono text-overline uppercase text-ink-500">{pathname}</p>
      <h1 className="text-display-3 text-ink-900">This page is coming soon</h1>
      <p className="max-w-md text-body text-ink-600">
        This section of the Acumeet site hasn&rsquo;t been built yet.
      </p>
      <Button to="/">Back to home</Button>
    </Container>
  );
}
