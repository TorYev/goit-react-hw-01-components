import user from '../data/user.json'
import data from '../data/data.json'
import { Profile } from './Profile/Profile';
import {Statistics} from './Statistics/Statistics'
import { Fragment } from 'react';

export const App = () => {
  return (<Fragment>
    <Profile
   username={user.username}
   tag={user.tag}
   location={user.location}
   avatar={user.avatar}
   stats={user.stats}
/>
<Statistics title={title} stats={stats} />
</Fragment>
  );
};
