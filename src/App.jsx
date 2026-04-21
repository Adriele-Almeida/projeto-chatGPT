import React, { useState, useRef, useEffect } from 'react';
import { 
  BookOpen, 
  Target, 
  Layers, 
  CheckCircle, 
  Settings, 
  FileText, 
  Briefcase, 
  Maximize2, 
  ToggleLeft, 
  Flag,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const appData = {
  title: "Projeto no ChatGPT - O que é, para que serve e como usar",
  intro: [
    "No ChatGPT, Projeto é um espaço de trabalho organizado para um tema contínuo.",
    "Nesse espaço, ficam reunidos conversas, arquivos e instruções, para que o ChatGPT mantenha o contexto e continue o trabalho sem precisar recomeçar do zero a cada chat.",
    "Projetos são como workspaces (espaços de trabalho) inteligentes para trabalhos de longo prazo, com memória, arquivos e instruções no mesmo lugar."
  ],
  sections: [
    {
      id: 1,
      title: "1. Conceito simples",
      icon: BookOpen,
      content: [
        { type: 'text', text: "Pensando de forma prática:" },
        { type: 'list', items: [
          "Chat solto = conversa avulsa",
          "Projeto = ambiente fixo de trabalho"
        ]},
        { type: 'text', text: "Projeto é indicado quando existe:" },
        { type: 'list', items: [
          "Contexto que precisa continuar",
          "Arquivos de referência",
          "Etapas de trabalho",
          "Reaproveitamento de padrão",
          "Necessidade de manter coerência entre várias conversas"
        ]}
      ]
    },
    {
      id: 2,
      title: "2. Para que serve",
      icon: Target,
      content: [
        { type: 'subtitle', text: "Guardar contexto" },
        { type: 'text', text: "O Projeto mantém arquivos, chats e instruções no mesmo lugar." },
        { type: 'text', text: "Isso evita repetir briefing, explicar o cenário de novo e reenviar os mesmos materiais." },
        { type: 'subtitle', text: "Continuar um trabalho que não acaba em uma conversa" },
        { type: 'text', text: "Projetos foram pensados para trabalhos que evoluem com o tempo, como planejamento, pesquisa, escrita e organização de entregas." },
        { type: 'subtitle', text: "Padronizar as respostas" },
        { type: 'text', text: "É possível adicionar instruções do Projeto." },
        { type: 'text', text: "Assim, o ChatGPT passa a responder seguindo uma lógica fixa daquele ambiente." },
        { type: 'subtitle', text: "Reunir material de apoio" },
        { type: 'text', text: "Dentro do Projeto podem ficar:" },
        { type: 'list', items: [
          "PDFs",
          "Imagens",
          "Planilhas",
          "Documentos",
          "Chats antigos movidos para dentro dele"
        ]},
        { type: 'subtitle', text: "Retomar de onde parou" },
        { type: 'text', text: "Projetos têm memória integrada, justamente para manter continuidade dentro daquele espaço." }
      ]
    },
    {
      id: 3,
      title: "3. Como isso se aplica a operações desse tipo",
      icon: Layers,
      content: [
        { type: 'text', text: "Pelo material-base, trata-se de uma atuação como ponte entre negócio e treinamento, transformando necessidades da empresa em solução educacional, coordenando fornecedor, validação, cronograma, orçamento, comunicação e apresentação estratégica do projeto até a entrega final." },
        { type: 'text', text: "Em resumo: não é apenas execução operacional; é orquestração da solução educacional." },
        { type: 'text', text: "Também fica claro que o fluxo real envolve várias etapas conectadas:" },
        { type: 'list', items: [
          "Identificação da necessidade",
          "Briefing",
          "Proposta técnica e comercial",
          "Reorganização do cronograma",
          "Alinhamento com comunicação",
          "Apresentações para diferentes fóruns",
          "Validações até a entrega final"
        ]},
        { type: 'text', text: "Além disso, existe um gargalo importante: parte do tempo é consumida em resumos estratégicos, PPTs e muitas reuniões, especialmente porque há necessidade de adaptar a mesma estratégia para públicos diferentes externo e liderança." },
        { type: 'text', text: "Por isso, em operações com esse perfil, Projeto no ChatGPT faz muito sentido." }
      ]
    },
    {
      id: 4,
      title: "4. O que um Projeto resolve nesse contexto",
      icon: CheckCircle,
      content: [
        { type: 'subtitle', text: "Evita retrabalho" },
        { type: 'text', text: "Sem Projeto, cada nova demanda tende a começar com:" },
        { type: 'quote', text: "\"Qual era o briefing?\"\n\"Qual era a dor?\"\n\"Qual era o objetivo?\"\n\"Qual é o público?\"\n\"Qual era a versão resumida?\"\n\"Qual era a versão detalhada?\"" },
        { type: 'text', text: "Com Projeto, esse contexto já fica organizado no mesmo ambiente." },
        { type: 'subtitle', text: "Ajuda a transformar processo em sistema" },
        { type: 'text', text: "O briefing da Citroën mostra um caso com dor clara, objetivo definido, indicadores impactados, público, restrições e entregáveis. Isso é exatamente o tipo de material que funciona bem dentro de um Projeto, porque não é uma pergunta isolada: é uma cadeia de construção." },
        { type: 'subtitle', text: "Facilita versões diferentes do mesmo conteúdo" },
        { type: 'text', text: "Na coleta de informações, aparece que uma mesma estratégia precisa ser apresentada de formas diferentes:" },
        { type: 'list', items: [
          "Uma versão mais macro para público externo",
          "Outra muito mais profunda para liderança"
        ]},
        { type: 'text', text: "Projeto ajuda porque mantém o mesmo contexto central, mas permite gerar saídas diferentes conforme o público." }
      ]
    },
    {
      id: 5,
      title: "5. Como usar um Projeto no ChatGPT",
      icon: Settings,
      content: [
        { type: 'subtitle', text: "Etapa 1. Criar um Projeto" },
        { type: 'text', text: "Criar um Projeto com nome claro, ligado ao trabalho real." },
        { type: 'text', text: "Exemplos:" },
        { type: 'list', items: [
          "On Demand Citroën",
          "Estratégias de Treinamento Stellantis",
          "Resumo Executivo para Fóruns"
        ]},
        { type: 'text', text: "Como criar o projeto: pelo menu lateral e, depois, adicionar arquivos, instruções e conversas relacionadas." },
        { type: 'subtitle', text: "Etapa 2. Inserir os arquivos-base" },
        { type: 'text', text: "Entram no Projeto os materiais que sustentam a demanda, por exemplo:" },
        { type: 'list', items: [
          "Ficha de briefing",
          "Proposta técnica e comercial",
          "Cronograma",
          "Orçamento",
          "Apresentação-resumo",
          "Referência de comunicação",
          "Prints com modelos aprovados"
        ]},
        { type: 'subtitle', text: "Etapa 3. Definir instruções do Projeto" },
        { type: 'text', text: "Aqui entra a lógica fixa do ambiente." },
        { type: 'text', text: "Exemplo simples de instrução:" },
        { type: 'quote', text: "Este projeto serve para apoiar a construção de soluções educacionais corporativas.\nSempre organizar a resposta em etapas.\nSempre considerar briefing, objetivo, dor, público, entregáveis e validação.\nQuando houver apresentação, gerar também uma versão resumida para público externo e outra aprofundada para liderança." },
        { type: 'subtitle', text: "Etapa 4. Trabalhar por conversas dentro do mesmo Projeto" },
        { type: 'text', text: "Um mesmo Projeto pode ter vários chats\nPor exemplo:" },
        { type: 'list', items: [
          "Chat 1: leitura do briefing",
          "Chat 2: proposta técnica",
          "Chat 3: resumo para cliente",
          "Chat 4: versão para líderes",
          "Chat 5: comunicação interna",
          "Chat 6: estrutura de slides"
        ]},
        { type: 'text', text: "Tudo continua dentro do mesmo ambiente." },
        { type: 'text', text: "Dica: É possivel mover conversas úteis para dentro do Projeto\nConversas que você abre fora do projeto podem ser movidos para um Projeto, herdando as instruções e o contexto daquele espaço." }
      ]
    },
    {
      id: 6,
      title: "6. Exemplo aplicado ao caso Citroën",
      icon: FileText,
      content: [
        { type: 'text', text: "O briefing do caso Citroën traz uma demanda clara: baixa maturidade comercial, alto turnover, ausência de lançamentos, necessidade de fortalecer pertencimento à marca, melhorar conversão e NPS, além de desenvolver a jornada do lead à entrega com foco prático, inclusive em vendas diretas LVC e PME." },
        { type: 'subtitle', text: "Como esse Projeto poderia funcionar" },
        { type: 'text', text: "Nome do Projeto:\nOn Demand Citroën" },
        { type: 'text', text: "Arquivos dentro dele:" },
        { type: 'list', items: [
          "Briefing Citroën",
          "Cronograma",
          "Orçamento",
          "Estratégia educacional",
          "Resumos aprovados",
          "Referências de apresentação"
        ]},
        { type: 'text', text: "Instrução do Projeto:" },
        { type: 'quote', text: "Sempre transformar o contexto em saídas aplicáveis para solução educacional presencial de vendas, com versão macro e versão detalhada." },
        { type: 'text', text: "Pedidos possíveis dentro desse Projeto:" },
        { type: 'list', items: [
          "Resumir a dor central em 1 parágrafo",
          "Transformar o briefing em proposta executiva",
          "Separar módulos do treinamento",
          "Criar versão de apresentação para cliente",
          "Criar versão detalhada para líderes",
          "Listar o que ainda precisa de validação",
          "Converter o briefing em estrutura de slides",
          "Gerar texto de apoio para comunicação"
        ]}
      ]
    },
    {
      id: 7,
      title: "7. Exemplo aplicado",
      icon: Briefcase,
      content: [
        { type: 'text', text: "Na coleta de informações, fica explícito que um dos principais gargalos é o tempo gasto com PPTs e reuniões para apresentar a estratégia em vários fóruns, sendo necessário adaptar a profundidade conforme o público." },
        { type: 'text', text: "Então um uso muito forte de Projeto seria este:" },
        { type: 'subtitle', text: "Projeto: Resumos Estratégicos e Apresentações" },
        { type: 'text', text: "Objetivo do Projeto:\nTransformar qualquer demanda educacional em materiais de apresentação adaptados ao público." },
        { type: 'text', text: "Entradas padrão:" },
        { type: 'list', items: [
          "Briefing",
          "Proposta",
          "Cronograma",
          "Objetivo",
          "Público da apresentação"
        ]},
        { type: 'text', text: "Saídas padrão:" },
        { type: 'list', items: [
          "Resumo executivo",
          "Versão para público externo",
          "Versão aprofundada para líderes",
          "Fala de apresentação",
          "Bullets para slide",
          "Próxima etapa",
          "Pontos críticos para validação"
        ]}
      ]
    },
    {
      id: 8,
      title: "8. O modelo aplicado na aula e como ampliar",
      icon: Maximize2,
      content: [
        { type: 'text', text: "Na aula prática, o modelo construído foi este:" },
        { type: 'subtitle', text: "Modelo-base" },
        { type: 'text', text: "Uma entrada principal -> Saídas obrigatórias padronizadas" },
        { type: 'text', text: "Ou seja, o Projeto foi pensado para receber um contexto inicial e devolver um conjunto de entregas já estruturadas, em vez de depender de muitas idas e vindas." },
        { type: 'subtitle', text: "Como ampliar para possibilidades reais" },
        { type: 'text', text: "No contexto desse tipo de operação, isso pode ir além de:" },
        { type: 'list', items: [
          "Objetivo do treinamento",
          "Convite",
          "Resumo",
          "Estrutura de slides"
        ]},
        { type: 'text', text: "Também pode incluir:" },
        { type: 'list', items: [
          "Leitura do briefing",
          "Diagnóstico da dor do negócio",
          "Versão comercial da proposta",
          "Versão resumida para cliente",
          "Versão aprofundada para líderes",
          "Lista de pendências antes da validação",
          "Organização do fluxo por etapa",
          "Texto para alinhamento com comunicação",
          "Roteiro de reunião",
          "Checklist de entregáveis"
        ]}
      ]
    },
    {
      id: 9,
      title: "9. Quando usar Projeto e quando não usar",
      icon: ToggleLeft,
      content: [
        { type: 'subtitle', text: "Usar Projeto quando:" },
        { type: 'list', items: [
          "O trabalho tiver continuidade",
          "Houver vários arquivos ligados ao mesmo tema",
          "Existir mais de uma etapa",
          "For importante manter padrão",
          "Houver necessidade de voltar depois ao mesmo contexto"
        ]},
        { type: 'subtitle', text: "Não precisar de Projeto quando:" },
        { type: 'list', items: [
          "A tarefa for isolada",
          "A dúvida for rápida",
          "Não existir continuidade"
        ]}
      ]
    },
    {
      id: 10,
      title: "10. Resumo final",
      icon: Flag,
      content: [
        { type: 'text', text: "Projeto no ChatGPT é um ambiente de trabalho contínuo." },
        { type: 'text', text: "Serve para reunir arquivos, instruções e conversas de um mesmo tema, manter o contexto, reduzir retrabalho e padronizar a produção." },
        { type: 'text', text: "Em operações desse tipo, Projeto é especialmente útil porque o trabalho real envolve:" },
        { type: 'list', items: [
          "Transformar dores do negócio em solução educacional",
          "Coordenar fluxo entre áreas",
          "Validar proposta, cronograma e entregáveis",
          "Resumir estratégias para públicos diferentes",
          "Apresentar projetos de forma recorrente",
          "Reduzir tempo gasto com consolidação e PPTs"
        ]},
        { type: 'text', text: "Projeto é um contexto fixo de trabalho para que o ChatGPT passe a atuar com memória, padrão e continuidade dentro de uma operação real." }
      ]
    }
  ]
};

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mainContentRef = useRef(null);

  // Força a rolagem para o topo sempre que a aba mudar
  useEffect(() => {
    if (mainContentRef.current) {
      // Uso 'auto' ao invés de 'smooth' para evitar conflito com alturas que mudam na renderização
      mainContentRef.current.scrollTo({ top: 0, behavior: 'auto' });
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeTab]);

  const handleTabChange = (index) => {
    setActiveTab(index);
    setIsMenuOpen(false);
  };

  const renderContent = (contentBlocks) => {
    return contentBlocks.map((block, index) => {
      if (block.type === 'text') {
        return <p key={index} className="mb-4 text-[#4a3f35] leading-relaxed whitespace-pre-line text-[15px] md:text-base">{block.text}</p>;
      }
      if (block.type === 'subtitle') {
        return <h3 key={index} className="mt-8 mb-3 text-sm md:text-lg font-bold text-[#3e2c20] tracking-wide uppercase opacity-80">{block.text}</h3>;
      }
      if (block.type === 'list') {
        return (
          <ul key={index} className="mb-6 space-y-3 pl-1">
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start text-[#4a3f35] text-[15px] md:text-base bg-[#EAE6DF] p-3 rounded-xl shadow-[inset_2px_2px_4px_rgba(255,255,255,0.5),inset_-2px_-2px_4px_rgba(0,0,0,0.02)]">
                <span className="mr-3 text-[#d4a373] drop-shadow-[0_0_3px_rgba(212,163,115,0.8)] mt-0.5 font-black">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        );
      }
      if (block.type === 'quote') {
        return (
          <blockquote key={index} className="pl-4 border-l-4 border-[#d4a373] mb-6 italic text-[#5D4037] bg-[#EAE6DF] p-4 md:p-5 rounded-r-xl shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,0.6)] whitespace-pre-line text-[14px] md:text-base">
            {block.text}
          </blockquote>
        );
      }
      return null;
    });
  };

  return (
    <div className="h-screen w-full bg-[#F4F1EA] text-[#3e2c20] font-sans flex flex-col md:flex-row overflow-hidden">
      
      {/* Mobile Top Header */}
      <header className="md:hidden flex items-center justify-between p-4 bg-[#F4F1EA] shadow-[0_4px_10px_rgba(0,0,0,0.03)] z-30 relative border-b border-[#EAE6DF]">
        <div className="flex-1 truncate pr-4">
          <h1 className="text-sm font-black text-[#3e2c20] truncate">
            {appData.title.split('-')[0]}
          </h1>
          <p className="text-xs text-[#7A5E4B] truncate">{appData.title.split('-')[1]}</p>
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-xl bg-[#EAE6DF] shadow-[4px_4px_8px_rgba(0,0,0,0.05),-4px_-4px_8px_rgba(255,255,255,0.7)] text-[#3e2c20] active:scale-95 transition-transform"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Sidebar Navigation (Desktop + Mobile Drawer) */}
      <nav className={`
        fixed inset-y-0 left-0 z-40 w-4/5 max-w-[320px] bg-[#EAE6DF] shadow-[8px_0_24px_rgba(0,0,0,0.1)] flex flex-col transform transition-transform duration-300 ease-in-out
        md:relative md:w-80 md:translate-x-0 md:shadow-[4px_0_16px_rgba(0,0,0,0.03)]
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 md:p-8 shrink-0">
          <h1 className="text-xl md:text-2xl font-black text-[#3e2c20] leading-tight mb-2 tracking-tighter hidden md:block">
            {appData.title.split('-')[0]}
          </h1>
          <span className="text-xs md:text-sm font-normal text-[#7A5E4B] hidden md:block mb-4">{appData.title.split('-')[1]}</span>
          <div className="h-1 w-12 bg-[#d4a373] shadow-[0_0_8px_rgba(212,163,115,0.8)] rounded-full hidden md:block"></div>
          
          <div className="md:hidden flex items-center justify-between mb-6">
            <h2 className="font-bold text-[#3e2c20]">Índice</h2>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 text-[#7A5E4B]">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-2 custom-scrollbar">
          <button
            onClick={() => handleTabChange(0)}
            className={`w-full text-left px-4 py-3.5 rounded-xl flex items-center transition-all duration-300 relative overflow-hidden
              ${activeTab === 0 
                ? 'bg-[#F4F1EA] text-[#3e2c20] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.7)]' 
                : 'text-[#7A5E4B] hover:bg-[#F4F1EA] shadow-[4px_4px_8px_rgba(0,0,0,0.05),-4px_-4px_8px_rgba(255,255,255,0.7)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_rgba(255,255,255,0.7)]'}`}
          >
            <div className={`p-1.5 rounded-lg mr-3 ${activeTab === 0 ? 'bg-[#3e2c20]' : 'bg-transparent'}`}>
              <BookOpen size={16} className={activeTab === 0 ? 'text-[#d4a373] filter drop-shadow-[0_0_4px_rgba(212,163,115,1)]' : 'text-[#7A5E4B]'} />
            </div>
            <span className="font-semibold text-[13px] md:text-sm">Introdução</span>
            {activeTab === 0 && <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#d4a373] shadow-[0_0_8px_rgba(212,163,115,0.8)]"></div>}
          </button>

          {appData.sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeTab === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => handleTabChange(section.id)}
                className={`w-full text-left px-4 py-3.5 rounded-xl flex items-center transition-all duration-300 relative overflow-hidden
                  ${isActive 
                    ? 'bg-[#F4F1EA] text-[#3e2c20] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.05),inset_-4px_-4px_8px_rgba(255,255,255,0.7)]' 
                    : 'text-[#7A5E4B] hover:bg-[#F4F1EA] shadow-[4px_4px_8px_rgba(0,0,0,0.05),-4px_-4px_8px_rgba(255,255,255,0.7)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_rgba(255,255,255,0.7)]'}`}
              >
                <div className={`p-1.5 rounded-lg mr-3 shrink-0 ${isActive ? 'bg-[#3e2c20]' : 'bg-transparent'}`}>
                  <Icon size={16} className={isActive ? 'text-[#d4a373] filter drop-shadow-[0_0_4px_rgba(212,163,115,1)]' : 'text-[#7A5E4B]'} />
                </div>
                <span className="font-semibold text-[13px] md:text-sm line-clamp-2 pr-2 leading-tight">{section.title}</span>
                {isActive && <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#d4a373] shadow-[0_0_8px_rgba(212,163,115,0.8)]"></div>}
              </button>
            )
          })}
        </div>

        {/* Desktop Signature Sidebar */}
        <div className="hidden md:flex p-4 mt-auto border-t border-[#3e2c20]/10 justify-center">
          <p className="text-[11px] font-medium text-[#7A5E4B] tracking-wide uppercase opacity-70">
            Adriele Almeida | Estrategista Digital
          </p>
        </div>
      </nav>

      {/* Overlay to close menu on mobile */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-[#3e2c20]/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <main ref={mainContentRef} className="flex-1 overflow-y-auto bg-[#F4F1EA] relative pb-28 md:pb-6">
        {/* Futuristic decorative background elements */}
        <div className="absolute top-10 right-10 w-48 h-48 md:w-64 md:h-64 bg-[#EAE6DF] rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-32 left-10 w-64 h-64 md:w-96 md:h-96 bg-[#d4a373] rounded-full blur-3xl opacity-10 pointer-events-none"></div>

        <div className="max-w-3xl mx-auto p-4 md:p-12 lg:p-16 relative z-10 min-h-full flex flex-col">
          
          <div className="bg-[#F4F1EA] md:bg-[#EAE6DF] rounded-[2rem] p-6 md:p-10 md:shadow-[12px_12px_24px_rgba(0,0,0,0.05),-12px_-12px_24px_rgba(255,255,255,0.8)] md:border border-white/20 mb-auto">
            
            {activeTab === 0 ? (
              <div className="animate-fade-in text-center md:text-left">
                {/* Destaque maior na Introdução */}
                <div className="inline-flex items-center justify-center p-4 md:p-5 rounded-[1.5rem] bg-[#EAE6DF] md:bg-[#F4F1EA] shadow-[6px_6px_12px_rgba(0,0,0,0.08),-6px_-6px_12px_rgba(255,255,255,0.9)] mb-8 md:mb-10 relative">
                  <Sparkles size={20} className="absolute -top-2 -right-2 text-[#d4a373] animate-pulse" />
                  <BookOpen size={40} className="text-[#d4a373] filter drop-shadow-[0_0_12px_rgba(212,163,115,0.9)]" />
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#3e2c20] mb-4 tracking-tighter leading-[1.1]">
                  {appData.title.split('-')[0]}
                </h1>
                <h2 className="text-xl md:text-2xl font-bold text-[#d4a373] mb-10 tracking-tight drop-shadow-[0_0_2px_rgba(212,163,115,0.3)]">
                  {appData.title.split('-')[1]}
                </h2>
                
                <div className="space-y-6 text-left">
                  {appData.intro.map((p, i) => (
                    <p key={i} className="text-[16px] md:text-xl text-[#4a3f35] leading-relaxed font-medium md:font-semibold bg-[#EAE6DF] md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none shadow-[inset_2px_2px_4px_rgba(255,255,255,0.5),inset_-2px_-2px_4px_rgba(0,0,0,0.02)] md:shadow-none">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="animate-fade-in">
                {appData.sections.filter(s => s.id === activeTab).map(section => {
                  const Icon = section.icon;
                  return (
                    <div key={section.id}>
                      <div className="inline-flex items-center justify-center p-3 md:p-4 rounded-2xl bg-[#EAE6DF] md:bg-[#F4F1EA] shadow-[4px_4px_8px_rgba(0,0,0,0.05),-4px_-4px_8px_rgba(255,255,255,0.8)] mb-6 md:mb-8">
                        <Icon size={28} className="text-[#d4a373] filter drop-shadow-[0_0_8px_rgba(212,163,115,0.8)]" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black text-[#3e2c20] mb-8 tracking-tight border-b border-[#d4a373]/30 pb-4 relative leading-tight">
                        {section.title}
                        <div className="absolute bottom-0 left-0 h-0.5 w-16 md:w-24 bg-[#d4a373] shadow-[0_0_8px_rgba(212,163,115,0.8)]"></div>
                      </h2>
                      <div className="text-[15px] md:text-base">
                        {renderContent(section.content)}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
            
            {/* Desktop Navigation Controls (Hidden on mobile) */}
            <div className="hidden md:flex mt-16 justify-between items-center pt-8 border-t border-[#3e2c20]/10">
              <button 
                onClick={() => handleTabChange(Math.max(0, activeTab - 1))}
                disabled={activeTab === 0}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2
                  ${activeTab === 0 
                    ? 'opacity-30 cursor-not-allowed text-[#7A5E4B]' 
                    : 'text-[#3e2c20] shadow-[4px_4px_8px_rgba(0,0,0,0.05),-4px_-4px_8px_rgba(255,255,255,0.7)] hover:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_rgba(255,255,255,0.7)] active:scale-95'}`}
              >
                <ChevronLeft size={18} /> Anterior
              </button>
              
              <button 
                onClick={() => handleTabChange(Math.min(10, activeTab + 1))}
                disabled={activeTab === 10}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2
                  ${activeTab === 10 
                    ? 'opacity-30 cursor-not-allowed text-[#7A5E4B]' 
                    : 'bg-[#3e2c20] text-[#EAE6DF] shadow-[4px_4px_8px_rgba(62,44,32,0.3)] hover:bg-[#5D4037] active:scale-95'}`}
              >
                Próximo <ChevronRight size={18} />
              </button>
            </div>
            
          </div>
          
          {/* Mobile Signature Main Area (shown above fixed nav) */}
          <div className="md:hidden mt-8 mb-4 flex justify-center w-full">
            <p className="text-[10px] font-bold text-[#7A5E4B] tracking-widest uppercase opacity-60">
              Adriele Almeida | Estrategista Digital
            </p>
          </div>

        </div>
      </main>

      {/* Mobile Fixed Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#EAE6DF]/95 backdrop-blur-lg p-3 md:p-4 flex justify-between items-center z-20 shadow-[0_-8px_20px_rgba(0,0,0,0.08)] border-t border-white/60 pb-safe">
        <button 
          onClick={() => handleTabChange(Math.max(0, activeTab - 1))}
          disabled={activeTab === 0}
          className={`flex-1 max-w-[130px] py-3.5 px-3 rounded-[1rem] font-bold flex justify-center items-center gap-1.5 transition-all duration-200 text-[14px]
            ${activeTab === 0 
              ? 'opacity-40 text-[#7A5E4B]' 
              : 'text-[#3e2c20] bg-[#F4F1EA] shadow-[4px_4px_8px_rgba(0,0,0,0.05),-4px_-4px_8px_rgba(255,255,255,0.8)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:scale-[0.98]'}`}
        >
          <ChevronLeft size={16} /> Ant
        </button>
        
        <div className="text-[11px] font-black text-[#7A5E4B] px-2 bg-[#EAE6DF] py-1.5 rounded-full shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-2px_-2px_4px_rgba(255,255,255,0.8)]">
          {activeTab === 0 ? 'Intro' : `${activeTab}/10`}
        </div>

        <button 
          onClick={() => handleTabChange(Math.min(10, activeTab + 1))}
          disabled={activeTab === 10}
          className={`flex-1 max-w-[130px] py-3.5 px-3 rounded-[1rem] font-bold flex justify-center items-center gap-1.5 transition-all duration-200 text-[14px]
            ${activeTab === 10 
              ? 'opacity-40 text-[#7A5E4B]' 
              : 'bg-[#3e2c20] text-[#EAE6DF] shadow-[4px_4px_8px_rgba(62,44,32,0.3)] active:bg-[#5D4037] active:scale-[0.98]'}`}
        >
          Próx <ChevronRight size={16} />
        </button>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        /* Suporte a Safe Area do iOS e Android */
        .pb-safe { padding-bottom: max(1rem, env(safe-area-inset-bottom)); }
        
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #d4a37380; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #d4a373; }
        
        .animate-fade-in {
          animation: fadeIn 0.35s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
