import { useEffect, useId, useState } from 'react';
import { Link } from 'react-router';
import Logo from '@/components/ui/Logo';
import { ROUTES } from '@/constants/routes';
import { DarkGlows, GridLines, Pill } from '@/modules/17-company/components/primitives';
import avatar from '@/assets/images/get-started/avatar-rachel-falade.png';
import { INPUT } from '../components/LeadForm';

function GoogleMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"
      />
    </svg>
  );
}

function MicrosoftMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <rect width="9.5" height="9.5" fill="#F25022" />
      <rect x="10.5" width="9.5" height="9.5" fill="#7FBA00" />
      <rect y="10.5" width="9.5" height="9.5" fill="#00A4EF" />
      <rect x="10.5" y="10.5" width="9.5" height="9.5" fill="#FFB900" />
    </svg>
  );
}

const SSO =
  'flex w-full items-center justify-center gap-3 rounded-[14px] border border-[#e7e7ee] bg-surface-white px-5 py-[15px] text-[15px] leading-5 font-medium text-[#0b0b12] transition-colors hover:bg-[#f7f7fa]';

/**
 * Figma 18.02 · Sign Up (49:196074): a standalone split page without the site nav — the
 * account form (Google / Microsoft SSO, work email, legal note) on the left, a dark value
 * panel with a testimonial on the right (hidden below lg). Sign-in and SSO are not wired yet:
 * the SSO buttons and the email form only show a confirmation note.
 */
export default function SignUpPage() {
  const id = useId();
  const [note, setNote] = useState('');
  useEffect(() => {
    document.title = 'Sign up · Acumeet';
    window.scrollTo(0, 0);
  }, []);
  const sso = (provider) => () =>
    setNote(`${provider} sign-up is coming soon. Use your work email for now.`);

  return (
    <main className="grid min-h-screen bg-surface-white lg:grid-cols-[760fr_680fr]">
      <div className="flex flex-col px-5 pt-8 pb-10 sm:px-8 lg:px-20 lg:pt-10">
        <div className="flex items-center justify-between gap-4">
          <Logo />
          <p className="text-[14px] text-[#4f5566]">
            Already have an account?{' '}
            <Link to={ROUTES.signIn} className="font-medium text-brand-blue hover:underline">
              Sign in
            </Link>
          </p>
        </div>

        <div className="mx-auto flex w-full max-w-[400px] flex-1 flex-col justify-center gap-[18px] py-14 lg:mx-[100px] lg:py-16">
          <Pill>Create your account</Pill>
          <h1 className="text-[34px] leading-[1.15] font-medium tracking-[-1.2px] text-[#0b0b12] lg:text-[40px]">
            Start with Acumeet
          </h1>
          <p className="text-[16px] leading-[1.6] text-[#4f5566]">
            Create your account and get transcripts, summaries and actions from your next meeting.
          </p>

          <div className="mt-8 flex flex-col gap-2.5">
            <button type="button" className={SSO} onClick={sso('Google')}>
              <GoogleMark />
              Continue with Google
            </button>
            <button type="button" className={SSO} onClick={sso('Microsoft')}>
              <MicrosoftMark />
              Continue with Microsoft
            </button>
          </div>
          <Link
            to={ROUTES.trustCenter}
            className="w-fit text-[13.5px] font-medium text-brand-blue hover:underline"
          >
            Why does Acumeet need calendar access?
          </Link>

          <div className="flex items-center gap-3 text-[13px] text-[#8b90a3]" aria-hidden="true">
            <span className="h-px flex-1 bg-[#e7e7ee]" />
            or
            <span className="h-px flex-1 bg-[#e7e7ee]" />
          </div>

          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (e.currentTarget.checkValidity())
                setNote('Thanks. We will email you a link to finish creating your account.');
            }}
          >
            <label htmlFor={`${id}-email`} className="flex flex-col gap-2">
              <span className="text-[13px] font-medium text-[#0b0b12]">Work email</span>
              <input
                id={`${id}-email`}
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className={INPUT}
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-brand-blue px-5 py-[14px] text-[15px] leading-5 font-medium text-white transition-colors hover:bg-[#0052db]"
            >
              Create an account with email
            </button>
          </form>
          {note && (
            <p
              role="status"
              className="rounded-[12px] bg-[#eef4ff] px-4 py-3 text-[14px] text-[#0b0b12]"
            >
              {note}
            </p>
          )}
          <p className="text-center text-[14px] text-[#4f5566]">
            Already have an account?{' '}
            <Link to={ROUTES.signIn} className="font-medium text-brand-blue hover:underline">
              Sign in
            </Link>
          </p>
          <p className="text-[12px] leading-[1.6] text-[#8b90a3]">
            By creating an account, you agree to the{' '}
            <Link to={ROUTES.legal.terms} className="hover:text-[#0b0b12] hover:underline">
              Terms and Conditions
            </Link>{' '}
            and acknowledge the{' '}
            <Link to={ROUTES.legal.privacy} className="hover:text-[#0b0b12] hover:underline">
              Privacy Policy
            </Link>{' '}
            and Data Processing Agreement.
          </p>
        </div>

        <p className="text-[13px] text-[#4f5566]">
          Want to know how Acumeet handles security and data?{' '}
          <Link
            to={ROUTES.trustCenter}
            className="ml-1 inline-flex items-center gap-1.5 text-[14px] font-medium text-[#9e0059] hover:underline"
          >
            Explore the Trust Center <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>

      <aside className="relative isolate hidden flex-col justify-between overflow-hidden bg-[#0b0b12] px-16 pt-[228px] pb-[228px] lg:flex">
        <DarkGlows magenta={0.55} blue={0.45} />
        <GridLines />
        <div className="relative flex flex-col gap-6">
          <p className="text-[58px] leading-[1.05] font-medium tracking-[-2.3px] text-white">
            Meet. Decide. Move.
          </p>
          <p className="max-w-[540px] text-[17.5px] leading-[1.55] text-[#c9c9d6]">
            Acumeet turns meetings into summaries, decisions, actions and searchable knowledge, so
            the value of the call stays after it ends.
          </p>
        </div>
        <figure className="relative flex flex-col gap-5 rounded-[24px] border border-white/15 bg-white/[0.06] p-7 backdrop-blur-sm">
          <blockquote className="text-[18px] leading-[1.45] font-medium text-white">
            “Our credit committee used to spend days confirming who agreed to what. Now the record
            is ready when the call ends.”
          </blockquote>
          <figcaption className="flex items-center gap-3">
            <img src={avatar} alt="" width={51} height={51} className="size-[51px] rounded-full" />
            <span className="flex flex-col">
              <span className="text-[14px] font-medium text-white">Rachel Falade</span>
              <span className="text-[12.5px] text-[#b4b4c6]">
                Head of Credit Risk, Northbridge Bank
              </span>
            </span>
          </figcaption>
        </figure>
      </aside>
    </main>
  );
}
