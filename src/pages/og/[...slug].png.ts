import { getCollection } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import type { APIRoute } from 'astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const post = props as any;

  // Render a simple VDOM structure for the OG Image
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#09090b',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
          backgroundSize: '100px 100px',
          color: '#e4e4e7',
          padding: '80px',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                color: '#38bdf8',
                fontSize: '24px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '20px',
              },
              children: `KIAN'S DIGITAL GARDEN 🚀`,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: '64px',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: '30px',
                maxWidth: '900px',
              },
              children: post.data.title,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: '32px',
                color: '#a1a1aa',
                maxWidth: '800px',
                lineHeight: 1.4,
              },
              children: post.data.description,
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: await fetch('https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.ttf').then((res) => res.arrayBuffer()),
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: await fetch('https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.ttf').then((res) => res.arrayBuffer()),
          weight: 700,
          style: 'normal',
        },
      ],
    }
  );

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
  });

  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer, {
    headers: {
      'Content-Type': 'image/png',
      // cache for a year in production
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
