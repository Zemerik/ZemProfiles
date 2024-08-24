import { component$ } from '@builder.io/qwik';

interface Props {
  title: string;
  icon: string;
  stroke: boolean;
  slug: string;
  isActive: boolean;
  newCount: number;
}

const NavLink = component$<Props>(({ title, icon, stroke, slug, isActive, newCount }) => {
  return (
    <a
      href={slug}
      class={`relative not-prose inline-flex items-center gap-3 rounded-full px-3 pr-4 py-2 border-transparent hover:bg-brand-surface border hover:border-brand-outline transition-colors duration-300 ${
        isActive ? 'text-brand-primary' : 'hover:text-brand-text text-slate-300'
      }`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        class='h-4 w-4'
        stroke-width='3'
        stroke={`${stroke ? 'currentColor' : 'none'}`}
        fill={`${stroke ? 'none' : 'currentColor'}`}
        viewBox='0 0 24 24'
      >
        <path stroke-linecap='round' stroke-linejoin='round' d={icon}></path>
      </svg>
      {newCount ? (
        <span class='absolute top-0 -right-2 flex items-center justify-center text-xs text-brand-text text-center font-bold rounded-full bg-brand-pink w-4 h-4'>
          {newCount}
        </span>
      ) : null}
      {title}
    </a>
  );
});

export default NavLink;
