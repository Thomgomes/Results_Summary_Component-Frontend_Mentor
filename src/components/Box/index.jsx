import { Botao } from "../Botao";
import { Contador } from "../Contador";

export const Box = () => {
  return (
    <div className="md:h-auto md:w-auto h-screen items-center justify-center md:drop-shadow-md md:rounded-3xl bg-White">
      <div className="md:flex md:flex-row">
        {/* Resultado */}
        <div className="bg-gradient-to-b from-LightSlateBlue to-LightRoyalBlue h-auto md:w-80 w-screen md:p-8 px-4 pt-6 md:rounded-3xl rounded-b-3xl flex flex-col items-center justify-between text-White">
          <p className="text-LightLavender md:mb-0 mb-2">Your Result</p>
          <div className="bg-gradient-to-t from-LightRoyalBlue/10 to-VioletBlue h-44 w-44 rounded-full flex flex-col items-center justify-center md:mb-0 mb-3">
            <p className="text-Result font-extrabold -m-4">76</p>
            <p className="text-LightLavender/30">of 100</p>
          </div>
          <p className="text-Wow font-bold md:mb-0 mb-2">Great</p>
          <p className="text-LightLavender text-center md:mb-0 mb-8">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        {/* Sumario */}
        <div className=" h-auto md:w-80 p-8">
          <p className="md:mb-5 mb-4 font-bold">Summary</p>
          <div className="flex flex-col gap-3">
            {/* Contador */}
            <Contador text="Reaction" numero="80" />
            <Contador text="Memory" numero="92" />
            <Contador text="Verbal" numero="61" />
            <Contador text="Visual" numero="72" />
          </div>
          {/* botão */}
          <Botao />
        </div>
        {/* gf */}
      </div>
    </div>
  );
};
