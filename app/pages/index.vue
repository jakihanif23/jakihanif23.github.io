<script setup lang="ts">
useHead({
  title: 'Zaky Hanif Testandy - Fullstack Developer Portfolio',
  meta: [
    { name: 'description', content: 'Portfolio of Zaky Hanif Testandy — Fullstack Developer building scalable web apps with Vue.js, Node.js, Laravel & RESTful APIs. 3+ years of enterprise experience.' },
    { name: 'keywords', content: 'Zaky Hanif Testandy, Fullstack Developer, Vue.js, Node.js, Laravel, Flutter, Portfolio, Web Developer, Indonesia' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Zaky Hanif Testandy',
        url: 'https://jakihanif23.github.io',
        jobTitle: 'Fullstack Developer',
        worksFor: {
          '@type': 'Organization',
          name: 'PT. Inovasi Dinamika Solusi',
        },
        sameAs: [
          'https://github.com/jakihanif23',
          'https://www.linkedin.com/in/zaky-hanif-testandy/',
        ],
        knowsAbout: [
          'Vue.js', 'Node.js', 'Laravel', 'Flutter', 'REST API',
          'PostgreSQL', 'MySQL', 'Docker', 'Redis', 'Fullstack Development',
        ],
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Institut Teknologi Telkom Purwokerto',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bekasi',
          addressCountry: 'ID',
        },
        description: 'Fullstack Developer with 3+ years of experience building scalable web applications using modern JavaScript frameworks & backend services.',
      }),
    },
  ],
})

useSeoMeta({
  ogTitle: 'Zaky Hanif Testandy - Fullstack Developer Portfolio',
  ogDescription: 'Portfolio of Zaky Hanif Testandy — Fullstack Developer building scalable web apps with Vue.js, Node.js, Laravel & RESTful APIs. 3+ years of enterprise experience.',
  ogImage: 'https://jakihanif23.github.io/og-image.png',
  ogUrl: 'https://jakihanif23.github.io',
  twitterTitle: 'Zaky Hanif Testandy - Fullstack Developer Portfolio',
  twitterDescription: 'Fullstack Developer building scalable web apps with Vue.js, Node.js, Laravel & RESTful APIs. 3+ years of enterprise experience.',
  twitterImage: 'https://jakihanif23.github.io/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
  </div>
</template>
