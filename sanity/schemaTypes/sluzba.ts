import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sluzba',
  title: 'Služba',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Název služby',
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
      name: 'shortDescription',
      title: 'Krátký popis',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
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
      name: 'content',
      title: 'Podrobný popis',
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
      name: 'features',
      title: 'Funkce služby',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'price',
      title: 'Cena od (Kč)',
      type: 'number',
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
    },
  },
})