// AccordionAnswer.jsx
import React from 'react';

function splitIntoSentences(text) {
  return text.split(/(?<=\.)\s+/); // Split by periods followed by whitespace
}

export default function AccordionAnswer({ answer, list }) {
  return (
    <div>
      <p className="text-base white leading-relaxed mb-4">
        {splitIntoSentences(answer).map((sentence, index) => (
          <span key={index} className="block mb-3">
            {sentence}
          </span>
        ))}
      </p>
      {list && (
        <div>
          <p className="font-semibold text-white mb-2">Who can we test?</p>
          <ul className="list-disc list-inside text-white">
            {list.map((item, index) => (
              <li key={index} className="ml-4 mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

