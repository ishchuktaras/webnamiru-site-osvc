import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'review',
  title: 'Recenze',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Jméno klienta',
      type: 'string',
      validation: (Rule) => Rule.required().error('Jméno je povinné'),
    }),
    defineField({
      name: 'company',
      title: 'Firma / Projekt (volitelné)',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Hodnocení (Hvězdičky)',
      type: 'number',
      description: 'Počet hvězdiček od 1 do 5',
      options: {
        list: [5, 4, 3, 2, 1], // Vytvoří výběrové menu
      },
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'text',
      title: 'Text recenze',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().error('Text recenze je povinný'),
    }),
    defineField({
      name: 'isApproved',
      title: 'Schváleno (Zobrazit na webu)',
      type: 'boolean',
      description: 'Pokud je zapnuto, recenze se zobrazí na veřejném webu.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
      rating: 'rating',
    },
    prepare(selection) {
      const { title, subtitle, rating } = selection
      return {
        title: title,
        subtitle: `${rating}★ | ${subtitle || 'Bez firmy'}`,
      }
    },
  },
})