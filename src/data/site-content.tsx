import React from 'react';
import { 
  MessageSquare, Layout, MapPin, Zap, ArrowUpRight, CheckCircle2,
  Star, TrendingUp, Users, Clock, AlertTriangle, TrendingDown,
  UserX, XCircle, DollarSign, Settings, Rocket, ExternalLink, Quote
} from 'lucide-react';

export const services = [
  { 
    title: "Sites Institucionais", 
    desc: "Sites profissionais e personalizados para empresas que desejam ter uma presença online sólida e confiável.", 
    icon: <Layout size={28} className="text-primary" />,
    features: ["Profissional", "Personalizado", "Confiável"]
  },
  { 
    title: "Landing Pages Otimizadas", 
    desc: "Páginas de alta conversão para campanhas e capturas de leads, projetadas para impulsionar resultados.", 
    icon: <Zap size={28} className="text-primary" />,
    features: ["Alta Conversão", "Campanhas", "Leads"]
  },
  { 
    title: "Lojas Virtuais (E-commerce)", 
    desc: "Plataformas completas para venda online, com funcionalidades modernas e uma experiência de compra incrível.", 
    icon: <MessageSquare size={28} className="text-primary" />,
    features: ["Venda Online", "Funcionalidades Modernas", "Experiência"]
  },
  { 
    title: "SISTEMAS PERSONALIZADOS", 
    desc: "Soluções sob medida para atender às necessidades específicas do seu negócio, com eficiência e inovação.", 
    icon: <Zap size={28} className="text-primary" />,
    features: ["Sob Medida", "Eficiência", "Inovação"]
  },
  { 
    title: "APLICATIVOS", 
    desc: "Desenvolvimento de aplicativos modernos e funcionais para Android e iOS, projetados para engajar seus usuários.", 
    icon: <Layout size={28} className="text-primary" />,
    features: ["Android/iOS", "Modernos", "Funcionais"]
  },
  { 
    title: "TRÁFEGO PAGO", 
    desc: "Estratégias de anúncios online para atrair clientes e aumentar a visibilidade da sua marca rapidamente.", 
    icon: <Zap size={28} className="text-primary" />,
    features: ["Anúncios", "Visibilidade", "Rápido"]
  },
  { 
    title: "Blog Corporativo", 
    desc: "Criação de blogs profissionais para compartilhar conteúdo relevante e engajar sua audiência.", 
    icon: <Layout size={28} className="text-primary" />,
    features: ["Conteúdo", "Engajamento", "Profissional"]
  },
  { 
    title: "SEO e CRO", 
    desc: "Otimização para mecanismos de busca e conversão para levar seu site ao topo e maximizar resultados.", 
    icon: <Zap size={28} className="text-primary" />,
    features: ["Busca", "Conversão", "Maximizar"]
  }
];

export const benefits = [
  {
    icon: <CheckCircle2 size={28} />,
    title: "Visibilidade 24/7",
    desc: "Seu negócio disponível o tempo todo, acessível de qualquer lugar.",
    stat: "24/7",
    statLabel: "ativo"
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: "Credibilidade e Confiança",
    desc: "Sites profissionais geram mais confiança e destacam sua marca.",
    stat: "100%",
    statLabel: "profissional"
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: "Alcance Global",
    desc: "Expanda sua audiência além das fronteiras físicas.",
    stat: "∞",
    statLabel: "alcance"
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: "Facilidade de Comunicação",
    desc: "Ofereça canais de contato direto com seus clientes.",
    stat: "Zap",
    statLabel: "contato"
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: "Oportunidade de Vendas",
    desc: "Converta visitantes em clientes com um site otimizado e de alta performance.",
    stat: "ROI",
    statLabel: "vendas"
  }
];

export const faqs = [
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "A maioria dos nossos clientes vê resultados significativos em até 30 dias. A implementação completa leva de 5 a 7 dias úteis, e a partir daí você já começa a receber leads qualificados automaticamente."
  },
  {
    question: "Preciso ter conhecimento técnico?",
    answer: "Não! Cuidamos de toda a parte técnica. Você só precisa nos fornecer informações sobre seu negócio e aprovar os materiais. Nossa equipe configura tudo e você recebe um dashboard simples para acompanhar os resultados."
  },
  {
    question: "A IA realmente substitui um vendedor?",
    answer: "A IA complementa sua equipe, não substitui. Ela qualifica leads, responde dúvidas frequentes e agenda atendimentos 24/7. Leads quentes são direcionados para sua equipe fechar a venda."
  },
  {
    question: "Funciona para qualquer tipo de negócio?",
    answer: "Nossa solução é ideal para negócios locais, prestadores de serviço, clínicas, academias, imobiliárias, e-commerces e qualquer empresa que receba leads pelo WhatsApp ou formulários online."
  },
  {
    question: "Qual o investimento necessário?",
    answer: "Temos planos a partir de R$997/mês. O investimento se paga rapidamente considerando que você para de perder leads e aumenta significativamente sua taxa de conversão. Oferecemos garantia de 30 dias."
  },
  {
    question: "Como funciona a garantia?",
    answer: "Se em 30 dias você não ver resultados mensuráveis (mais leads respondidos, agendamentos ou vendas), devolvemos 100% do seu investimento. Simples assim, sem burocracia."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim! Não temos fidelidade contratual. Você pode cancelar a qualquer momento. Mas honestamente, nossos clientes renovam porque os resultados falam por si."
  },
  {
    question: "Vocês oferecem suporte?",
    answer: "Sim! Oferecemos suporte via WhatsApp 7 dias por semana, das 8h às 22h. Além disso, você terá um gerente de conta dedicado para acompanhar seus resultados e sugerir melhorias."
  }
];

