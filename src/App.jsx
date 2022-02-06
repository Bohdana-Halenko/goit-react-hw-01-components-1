//добавляем компоненты 
import Profile from './components/profile/Profile';
import user from './data/user.json';

import Statistics from './components/statistics/Statistics';
import data from './data/data.json';

import FriendList from './components/friendList/FriendList';
import friends from './data/friends.json';

import TransactionHistory from './components/transactions/TransactionHistory';
import transactions from './data/transactions.json'; 



export default function App() {
    return <div>
        <Profile
            avatar={user.avatar}
            username={user.username}
            tag={user.tag}
            location={user.location}
            stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data}/>
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />;
    </div> 
}