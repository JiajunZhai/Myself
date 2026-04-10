import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local', // For local filesystem (can be switched to 'github' for production)
  },
  ui: {
    brand: {
      name: 'Astro Geek CMS',
    },
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        pubDate: fields.date({ label: 'Publish Date', validation: { isRequired: true } }),
        heroImage: fields.image({
          label: 'Hero Image',
          directory: 'public/uploads/',
          publicPath: '/uploads/',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags', itemLabel: props => props.value }
        ),
        lang: fields.select({
          label: 'Language',
          options: [
            { label: '中文 (zh)', value: 'zh' },
            { label: 'English (en)', value: 'en' },
          ],
          defaultValue: 'zh',
        }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        content: fields.mdx({
          label: 'Content',
          extension: 'mdx',
        }),
      },
    }),
  },
});
