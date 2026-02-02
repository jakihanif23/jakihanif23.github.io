<template>
  <div class="min-h-screen bg-slate-950 text-white font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
    <TheNavbar />
    <main>
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<style>
/* Global smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #020617; 
}
::-webkit-scrollbar-thumb {
  background: #1e293b; 
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: #10b981; 
}
</style>
