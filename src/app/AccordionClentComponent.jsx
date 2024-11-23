'use client'

import { useState } from 'react'
import AccordionAnswer from '@/components/AccordionAnswer'


const AccordionClientComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  const accordionData = [
    {
        question: 'Legal DNA Testing',
        answer:
          'Legal DNA paternity testing, also referred to as chain-of-custody testing, offers results that can serve as evidence of a relationship for matters such as child support, custody battles, immigration cases, birth certificate issues, Social Security matters, and other legal purposes. EZ Mobile DNA simplifies the on-site testing requirements to assist you in obtaining precise answers and progressing forward efficiently.',
        list: [
          'Mother, Child, Alleged Father',
          'Alleged Father & Child Only',
          'Mother, Child, & Alleged Grandparent',
          "Mother, Child, Child's Alleged Sibling",
          'Mother, Child, Alleged Aunt or Uncle'
        ]
      },
    {
      question: 'Home DNA Kits',
      answer:
        'Paternity testing at home offers a simple and convenient method to verify the paternity of a child, providing peace of mind without the need for a clinic visit. Simply order your test kit, adhere to the instructions provided, and return your samples to our laboratory. Receive your answers within 1–2 days after the lab receives your samples.',
    },
    {
        question: 'Gender Reveal',
        answer:
          'Our company specializes in providing accurate gender results for pregnant women through a simple and convenient blood test.  With our advanced technology and expertise, we can determine the gender of your baby with high accuracy, giving you and your family an early glimpse into your little one\'s gender.  \n\nOur process is non-invasive and can be done as early as 9 weeks into pregnancy, providing you with peace of mind and helping you plan for the exciting journey ahead.  \n\nTrust us to deliver reliable gender results and celebrate this special moment in your pregnancy journey.'
      },
    {
      question: 'Non Invasive Prenatal DNA Test',
      answer:
        'Non-Invasive Prenatal Paternity (NIPP) testing establishes paternity by analyzing a blood sample from the mother and a DNA sample (like a cheek swab) from the potential father.This test provides results with over 99.9% confidence and can be conducted as early as 7 weeks into the pregnancy.'
    },
    {
      question:
        'Hair Follicle Drug Testing',
      answer:
        'This non-invasive testing method can detect a wide range of substances, offering a detection window of up to 90 days. Ideal for employers, legal cases, and personal use, our service ensures confidentiality and quick turnaround times, helping you make informed decisions with confidence.',
    },
    {
      question: 'DOT Drug Test',
      answer: 'A DOT drug test is a mandatory screening process regulated by the Department of Transportation (DOT) in the United States. It is designed to ensure safety in transportation-related industries by detecting the presence of controlled substances in employees\'s systems. This comprehensive test follows strict guidelines outlined by the DOT and includes checks for commonly abused drugs such as marijuana, cocaine, opioids, amphetamines, and PCP.'
    },
    {
      question: 'Stat Draw',
      answer:
        'A STAT draw refers to a medical procedure where blood or other samples are collected from a patient for urgent testing and analysis. This expedited process is typically ordered in critical situations where quick results are necessary for immediate diagnosis or treatment decisions. STAT draws are prioritized by healthcare professionals to ensure rapid processing and delivery of test results, allowing for prompt medical interventions or adjustments based on the findings. This swift and efficient procedure plays a vital role in emergency care settings, helping healthcare teams provide timely and effective patient management.'
    },
    {
      question: 'Glucose Tolerance',
      answer:
        'A glucose tolerance test (GTT) is a diagnostic procedure used to measure how your body processes sugar (glucose) over time. During the test, you\'ll be asked to fast overnight, and then your blood sugar levels will be measured at specific intervals after drinking a glucose solution. This test helps healthcare providers evaluate how well your body regulates blood sugar, which is crucial for diagnosing conditions like diabetes or insulin resistance. The results of the test provide valuable insights into your body\'s ability to manage glucose, guiding healthcare professionals in developing appropriate treatment plans or lifestyle modifications to optimize your health.'
    },
  ]


  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32 text-white">
      <div className="flex flex-col items-center w-full py-8">
        <h2 className="text-2xl font-semibold mb-6 text-yellow-500 text-center">
          Our Services
        </h2>
        {accordionData.map((item, index) => (
          <div key={index} className="w-3/4">
            <button
              className={`accordion flex justify-between items-center w-full px-6 py-4 mb-4 text-lg font-medium text-left transition-colors duration-300 ease-in-out border rounded-lg ${
                activeIndex === index
                  ? 'bg-gray-700 text-yellow-500' // Active state background and text color
                  : 'bg-gray-800 text-white hover:bg-gray-700' // Inactive state with hover effect
              }`}
              onClick={() => handleAccordionClick(index)}
            >
              {item.question}
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : 'rotate-0'
                }`}
              >
                ▾
              </span>
            </button>
            <div
              className={`panel overflow-hidden transition-max-height duration-300 ease-in-out ${
                activeIndex === index ? 'max-h-screen p-6 bg-gray-800' : 'max-h-0'
              } border border-t-0 border-gray-700 rounded-b-lg`}
            >
              {activeIndex === index && (
                <AccordionAnswer answer={item.answer} list={item.list} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
     }

export default AccordionClientComponent
