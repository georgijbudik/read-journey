"use client";

import { useSpeech } from "react-text-to-speech";

interface IBookListeningProps {
  text: string;
}

const BookListening = ({ text }: IBookListeningProps) => {
  const { speechStatus, start, pause } = useSpeech({
    text,
    volume: 0.3,
    voiceURI: "Microsoft Heera - English (India)",
    lang: "ua",
  });

  return (
    <div className="flex flex-col items-center gap-1">
      {speechStatus !== "started" ? (
        <button onClick={start}>
          <div className="bg-transparent border-2 border-primary w-10 h-10 md:w-[50px] md:h-[50px] rounded-[50%] flex justify-center items-center">
            <div className="bg-accent-red w-[30px] h-[30px] md:w-10 md:h-10 rounded-[50%]"></div>
          </div>
        </button>
      ) : (
        <button onClick={pause}>
          <div className="bg-transparent border-2 border-primary w-10 h-10 md:w-[50px] md:h-[50px] rounded-[50%] flex justify-center items-center">
            <div className="bg-accent-red w-3.5 h-3.5 md:w-5 md:h-5 rounded-[3px]"></div>
          </div>
        </button>
      )}
      <p className="text-primary underline">Listen</p>
    </div>
  );
};

export default BookListening;
