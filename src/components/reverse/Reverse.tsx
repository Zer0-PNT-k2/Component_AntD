import React, { useState } from "react";

const maxArr = (nums: number[]): number | null => {
  if (nums.length) {
    return Math.max(...nums);
  }
  return null;
}

const sumArr = (nums: number[]): number | null => {
  if (nums.length) {
    const sum = nums.reduce((ac, num) => {
      return ac += num;
    }, 0)
    return sum;
  }
  return null;
}

const Reverse = () => {
  const [string, setString] = useState<string>("");
  const [stringSeverse, setStringSeverse] = useState<string>("");
  var nums: number[] = [0, 0];

  function channelInput(e: React.ChangeEvent<HTMLInputElement>) {
    setString(e.target.value);
  }

  function handleReverse() {
    const resultReverse = string.split("").reverse().join("");
    setStringSeverse(resultReverse);
  }

  const resultMax = maxArr(nums);
  const resultSum = sumArr(nums);

  return (
    <div className="flex">
      <div>
        <input
          type="text"
          className="rounded border border-black border-solid outline-none my-2 mx-4"
          onChange={channelInput}
        />
      </div>
      <div>
        <button
          onClick={handleReverse}
          className="rounded border border-black border-solid outline-none px-6 py-1 my-1"
        >
          Reverse
        </button>
      </div>
      <div>
        <input
          type="text"
          className="rounded border border-black border-solid outline-none my-2 mx-4"
          value={stringSeverse}
        />
      </div>
      <div>
        <span>Value max in Array: </span>
        {resultMax}
      </div>
      <div>
        <span>Sum numbers in array: </span>
        {resultSum}
      </div>
    </div>
  );
}

export default Reverse;
