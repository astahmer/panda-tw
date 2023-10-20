import { css } from "../styled-system/css";
import { Center, Stack } from "../styled-system/jsx";

export default function App() {
  return (
    <Center w="100vw" h="100vh">
      <Stack>
        <span className="text-3xl font-bold underline">
          Hello world! from tw
        </span>
        <span
          className={css({
            textStyle: "3xl",
            fontWeight: "bold",
            textDecoration: "underline",
            color: "yellow.300",
          })}
        >
          Hello Panda!
        </span>
      </Stack>
    </Center>
  );
}
