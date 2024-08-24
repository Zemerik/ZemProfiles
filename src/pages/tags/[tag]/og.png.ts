export const prerender = true;

import { ImageResponse, html } from 'og-img';
import fs from 'fs';
import path from 'path';

import { collections } from '../../../utils/all-collections';
import { createTagsCollection } from '../../../utils/create-tags-collection';

export async function GET({ props }) {
  const { name, collection } = props;

  return new ImageResponse(
    html`<div tw="relative flex w-full h-full items-center px-48" style="background-color: #131127">
      <div tw="absolute flex items-center top-12 left-16">
      </div>
      <div tw="relative flex flex-col">
        <div tw="flex items-center mb-6">
          <div tw="text-4xl" style="color: #a4a0fb; fontFamily: Inconsolata Bold">${name}</div>
        </div>
        <div tw="flex text-6xl leading-tight mb-1" style="color: #d9dbdf; fontFamily: Inconsolata Black">
          Tagged with ${name}
        </div>
        <div tw="flex text-3xl leading-tight mb-12" style="color: #d9dbdf; fontFamily: Roboto Regular">
          Here you'll find <strong tw="px-3" style="color: #f056c7">${collection.length}</strong> all developers 
          about <strong tw="pl-3" style="color: #ffc107">${name}</strong>.
        </div>
        <div tw="flex items-center">
          <div tw="text-3xl" style="color: #d9dbdf; fontFamily: Inconsolata Bold">ZemProfiles</div>
          <div tw="pl-4 text-3xl" style="color: #d9dbdf; fontFamily: Inconsolata Bold">|</div>
          <div tw="pl-4 text-3xl lowercase" style="color: #58e6d9; fontFamily: Inconsolata Bold">
            ${`zemprofiles.vercel.app/tags/${name}`}
          </div>
        </div>
      </div>
    </div>`,
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: 'Roboto Regular',
          data: fs.readFileSync(path.resolve('./public/fonts/Roboto-Regular.ttf')),
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Inconsolata Bold',
          data: fs.readFileSync(path.resolve('./public/fonts/Inconsolata-Bold.ttf')),
          weight: 600,
          style: 'normal',
        },
        {
          name: 'Inconsolata Black',
          data: fs.readFileSync(path.resolve('./public/fonts/Inconsolata-Black.ttf')),
          weight: 900,
          style: 'normal',
        },
      ],
    }
  );
}

export async function getStaticPaths() {
  const tags = createTagsCollection(collections);

  return tags.map((tag: { name: string; slug: string }) => {
    const { name, slug } = tag;

    return {
      params: {
        tag: slug,
      },
      props: {
        name: name,
        collection: collections.filter((item) => item.data.tags.includes(name)),
      },
    };
  });
}
