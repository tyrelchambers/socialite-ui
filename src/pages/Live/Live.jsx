import React from "react";
import Header from "../../layouts/Header/Header";
import { LiveKitRoom } from "livekit-react";
import { onConnected } from "../../utils/onConnected";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import { LiveControls } from "../../components/LiveControls/LiveControls";
import "livekit-react/dist/index.css";

import config from "../../config/config";
const Live = ({ location }) => {
  const url = config[process.env.NODE_ENV].streamServer;
  const params = new URLSearchParams(location.search);
  const token = params.get("token");

  return (
    <div>
      <Header />
      <Wrapper>
        <LiveKitRoom
          url={url}
          token={token}
          onConnected={(room) => onConnected(room)}
          controlRenderer={(props) => <LiveControls {...props} />}
        />
      </Wrapper>
    </div>
  );
};

export default Live;
