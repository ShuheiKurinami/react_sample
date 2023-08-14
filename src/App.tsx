import { Heading } from "./libs/Heading";
import { Text } from "./Text";

export const App = () => {
  return (
    <>
      <Text text="true" />
      <Heading tag="h1"></Heading>
      <Heading tag="h1">
        <span>hello, world</span>
      </Heading>
    </>
  );
};
