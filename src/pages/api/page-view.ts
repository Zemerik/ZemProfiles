import type { APIRoute } from 'astro';
import { geolocation } from '@vercel/edge';

export const config = {
  runtime: 'edge',
};
