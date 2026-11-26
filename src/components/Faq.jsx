import { useState } from "react";
import { faqs } from "../data/evento";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="duvidas"
      className="bg-creme py-16"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-5">
        <h2 id="faq-heading" className="text-3xl font-bold text-cafe mb-8">
          Perguntas Frequentes
        </h2>

        <div className="bg-white border border-cafe/15 rounded-lg divide-y divide-cafe/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div key={faq.q} className="px-5 py-4">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center gap-4 text-left font-bold text-cafe hover:text-tomate py-1 text-base sm:text-lg cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-tomate font-bold text-xl leading-none" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="mt-2 text-cacau text-sm sm:text-base leading-relaxed"
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
