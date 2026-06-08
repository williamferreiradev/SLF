<template>
  <section class="py-24 bg-dark-bg relative">
    <div class="container mx-auto px-4">
      <div class="bg-gradient-to-r from-dark-surface to-dark-bg border border-dark-border rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-2xl">
        <div class="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        
        <div class="flex-1 z-10">
          <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Equipe Especializada</h2>
          <p class="text-gray-400 text-lg mb-8 leading-relaxed">
            Nossa equipe de profissionais é altamente qualificada e treinada para atender qualquer demanda. Desde pequenas reformas até grandes obras estruturais, estamos preparados para imprevistos emergenciais.
          </p>
          <div class="flex items-center gap-4 text-white font-bold text-xl">
            <div class="w-12 h-12 bg-primary text-dark-bg rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,193,7,0.4)]">
              <Icon name="ph:phone-call-fill" class="text-2xl" />
            </div>
            Plantão 24 Horas
          </div>
        </div>
        
        <div class="md:w-1/3 z-10 flex justify-center">
          <div class="relative">
            <div class="absolute inset-0 bg-primary rounded-full blur-2xl opacity-20"></div>
            <img src="/img/equipe.png" alt="Equipe" class="w-64 h-64 object-cover rounded-full border-4 border-dark-border relative z-10 grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