export const projects = [
  {
    title: 'Clínica Premium',
    category: 'Saúde',
    result: '+400% faturamento',
    desc: 'Landing page + IA WhatsApp para clínica odontológica'
  },
  {
    title: 'Auto Center Plus',
    category: 'Automotivo',
    result: '+250% conversão',
    desc: 'Automação completa de orçamentos e agendamentos'
  },
  {
    title: 'Academia FitMax',
    category: 'Fitness',
    result: '+200% matrículas',
    desc: 'Quiz interativo + captação automática de leads'
  },
  {
    title: 'Imóveis Premium',
    category: 'Imobiliário',
    result: '+180% visitas',
    desc: 'Google Meu Negócio + qualificação por IA'
  },
  {
    title: 'Bella Estética',
    category: 'Beleza',
    result: '+800% agendamentos',
    desc: 'Sistema completo de agendamento automatizado'
  },
  {
    title: 'TechSolutions',
    category: 'Tecnologia',
    result: '+300% vendas',
    desc: 'Funil de vendas B2B com IA qualificadora'
  }
];

export const painPoints = [
  {
    icon: <Clock size={24} />,
    title: "Leads Esfriando",
    desc: "Cada minuto sem resposta é um cliente para o concorrente."
  },
  {
    icon: <UserX size={24} />,
    title: "Equipe Sobrecarregada",
    desc: "Sua equipe não consegue atender todos os leads que chegam."
  },
  {
    icon: <TrendingDown size={24} />,
    title: "Conversão Baixa",
    desc: "Visitantes entram no site mas não viram clientes pagantes."
  },
  {
    icon: <XCircle size={24} />,
    title: "Invisível no Google",
    desc: "Clientes procuram seu serviço e encontram só concorrentes."
  },
  {
    icon: <DollarSign size={24} />,
    title: "Dinheiro Queimando",
    desc: "Investindo em tráfego pago mas sem retorno proporcional."
  },
  {
    icon: <AlertTriangle size={24} />,
    title: "Processos Manuais",
    desc: "Perdendo tempo com tarefas que poderiam ser automatizadas."
  }
];

export const steps = [
  {
    number: '01',
    icon: <MessageSquare size={28} />,
    title: 'Diagnóstico Gratuito',
    desc: 'Analisamos seu negócio, identificamos gargalos e oportunidades de automação.'
  },
  {
    number: '02',
    icon: <Settings size={28} />,
    title: 'Implementação',
    desc: 'Configuramos sua IA de vendas, landing page e otimização do Google em até 7 dias.'
  },
  {
    number: '03',
    icon: <Rocket size={28} />,
    title: 'Lançamento',
    desc: 'Ativamos seu ecossistema de vendas automáticas e iniciamos a captação de leads.'
  },
  {
    number: '04',
    icon: <TrendingUp size={28} />,
    title: 'Otimização Contínua',
    desc: 'Monitoramos métricas e otimizamos constantemente para maximizar resultados.'
  }
];

export const stats = [
  { value: '347%', label: 'Aumento médio em conversões', icon: <TrendingUp size={24} /> },
  { value: '24/7', label: 'Atendimento automático', icon: <Clock size={24} /> },
  { value: '2.8s', label: 'Tempo médio de resposta', icon: <Star size={24} /> },
  { value: '+500', label: 'Empresas atendidas', icon: <Users size={24} /> },
];

export const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'CEO, TechSolutions',
    content: 'Em 30 dias triplicamos nosso faturamento. A IA no WhatsApp responde melhor que qualquer vendedor que já contratei.',
    rating: 5,
    result: '+300% vendas'
  },
  {
    name: 'Ana Paula Silva',
    role: 'Fundadora, Bella Estética',
    content: 'Passei de 20 agendamentos/mês para 180. A landing page + automação mudaram completamente meu negócio.',
    rating: 5,
    result: '+800% agendamentos'
  },
  {
    name: 'Roberto Alves',
    role: 'Diretor, Imóveis Premium',
    content: 'O Google Meu Negócio otimizado trouxe 40% mais visitas presenciais. ROI absurdo em 2 meses.',
    rating: 5,
    result: '+40% visitas'
  },
  {
    name: 'Mariana Costa',
    role: 'Proprietária, Clínica Vida',
    content: 'A IA qualifica os pacientes antes de chegarem. Economizamos 3h por dia e dobramos o faturamento.',
    rating: 5,
    result: '+100% faturamento'
  },
  {
    name: 'Fernando Lima',
    role: 'Dono, Auto Center Plus',
    content: 'Antes perdia 70% dos orçamentos por demora. Agora a IA responde em segundos e fechamos muito mais.',
    rating: 5,
    result: '+250% conversão'
  },
  {
    name: 'Juliana Santos',
    role: 'Gerente, Academia FitMax',
    content: 'O quiz interativo triplicou nossas matrículas. Os leads já chegam qualificados e prontos para fechar.',
    rating: 5,
    result: '+200% matrículas'
  }
];
