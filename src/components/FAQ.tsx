import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
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

const FAQ = () => {
  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-xs font-black uppercase tracking-ultra-wide mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-ultra-tight mb-6">
            Perguntas <span className="text-gradient">Respondidas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tudo que você precisa saber antes de começar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-bold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
