<script setup lang="ts">
import { profile } from '~/utils/data'

// Basic animation ref (could use motion library in future)
const mouseX = ref(0)
const mouseY = ref(0)

function handleMouseMove(e: MouseEvent) {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}
</script>

<template>
  <section 
    class="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden"
    @mousemove="handleMouseMove"
  >
    <!-- Dynamic Background -->
    <div class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <!-- Animated Gradient Blobs -->
      <div 
        class="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] animate-blob mix-blend-screen"
      ></div>
      <div 
        class="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"
      ></div>
      <div 
        class="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen"
      ></div>
    </div>

    <!-- Grid Pattern Overlay -->
    <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
      
      <!-- Greeting Pill -->
      <div class="inline-flex items-center px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md mb-8 animate-fade-in-up">
        <span class="w-2 h-2 rounded-full bg-emerald-400 mr-3 animate-pulse"></span>
        <span class="text-emerald-300 text-sm font-medium tracking-wide">Available for Work</span>
      </div>

      <!-- Main Headline -->
      <h1 class="text-6xl md:text-8xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6 animate-fade-in-up delay-100 tracking-tight leading-tight">
        {{ profile.name }}
      </h1>

      <div class="h-1 w-32 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mb-8 animate-fade-in-up delay-200"></div>

      <!-- Role -->
      <h2 class="text-2xl md:text-4xl text-slate-300 font-light mb-8 animate-fade-in-up delay-300">
        {{ profile.role }}
      </h2>
      
      <!-- Summary -->
      <p class="max-w-2xl mx-auto text-lg text-slate-400 mb-12 animate-fade-in-up delay-400 leading-relaxed">
        {{ profile.summary }}
      </p>
      
      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-5 animate-fade-in-up delay-500 w-full justify-center">
        <a 
          href="/CV-Zaky.pdf" 
          download
          class="group relative px-8 py-4 bg-emerald-500 text-white font-semibold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-emerald-500/20"
        >
          <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <span class="relative flex items-center gap-2">
            Download CV 
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          </span>
        </a>
        
        <a 
          href="#contact" 
          class="px-8 py-4 bg-slate-800/50 text-white border border-slate-700 hover:border-emerald-500 font-semibold rounded-2xl backdrop-blur-md transition-all hover:bg-slate-800 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
        >
          Contact Me
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    </div>
    
  </section>
</template>

<style scoped>
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
