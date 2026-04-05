import React from 'react';

// Dados dos Capítulos
const capitulos = [
  { num: 1, titulo: "Primeiros Passos", desc: ["Por que começar devagar", "O que você precisa", "Sua primeira corrida", "Dicas de ouro"] },
  { num: 2, titulo: "Rotina de Treino", desc: ["Frequência ideal", "Como dividir treinos", "Plano de 4 semanas", "Ajustes importantes"] },
  { num: 3, titulo: "Fôlego e Ritmo", desc: ["Respiração na corrida", "Encontrando seu ritmo", "Treinos intervalados", "Controle do ritmo"] },
  { num: 4, titulo: "Força e Prevenção", desc: ["Importância do fortalecimento", "Exercícios para iniciantes", "Alongamentos essenciais", "Evitando lesões"] },
  { num: 5, titulo: "Alimentação", desc: ["O que comer antes", "Hidratação correta", "Recuperação pós-treino", "Energia no dia a dia"] },
  { num: 6, titulo: "Mentalidade", desc: ["Importância da mente", "Três pilares mentais", "Estratégias práticas", "Dias difíceis"] },
  { num: 7, titulo: "Primeira Conquista", desc: ["Por que 5 km é especial", "Plano para chegar lá", "Dia da conquista", "Comemorando"] },
];

