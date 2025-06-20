import { useEffect, useState, useCallback } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(false); // default false
  const [includeSymbols, setIncludeSymbols] = useState(false); // default false
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?`~";

    let chars = lower + upper;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    if (!chars.length) {
      setPassword("Please select at least one option.");
      return;
    }

    let newPass = "";
    for (let i = 0; i < Number(passwordLength); i++) {
      const index = Math.floor(Math.random() * chars.length);
      newPass += chars.charAt(index);
    }

    setPassword(newPass);
    setCopied(false);
  }, [passwordLength, includeNumbers, includeSymbols]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    generatePassword();
  }, []);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 to-black flex items-center justify-center px-4 py-10">
      <div className="bg-neutral-800 p-8 rounded-2xl shadow-2xl w-full max-w-2xl space-y-8">
        <h1 className="text-4xl font-bold text-center text-white">
          🔐 Password Generator
        </h1>

        {/* Generated password and button */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full p-3 text-lg text-orange-400 bg-neutral-700 rounded-lg outline-none text-center placeholder:text-gray-400"
            placeholder="Generated password"
          />
          <button
            onClick={generatePassword}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 w-full sm:w-auto cursor-pointer"
          >
            Generate
          </button>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-white">
          <div className="flex items-center gap-2 col-span-2">
            <label className="font-medium  flex items-center">
              Length:{" "}
              <span className="text-orange-400">
                ({String(passwordLength).padStart(2, "0")})
              </span>
            </label>
            <input
              type="range"
              min="8"
              max="24"
              value={passwordLength}
              onChange={(e) => setPasswordLength(Number(e.target.value))}
              className="w-full accent-blue-500"
            />
          </div>

          <div className="flex items-center gap-2 col-span-1">
            <label className="font-medium">Numbers</label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers((prev) => !prev)}
              className="h-5 w-5 accent-blue-600 cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="font-medium">Symbols</label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols((prev) => !prev)}
              className="h-5 w-5 accent-blue-600 cursor-pointer"
            />
          </div>

          <div className="flex items-center">
            <button
              onClick={handleCopy}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 w-full grow cursor-pointer sm:w-auto"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
