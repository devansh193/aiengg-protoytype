"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who should join this program?",
    answer:
      "This program is for software engineers who want to build production-grade AI systems. We expect prior coding experience and a basic understanding of software systems.",
  },
  {
    question:
      "I want to learn ML from scratch. Is this the right cohort for me?",
    answer:
      "This cohort focuses on AI engineering, specifically LLMs and their applications. We cover basic math and ML concepts only where needed to understand LLMs in depth.",
  },
  {
    question: "Will I have lifetime access to all recordings?",
    answer:
      "Yes. You will have lifetime access to all video recordings and reading material for this cohort.",
  },
  {
    question: "What is your cancellation / refund policy?",
    answer:
      "We offer a 7-day money-back guarantee. If you are not satisfied, you can request a refund within 7 days of the program start date by contacting our support team. Payment gateway and currency charges are non-refundable and may be approximately 5–10% of the invoice value.",
  },
  {
    question: "What are the class timings?",
    answer:
      "Classes are held every Saturday and Sunday from 9:00–10:30 AM IST. Networking sessions are held on Wednesdays from 7:00–8:00 PM IST.",
  },
  {
    question:
      "How do I reimburse this program with my company education budget?",
    answer:
      "We provide a GSTIN invoice, course completion certificate, and clarifications for your manager or HR team when needed. A cohort brochure and reimbursement email template are also available.",
  },
  {
    question: "What is the time commitment for this program?",
    answer:
      "Classes require 3 hours per week. Plan for another 3 hours of study and implementation outside class, for a total commitment of approximately 6–8 hours per week.",
  },
  {
    question: "Are there any prerequisites?",
    answer:
      "You should have coding experience in at least one programming language. Prior software engineering experience is helpful. The required ML and mathematics prerequisites are included in the cohort.",
  },
] as const;

export const FaqSection = () => {
  return (
    <section className="w-full">
      <div className="flex w-full px-6">
        <div className="mx-auto w-full max-w-7xl border-x border-white/20">
          <header className="flex flex-col items-center gap-4 border-b border-white/20 px-6 py-16 text-center">
            <p className="text-md text-violet-500">FAQs</p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
              Frequently asked questions
            </h2>
            <p className="max-w-lg text-sm leading-6 text-white/45">
              Everything you need to know before joining the cohort.
            </p>
          </header>

          <Accordion type="single" collapsible defaultValue="faq-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="border-white/20 data-[state=open]:bg-[#1B1B1B]"
              >
                <AccordionTrigger className="rounded-none px-6 py-5 text-base hover:bg-white/3 hover:no-underline sm:px-8">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-3xl px-6 pb-6 text-sm leading-7 text-white/55 sm:px-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
