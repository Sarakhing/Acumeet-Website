import { useId, useState } from 'react';
import { Link } from 'react-router';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';

export const INPUT =
  'w-full rounded-[12px] border border-[#e7e7ee] bg-[#fafafb] px-3.5 py-3 text-[14px] leading-[18px] text-[#0b0b12] placeholder:text-[#a3a7b6] focus:border-brand-blue focus:bg-surface-white focus:outline-none';
const LABEL = 'text-[13px] leading-[17px] font-medium text-[#0b0b12]';

/** Industries offered in the "Industry" select (the Industries section's pages, plus Other). */
const INDUSTRIES = [
  'Banking',
  'Insurance',
  'Other financial services',
  'Telecommunications',
  'Public sector',
  'Enterprise',
  'Other regulated industry',
  'Other',
];

function Chips({ name, options, label }) {
  const [picked, setPicked] = useState([options[0]]);
  const toggle = (o) => setPicked((p) => (p.includes(o) ? p.filter((x) => x !== o) : [...p, o]));
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className={cn(LABEL, 'mb-2')}>{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <label key={o} className="cursor-pointer">
            <input
              type="checkbox"
              name={name}
              value={o}
              checked={picked.includes(o)}
              onChange={() => toggle(o)}
              className="peer sr-only"
            />
            <span
              className={cn(
                'inline-flex rounded-full border px-3 py-[7px] text-[13px] leading-[17px] font-medium peer-focus-visible:ring-2 peer-focus-visible:ring-brand-blue',
                picked.includes(o)
                  ? 'border-[#e6b3cf] bg-[#fbf0f5] text-[#9e0059]'
                  : 'border-[#e7e7ee] bg-surface-white text-[#0b0b12]',
              )}
            >
              {o}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Field({ f, uid }) {
  const id = `${uid}-${f.name}`;
  if (f.type === 'chips')
    return (
      <div className="sm:col-span-2">
        <Chips name={f.name} options={f.options} label={f.label} />
      </div>
    );
  const label = (
    <label htmlFor={id} className={LABEL}>
      {f.label}
      {f.optional && (
        <span className="ml-1.5 text-[12px] font-normal text-[#8b90a3]">Optional</span>
      )}
    </label>
  );
  let control;
  if (f.type === 'textarea') {
    control = (
      <textarea
        id={id}
        name={f.name}
        required={!f.optional}
        placeholder={f.placeholder}
        className={cn(INPUT, 'h-[92px] resize-none')}
      />
    );
  } else if (f.type === 'select') {
    control = (
      <span className="relative">
        <select
          id={id}
          name={f.name}
          required={!f.optional}
          defaultValue=""
          className={cn(INPUT, 'appearance-none pr-9 invalid:text-[#a3a7b6]')}
        >
          <option value="" disabled>
            {f.placeholder}
          </option>
          {INDUSTRIES.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-[12px] text-[#8b90a3]"
        >
          ⌄
        </span>
      </span>
    );
  } else {
    control = (
      <input
        id={id}
        name={f.name}
        type={f.type ?? 'text'}
        required={!f.optional}
        autoComplete={f.autoComplete}
        placeholder={f.placeholder}
        className={INPUT}
      />
    );
  }
  return (
    <div className={cn('flex flex-col gap-2', f.half ? 'sm:col-span-1' : 'sm:col-span-2')}>
      {label}
      {control}
    </div>
  );
}

/** Common leading fields: name (or first + last), work email, organisation, role. */
export const NAME = {
  name: 'name',
  label: 'Name',
  placeholder: 'Full name',
  half: true,
  autoComplete: 'name',
};
export const EMAIL = {
  name: 'email',
  label: 'Work email',
  type: 'email',
  placeholder: 'you@company.com',
  half: true,
  autoComplete: 'email',
};
export const ORG = {
  name: 'organisation',
  label: 'Organisation',
  placeholder: 'Organisation name',
  half: true,
  autoComplete: 'organization',
};
export const role = (placeholder, label = 'Role or function') => ({
  name: 'role',
  label,
  placeholder,
  half: true,
  autoComplete: 'organization-title',
});
export const INDUSTRY = {
  name: 'industry',
  label: 'Industry',
  type: 'select',
  placeholder: 'Select your industry',
};

/**
 * Figma "GS · Form · …" (18.03–18.07): an optional 22px title, a two-column field grid (`half`
 * fields pair up), chips (multi-select), textareas, a full-width blue submit and the privacy
 * note; State=Submitted shows a tick, the `thanks` line and "← Back to form". There is no
 * backend yet: submitting validates and shows the confirmation.
 * fields: [{ name, label, type?: text|email|textarea|select|chips, placeholder, half?, optional?, options? }]
 */
export default function LeadForm({ title, fields, submit, thanks, noun = 'request' }) {
  const uid = useId();
  const [sent, setSent] = useState(false);
  const card =
    'rounded-[24px] border border-[#e7e7ee] bg-surface-white p-6 shadow-[0_24px_60px_-30px_rgba(11,11,18,0.18)] sm:p-8';

  if (sent) {
    return (
      <div role="status" className={cn(card, 'flex flex-col gap-4 sm:py-12')}>
        <span
          aria-hidden="true"
          className="flex size-14 items-center justify-center rounded-full bg-[#e3f4ea] text-[24px] font-medium text-[#218957]"
        >
          ✓
        </span>
        <p className="text-[18px] leading-[1.45] font-medium tracking-[-0.5px] text-[#0b0b12]">
          {thanks}
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="w-fit text-[14px] font-medium text-[#9e0059] hover:underline"
        >
          ← Back to form
        </button>
      </div>
    );
  }

  return (
    <form
      className={cn(card, 'flex flex-col gap-[18px]')}
      onSubmit={(e) => {
        e.preventDefault();
        if (e.currentTarget.checkValidity()) setSent(true);
      }}
    >
      {title && (
        <h2 className="text-[22px] leading-[1.25] font-medium tracking-[-0.6px] text-[#0b0b12]">
          {title}
        </h2>
      )}
      <div className="grid gap-[18px] sm:grid-cols-2 sm:gap-x-3.5">
        {fields.map((f) => (
          <Field key={f.name} f={f} uid={uid} />
        ))}
      </div>
      <button
        type="submit"
        className="rounded-[12px] bg-brand-blue px-5 py-[15px] text-[15px] leading-5 font-medium text-white transition-colors hover:bg-[#0052db]"
      >
        {submit}
      </button>
      <p className="text-[12px] leading-[1.5] text-[#8b90a3]">
        We will use your details to respond to your {noun}. See our{' '}
        <Link to={ROUTES.legal.privacy} className="underline hover:text-[#0b0b12]">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
