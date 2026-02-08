import React from 'react'

const Projects = () => {
    return (
        <div>
            <div className="mt-8 w-full flex flex-col md:flex-row justify-center items-center gap-4">
                <div>
                    <div>

                        <a href="https://risklens-ai.vercel.app/" className="group relative block" target="_blank" rel="noopener noreferrer">
                            <span className="pointer-events-none absolute -top-8 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                                https://risklens-ai.vercel.app/
                            </span>
                            <div className="group flex items-start mb-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:-translate-x-1">
                                <div className="w-3 h-3 rounded-full shrink-0 bg-red-600 mt-2 transition-transform duration-200 group-hover:scale-110" />
                                <div className="ml-6 space-y-2">
                                    <div>
                                        <h3 className="text-white font-medium text-xl">RiskLensAI</h3>
                                        <p className="text-gray-300">
                                            RiskLensAI is an explainable AI credit-risk decision support system that predicts default probability using calibrated ML models and real financial datasets.
                                            It combines an ML pipeline, SHAP-based explainability, and a full-stack dashboard to help analysts make transparent, threshold-driven lending decisions.
                                        </p>
                                    </div>
                                    <div className='flex flex-wrap gap-2'>
                                        <div className='px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-2xl'>Python</div>
                                        <div className='px-3 py-1 bg-sky-400 text-white text-xs font-bold rounded-2xl'>Scikit-learn</div>
                                        <div className='px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-2xl'>XGBoost</div>
                                        <div className='px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-2xl'>SHAP</div>
                                        <div className='px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-2xl'>FastAPI</div>
                                        <div className='px-3 py-1 bg-violet-600 text-white text-xs font-bold rounded-2xl'>Next.js</div>
                                        <div className='px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-2xl'>TypeScript</div>
                                        <div className='px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-2xl'>Render</div>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="https://irfanexpress.vercel.app/" className="group relative block" target="_blank" rel="noopener noreferrer">
                            <span className="pointer-events-none absolute -top-8 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                                https://irfanexpress.vercel.app/
                            </span>
                            <div className="group flex items-start mb-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:-translate-x-1">
                                <div className="w-3 h-3 rounded-full shrink-0 bg-blue-500 mt-2 transition-transform duration-200 group-hover:scale-110" />
                                <div className="ml-6 space-y-2">
                                    <div>
                                        <h3 className="text-white font-medium">Irfan Express</h3>
                                        <p className="text-gray-300">
                                            AI travel itinerary generator built with Next.js + Gemini API, producing day-wise plans with activities, travel time, and budget notes. Includes user profiles, saved trips, and editable itinerary drafts backed by PostgreSQL (Neon) + Drizzle.
                                        </p>
                                    </div>
                                    <div className='flex flex-wrap gap-2'>
                                        <div className='px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-2xl'>Next.js</div>
                                        <div className='px-3 py-1 bg-sky-400 text-white text-xs font-bold rounded-2xl'>TypeScript</div>
                                        <div className='px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-2xl'>PostgreSQL</div>
                                        <div className='px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-2xl'>Drizzle ORM</div>
                                        <div className='px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-2xl'>Neon DB</div>
                                        <div className='px-3 py-1 bg-violet-600 text-white text-xs font-bold rounded-2xl'>Tailwind</div>
                                        <div className='px-3 py-1 bg-red-950 text-white text-xs font-bold rounded-2xl'>Gemini API</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className="group flex items-start mb-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:-translate-x-1">
                            <div className="w-3 h-3 rounded-full shrink-0 bg-green-500 mt-2 transition-transform duration-200 group-hover:scale-110"></div>
                            <div className="ml-6 space-y-2">
                                <div>
                                    <h3 className="text-white font-medium">
                                        Ripple (Ongoing) — Personalized Feed Ranking Engine
                                    </h3>
                                    <p className="text-gray-300">
                                        A ML-powered content ranking and recommendation engine that personalizes user feeds using interaction signals and learning-to-rank models. Designed to simulate real-world social feed ordering with real engagement datasets and evaluation metrics.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <div className="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-2xl">Python</div>
                                    <div className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-2xl">PyTorch</div>
                                    <div className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-2xl">DCN v2</div>
                                    <div className="px-3 py-1 bg-yellow-600 text-white text-xs font-bold rounded-2xl">LightGBM Ranker</div>
                                    <div className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-2xl">Learning-to-Rank</div>
                                    <div className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-2xl">Feature Engineering</div>
                                    <div className="px-3 py-1 bg-pink-600 text-white text-xs font-bold rounded-2xl">KuaiRec Dataset</div>
                                    <div className="px-3 py-1 bg-sky-600 text-white text-xs font-bold rounded-2xl">NDCG / MAP</div>
                                    <div className="px-3 py-1 bg-violet-600 text-white text-xs font-bold rounded-2xl">Next.js</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
