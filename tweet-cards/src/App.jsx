import useLocalStorage from "./hooks/useLocalStorage";
import {
  Container,
  Card,
  Logo,
  Image,
  Line,
  Avatar,
  Wrap,
  Text,
  Button,
} from "./App.styled";

const App = () => {
  const [count, setCount] = useLocalStorage();
  const [checked, setChecked] = useLocalStorage(true);

  const follow = () => {
    setChecked(false);
    setCount(count + 1);
  };
  const unFollow = () => {
    setChecked(true);
    setCount(count - 1);
  };

  const number = new Intl.NumberFormat("en-US", {}).format(count);

  return (
    <Container>
      <Card>
        <Logo src="logo.png" alt="GoIT" />
        <Image src="tweets-background.png" alt="tweets" />
        <Line />
        <Avatar src="avatar.png" alt="avatar" />
        <Wrap>
          <Text>777 tweets</Text>
          <Text>{number} Followers</Text>
        </Wrap>
        {checked ? (
          <Button onClick={follow}>Follow</Button>
        ) : (
          <Button onClick={unFollow} style={{ backgroundColor: "#5CD3A8" }}>
            Following
          </Button>
        )}
      </Card>
    </Container>
  );
};

export default App;
