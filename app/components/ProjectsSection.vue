<script setup lang="ts">
import { projects } from '~/utils/data'
</script>

<template>
  <section id="projects" class="py-24 bg-slate-900 border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">Featured Projects</h2>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg">A selection of production applications I've built — from e-commerce to government health portals.</p>
      </div>

      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink 
          v-for="(project, index) in projects" 
          :key="index"
          :to="`/projects/${project.slug}`"
          class="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 flex flex-col"
        >
          <!-- Gradient Glow Effect -->
          <div class="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>

          <!-- Screenshot -->
          <div class="relative overflow-hidden aspect-video">
            <img 
              v-if="project.screenshot"
              :src="project.screenshot" 
              :alt="project.name + ' screenshot'"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div v-else class="w-full h-full bg-gradient-to-br from-emerald-900/30 to-slate-800 flex items-center justify-center">
              <svg class="w-16 h-16 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            </div>
            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          </div>

          <div class="relative p-7 flex flex-col flex-grow">
            <!-- Role Badge -->
            <span class="self-start px-2.5 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-lg border border-emerald-500/20 mb-3">
              {{ project.role }}
            </span>

            <h3 class="text-xl font-bold text-white mb-2 font-display group-hover:text-emerald-400 transition-colors">{{ project.name }}</h3>
            
            <!-- Impact Statement -->
            <p v-if="project.impact" class="text-emerald-400/80 text-sm font-medium mb-4 leading-relaxed">
              ⚡ {{ project.impact }}
            </p>
            
            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mb-4 mt-auto">
              <span 
                v-for="tech in project.techStack.slice(0, 5)" 
                :key="tech"
                class="px-2.5 py-1 bg-white/5 text-slate-300 text-xs font-medium rounded-full border border-white/10"
              >
                {{ tech }}
              </span>
              <span 
                v-if="project.techStack.length > 5"
                class="px-2.5 py-1 bg-white/5 text-slate-400 text-xs font-medium rounded-full border border-white/10"
              >
                +{{ project.techStack.length - 5 }} more
              </span>
            </div>

            <!-- View Details -->
            <div class="pt-4 border-t border-white/5 flex items-center justify-between">
              <span class="text-slate-400 text-sm group-hover:text-emerald-400 transition-colors">View Details</span>
              <svg class="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
