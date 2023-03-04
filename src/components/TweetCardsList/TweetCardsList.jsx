import TweetCardsItem from "../TweetCardsItem/TweetCardsItem";
import { List } from "./TweetCardsList.styled";

const TweetCardsList = ({ users, toggleFollow }) => {
  // const tweetCard = Object.values(users);
  return (
    <List>
      {users.map((user) => {
        return <TweetCardsItem key={user.id} user={user} toggleFollow={toggleFollow}/>;
      })}
      
    </List>
  );
};

export default TweetCardsList;
