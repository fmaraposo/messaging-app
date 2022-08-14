import React from "react";
import { Channel, useChatContext } from "stream-chat-react";

import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from "./";

const ChannelContainer = () => {
  const { channel } = useChatContext();

  if (!channel) {
  }
  return <div>Channel Container</div>;
};

export default ChannelContainer;
