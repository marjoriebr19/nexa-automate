import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles } from 'lucide-react';

const questions = [
  {
    question: "Quantos leads você recebe por mês?",
    options: ["Menos de 50", "50 a 200", "200 a 500", "Mais de 500"]
  },
  {
    question: "Quanto tempo leva para responder um lead?",
    options: ["Menos de 5 min", "5 a 30 min", "30 min a 2h", "Mais de 2h"]
  },
  {
    question: "Qual seu maior desafio hoje?",
    options: ["Captar mais leads", "Responder rápido", "Converter em vendas", "Escalar operação"]
  },
  {
    question: "Qual seu ticket médio?",
    options: ["Até R$500", "R$500 a R$2.000", "R$2.000 a R$10.000", "Acima de R$10.000"]
  }
];

const InteractiveQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsComplete(false);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary text-xs font-black uppercase tracking-ultra-wide mb-4">
            Diagnóstico Rápido
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-ultra-tight mb-6">
            Descubra seu <span className="text-gradient">potencial</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Responda 4 perguntas e veja quanto você pode crescer.
          </p>
        </motion.div>

        <div className="glass p-8 md:p-12 rounded-[2rem]">
          <AnimatePresence mode="wait">
            {!isComplete ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {/* Progress */}
                <div className="flex items-center gap-2 mb-8">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 flex-1 rounded-full transition-colors ${
                        index <= currentStep ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>

                {/* Question */}
                <h3 className="text-xl md:text-2xl font-bold mb-8 text-center">
                  {questions[currentStep].question}
                </h3>

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {questions[currentStep].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className="glass p-4 rounded-xl text-left font-medium hover:bg-primary/10 hover:border-primary/30 transition-all group"
                    >
                      <span className="flex items-center justify-between">
                        {option}
                        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                      </span>
                    </button>
                  ))}
                </div>

                {/* Back Button */}
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    <ArrowLeft size={16} /> Voltar
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                  <Sparkles size={36} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black mb-4">
                  Análise <span className="text-gradient">Concluída!</span>
                </h3>
                
                <p className="text-muted-foreground mb-8">
                  Com base nas suas respostas, identificamos que você pode estar 
                  perdendo até <strong className="text-destructive">R$50.000/ano</strong> por 
                  falta de automação. Quer saber como recuperar esse valor?
                </p>

                <div className="space-y-4">
                  <a
                    href="#contact"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all btn-glow"
                  >
                    Ver minha análise completa <ArrowRight size={20} />
                  </a>
                  
                  <button
                    onClick={handleReset}
                    className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                  >
                    Refazer diagnóstico
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default InteractiveQuiz;
