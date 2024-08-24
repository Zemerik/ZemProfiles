import { component$ } from '@builder.io/qwik';

interface Props {
  handleModal?: () => void;
  handleInput: (event: any) => void;
  showEsc?: boolean;
}

const SearchInput = component$<Props>(({ handleModal, handleInput, showEsc = false }) => {
  return (
    <div class='flex items-center gap-2 pb-4 border-brand-outline border-b-[1px]'>
      <svg aria-hidden='true' class='h-4 w-4 stroke-2 stroke-slate-400' fill='none' viewBox='0 0 24 24'>
        <path stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
      </svg>
      <input
        id='input'
        type='search'
        placeholder='Search'
        class='basis-full bg-transparent text-white focus:outline-none bg-surface'
        onInput$={handleInput}
      />
      {showEsc ? (
        <button
          class='text-xs uppercase bg-brand-outline rounded px-2 py-1 transition-all duration-300 hover:bg-brand-muted/20'
          aria-label='esc'
          value='esc'
          onClick$={handleModal}
        >
          esc
        </button>
      ) : null}
    </div>
  );
});

export default SearchInput;
