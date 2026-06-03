import { useState } from "react";
export default function Progress() {
  const [sound, setBar1] = useState(0);
  const [volume, setBar2] = useState(0);
  const [totalvalue, setTotal] = useState(0);

  function handleBar1Change(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = Number(e.target.value);

    const total = newValue + volume;
    if (total > 100) {
      const reduce = total - 100;

      setBar2((val) => val - reduce);
      setTotal(volume + sound);
    } else {
      setTotal(total);
    }
    setBar1(newValue);
  }

  function handleBar2Change(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = Number(e.target.value);
    const total = sound + newValue;
    if (total > 100) {
      const reduce = total - 100;

      setBar1((val) => val - reduce);
      setTotal(volume + sound);
    } else {
      setTotal(total);
    }
    setBar2(newValue);
  }

  return (
    <div className="App">
      <div>
        {sound}
        <input onChange={handleBar1Change} type="range" value={sound} />
      </div>
      <div>
        {volume}
        <input onChange={handleBar2Change} type="range" value={volume} />
      </div>
      <div>value:{totalvalue}</div>
    </div>
  );
}
