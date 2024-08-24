import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import AutoImport from 'astro-auto-import';
import vercel from '@astrojs/vercel/serverless';
import qwikdev from '@qwikdev/astro';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
const isProd = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
  site: isProd ? 'https://zemprofiles.vercel.app' : 'http://localhost:4321',
  output: 'server',
  adapter: vercel({
    edgeMiddleware: true,
  }),
  image: {
    domains: ['res.cloudinary.com'],
    service: passthroughImageService(),
  },
  integrations: [
    tailwind(),
    qwikdev(),
    AutoImport({
      imports: [
        {
          './src/components/cta-external.astro': [['default', 'CtaExternal']],
        },
        {
          './src/components/code-sandbox.astro': [['default', 'CodeSandbox']],
        },
        {
          './src/components/astro-image.astro': [['default', 'AstroImage']],
        },
        {
          './src/components/video-player.astro': [['default', 'VideoPlayer']],
        },
        {
          './src/components/stackblitz-embed.tsx': [['default', 'StackBlitz']],
        },
        {
          'astro-embed': ['Tweet', 'Vimeo', 'YouTube'],
        },
        {
          'astro:assets': ['Image'],
        },
      ],
    }),
    mdx({
      syntaxHighlight: 'prism',
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
          },
        ],
        [
          rehypeExternalLinks,
          {
            rel: ['nofollow'],
            target: ['_blank'],
          },
        ],
      ],
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    sitemap(),
  ],
  vite: {
    build: {
      chunkSizeWarningLimit: 10000,
    },
  },
});
