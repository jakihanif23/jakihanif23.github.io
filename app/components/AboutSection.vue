<script setup lang="ts">
import { education, skills, certifications } from '~/utils/data'
</script>

<template>
  <section id="about" class="py-24 bg-slate-900 relative overflow-hidden">
    <!-- Decorative Blurs -->
    <div class="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        <!-- Skills (Visual Cloud) -->
        <div class="mb-32">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-display font-bold text-white mb-4">Top Technologies</h2>
            <div class="h-1 w-24 bg-gradient-to-r from-emerald-500 to-transparent mx-auto rounded-full"></div>
          </div>
          
          <div class="flex flex-wrap justify-center gap-x-4 gap-y-6 max-w-5xl mx-auto">
            <span 
              v-for="skill in skills" 
              :key="skill"
              class="relative px-6 py-3 bg-slate-800/80 backdrop-blur-sm text-slate-200 rounded-2xl border border-white/5 hover:border-emerald-500 hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300 cursor-default flex items-center gap-2 group"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:animate-pulse"></span>
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-16 lg:gap-24">
           <!-- Education -->
           <div>
              <div class="flex items-center gap-4 mb-10">
                <div class="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                  <svg class="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/></svg>
                </div>
                <h3 class="text-3xl font-display font-bold text-white">Education</h3>
              </div>
              
              <div class="space-y-8">
                <div v-for="(edu, idx) in education" :key="idx" class="relative group">
                   <!-- Vertical Line -->
                   <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-slate-800 rounded-full opacity-30 group-hover:opacity-100 transition-opacity"></div>
                   
                   <div class="pl-8 transition-all duration-300 group-hover:pl-10">
                      <h4 class="text-emerald-400 font-bold text-xl mb-1 font-display">{{ edu.degree }}</h4>
                      <h5 class="text-white font-medium text-lg mb-3">{{ edu.institution }}</h5>
                      
                      <div class="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 rounded-md text-xs text-slate-400 font-mono mb-4 border border-white/5">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                        {{ edu.period }}
                      </div>

                      <ul class="space-y-2">
                        <li v-for="d in edu.details" :key="d" class="text-slate-400 text-sm flex gap-3 leading-relaxed">
                          <span class="text-emerald-500/50 mt-1">›</span>
                          {{ d }}
                        </li>
                      </ul>
                   </div>
                </div>
              </div>
           </div>

           <!-- Certifications -->
           <div>
              <div class="flex items-center gap-4 mb-10">
                <div class="p-3 bg-teal-500/10 rounded-2xl border border-teal-500/20">
                  <svg class="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                </div>
                <h3 class="text-3xl font-display font-bold text-white">Certifications</h3>
              </div>

              <div class="space-y-4">
                <a 
                  v-for="(cert, idx) in certifications" 
                  :key="idx" 
                  href="#"
                  class="block bg-slate-800/40 p-5 rounded-2xl border border-white/5 hover:bg-slate-800 hover:border-teal-500/40 transition-all duration-300 group"
                >
                   <div class="flex items-start gap-4">
                      <div class="mt-1 w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0 group-hover:bg-teal-500 transition-colors">
                        <svg class="w-3 h-3 text-teal-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <div>
                        <p class="text-slate-200 font-medium group-hover:text-white transition-colors">{{ cert }}</p>
                        <p class="text-slate-500 text-xs mt-1">Verified Credential</p>
                      </div>
                   </div>
                </a>
              </div>
           </div>
        </div>

     </div>
  </section>
</template>
