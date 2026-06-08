<template>
  <section id="portfolio" class="py-24 bg-dark-surface relative">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl font-bold text-white mb-4">Portfólio & Referências</h2>
        <p class="text-gray-400 text-lg">
          Disponibilizamos visitas a obras já concluídas. Visualize nossos trabalhos recentes.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Obra 1 -->
        <div class="group relative rounded-2xl overflow-hidden cursor-pointer">
          <div class="aspect-video bg-gray-800">
            <img src="/img/portfolio1.png" alt="Obra" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
          <div class="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
            <div class="text-primary font-bold mb-2">MAR / 2019</div>
            <h3 class="text-2xl font-bold text-white mb-2">Reformas de Cozinha</h3>
            <p class="text-gray-300 text-sm mb-4 line-clamp-2">Reforma de cozinha e área de serviço em retificado e assentamento de piso em porcelanato e pinturas de áreas comuns.</p>
            <div class="text-xs text-gray-400 uppercase tracking-wider flex items-center gap-2">
              <Icon name="ph:map-pin-fill" class="text-primary" /> Asa Norte / Brasília-DF
            </div>
          </div>
        </div>

        <!-- Obra 2 -->
        <div class="group relative rounded-2xl overflow-hidden cursor-pointer">
          <div class="aspect-video bg-gray-800">
            <img src="/img/sobre.png" alt="Obra" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
          <div class="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
            <div class="text-primary font-bold mb-2">FEV / 2019</div>
            <h3 class="text-2xl font-bold text-white mb-2">Apartamento</h3>
            <p class="text-gray-300 text-sm mb-4 line-clamp-2">Revestimentos de cozinha e banheiros com decoração em pastilhas e além de pinturas.</p>
            <div class="text-xs text-gray-400 uppercase tracking-wider flex items-center gap-2">
              <Icon name="ph:map-pin-fill" class="text-primary" /> Av. Flamboyant - Águas Claras
            </div>
          </div>
        </div>

        <!-- Obra 3 -->
        <div class="group relative rounded-2xl overflow-hidden cursor-pointer">
          <div class="aspect-video bg-gray-800">
            <img src="/img/hero.png" alt="Obra" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
          <div class="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
            <div class="text-primary font-bold mb-2">JAN / 2019</div>
            <h3 class="text-2xl font-bold text-white mb-2">Mansão Residencial</h3>
            <p class="text-gray-300 text-sm mb-4 line-clamp-2">Reformas com revestimentos de pisos em porcelanato, banheiros, decorações, gesso, pintura, sauna e churrasqueira.</p>
            <div class="text-xs text-gray-400 uppercase tracking-wider flex items-center gap-2">
              <Icon name="ph:map-pin-fill" class="text-primary" /> Ponte Alta/DF
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <button class="border-2 border-primary text-primary hover:bg-primary hover:text-dark-bg font-bold py-3 px-8 rounded-full transition-all">
          VER TODOS OS SERVIÇOS
        </button>
      </div>
    </div>
  </section>
</template>
