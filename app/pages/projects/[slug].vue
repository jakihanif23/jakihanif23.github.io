<script setup lang="ts">
import { projects, type Project } from '~/utils/data'

const route = useRoute()
const slug = route.params.slug as string

const project = computed<Project | undefined>(() => {
  return projects.find(p => p.slug === slug)
})

// 404 if project not found
if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found'
  })
}

useHead({
  title: `${project.value.name} — Zaky Hanif Testandy`,
  meta: [
    { name: 'description', content: project.value.impact }
  ]
})
</script>

<template>
  <div v-if="project" class="min-h-screen bg-slate-950">
    <!-- Hero Banner -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <!-- Background Effects -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[100px]"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-teal-500/8 rounded-full blur-[100px]"></div>
      </div>

      <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Back Link -->
        <NuxtLink 
          to="/#projects" 
          class="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors mb-10 group"
        >
          <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Projects
        </NuxtLink>

        <!-- Role Badge -->
        <div class="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
          <span class="text-emerald-400 text-sm font-semibold tracking-wide">{{ project.role }}</span>
        </div>

        <!-- Project Title -->
        <h1 class="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
          {{ project.name }}
        </h1>

        <!-- Impact Statement -->
        <p class="text-xl md:text-2xl text-emerald-400/80 font-medium mb-8 leading-relaxed max-w-3xl">
          ⚡ {{ project.impact }}
        </p>

        <!-- Tech Stack Pills -->
        <div class="flex flex-wrap gap-2 mb-8">
          <span 
            v-for="tech in project.techStack" 
            :key="tech"
            class="px-4 py-2 bg-white/5 text-slate-200 text-sm font-medium rounded-xl border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition-all"
          >
            {{ tech }}
          </span>
        </div>

        <!-- Action Links -->
        <div class="flex gap-4">
          <a 
            v-if="project.liveUrl" 
            :href="project.liveUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-emerald-500/20"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            Live Demo
          </a>
          <a 
            v-if="project.repoUrl" 
            :href="project.repoUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-emerald-500 hover:scale-105 active:scale-95 transition-all"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Source Code
          </a>
        </div>
      </div>
    </section>

    <!-- Screenshot -->
    <section class="py-12 bg-slate-900/50">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
          <img 
            :src="project.screenshot" 
            :alt="project.name + ' screenshot'"
            class="w-full h-auto"
          />
        </div>
      </div>
    </section>

    <!-- Content Grid -->
    <section class="py-20">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-12">
          
          <!-- Main Content (2/3) -->
          <div class="md:col-span-2 space-y-16">
            
            <!-- About -->
            <div>
              <h2 class="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <div class="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                About This Project
              </h2>
              <p class="text-slate-300 leading-relaxed text-lg">
                {{ project.description }}
              </p>
            </div>

            <!-- Responsibilities -->
            <div>
              <h2 class="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <div class="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
                </div>
                Key Responsibilities
              </h2>
              <ul class="space-y-4">
                <li 
                  v-for="(detail, i) in project.details" 
                  :key="i" 
                  class="flex gap-4 group"
                >
                  <span class="mt-2.5 w-2 h-2 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 transition-colors shrink-0"></span>
                  <span class="text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors">{{ detail }}</span>
                </li>
              </ul>
            </div>

            <!-- Key Achievements -->
            <div v-if="project.keyAchievements && project.keyAchievements.length > 0">
              <h2 class="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                <div class="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center">
                  <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                </div>
                Key Achievements
              </h2>
              <ul class="space-y-4">
                <li 
                  v-for="(achievement, i) in project.keyAchievements" 
                  :key="i" 
                  class="flex gap-4 group"
                >
                  <span class="mt-1 text-amber-500 shrink-0">🏆</span>
                  <span class="text-slate-300 leading-relaxed group-hover:text-slate-100 transition-colors">{{ achievement }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Sidebar (1/3) -->
          <div class="space-y-8">
            
            <!-- Tech Stack Card -->
            <div class="bg-slate-900/80 rounded-2xl p-6 border border-white/5">
              <h3 class="text-lg font-display font-bold text-white mb-4">Tech Stack</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.techStack" 
                  :key="tech"
                  class="px-3 py-1.5 bg-white/5 text-slate-300 text-xs font-medium rounded-lg border border-white/10"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Libraries Card -->
            <div v-if="project.libraries && project.libraries.length > 0" class="bg-slate-900/80 rounded-2xl p-6 border border-white/5">
              <h3 class="text-lg font-display font-bold text-white mb-4">Libraries & Tools</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="lib in project.libraries" 
                  :key="lib"
                  class="px-3 py-1.5 bg-teal-500/5 text-teal-300 text-xs font-medium rounded-lg border border-teal-500/10"
                >
                  {{ lib }}
                </span>
              </div>
            </div>

            <!-- Role Card -->
            <div class="bg-slate-900/80 rounded-2xl p-6 border border-white/5">
              <h3 class="text-lg font-display font-bold text-white mb-3">My Role</h3>
              <p class="text-emerald-400 font-semibold">{{ project.role }}</p>
            </div>

            <!-- Links Card -->
            <div v-if="project.liveUrl || project.repoUrl" class="bg-slate-900/80 rounded-2xl p-6 border border-white/5">
              <h3 class="text-lg font-display font-bold text-white mb-4">Links</h3>
              <div class="space-y-3">
                <a 
                  v-if="project.liveUrl" 
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors group"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  <span class="group-hover:underline">{{ project.liveUrl }}</span>
                </a>
                <a 
                  v-if="project.repoUrl" 
                  :href="project.repoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors group"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  <span class="group-hover:underline">Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Other Projects -->
    <section class="py-16 bg-slate-900/50 border-t border-white/5">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-display font-bold text-white mb-10 text-center">Other Projects</h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="other in projects.filter(p => p.slug !== project!.slug).slice(0, 3)"
            :key="other.slug"
            :to="`/projects/${other.slug}`"
            class="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div class="aspect-video overflow-hidden">
              <img 
                :src="other.screenshot" 
                :alt="other.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-5">
              <h3 class="text-white font-bold font-display group-hover:text-emerald-400 transition-colors mb-2">{{ other.name }}</h3>
              <p class="text-slate-400 text-sm line-clamp-2">{{ other.impact }}</p>
            </div>
          </NuxtLink>
        </div>
        
        <div class="text-center mt-10">
          <NuxtLink 
            to="/#projects" 
            class="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 hover:border-emerald-500 transition-all hover:scale-105 active:scale-95"
          >
            View All Projects
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
