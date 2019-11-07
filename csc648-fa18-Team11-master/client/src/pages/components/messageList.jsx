import React, { Component } from "react";
import { Media } from "reactstrap";
class MessageList extends Component {
  render() {
    const messages = this.props.messages;
    return (
      <div>
        {messages.length > 0 ? (
          <div>
            {messages.map((messages, k) => {
              return (
                <div>
                  <br />
                  <Media key={k}>
                    <br />
                    <Media body>
                      <Media heading>{messages.subject}</Media>
                      <Media>from Matt</Media>
                      {messages.text}
                    </Media>
                  </Media>
                </div>
              );
            })}
          </div>
        ) : (
          <div>No messages</div>
        )}
      </div>
    );
  }
}

export default MessageList;
