import { useState } from "react";

const initialImages = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1HvkVQ8APHqOzujXREJECLo9Rgy914zqOLg&usqp=CAU",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QXa4C57A5PgJrPFr-Mk5U9iDE01ry0ZyoA&usqp=CAU",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VFLVbXbJtlF6K1_lSAiZpXPcdjliVFo93Q&usqp=CAU",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqcK0iZe_Uq54FwZPfvj3YF5Dw1XXsudIww&usqp=CAU",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf477jj8pjhel582_Qn05WSVyU-wHKV3BQlg&usqp=CAU",
  },
];

function App() {
  const [images, setImages] = useState(initialImages);
  const [active, setActive] = useState(0);
  function handleNext() {
    setActive((active) =>
      active + 1 > images.length - 1 ? (active + 1) % images.length : active + 1
    );
  }
  function handlePrevious() {
    setActive((active) =>
      active - 1 < 0
        ? -(Math.abs(active - 1) % images.length) + images.length
        : active - 1
    );
  }
  return (
    <div className="flex flex-col h-screen w-screen bg-red-400">
      <div className="h-1/5 bg-red-400 flex justify-center items-center text-6xl font-extrabold text-white">
        Image Carousel
      </div>
      <div className="flex-1 m-4 flex justify-evenly bg-white rounded-sm">
        <button
          className="text-white bg-red-400 py-2 px-4 my-auto text-xl rounded-md"
          onClick={handlePrevious}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        {images.map(
          (image, key) =>
            active === key && (
              <div
                className="my-auto bg-red-400 h-4/5 w-3/6 bg-cover"
                key={key}
                style={{
                  backgroundImage: `url(${image?.url})`,
                }}
              ></div>
            )
        )}

        <button
          className="text-white bg-red-400 py-2 px-4 my-auto text-xl rounded-md"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
