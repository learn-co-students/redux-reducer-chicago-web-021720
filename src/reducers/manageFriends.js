export function manageFriends(state = { friends: [] }, action){
    switch (action.type){
        case "ADD_FRIEND":
            const newFriends = Object.assign({}, {friends: [...state.friends, action.friend]}) 
            return newFriends
        case "REMOVE_FRIEND":
            const removeFriends = { friends: []}
            state.friends.forEach(friend => {
                if (friend.id !== action.id){
                    removeFriends.friends.push(friend)
                }
            })

            return removeFriends
        default:
            return state
    }
}
