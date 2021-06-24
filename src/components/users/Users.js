import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
    state = {
        users:[
            {
            id : '1',
            login :'kishan200',
            avatar_url :'https://avatars.githubusercontent.com/u/70476064?v=4',
            html_url :'https://github.com/kishan200'
            },
            {
            id : '2',
            login :'akash52',
             avatar_url :'https://avatars.githubusercontent.com/u/31063892?v=4',
            html_url :'https://github.com/Akash52'
            },
            {
            id : '3',
            login :'youtubers cafe',
            avatar_url :'https://avatars.githubusercontent.com/u/76847887?v=4',
            html_url :'https://github.com/youtuberscafe'
            },
        ]
    }

    render() {
        return (
            <div style={userStyle}>
               {this.state.users.map(user => (
                   <UserItem key={user.id} user={user} />
               ))} 
            </div>
        )
    }
}

const userStyle = {
    display : 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}
export default Users
