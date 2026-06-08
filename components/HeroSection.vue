<template>
  <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex flex-col justify-center">
    <!-- Background overlay / image placeholder -->
    <div class="absolute inset-0 bg-[url('/img/hero.png')] bg-cover bg-center opacity-30"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-dark-bg/90 to-transparent"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl">
        <h1 class="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          A excelência da sua obra <br/>
          <span class="text-primary">acontece aqui.</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
          A <strong class="text-white">SLF Construções e Reformas</strong> é a escolha certa para concretizar seus projetos com rapidez e excelência. Há 20 anos entregando soluções completas do início ao fim no Distrito Federal.
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="#portfolio" class="bg-primary hover:bg-primary-600 text-dark-bg font-bold py-3 px-8 rounded-full flex items-center gap-2 transition-all hover:shadow-[0_0_15px_rgba(255,193,7,0.5)]">
            CONHEÇA NOSSAS OBRAS
            <Icon name="ph:arrow-right-bold" class="text-xl" />
          </a>
        </div>
      </div>
      
      <!-- Stats -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-10 border-t border-dark-border/50">
        <div class="text-center md:text-left">
          <div class="text-4xl font-bold text-white mb-2">20+</div>
          <div class="text-sm text-gray-400 uppercase tracking-wider font-semibold">Anos de atuação</div>
        </div>
        <div class="text-center md:text-left">
          <div class="text-4xl font-bold text-white mb-2 flex items-center md:justify-start justify-center gap-2">
            <Icon name="ph:check-circle-fill" class="text-primary text-3xl" /> 100%
          </div>
          <div class="text-sm text-gray-400 uppercase tracking-wider font-semibold">Comprometimento</div>
        </div>
        <div class="text-center md:text-left">
          <div class="text-4xl font-bold text-white mb-2">24h</div>
          <div class="text-sm text-gray-400 uppercase tracking-wider font-semibold">Plantão de Atendimento</div>
        </div>
        <div class="text-center md:text-left">
          <div class="text-4xl font-bold text-white mb-2">DF</div>
          <div class="text-sm text-gray-400 uppercase tracking-wider font-semibold">Todo Distrito Federal</div>
        </div>
      </div>
    </div>
  </section>
</template>
