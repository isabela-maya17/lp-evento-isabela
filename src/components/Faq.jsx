import { useState } from 'react';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            q: "Aceita cartão?",
            a: "Sim, todas as barracas aceitam cartão e Pix."
        },
        {
            q: "Tem opção vegetariana?",
            a: "Sim, pelo menos cinco barracas têm pratos sem carne."
        },
        {
            q: "Posso levar meu cachorro?",
            a: "Pode, desde que na coleira."
        }
    ];

    return (
        <section id="duvidas" className="max-w-xl mx-auto px-6 py-12" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-3xl font-bold text-center text-slate-800 mb-6">
                Perguntas Frequentes
            </h2>

            <div className="flex flex-col gap-4">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    const buttonId = `faq-btn-${index}`;
                    const panelId = `faq-panel-${index}`;

                    return (
                        <div key={index} className="border-b border-slate-200 pb-4">
                            <h3>
                                <button
                                    id={buttonId}
                                    type="button"
                                    aria-expanded={isOpen}
                                    aria-controls={panelId}
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center text-left font-semibold text-slate-700 hover:text-tomate py-2 text-lg cursor-pointer"
                                >
                                    <span>{faq.q}</span>
                                    <span className="text-tomate font-bold text-sm" aria-hidden="true">
                                        {isOpen ? '▲' : '▼'}
                                    </span>
                                </button>
                            </h3>
                            <div
                                id={panelId}
                                role="region"
                                aria-labelledby={buttonId}
                                hidden={!isOpen}
                                className="mt-2 text-slate-600 text-base leading-relaxed"
                            >
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}