import { component$ } from '@builder.io/qwik';

interface Props {
  handleModal: () => void;
}

const SearchTrigger = component$<Props>(({ handleModal }) => {
  return (
    <button
      onClick$={handleModal}
      type='button'
      class='not-prose w-full flex justify-between items-center font-medium text-brand-tertiary transition-all duration-300 rounded border border-brand-outline bg-surface px-3 py-2 hover:text-white hover:bg-brand-muted/20'
    >
      <span class='flex items-center gap-x-3'>
        <svg aria-hidden='true' class='h-4 w-4 stroke-2' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
        </svg>
        Search
      </span>

      <kbd class='flex gap-1 font-sans font-semibold'>
        <abbr title='Command' class='no-underline mt-[1px]'>
          ⌘
        </abbr>
        K
      </kbd>
    </button>
  );
});

export default SearchTrigger;
