import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ (Často kladené otázky)',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Otázka',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(200),
    }),
    defineField({
      name: 'answer',
      title: 'Odpověď',
      type: 'text',
      validation: (Rule) => Rule.required().min(20).max(1000),
    }),
    defineField({
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          { title: 'Obecné', value: 'general' },
          { title: 'Služby', value: 'services' },
          { title: 'Ceny', value: 'pricing' },
          { title: 'Technologie', value: 'technology' },
          { title: 'Spolupráce', value: 'collaboration' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Pořadí',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
    },
  },
})