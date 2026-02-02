<script setup lang="ts">
import { projects } from '~/utils/data'
</script>

<template>
  <section id="projects" class="py-24 bg-slate-900 border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6">Featured Projects</h2>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg">A selection of my recent work in web and mobile development.</p>
      </div>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
        >
          <!-- Gradient Glow Effect -->
          <div class="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>

          <div class="relative p-8 h-full flex flex-col">
            <h3 class="text-2xl font-bold text-white mb-3 font-display group-hover:text-emerald-400 transition-colors">{{ project.name }}</h3>
            
            <p class="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300 flex-grow">
              {{ project.description }}
            </p>
            
            <div class="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
              <span 
                v-for="tech in project.techStack" 
                :key="tech"
                class="px-3 py-1 bg-white/5 text-slate-300 text-xs font-medium rounded-full border border-white/10"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
