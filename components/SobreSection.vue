<template>
  <section id="sobre" class="py-24 bg-dark-surface relative overflow-hidden">
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div>
          <div class="inline-block px-4 py-1.5 rounded-full border border-dark-border bg-dark-bg text-sm text-gray-300 font-medium mb-6 uppercase tracking-wider">
            Quem Somos
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Construímos <span class="text-primary">experiências</span>,<br/>
            Entregamos <span class="text-white">resultados.</span>
          </h2>
          <p class="text-gray-400 text-lg mb-6 leading-relaxed">
            Proprietário da empresa SLF Construções e Reformas, <strong class="text-white">Lobato Filho</strong> trabalha há 20 anos na prestação de serviços com reformas e reparos em geral, atuando com excelência em todas as cidades satélites do Distrito Federal.
          </p>
          <p class="text-gray-400 text-lg mb-8 leading-relaxed">
            Trabalhamos com as melhores ferramentas e padrões de qualidade exigidos pelo mercado e a gosto dos clientes, prestando o acompanhamento e manutenção em todos os serviços, além de ter uma equipe de profissionais especializados para atender todas as demandas, inclusive imprevistos emergenciais, a qualquer hora do dia, em regime de <strong class="text-white">PLANTÃO – 24 HORAS.</strong>
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <div class="flex items-center gap-4 bg-dark-bg p-4 rounded-xl border border-dark-border flex-1">
              <Icon name="ph:wrench-fill" class="text-primary text-4xl" />
              <div>
                <div class="font-bold text-white">Ferramentas de Ponta</div>
                <div class="text-sm text-gray-400">Padrão de qualidade</div>
              </div>
            </div>
            <div class="flex items-center gap-4 bg-dark-bg p-4 rounded-xl border border-dark-border flex-1">
              <Icon name="ph:clock-fill" class="text-primary text-4xl" />
              <div>
                <div class="font-bold text-white">Plantão 24h</div>
                <div class="text-sm text-gray-400">Atendimento emergencial</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Image -->
        <div class="relative mt-10 lg:mt-0">
          <div class="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
          <img src="/img/sobre.png" alt="Construção e Reforma" class="relative z-10 w-full h-auto rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-dark-border" />
          
          <!-- Badge flutuante -->
          <div class="absolute -bottom-8 -left-8 bg-primary text-dark-bg p-6 rounded-2xl font-bold shadow-xl z-20 hidden md:block">
            <div class="text-5xl mb-1">20</div>
            <div class="leading-tight uppercase tracking-widest text-sm">Anos de<br/>Experiência</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
