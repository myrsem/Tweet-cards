import { useState, useEffect } from "react";
import initialUsers from "./users.json";
import TweetCardsList from "./components/TweetCardsList/TweetCardsList";
import { Container } from "./App.styled";

const App = () => {
  const [users, setUsers] = useState(
    () => JSON.parse(localStorage.getItem("users")) ?? initialUsers
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const toggleFollow = (id) => {
    setUsers((users) =>
      users.map((user) => {
        console.log(user)
        if (user.id === id) {
          return {
            ...user,
            followers: user.isFollow ? user.followers - 1 : user.followers + 1,
            isFollow: user.isFollow ? false : true,
          };
        }
        return user;
      })
    );
  };
  
  return (
    <Container>
      <TweetCardsList users={users} toggleFollow={toggleFollow} />
    </Container>
  );
};

export default App;
