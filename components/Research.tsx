import React from 'react'

const Research = () => {
    return (
        <div className="mt-10 w-full flex flex-col justify-center items-start gap-6">

            <h2 className="text-2xl font-semibold text-white">Research & Coursework</h2>

            {/* Cardiff QA RAG Project */}
            <div className="flex items-start mb-6 hover:scale-105 transition-transform duration-300">
                <div className="w-3 h-3 bg-indigo-500 rounded-full shrink-0 mt-2"></div>

                <div className="ml-6 space-y-2">
                    <h3 className="text-white font-medium text-lg">
                        Cardiff University QA Chatbot — Domain RAG System (Coursework Project)
                    </h3>

                    <p className="text-gray-300">
                        A proposed domain-specific Retrieval-Augmented Generation (RAG) QA system planned as part of MSc coursework, aimed at answering university policy and information queries using document retrieval and LLM generation. The project will evaluate and compare multiple retrieval strategies for accuracy and faithfulness.          </p>

                    <div className="flex flex-wrap gap-2">
                        <div className="px-3 py-1 bg-purple-700 text-white text-xs font-bold rounded-2xl">RAG</div>
                        <div className="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-2xl">LangChain</div>
                        <div className="px-3 py-1 bg-green-700 text-white text-xs font-bold rounded-2xl">Vector DB</div>
                        <div className="px-3 py-1 bg-yellow-600 text-white text-xs font-bold rounded-2xl">BM25</div>
                        <div className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-2xl">Dense Retrieval</div>
                        <div className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-2xl">Faithfulness Eval</div>
                    </div>
                </div>
            </div>

            {/* Papers Studied */}
            <div className="flex items-start hover:scale-105 transition-transform duration-300">
                <div className="w-3 h-3 bg-amber-500 rounded-full shrink-0 mt-2"></div>

                <div className="ml-6 space-y-2">
                    <h3 className="text-white font-medium text-lg">
                        Research Papers Studied
                    </h3>

                    <ul className="text-gray-300 list-disc ml-5 space-y-1">
                        <li>Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks — Lewis et al.</li>
                        <li>Dense Passage Retrieval for Open-Domain Question Answering — Karpukhin et al.</li>
                        <li>RAG for Large Language Models: A Survey — Gao et al.</li>
                    </ul>
                </div>
            </div>

            {/* Proposed Research */}
            <div className="flex items-start hover:scale-105 transition-transform duration-300">
                <div className="w-3 h-3 bg-emerald-500 rounded-full shrink-0 mt-2"></div>

                <div className="ml-6 space-y-2">
                    <h3 className="text-white font-medium text-lg">
                        Proposed Study Topic
                    </h3>

                    <p className="text-gray-300">
                        A Comparative Study of Retrieval Methods for Domain-Specific RAG Question Answering: The Cardiff University Case.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Research
