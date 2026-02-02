<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-slate-950 border-t border-white/5 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <div class="text-left">
          <p class="text-slate-400 font-medium">Zaky Hanif Testandy</p>
          <p class="text-slate-600 text-sm">Frontend Developer</p>
      </div>
      
      <p class="text-slate-600 text-sm">
        &copy; {{ year }}. Built with <span class="text-emerald-500">Nuxt 3</span> & Tailwind.
      </p>
    </div>
  </footer>
</template>
