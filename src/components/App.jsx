import user from '../data/user.json';
import data from '../data/data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Fragment } from 'react';
import friends from '../data/friends.json'
import FriendList from './FriendList/FriendList';

export const App = () => {
  return (
    <Fragment>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends}/>
    </Fragment>
  );
};
