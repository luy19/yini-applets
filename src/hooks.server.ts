import { minify } from 'html-minifier-terser';
import type { Options } from 'html-minifier-terser';
import { building } from '$app/environment';
import type { Handle } from '@sveltejs/kit';

const minification_options: Options = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  conservativeCollapse: true,
  decodeEntities: true,
  html5: true,
  ignoreCustomComments: [/^#/],
  minifyCSS: true,
  minifyJS: true,
  removeAttributeQuotes: true,
  removeComments: false, // some hydration code needs comments, so leave them in
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  sortAttributes: true,
  sortClassName: true
};

export const handle: Handle = ({ event, resolve }) => {
  return resolve(event, {
    transformPageChunk: ({ html, done }) => {
      if (done) {
        return building ? minify(html, minification_options) : html;
      }
    }
  });
};
