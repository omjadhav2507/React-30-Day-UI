import React, { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    id: 2,
    question: 'How to install React?',
    answer: 'You can install React using npm or yarn. For example, "npm install react" or "yarn add react".',
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState();

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
    <h2>Accordion</h2>
      <div>
        {faqData.map((faq, index) => (
          <div
            key={faq.id}
            onClick={() => toggleAccordion(index)}
            style={{
              border: '1px solid #ddd',
              padding: '10px',
              marginBottom: '5px',
              backgroundColor: index === activeIndex ? '#eee' : 'white',
              cursor: 'pointer',
              color:'black'
            }}
          >
            <h2 style={{ margin: '0' }}>{faq.question}</h2>
            {index === activeIndex && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </>
  );
}

export default FAQ;
