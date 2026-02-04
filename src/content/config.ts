import { defineCollection, z } from 'astro:content';

// Releases collection for release notes pages
const releasesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    version: z.string(),
    title: z.string(),
    date: z.coerce.date(),
    highlights: z.array(z.string()),
    changes: z.array(z.object({
      type: z.enum(['feature', 'improvement', 'fix']),
      description: z.string()
    }))
  })
});

// NOTE: The following collections are defined for future programmatic SEO expansion.
// They are commented out to avoid build warnings until content files are added.

// Features collection - for individual feature landing pages (/features/[slug])
// Uncomment when ready to add feature content files
/*
const featuresCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    image: z.string().optional(),
    benefits: z.array(z.string()),
    keywords: z.array(z.string()),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional()
  })
});
*/

// Testimonials collection - for structured testimonial data
// Uncomment when ready to add testimonial data files
/*
const testimonialsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    quote: z.string(),
    author: z.string().optional(),
    source: z.string(),
    thumbsUp: z.number().optional(),
    rating: z.number().min(1).max(5),
    featured: z.boolean().default(false)
  })
});
*/

export const collections = {
  releases: releasesCollection
  // features: featuresCollection,
  // testimonials: testimonialsCollection
};
