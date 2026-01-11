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
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required().min(1).max(5),
      options: {
        list: [1, 2, 3, 4, 5],
      }
    }),
    defineField({
      name: 'text',
      title: 'Text recenze',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isApproved',
      title: 'Schváleno (Zobrazit na webu)',
      type: 'boolean',
      description: 'Pokud je zapnuto, recenze se zobrazí na webu.',
      initialValue: false, // Nové recenze musí být schváleny ručně
    }),
    defineField({
      name: 'date',
      title: 'Datum vložení',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'rating',
      approved: 'isApproved'
    },
    prepare({ title, subtitle, approved }) {
      return {
        title: title,
        subtitle: `${subtitle} hvězd | ${approved ? '✅ Schváleno' : '⏳ Čeká na schválení'}`
      }
    }
  }
})