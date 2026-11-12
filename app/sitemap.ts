import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.flowisolutions.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://www.flowisolutions.com/servicios', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.flowisolutions.com/servicios/paginas-web', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.flowisolutions.com/servicios/consultoria', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.flowisolutions.com/servicios/automatizacion', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.flowisolutions.com/servicios/dashboards', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.flowisolutions.com/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: 'https://www.flowisolutions.com/blog/como-hacer-un-dashboard-en-excel', lastModified: new Date('2026-11-11'), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.flowisolutions.com/por-que-nosotros', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.flowisolutions.com/contacto', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
