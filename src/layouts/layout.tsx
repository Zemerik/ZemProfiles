import { Slot, component$, useSignal, $, useOnDocument } from '@builder.io/qwik';

import Logo from '../components/logo';
import NavLink from '../components/nav-link';
import SearchModal from '../components/search-modal';
import QuickSearch from '../components/search-trigger';

import isNewContent from '../utils/is-new-content';

import { siteLinks, socialLinks } from './nav-links.ts';

interface Props {
  fullWidth: boolean;
  slug: string;
  search: any;
}

const Layout = component$<Props>(({ fullWidth, slug, search }) => {
  const isModalOpen = useSignal(false);
  const isNavOpen = useSignal(false);

  const newItems = search
    .map((item) => {
      const { date, base } = item;

      return {
        base: base,
        date: new Date(date),
      };
    })
    .filter((item) => {
      const { date } = item;
      if (isNewContent(date)) {
        return item;
      }
    })
    .reduce((items, item) => {
      const base = item.base;
      items[base] = (items[base] || 0) + 1;
      return items;
    }, {});

  const handleNav = $(() => {
    isNavOpen.value = !isNavOpen.value;
  });

  const handleModal = $(() => {
    isModalOpen.value = !isModalOpen.value;
  });

  useOnDocument(
    'keydown',
    $((event) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        handleModal();
      }
      if (event.key === 'Escape' && isModalOpen.value) {
        handleModal();
      }
    })
  );

  return (
    <>
      <header class='fixed top-0 w-full height-[72px] backdrop-blur border-b border-b-brand-outline flex-none bg-brand-background lg:bg-transparent z-30'>
        <div class='max-w-8xl mx-auto'>
          <div class='py-4 mx-4 lg:px-8 lg:mx-0'>
            <div class='relative flex items-center gap-8'>
              <a class='flex items-center' href='https://github.com/Zemerik' target = '_blank' aria-current='page'>
                <span class='sr-only'>ZemProfiles</span>
              </a>
              <div class='relative flex lg:hidden items-center ml-auto'>
                <button
                  id='menu'
                  class='not-prose ml-auto flex items-center justify-center text-brand-text'
                  onClick$={handleNav}
                >
                  <span class='sr-only'>Navigation</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      id='menuPath'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d={isNavOpen.value ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SearchModal search={search} isModalOpen={isModalOpen.value} handleModal={handleModal} />
      <div class='relative'>
        <div
          id='lightbox'
          aria-label='lightbox'
          tab-index='0'
          role='button'
          class={`z-10 top-0 left-0 w-screen  h-screen bg-black opacity-80 ${
            isNavOpen.value ? 'fixed' : 'hidden'
          } lg:hidden`}
          onClick$={handleNav}
        ></div>

        <div class='max-w-8xl pt-[72px] mx-auto px-4 sm:px-6 md:px-8'>
          <div
            id='sidebar'
            class={`lg:block fixed inset-0 top-[73px] transition-all duration-300 right-auto w-[14.5rem] py-4 px-6 overflow-y-auto border-r border-brand-outline bg-brand-background lg:left-[max(0px,calc(50%-45rem))] z-20 ${
              isNavOpen.value ? 'left-[max(0px,calc(50%-45rem))]' : '-left-[240px]'
            }`}
          >
            <div class='relative'>
              <ul class='flex flex-col gap-2 m-0 p-0 pt-4 list-none'>
                <li class='m-0 p-0'>
                  <QuickSearch handleModal={handleModal} />
                </li>
                {siteLinks.map((item, index) => {
                  const { title, icon, stroke, link } = item;
                  const s = slug.slice(1);
                  const l = link.slice(1);

                  const newCount = newItems[title.toLowerCase()] || null;
                  const isActive = s.length <= 0 && s.startsWith(l) ? true : l.length > 0 && s.startsWith(l);

                  return (
                    <li key={index} class='m-0 p-0'>
                      <NavLink
                        title={title}
                        icon={icon}
                        stroke={stroke}
                        slug={link}
                        isActive={isActive}
                        newCount={newCount}
                      />
                    </li>
                  );
                })}
              </ul>
              <hr class='border border-brand-outline my-8' />
              <ul class='flex flex-col gap-2 m-0 p-0 list-none'>
                {socialLinks.map((item, index) => {
                  const { url, title, icon, rel } = item;
                  return (
                    <li key={index} class='m-0 p-0'>
                      <a
                        href={url}
                        target='_blank'
                        rel={`noreferrer ${rel}`}
                        class='not-prose inline-flex items-center gap-3 rounded-full px-3 py-2 border-transparent hover:bg-brand-surface border hover:border-brand-outline transition-colors duration-300 text-slate-400 hover:text-brand-text'
                      >
                        <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='currentColor' viewBox='0 0 24 24'>
                          <path stroke-linecap='round' stroke-linejoin='round' d={icon} />
                        </svg>
                        {title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <main class='lg:pl-[12.5rem]'>
            <section
              class={`mx-auto px-0 pt-6 lg:px-16 lg:pt-10 max-w-none xl:ml-0 ${fullWidth ? '' : 'xl:mr-[15.5rem]'}`}
            >
              <article class='max-w-none min-h-[calc(100vh-19rem)]'>
                <Slot />
              </article>
              <footer class='relative mt-24 py-8 bg-brand-background z-20'>
                <div class='flex gap-8 text-xs text-brand-secondary/80'>
                </div>
              </footer>
            </section>
          </main>
        </div>
      </div>
    </>
  );
});

export default Layout;
