export default function sitemap() {
  const base = 'https://luqmanbintangjaya.com'
  return [
    { url: base + '/',                priority: 1.0,  changeFrequency: 'weekly',  lastModified: new Date() },
    { url: base + '/maklon-sandal/',  priority: 0.9,  changeFrequency: 'weekly',  lastModified: new Date() },
    { url: base + '/maklon-sepatu/',  priority: 0.8,  changeFrequency: 'weekly',  lastModified: new Date() },
    { url: base + '/tentang-kami/',  priority: 0.7,  changeFrequency: 'monthly', lastModified: new Date() },
    { url: base + '/kontak/',        priority: 0.8,  changeFrequency: 'monthly', lastModified: new Date() },
  ]
}
