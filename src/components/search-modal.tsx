import { component$, useSignal, $, useVisibleTask$ } from '@builder.io/qwik';

import SearchInput from './search-input';

import { formatDate } from '../utils/format-date';

interface searchProps {
  date: string;
  title: string;
  base: string;
  path: string;
}

interface Props {
  search: searchProps[];
  isModalOpen: Boolean;
  handleModal: () => void;
}

const SearchModal = component$<Props>(({ search, isModalOpen, handleModal }) => {
  const all = useSignal(search);
  const filtered = useSignal(search);

  const handleBackdrop = $((event) => {
    if (event.target.localName === 'dialog') {
      handleModal();
    }
  });

  const handleInput = $(async (event) => {
    const FuseModule = await import('fuse.js');
    const Fuse = FuseModule.default;

    const {
      target: { value },
    } = event;

    const fuse = new Fuse(all.value, {
      threshold: 0.5,
      keys: ['title', 'date'],
    });

    const results = fuse.search(value).map((data: any) => {
      const {
        item: { base, path, title, date },
      } = data;

      return {
        title,
        date,
        path,
        base,
      };
    });

    if (value) {
      filtered.value = results;
    } else {
      filtered.value = all.value;
    }
  });

  useVisibleTask$(({ track }) => {
    track(() => isModalOpen);
    if (isModalOpen) {
      document.getElementById('input').focus();
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      filtered.value = all.value;
    }
  });

  return (
    <>
      {isModalOpen ? (
        <dialog
          class='fixed inset-0 top-0 left-0 flex items-center justify-center bg-black/50 backdrop-blur w-screen h-screen p-4 z-40'
          onClick$={handleBackdrop}
        >
          <div class='grow-0 w-full max-w-3xl bg-brand-surface p-4'>
            <SearchInput handleModal={handleModal} handleInput={handleInput} showEsc={true} />
            <div class='text-brand-muted text-xs pt-2 pb-4'>{`${
              filtered.value.length > 0 ? filtered.value.length : 0
            } results`}</div>
            <div class='h-[300px] overflow-y-auto'>
              <ul class=' list-none p-0 m-0'>
                {filtered.value.length > 0 ? (
                  filtered.value.map((data, index) => {
                    const { path, title, date, base } = data;
                    return (
                      <li
                        key={index}
                        class='cursor-pointer m-0 p-0 border-b-[1px] border-brand-outline hover:bg-brand-fuchsia'
                      >
                        <a href={path} class='block group no-underline'>
                          <div class=' px-4 py-3 text-slate-300 hover:text-white font-medium'>
                            <div class='flex items-end pb-4 justify-between'>
                              <time class='text-brand-primary group-hover:text-white text-[0.6rem]'>
                                {formatDate(date)}
                              </time>
                              <span class='text-[0.65rem] uppercase bg-brand-outline rounded px-1 py-0.5 -mt-2'>
                                {base}
                              </span>
                            </div>
                            {title}
                          </div>
                        </a>
                      </li>
                    );
                  })
                ) : (
                  <div class='flex items-center justify-center text-center h-full'>
                    <div class='font-semibold text-lg text-center text-slate-500 -mt-8'>No results found.</div>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </dialog>
      ) : null}
    </>
  );
});

export default SearchModal;
