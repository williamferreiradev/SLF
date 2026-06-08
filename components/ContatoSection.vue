<template>
  <section id="contato" class="py-24 bg-dark-surface relative border-t border-dark-border">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Info -->
        <div>
          <h2 class="text-4xl font-bold text-white mb-6">Solicite um <span class="text-primary">Orçamento</span></h2>
          <p class="text-gray-400 text-lg mb-10">
            Preencha o formulário ao lado ou entre em contato direto pelos nossos telefones. Estaremos prontos para atender a sua necessidade.
          </p>
          
          <div class="space-y-6">
            <div class="flex items-center gap-6">
              <div class="w-14 h-14 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-primary group hover:border-primary transition-colors cursor-pointer">
                <Icon name="ph:phone-fill" class="text-2xl group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <div class="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-1">Vivo</div>
                <div class="text-2xl font-bold text-white hover:text-primary transition-colors cursor-pointer">(61) 99863-2656</div>
              </div>
            </div>
            
            <div class="flex items-center gap-6">
              <div class="w-14 h-14 rounded-full bg-dark-bg border border-dark-border flex items-center justify-center text-primary group hover:border-primary transition-colors cursor-pointer">
                <Icon name="ph:phone-fill" class="text-2xl group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <div class="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-1">Oi</div>
                <div class="text-2xl font-bold text-white hover:text-primary transition-colors cursor-pointer">(61) 98632-3467</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Formulário -->
        <div class="bg-dark-bg border border-dark-border rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          <!-- Decorators -->
          <div class="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>

          <form @submit.prevent="submitForm" class="space-y-6 relative z-10">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-2">Nome Completo</label>
                <input type="text" class="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Seu nome" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-400 mb-2">Telefone</label>
                <input type="text" class="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="(00) 00000-0000" />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-2">E-mail</label>
              <input type="email" class="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="seu@email.com" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-400 mb-2">Mensagem</label>
              <textarea rows="4" class="w-full bg-dark-surface border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Descreva sua necessidade..."></textarea>
            </div>
            <button class="w-full bg-primary hover:bg-primary-600 text-dark-bg font-bold py-4 px-8 rounded-lg transition-all text-lg hover:shadow-[0_0_15px_rgba(255,193,7,0.5)]">
              ENVIAR MENSAGEM
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const submitForm = () => {
  alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
}
</script>
