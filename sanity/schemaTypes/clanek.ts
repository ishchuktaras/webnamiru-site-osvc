import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'clanek',
  title: 'Blog Článek',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Název článku',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL adresa',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Datum publikace',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Hlavní obrázek',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternativní text',
        },
      ],
    }),
    defineField({
      name: 'summary',
      title: 'Krátký souhrn',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'body',
      title: 'Obsah článku',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Kategorie',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Webový vývoj', value: 'webovy-vyvoj' },
          { title: 'Design', value: 'design' },
          { title: 'SEO', value: 'seo' },
          { title: 'Marketing', value: 'marketing' },
          { title: 'Technologie', value: 'technologie' },
        ],
      },
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Titulek',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Popisek',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const { title, publishedAt } = selection
      return {
    title,
    media: selection.media,
    subtitle: publishedAt && new Date(publishedAt).toLocaleDateString('cs-CZ'),
  }
    },
  },
})