import React, { Component } from "react";

class UserData extends Component {
    render() {
        const user = this.props.list;
        return(
        <div>
            {user.map((user, k) => {
                return (
                    <div className="UniqueName" key={k}>
                    <div className="dashboardDisplay">Name: {user.username}</div>
                    </div>
                )
            })}
        </div>
        );
    }
}

export default UserData;