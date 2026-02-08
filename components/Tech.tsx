import React from 'react'

const Tech = () => {
  return (
    <div className="mt-10 w-full flex flex-col justify-center items-start gap-8">

      <div className="group flex items-start transition-all duration-200 ease-out hover:-translate-y-1 hover:-translate-x-1">
        <div className="w-3 h-3 rounded-full shrink-0 bg-blue-500 mt-2 transition-transform duration-200 group-hover:scale-110"></div>
        <div className="ml-6 space-y-3">
          <h3 className="text-white font-medium text-lg">AI / ML</h3>
          <div className="flex flex-wrap gap-2">
            <div className="px-3 py-1 bg-blue-700 text-white text-xs font-bold rounded-2xl">Python</div>
            <div className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-2xl">PyTorch</div>
            <div className="px-3 py-1 bg-sky-600 text-white text-xs font-bold rounded-2xl">Scikit-learn</div>
            <div className="px-3 py-1 bg-yellow-600 text-white text-xs font-bold rounded-2xl">XGBoost</div>
            <div className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-2xl">LightGBM</div>
            <div className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-2xl">SHAP</div>
            <div className="px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-2xl">DCN v2</div>
          </div>
        </div>
      </div>

      <div className="group flex items-start transition-all duration-200 ease-out hover:-translate-y-1 hover:-translate-x-1">
        <div className="w-3 h-3 rounded-full shrink-0 bg-violet-500 mt-2 transition-transform duration-200 group-hover:scale-110"></div>
        <div className="ml-6 space-y-3">
          <h3 className="text-white font-medium text-lg">LLM / RAG</h3>
          <div className="flex flex-wrap gap-2">
            <div className="px-3 py-1 bg-violet-700 text-white text-xs font-bold rounded-2xl">RAG</div>
            <div className="px-3 py-1 bg-fuchsia-700 text-white text-xs font-bold rounded-2xl">LangChain</div>
            <div className="px-3 py-1 bg-purple-700 text-white text-xs font-bold rounded-2xl">Vector DB</div>
            <div className="px-3 py-1 bg-pink-700 text-white text-xs font-bold rounded-2xl">BM25</div>
            <div className="px-3 py-1 bg-rose-700 text-white text-xs font-bold rounded-2xl">Dense Retrieval</div>
            <div className="px-3 py-1 bg-indigo-700 text-white text-xs font-bold rounded-2xl">Evaluation</div>
          </div>
        </div>
      </div>

      <div className="group flex items-start transition-all duration-200 ease-out hover:-translate-y-1 hover:-translate-x-1">
        <div className="w-3 h-3 rounded-full shrink-0 bg-green-500 mt-2 transition-transform duration-200 group-hover:scale-110"></div>
        <div className="ml-6 space-y-3">
          <h3 className="text-white font-medium text-lg">Backend</h3>
          <div className="flex flex-wrap gap-2">
            <div className="px-3 py-1 bg-green-700 text-white text-xs font-bold rounded-2xl">FastAPI</div>
            <div className="px-3 py-1 bg-emerald-700 text-white text-xs font-bold rounded-2xl">PostgreSQL</div>
            <div className="px-3 py-1 bg-lime-700 text-white text-xs font-bold rounded-2xl">Drizzle ORM</div>
            <div className="px-3 py-1 bg-teal-700 text-white text-xs font-bold rounded-2xl">Neon DB</div>
            <div className="px-3 py-1 bg-green-900 text-white text-xs font-bold rounded-2xl">REST APIs</div>
          </div>
        </div>
      </div>

      <div className="group flex items-start transition-all duration-200 ease-out hover:-translate-y-1 hover:-translate-x-1">
        <div className="w-3 h-3 rounded-full shrink-0 bg-cyan-500 mt-2 transition-transform duration-200 group-hover:scale-110"></div>
        <div className="ml-6 space-y-3">
          <h3 className="text-white font-medium text-lg">Frontend</h3>
          <div className="flex flex-wrap gap-2">
            <div className="px-3 py-1 bg-cyan-700 text-white text-xs font-bold rounded-2xl">Next.js</div>
            <div className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-2xl">TypeScript</div>
            <div className="px-3 py-1 bg-sky-700 text-white text-xs font-bold rounded-2xl">Tailwind CSS</div>
            <div className="px-3 py-1 bg-indigo-700 text-white text-xs font-bold rounded-2xl">React</div>
          </div>
        </div>
      </div>

      <div className="group flex items-start transition-all duration-200 ease-out hover:-translate-y-1 hover:-translate-x-1">
        <div className="w-3 h-3 rounded-full shrink-0 bg-orange-500 mt-2 transition-transform duration-200 group-hover:scale-110"></div>
        <div className="ml-6 space-y-3">
          <h3 className="text-white font-medium text-lg">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-2">
            <div className="px-3 py-1 bg-amber-700 text-white text-xs font-bold rounded-2xl">Git</div>
            <div className="px-3 py-1 bg-yellow-700 text-white text-xs font-bold rounded-2xl">Render</div>
            <div className="px-3 py-1 bg-orange-900 text-white text-xs font-bold rounded-2xl">Vercel</div>
            <div className="px-3 py-1 bg-stone-700 text-white text-xs font-bold rounded-2xl">Linux</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Tech
