import { useState } from "react";
import { motion } from "framer-motion";

const Sorter = () => {
  const [numbers, setNumbers] = useState([
    1, 2, 4, 6, 5, 0, 9, 10, 11, 2, 3, 5,
  ]); // this can be random

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onClickSort = async () => {
    // here lies the sorting algorithm :)
    let isSwitched = true;
    let numbersCopy = [...numbers];

    while (isSwitched) {
      isSwitched = false;

      for (let i = 0; i < numbersCopy.length - 1; i++) {
        if (numbersCopy[i] > numbersCopy[i + 1]) {
          // set isSwitched to ture
          isSwitched = true;
          // Switched the numbers
          let aux = numbersCopy[i];
          numbersCopy[i] = numbersCopy[i + 1];
          numbersCopy[i + 1] = aux;

          console.log("Setting the numbers");

          // set the state
          setNumbers([...numbersCopy]);
          // we set a sleep time
          await sleep(200);
        }
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        onClick={onClickSort}
        className="bg-slate-900 text-white py-2 px-6 rounded-sm mb-5"
      >
        Sort
      </button>
      <div className="flex gap-2">
        {numbers.map((number, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={`${number}+${index}`}
            transition={{ duration: 0.5 }}
            className="p-4 bg-slate-900 text-white rounded-lg"
          >
            {number}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sorter;
