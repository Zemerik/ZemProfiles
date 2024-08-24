import { component$, useVisibleTask$ } from '@builder.io/qwik';

interface Props {
  id: string;
  file: string;
  view?: 'editor' | 'preview' | null;
  hideExplorer?: boolean;
  height?: number;
  theme?: 'dark' | 'light' | 'default' | null;
  clickToLoad?: boolean;
}

const StackBlitz = component$<Props>(
  ({ id, file, view = null, hideExplorer = false, height = 600, theme = 'dark', clickToLoad = false }) => {
    useVisibleTask$(async () => {
      const sdk = (await import('@stackblitz/sdk')).default;

      sdk.embedProjectId('stackblitz-embed', id, {
        forceEmbedLayout: true,
        openFile: file,
        view: view,
        hideExplorer: hideExplorer,
        hideNavigation: true,
        height: height,
        theme: theme,
        clickToLoad: clickToLoad,
      });
    });

    return (
      <div class='my-10 overflow-hidden rounded border border-brand-outline'>
        <div id='stackblitz-embed' />
      </div>
    );
  }
);

export default StackBlitz;
