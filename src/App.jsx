import { useState, useCallback } from "react";
import { generate } from "./core/generator.js";

const TYPES = [
  { value: "paragraphs", label: "ຍ່ອຫນ້າ", icon: "¶" },
  { value: "sentences", label: "ປະໂຫຍກ", icon: "≡" },
  { value: "words", label: "ຄຳສັບ", icon: "∴" },
];

export default function App() {
  const [type, setType] = useState("paragraphs");
  const [count, setCount] = useState(3);
  const [html, setHtml] = useState(false);
  const [result, setResult] = useState([]);
  const [copied, setCopied] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = useCallback(() => {
    const finalCount = Math.max(1, Number(count) || 1);
    const output = generate({ type, count: finalCount, sentencesPerParagraph: 4 });
    setResult(Array.isArray(output) ? output : [output]);
    setGenerated(true);
    setCopied(false);
  }, [type, count]);

  const getText = () => {
    if (html && type === "paragraphs") {
      return result.map((p) => `<p>${p}</p>`).join("\n");
    }
    return result.join("\n\n");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(getText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-[820px] mx-auto px-6 py-8 pb-16 font-sans">
      <header className="text-center pt-16 pb-12 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,#c8102e22_0%,transparent_70%)] pointer-events-none"></div>
        <div className="flex items-baseline justify-center gap-1 mb-3">
          <span className="text-[4rem] font-bold text-[#c8102e] leading-none tracking-[-2px]">ລາ</span>
          <span className=" text-[2.8rem] font-bold text-[#111111] tracking-[-2px]">lorem</span>
        </div>
        <p className="text-[#555555] text-[0.95rem] tracking-[0.5px]">Lorem Ipsum Generator ສຳລັບພາສາລາວ</p>
      </header>

      <main>
        {/* Controls */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-5 sm:items-end bg-white border border-[#e0e0e0] rounded-2xl p-6 mb-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col gap-2">
            <label className="text-[0.72rem] uppercase tracking-[1.5px] text-[#555555] ">ປະເພດ</label>
            <div className="flex flex-wrap sm:flex-nowrap gap-[0.4rem]">
              {TYPES.map((t) => (
                <button
                  key={t.value}
                  className={`flex items-center gap-[0.4rem] px-4 py-2 border rounded-lg cursor-pointer font-sans text-[0.85rem] transition-all duration-150 ${type === t.value ? "bg-[#c8102e15] border-[#c8102e] text-[#111111]" : "bg-transparent border-[#e0e0e0] text-[#555555] hover:text-[#111111] hover:border-[#999]"}`}
                  onClick={() => setType(t.value)}
                >
                  <span className=" text-[0.8rem] text-[#c8102e]">{t.icon}</span>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[0.72rem] uppercase tracking-[1.5px] text-[#555555] ">ຈຳນວນ {type === "paragraphs" ? "ຍ່ອຫນ້າ" : type === "sentences" ? "ປະໂຫຍກ" : "ຄຳ"}</label>
            <div className="flex items-center gap-0 border border-[#e0e0e0] rounded-lg overflow-hidden">
              <button className="w-9 h-9 bg-[#f0f0f0] border-none text-[#111111] text-[1.1rem] cursor-pointer transition-colors hover:bg-[#e0e0e0]" onClick={() => setCount((c) => Math.max(1, Number(c) - 1))}>−</button>
              <input 
                type="number"
                className="w-16 h-9 text-center text-base text-[#111111] bg-white border-y-0 border-x border-[#e0e0e0] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                value={count}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '') {
                    setCount('');
                  } else {
                    const num = parseInt(val, 10);
                    if (!isNaN(num)) setCount(Math.min(1000, Math.max(1, num)));
                  }
                }}
                onBlur={() => {
                  if (count === '') setCount(1);
                }}
              />
              <button className="w-9 h-9 bg-[#f0f0f0] border-none text-[#111111] text-[1.1rem] cursor-pointer transition-colors hover:bg-[#e0e0e0]" onClick={() => setCount((c) => Math.min(1000, Number(c) + 1))}>+</button>
            </div>
          </div>

          {type === "paragraphs" && (
            <div className="flex flex-col gap-2">
              <label className="text-[0.72rem] uppercase tracking-[1.5px] text-[#555555] ">HTML tags</label>
              <button className={`px-4 py-2 border rounded-lg cursor-pointer text-[0.8rem]  transition-all duration-150 ${html ? "bg-[#c8102e15] border-[#c8102e] text-[#111111]" : "bg-[#f0f0f0] border-[#e0e0e0] text-[#555555]"}`} onClick={() => setHtml(!html)}>
                {html ? "ເປີດ <p>" : "ປິດ"}
              </button>
            </div>
          )}

          <button className="w-full sm:w-auto sm:ml-auto px-8 py-[0.6rem] bg-[#c8102e] border-none rounded-[10px] text-white text-[0.95rem] font-sans font-semibold cursor-pointer transition-all duration-200 whitespace-nowrap hover:bg-[#e01535] hover:-translate-y-[1px] hover:shadow-[0_4px_20px_#c8102e44]" onClick={handleGenerate}>
            ✦ ສ້າງ Lorem
          </button>
        </div>

        {/* Output */}
        <div className={`bg-white border border-[#e0e0e0] rounded-2xl min-h-[280px] overflow-hidden mb-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] ${!generated ? "flex items-center justify-center" : ""}`}>
          {!generated ? (
            <div className="text-center text-[#999999]">
              <span className="block text-[4rem] font-bold text-[#e0e0e0] mb-2">ລ</span>
              <p className="text-[0.9rem]">ກົດ "ສ້າງ Lorem" ເພື່ອສ້າງຂໍ້ຄວາມ</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between px-5 py-3 border-b border-[#e0e0e0] bg-[#fafafa]">
                <span className=" text-[0.75rem] text-[#777777]">
                  {result.length} {type === "paragraphs" ? "ຍ່ອຫນ້າ" : type === "sentences" ? "ປະໂຫຍກ" : "ຄຳ"}
                </span>
                <div className="flex gap-2">
                  <button className="px-[0.85rem] py-[0.35rem] rounded-md border border-[#e0e0e0] bg-white text-[#555555] text-[0.78rem] font-sans cursor-pointer transition-all duration-150 hover:text-[#111111] hover:border-[#999]" onClick={handleGenerate}>↺ ສ້າງໃໝ່</button>
                  <button className={`px-[0.85rem] py-[0.35rem] rounded-md border bg-white text-[0.78rem] font-sans cursor-pointer transition-all duration-150 ${copied ? "border-[#22c55e] text-[#22c55e]" : "border-[#e0e0e0] text-[#555555] hover:text-[#111111] hover:border-[#999]"}`} onClick={handleCopy}>
                    {copied ? "✓ ສຳເລັດ" : "⎘ ຄັດລອກ"}
                  </button>
                </div>
              </div>

              {html && type === "paragraphs" ? (
                <pre className="p-6  text-[0.8rem] leading-[1.8] text-[#0056b3] whitespace-pre-wrap break-words">{getText()}</pre>
              ) : (
                <div className="p-6 leading-loose text-[#333333] text-base space-y-4">
                  {result.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* API Info */}
        <div className="bg-white border border-[#e0e0e0] rounded-2xl p-6 flex flex-col gap-3 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
          <h3 className="text-[0.75rem] uppercase tracking-[1.5px] text-[#555555]  font-normal">📦 ໃຊ້ເປັນ npm package</h3>
          <code className=" text-[0.85rem] bg-[#f4f4f4] border border-[#e0e0e0] px-4 py-[0.6rem] rounded-lg text-[#0056b3] block">npm install lao-lorem</code>
          <h3 className="text-[0.75rem] uppercase tracking-[1.5px] text-[#555555]  font-normal">🔌 API Endpoint</h3>
          <code className=" text-[0.85rem] bg-[#f4f4f4] border border-[#e0e0e0] px-4 py-[0.6rem] rounded-lg text-[#0056b3] block">GET https://lao-lorem.vercel.app/api/lorem?type=paragraphs&amp;count=3</code>
        </div>
      </main>

      <footer className="text-center mt-16 text-[#999999] text-[0.8rem] flex flex-col gap-2">
        <p>🇱🇦 Open Source · MIT License · Created by huevangxp</p>
        <a className="text-[#777777] no-underline hover:text-[#111111]" href="https://github.com/huevangxp/lao-lorem" target="_blank" rel="noreferrer">GitHub ↗</a>
      </footer>
    </div>
  );
}
