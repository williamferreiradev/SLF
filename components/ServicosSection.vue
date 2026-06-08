<template>
  <section id="servicos" class="py-24 bg-dark-bg relative">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl font-bold text-white mb-4">Nossos Serviços</h2>
        <p class="text-gray-400 text-lg">
          Do conceito à entrega, somos movidos por transformar espaços com precisão e excelência.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Serviço 1 -->
        <div class="group bg-dark-surface border border-dark-border p-8 rounded-2xl hover:border-primary transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,193,7,0.1)]">
          <div class="w-16 h-16 bg-dark-bg flex items-center justify-center rounded-xl mb-6 text-primary group-hover:scale-110 transition-transform">
            <Icon name="ph:lightning-fill" class="text-3xl" />
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Elétricos</h3>
          <p class="text-gray-400 mb-6">Manutenção, instalação e reparos elétricos com total segurança e adequação às normas.</p>
          <a href="#contato" class="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-wider text-sm">
            Saiba Mais <Icon name="ph:arrow-right-bold" />
          </a>
        </div>

        <!-- Serviço 2 -->
        <div class="group bg-dark-surface border border-dark-border p-8 rounded-2xl hover:border-primary transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,193,7,0.1)]">
          <div class="w-16 h-16 bg-dark-bg flex items-center justify-center rounded-xl mb-6 text-primary group-hover:scale-110 transition-transform">
            <Icon name="ph:drop-fill" class="text-3xl" />
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Hidráulica</h3>
          <p class="text-gray-400 mb-6">Instalação e reparo de encanamentos, caixas d'água e sistemas de esgoto sem dor de cabeça.</p>
          <a href="#contato" class="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-wider text-sm">
            Saiba Mais <Icon name="ph:arrow-right-bold" />
          </a>
        </div>

        <!-- Serviço 3 -->
        <div class="group bg-dark-surface border border-dark-border p-8 rounded-2xl hover:border-primary transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,193,7,0.1)]">
          <div class="w-16 h-16 bg-dark-bg flex items-center justify-center rounded-xl mb-6 text-primary group-hover:scale-110 transition-transform">
            <Icon name="ph:paint-brush-fill" class="text-3xl" />
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Pinturas</h3>
          <p class="text-gray-400 mb-6">Acabamento impecável para ambientes internos e externos, valorizando o seu imóvel.</p>
          <a href="#contato" class="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-wider text-sm">
            Saiba Mais <Icon name="ph:arrow-right-bold" />
          </a>
        </div>

        <!-- Serviço 4 -->
        <div class="group bg-dark-surface border border-dark-border p-8 rounded-2xl hover:border-primary transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,193,7,0.1)]">
          <div class="w-16 h-16 bg-dark-bg flex items-center justify-center rounded-xl mb-6 text-primary group-hover:scale-110 transition-transform">
            <Icon name="ph:buildings-fill" class="text-3xl" />
          </div>
          <h3 class="text-xl font-bold text-white mb-3">Edificações</h3>
          <p class="text-gray-400 mb-6">Reformas estruturais, construções e acompanhamento completo da sua obra do zero.</p>
          <a href="#contato" class="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-wider text-sm">
            Saiba Mais <Icon name="ph:arrow-right-bold" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
