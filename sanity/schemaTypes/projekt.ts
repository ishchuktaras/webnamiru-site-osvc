import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'projekt',
  title: 'Portfolio Projekt',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Název projektu',
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
      name: 'clientName',
      title: 'Jméno klienta',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Náhledový obrázek',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Galerie obrázků',
      type: 'array',
      of: [
        {
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
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Popis projektu',
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
      name: 'technologies',
      title: 'Použité technologie',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'url',
      title: 'URL webu klienta',
      type: 'url',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Datum realizace',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Zvýrazněný projekt',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'clientName',
      media: 'coverImage',
    },
    prepare(selection) {
      const { title, client } = selection
      return {
    title, 
    media: selection.media,
    subtitle: client && `Klient: ${client}`,
  }
    },
  },
})