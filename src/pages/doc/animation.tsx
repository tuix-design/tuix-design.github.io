import { FC, useRef } from "react";
import DocLayout from "../../containers/DocLayout";
import ApiTable from "../../containers/ApiTable";
import React from "react";
import { apiAnimation, apiOptionAnimation } from "../../utils/constant";
import { Animate, Button, Code, Flex, Icon } from "tuix-design";

const animation: FC = () => {
  const animation = useRef<any>(null);
  return (
    <DocLayout
      title="animation"
      next="tooltip"
      prev="style"
      tag={["basic", "manual", "api", "option properties"]}
    >
      <p id="basic" className="py-5">
        Basic usage
      </p>
      <Code
        mode="dark"
        language="javascript"
      >{`import {Animate} from "tuix-design"`}</Code>
      <div className="py-5">
        <Animate
          animate={["bg:red", "bg:orange", "bg:green"]}
          option={{ iterations: Infinity, duration: 2000 }}
        >
          <Icon name="Home" color="#ffffff" />
        </Animate>
        <Code mode="dark">{`<Animate
animate={["bg:red", "bg:orange", "bg:green"]}
option={{ iterations: Infinity, duration: 2000 }}
>
<Icon name="Home" color="#ffffff" />
</Animate>`}</Code>
      </div>

      <p id="manual" className="py-5">
        Manual animation
      </p>
      <p>
        In some cases animation need to be handle manually. Use ref to access
        the handler function
      </p>
      <div className="py-5">
        <Animate
          ref={animation}
          animate={["bg:red", "bg:orange", "bg:green"]}
          option={{ iterations: Infinity, duration: 2000 }}
          auto={false}
        >
          <Icon name="Home" color="#ffffff" />
        </Animate>
        <Flex gap={5}>
          <Button onClick={() => animation.current.play()} variant="secondary">
            play
          </Button>
          <Button onClick={() => animation.current.pause()} variant="secondary">
            pause
          </Button>
          <Button
            onClick={() => animation.current.reverse()}
            variant="secondary"
          >
            reverse
          </Button>
          <Button onClick={() => animation.current.stop()} variant="secondary">
            stop
          </Button>
        </Flex>
        <Code mode="dark">{`const ExampleAnimation = ()=>{
const animation = useRef<any>(null);

return (
    <div>  
        <Animate 
                ref={animation} 
                animate={["bg:red", "bg:orange", "bg:green"]} 
                option={{ iterations: Infinity, duration: 2000 }} 
                auto={false}
                >
            <Icon name="Home" color="#ffffff" />
        </Animate>
        <Flex gap={5}>
            <Button onClick={() => animation.current.play()} variant="secondary">
                play
            </Button>
            <Button onClick={() => animation.current.pause()} variant="secondary">
                pause
            </Button>
            <Button
                onClick={() => animation.current.reverse()}
                variant="secondary"
            >
                reverse
            </Button>
            <Button onClick={() => animation.current.stop()} variant="secondary">
                stop
            </Button>
        </Flex>
    </div>
)
}`}</Code>
      </div>

      <ApiTable id="api" data={apiAnimation} />
      <ApiTable
        id="option-properties"
        title="Option Properties"
        data={apiOptionAnimation}
      />
    </DocLayout>
  );
};

export default animation;
