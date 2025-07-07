// import React, { useState } from 'react';

// function Calculator() {
//   const [input, setInput] = useState('0');

//   const handleClick = (value) => {
//     if (value === 'allclear') {
//       setInput('0');
//     } else if (value === 'clear') {
//       const newValue = input.slice(0, -1);
//       setInput(newValue === '' ? '0' : newValue);
//     } else if (value === '=') {
//       try {
//         setInput(eval(input).toString());
//       } catch {
//         setInput("ERR");
//       }
//     } else if (value === '%') {
//       try {
//         setInput((eval(input) / 100).toString());
//       } catch {
//         setInput("ERR");
//       }
//     } else {
//       setInput((pre) => (pre === '0' ? value : pre + value));
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black p-4">
//       <div className="w-80 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg p-4">
//         <div className="bg-black bg-opacity-40 text-green-400 text-2xl text-right rounded p-4 mb-4 min-h-[60px] break-words">
//           {input}
//         </div>
//         <div className="grid grid-cols-4 gap-2">
//           <button onClick={() => handleClick('allclear')} className="btn bg-red-500 hover:bg-red-600">AC</button>
//           <button onClick={() => handleClick('clear')} className="btn bg-orange-500 hover:bg-orange-600">C</button>
//           <button onClick={() => handleClick('%')} className="btn bg-purple-500 hover:bg-purple-600">%</button>
//           <button onClick={() => handleClick('/')} className="btn bg-purple-500 hover:bg-purple-600">/</button>

//           <button onClick={() => handleClick('9')} className="btn">9</button>
//           <button onClick={() => handleClick('8')} className="btn">8</button>
//           <button onClick={() => handleClick('7')} className="btn">7</button>
//           <button onClick={() => handleClick('*')} className="btn bg-purple-500 hover:bg-purple-600">*</button>

//           <button onClick={() => handleClick('4')} className="btn">4</button>
//           <button onClick={() => handleClick('5')} className="btn">5</button>
//           <button onClick={() => handleClick('6')} className="btn">6</button>
//           <button onClick={() => handleClick('-')} className="btn bg-purple-500 hover:bg-purple-600">-</button>

//           <button onClick={() => handleClick('1')} className="btn">1</button>
//           <button onClick={() => handleClick('2')} className="btn">2</button>
//           <button onClick={() => handleClick('3')} className="btn">3</button>
//           <button onClick={() => handleClick('+')} className="btn bg-purple-500 hover:bg-purple-600">+</button>

//           <button onClick={() => handleClick('0')} className="btn col-span-2">0</button>
//           <button onClick={() => handleClick('.')} className="btn">.</button>
//           <button onClick={() => handleClick('=')} className="btn bg-green-500 hover:bg-green-600">=</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calculator;





import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('0');

  const handleClick = (value) => {
    if (value === 'allclear') {
      setInput('0');
    } else if (value === 'clear') {
      const newValue = input.slice(0, -1);
      setInput(newValue === '' ? '0' : newValue);
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("ERR");
      }
    } else if (value === '%') {
      try {
        setInput((eval(input) / 100).toString());
      } catch {
        setInput("ERR");
      }
    } else {
      setInput((pre) => (pre === '0' ? value : pre + value));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-black to-gray-900 p-4">
      <div className="w-80 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-3xl shadow-xl p-6">
        <div className="bg-black bg-opacity-40 text-right text-3xl text-green-400 font-mono rounded-xl p-4 mb-6 min-h-[70px] break-words">
          {input}
        </div>
        <div className="grid grid-cols-4 gap-3">
          <button onClick={() => handleClick('allclear')} className="btn-glass bg-red-500">AC</button>
          <button onClick={() => handleClick('clear')} className="btn-glass bg-yellow-500">C</button>
          <button onClick={() => handleClick('%')} className="btn-glass bg-purple-500">%</button>
          <button onClick={() => handleClick('/')} className="btn-operator">/</button>

          <button onClick={() => handleClick('7')} className="btn-number">7</button>
          <button onClick={() => handleClick('8')} className="btn-number">8</button>
          <button onClick={() => handleClick('9')} className="btn-number">9</button>
          <button onClick={() => handleClick('*')} className="btn-operator">*</button>

          <button onClick={() => handleClick('4')} className="btn-number">4</button>
          <button onClick={() => handleClick('5')} className="btn-number">5</button>
          <button onClick={() => handleClick('6')} className="btn-number">6</button>
          <button onClick={() => handleClick('-')} className="btn-operator">-</button>

          <button onClick={() => handleClick('1')} className="btn-number">1</button>
          <button onClick={() => handleClick('2')} className="btn-number">2</button>
          <button onClick={() => handleClick('3')} className="btn-number">3</button>
          <button onClick={() => handleClick('+')} className="btn-operator">+</button>

          <button onClick={() => handleClick('0')} className="btn-number col-span-2">0</button>
          <button onClick={() => handleClick('.')} className="btn-number">.</button>
          <button onClick={() => handleClick('=')} className="btn-equal">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
