import { Heading } from "./libs/Heading";
import { Text } from "./Text";
import { Button } from "./libs/Button";

export const App = () => {
  return (
    <>
      <Text text="true" />
      <Heading tag="h1">見出し</Heading>
      <Button
        onClick={() => console.log("clicked!")}
        title="Button"
        type="primary"
        width={96}
      ></Button>
      <Button
        onClick={() => console.log("clicked!")}
        title="Button"
        type="secondary"
      ></Button>
      <Button
        onClick={() => console.log("clicked!")}
        title="Button"
        type="error"
      ></Button>
      <Heading tag="h1">
        <span>hello, world</span>
      </Heading>
    </>
  );
};
