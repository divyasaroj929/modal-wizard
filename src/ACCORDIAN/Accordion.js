import { useState } from "react";
import Myaccordion from "./Myaccordion";
import "./accordion.css";
import { useSpring, animated } from "react-spring";

const Accordion = ({ AccordionApi }) => {
  const [data, setData] = useState(AccordionApi);

  const titleAnimation = useSpring({
    from: {
      transform: "translateY(-30px)",
    },
    to: [{ transform: "translateY(15px)" }],
    config: { mass: 3, tension: 500, friction: 25 },
  });

  return (
    <>
      {/* <div className="main">
        <h1>React Accordion</h1>

        <div className="accordion">
          {data.map((item) => {
            console.log(item);
            return (
              <>
                <Myaccordion key={item.id} {...item} />
              </>
            );
          })}
        </div>
      </div> */}

      <div className="main">
        <animated.h1 style={titleAnimation}>React Accordion</animated.h1>

        <div className="accordion">
          {data.map((item) => {
            console.log(item);
            return (
              <>
                <Myaccordion key={item.id} {...item} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Accordion;