function App() {
  
  // Dispara o evento de "InitiateCheckout" no Pixel quando o cliente clicar em comprar
  const handleCheckoutClick = () => {
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout');
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-teal-500 selection:text-white relative">
      
      {/* HERO SECTION */}
      <header className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-gradient-to-br from-teal-600 to-teal-400">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="z-10 max-w-4xl w-full flex flex-col items-center gap-6 mt-16">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter uppercase text-white leading-tight drop-shadow-lg">
            Do Sofá à <span className="text-yellow-400">Medalha</span>
          </h1>
          <p className="text-2xl md:text-3xl text-white font-light max-w-2xl drop-shadow-md">
            Evolução garantida. Do primeiro passo à primeira conquista!
          </p>
          <p className="text-lg md:text-xl text-teal-50 font-medium max-w-3xl mt-4">
            Transforme sua vida através da corrida, mesmo que você nunca tenha corrido antes. O método exato para os seus primeiros 5km.
          </p>
          <div className="mt-8">
            <a 
              href="https://pay.hotmart.com/J103496537E?bid=1775354084781" 
              onClick={handleCheckoutClick}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white text-teal-600 font-black text-xl rounded-xl hover:bg-teal-50 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_15px_40px_rgba(0,0,0,0.2)] uppercase tracking-wide"
            >
              Comprar o E-book Agora
            </a>
          </div>
        </div>
      </header>

      {/* SOBRE O AUTOR */}
      <section id="sobre" className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
              Conheça <span className="text-teal-500">William Lopes</span>
            </h2>
            <div className="w-20 h-1 bg-teal-500 mt-2 mb-4"></div>
            <div className="text-slate-600 space-y-4 text-lg leading-relaxed">
              <p>Sou amante do esporte e comecei da maneira errada a correr assim como você, até que veio a primeira lesão.</p>
              <p>Depois de 2 meses parado e muito fortalecimento, eu melhorei e voltei a correr. Foi aí que veio a minha segunda lesão.</p>
              <p>Foi nesse tempo parado que comecei a buscar informações com profissionais e apliquei a verdadeira ciência do treinamento.</p>
              <p>Depois de ajudar várias pessoas a saírem do zero e cruzarem sua primeira linha de chegada, <strong className="text-teal-600">reuni tudo o que realmente funciona neste e-book</strong>. Pare de sofrer na corrida e comece a evoluir.</p>
            </div>
            <a 
              href="https://www.instagram.com/williamlopes.3?igsh=YzlnYzJreHp6M3Nj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-3 w-fit px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
            >
              📱 Seguir no Instagram
            </a>
          </div>
          <div className="relative order-1 md:order-2 h-[500px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img src="/foto-william.jpg" alt="William Lopes" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* A JORNADA (CITAÇÃO) */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 p-10 md:p-16 rounded-3xl border-l-8 border-teal-500 shadow-xl relative">
            <span className="absolute -top-10 left-10 text-9xl text-teal-200 opacity-50 font-serif">"</span>
            <h2 className="text-3xl font-bold mb-8 text-slate-800 relative z-10">Minha Jornada</h2>
            <div className="text-lg text-slate-600 space-y-4 relative z-10">
              <p>Comecei a correr sem orientação, apenas com vontade de mudar. Logo vieram as frustrações e as dores.</p>
              <p>Parei de correr sem planejamento e comecei a estudar com especialistas. Aprendi sobre periodização, fortalecimento e mentalidade. <strong className="text-teal-600">Foi quando percebi que a maioria dos iniciantes comete os mesmos erros que eu cometi.</strong></p>
              <p>Criei este método prático e direto para que você não precise passar pelas mesmas dores para cruzar a sua linha de chegada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPE PERNA MANCA */}
      <section className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Equipe Perna Manca</h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">Mais do que uma equipe de corrida, somos uma família que compartilha a paixão pela superação.</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <img src="/foto-equipe.jpg" alt="Equipe Perna Manca" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-center text-center bg-white p-10 rounded-2xl shadow-xl">
            <div className="w-48 h-48 mb-6 p-4 bg-white rounded-full border-4 border-slate-50 shadow-inner flex items-center justify-center">
              <img src="/log-equipe.jpg" alt="Logo Equipe" className="max-w-full max-h-full object-contain rounded-full" />
            </div>
            <p className="text-lg text-slate-600 mb-8">Uma comunidade de corredores que se apoia, treina junto e celebra cada vitória. Do iniciante ao experiente.</p>
            <a 
              href="https://www.instagram.com/equipepernamanca_?igsh=MXJrNDd2bm1rNGpiNQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition-all shadow-lg"
            >
              📱 Conhecer a Equipe
            </a>
          </div>
        </div>
      </section>

      {/* CAPÍTULOS */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 mb-16">
            O que você vai aprender
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {capitulos.map((cap) => (
              <div key={cap.num} className="bg-slate-50 p-8 rounded-2xl border-2 border-transparent hover:border-teal-400 hover:shadow-[0_15px_30px_rgba(32,178,170,0.15)] hover:-translate-y-2 transition-all duration-300">
                <span className="text-teal-500 font-black text-lg mb-2 block">Capítulo {cap.num}</span>
                <h3 className="text-2xl font-bold text-slate-800 mb-6 leading-tight">{cap.titulo}</h3>
                <ul className="space-y-3">
                  {cap.desc.map((item, idx) => (
                    <li key={idx} className="flex items-start text-slate-600 text-sm">
                      <span className="text-teal-500 mr-2 font-bold">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VÍDEO DO YOUTUBE (Placeholder Em Breve) */}
      <section className="py-24 px-6 md:px-12 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">Conheça o Método</h2>
          <p className="text-slate-400 mb-10 text-lg">O vídeo documentário completo sobre o método "Do Sofá à Medalha" estará disponível em breve.</p>
          <div className="aspect-video w-full rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl bg-black flex flex-col items-center justify-center gap-4">
             <span className="text-6xl">🎥</span>
             <span className="text-slate-500 font-bold uppercase tracking-widest text-xl">Vídeo em Produção</span>
          </div>
          <div className="mt-12">
            <a 
              href="https://www.youtube.com/@vemdao.3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-all"
            >
              ▶ Acompanhe os Treinos no YouTube
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL HOTMART */}
      <section className="py-32 px-6 bg-gradient-to-br from-teal-600 to-teal-500 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tight">Pronto para começar?</h2>
          <p className="text-2xl text-teal-50 mb-12 font-light">
            Não corra para se machucar. Corra para evoluir. Garanta o método exato para cruzar a linha de chegada dos 5km.
          </p>
          <a 
            href="https://pay.hotmart.com/J103496537E?bid=1775354084781" 
            onClick={handleCheckoutClick}
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-12 py-6 bg-yellow-400 text-slate-900 font-black text-2xl rounded-xl hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-[0_15px_40px_rgba(250,204,21,0.4)] uppercase"
          >
            Comprar Agora
          </a>
          <p className="mt-6 text-teal-100 text-sm flex items-center gap-2">
            🔒 Compra 100% Segura e Acesso Imediato
          </p>
        </div>
      </section>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a 
        href="https://wa.me/5519997561627?text=Oi!%20Quero%20saber%20mais%20sobre%20o%20e-book%20Do%20Sofá%20à%20Medalha"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>

      {/* FOOTER */}
      <footer className="py-8 bg-slate-900 text-slate-500 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Do Sofá à Medalha - William Lopes.</p>
        <p className="mt-1">Todos os direitos reservados. Contato: Vemdaocorredor@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;