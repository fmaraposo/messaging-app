import React, { useState, useEffect } from "react";
import { Avatar, useChatChannel } from "stream-chat-react";
import { InviteIcon } from "../assets";

const ListContainer = ({ children }) => {
  return (
    <div className="user-list__container">
      <div className="user-list__header">
        <p>User</p>
        <p>Invite</p>
      </div>
      {children}
    </div>
  );
};

const UserList = () => {
  return (
    <ListContainer>
        User List
    </ListContainer>
  )
};

export default UserList;
