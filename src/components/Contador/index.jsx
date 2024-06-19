/* eslint-disable react/prop-types */
import Reaction from "../../../public/images/icon-reaction.svg";
import Memory from "../../../public/images/icon-memory.svg";
import Verbal from "../../../public/images/icon-verbal.svg";
import Visual from "../../../public/images/icon-visual.svg";

export const Contador = (props) => {
  let bg = "bg-LightRed/10"
  let color = "text-LightRed"
  let icon = Reaction

  if (props.text == 'Memory') {
    bg = "bg-OrangeyYellow/10"
    color = "text-OrangeyYellow"
    icon = Memory
  } else if (props.text == 'Verbal') {
    bg = "bg-GreenTeal/10"
    color = "text-GreenTeal"
    icon = Verbal
  } else if (props.text == 'Visual') {
    bg = "bg-CobaltBlue/10"
    color = "text-CobaltBlue"
    icon = Visual
  }
  return (
    <div className={`${bg} bg- flex justify-between p-3 rounded-xl`}>
      <div className={`${color} flex font-bold gap-2`}>
        <img src={icon} alt="" />
        <p>{props.text}</p>
      </div>
      <div className="flex gap-2">
        <p className="font-bold">{props.numero}</p>
        <p className="text-DarkGrayBlue/70">/ 100</p>
      </div>
    </div>
  );
};
