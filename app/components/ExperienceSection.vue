<script setup lang="ts">
import { experiences } from '~/utils/data'
</script>

<template>
  <section id="experience" class="py-24 bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row gap-16">
        
        <!-- Header Sticky -->
        <div class="md:w-1/3">
          <div class="sticky top-32 text-left">
            <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Work<br/><span class="text-emerald-500">Experience</span>
            </h2>
            <p class="text-slate-400 text-lg leading-relaxed mb-8">
              My professional journey building scalable applications and intuitive user interfaces.
            </p>
            <a href="#contact" class="inline-flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300 transition-colors group">
              Contact Me 
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        </div>

        <!-- Timeline Content -->
        <div class="md:w-2/3 space-y-12">
          <div v-for="(exp, index) in experiences" :key="index" class="relative group pl-8 md:pl-0">
            
            <!-- Timeline Line -->
            <div 
              class="absolute left-0 top-12 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 to-transparent md:left-[-33px] h-[calc(100%-48px)] group-last:hidden"
            ></div>

            <div class="relative text-left">
               <!-- Dot -->
               <div class="absolute left-[-36px] md:left-[-69px] top-2 w-4 h-4 rounded-full border-2 border-emerald-500 bg-slate-950 z-10">
                 <div class="absolute inset-0 bg-emerald-500 rounded-full opacity-20 animate-ping"></div>
               </div>

              <div class="bg-slate-900/50 rounded-3xl p-8 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:bg-slate-900 group-hover:shadow-2xl group-hover:shadow-emerald-900/10">
                
                <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 class="text-2xl font-display font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {{ exp.role }}
                    </h3>
                    <div class="flex items-center gap-2 text-slate-300 font-medium text-lg">
                      <svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                      {{ exp.company }}
                    </div>
                  </div>
                  
                  <span class="inline-flex self-start items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm shrink-0">
                    {{ exp.period }}
                  </span>
                </div>
                
                <ul class="space-y-4">
                  <li v-for="(detail, i) in exp.details" :key="i" class="flex gap-4 text-slate-400 group/item">
                    <span class="mt-2 w-1.5 h-1.5 rounded-full bg-slate-600 group-hover/item:bg-emerald-500 transition-colors shrink-0"></span>
                    <span class="leading-relaxed hover:text-slate-200 transition-colors">{{ detail }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
