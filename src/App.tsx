import React, { useState } from 'react';
import { Calculator, Equal, Delete, Plus, Minus, X, Divide } from 'lucide-react';

function App() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumber = (num: string) => {
    if (shouldResetDisplay) {
      setDisplay(num);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperator = (op: string) => {
    setShouldResetDisplay(true);
    setEquation(display + ' ' + op + ' ');
  };

  const calculate = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation('');
    } catch (error) {
      setDisplay('Error');
    }
    setShouldResetDisplay(true);
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl w-full max-w-md p-6 border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-white" />
            <h1 className="text-xl font-semibold text-white">Elegant Calculator</h1>
          </div>
        </div>

        <div className="bg-white/5 rounded-lg p-4 mb-6">
          <div className="text-gray-400 text-right text-sm h-6">{equation}</div>
          <div className="text-white text-right text-4xl font-light">{display}</div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {['7', '8', '9'].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num)}
              className="bg-white/5 hover:bg-white/10 text-white rounded-lg p-4 text-xl transition-colors"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('/')}
            className="bg-indigo-500/30 hover:bg-indigo-500/40 text-white rounded-lg p-4 transition-colors"
          >
            <Divide className="w-6 h-6 mx-auto" />
          </button>

          {['4', '5', '6'].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num)}
              className="bg-white/5 hover:bg-white/10 text-white rounded-lg p-4 text-xl transition-colors"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('*')}
            className="bg-indigo-500/30 hover:bg-indigo-500/40 text-white rounded-lg p-4 transition-colors"
          >
            <X className="w-6 h-6 mx-auto" />
          </button>

          {['1', '2', '3'].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num)}
              className="bg-white/5 hover:bg-white/10 text-white rounded-lg p-4 text-xl transition-colors"
            >
              {num}
            </button>
          ))}
          <button
            onClick={() => handleOperator('-')}
            className="bg-indigo-500/30 hover:bg-indigo-500/40 text-white rounded-lg p-4 transition-colors"
          >
            <Minus className="w-6 h-6 mx-auto" />
          </button>

          <button
            onClick={clear}
            className="bg-red-500/30 hover:bg-red-500/40 text-white rounded-lg p-4 transition-colors"
          >
            <Delete className="w-6 h-6 mx-auto" />
          </button>
          <button
            onClick={() => handleNumber('0')}
            className="bg-white/5 hover:bg-white/10 text-white rounded-lg p-4 text-xl transition-colors"
          >
            0
          </button>
          <button
            onClick={calculate}
            className="bg-green-500/30 hover:bg-green-500/40 text-white rounded-lg p-4 transition-colors"
          >
            <Equal className="w-6 h-6 mx-auto" />
          </button>
          <button
            onClick={() => handleOperator('+')}
            className="bg-indigo-500/30 hover:bg-indigo-500/40 text-white rounded-lg p-4 transition-colors"
          >
            <Plus className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;