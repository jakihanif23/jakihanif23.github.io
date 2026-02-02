<script setup lang="ts">
import { profile } from '~/utils/data'
</script>

<template>
  <section id="contact" class="py-24 bg-slate-950 border-t border-white/5">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-8">Get In Touch</h2>
      <p class="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
        I'm currently open for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
      </p>

      <div class="grid md:grid-cols-3 gap-6">
        <a 
          :href="`mailto:${profile.email}`"
          class="group flex flex-col items-center p-8 bg-slate-900 rounded-2xl border border-white/5 hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1"
        >
          <div class="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">✉️</div>
          <h3 class="text-white font-bold mb-1">Email</h3>
          <span class="text-slate-400 text-sm break-all">{{ profile.email }}</span>
        </a>
        
        <a 
          :href="profile.links.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center p-8 bg-slate-900 rounded-2xl border border-white/5 hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1"
        >
          <div class="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">in</div>
          <h3 class="text-white font-bold mb-1">LinkedIn</h3>
          <span class="text-slate-400 text-sm">Connect Profile</span>
        </a>
        
        <a 
          :href="profile.links.github"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center p-8 bg-slate-900 rounded-2xl border border-white/5 hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1"
        >
           <div class="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
             <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
           </div>
          <h3 class="text-white font-bold mb-1">GitHub</h3>
          <span class="text-slate-400 text-sm">View Code</span>
        </a>
      </div>
      
      <div class="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center gap-8 text-slate-500 text-sm">
        <div class="flex items-center gap-2">
           <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
           {{ profile.location }}
        </div>
        <div class="flex items-center gap-2">
           <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
           {{ profile.phone }}
        </div>
      </div>
    </div>
  </section>
</template>
