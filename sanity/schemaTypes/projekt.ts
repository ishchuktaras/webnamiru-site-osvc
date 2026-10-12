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
    // NOVÉ POLE: Stav projektu pro filtrování na frontendu
    defineField({
      name: 'status',
      title: 'Stav projektu',
      type: 'string',
      options: {
        list: [
          { title: 'Dokončeno (V provozu)', value: 'completed' },
          { title: 'Aktuálně vyvíjím', value: 'in-progress' }
        ],
        layout: 'radio'
      },
      initialValue: 'completed',
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
      status: 'status', // Přidáno pro zobrazení v CMS přehledu
    },
    prepare(selection) {
      const { title, client, status } = selection
      // Vizuální odlišení rozpracovaných projektů přímo v seznamu Sanity
      const statusIndicator = status === 'in-progress' ? ' 🚧 (Ve vývoji)' : ''
      
      return {
        title: `${title}${statusIndicator}`, 
        media: selection.media,
        subtitle: client && `Klient: ${client}`,
      }
    },
  },
})