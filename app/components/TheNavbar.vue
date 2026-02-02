<template>
  <nav class="fixed top-4 left-0 right-0 z-50 flex justify-center w-full pointer-events-none">
    <div class="pointer-events-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-lg dark:shadow-2xl rounded-full px-6 py-3 transition-all duration-300 hover:bg-white/90 dark:hover:bg-slate-900/90 hover:scale-[1.02]">
      <div class="flex items-center space-x-1 sm:space-x-4">
        <a href="#" class="mr-2 sm:mr-4 font-display font-bold text-xl bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
          ZH.
        </a>
        
        <a v-for="item in ['About', 'Experience', 'Projects', 'Contact']" 
           :key="item"
           :href="`#${item.toLowerCase()}`" 
           class="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          {{ item }}
        </a>
      </div>
    </div>
  </nav>
</template>
