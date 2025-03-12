import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Some of our winning members"
        />

        <div className="flex flex-wrap justify-center items-center gap-5 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-2 border-2 border-white bg-black/20 md:w-[30%] h-[120px] rounded-md"
              key={item.id}
            >
              <div className="relative z-2 flex flex-col pointer-events-none">
                <h5 className="h5 mb-1">{item.title}</h5>
                <p className="body-2 mb-3 text-n-3">{item.text}</p>
                <p className="body-2 mb-3 text-green-700">${item.price}</p>
                <div className="flex items-center mt-auto">
                  {/* <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
