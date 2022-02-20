function bestFriend(friends) {
    let friendsLength = 0;
    let longest;
    for (let list of friends) {

        if (list.length > friendsLength) {
            friendsLength = list.length;
            longest = list;
        }
    }
    return longest;
}
const friendList = bestFriend(['Aurko', 'Anik', 'Kushal', 'Zibon', 'Abid Hasan']);
console.log(friendList);