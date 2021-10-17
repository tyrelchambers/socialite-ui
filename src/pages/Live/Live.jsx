import React from "react";
import Header from "../../layouts/Header/Header";
import { LiveKitRoom } from "livekit-react";
import { onConnected } from "../../utils/onConnected";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import { LiveControls } from "../../components/LiveControls/LiveControls";
import "livekit-react/dist/index.css";
import { fullName } from "../../utils/fullName";
import config from "../../config/config";
import { useParams } from "react-router";
import { useLiveRoom } from "../../hooks/useLiveRoom";
import Block from "../../layouts/Block/Block";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import Participants from "../../components/Participants/Participants";
import Buttons from "../../components/Buttons/Buttons";

const Live = ({ location }) => {
  const url = config[process.env.NODE_ENV].streamServer;
  const params = new URLSearchParams(location.search);
  const token = params.get("token");
  const { sid } = useParams();
  const roomQuery = useLiveRoom(sid);
  console.log(roomQuery);

  return (
    <div>
      <Header />
      <Wrapper>
        <section>
          <LiveKitRoom
            url={url}
            token={token}
            onConnected={(room) => onConnected(room)}
            controlRenderer={(props) => <LiveControls {...props} />}
          />
        </section>
        {roomQuery.data && (
          <Block className="mt-6 flex items-center gap-6 p-4 border-t-2 border-gray-700">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt=""
              className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-lg"
            />
            <div className="flex flex-col flex-1">
              <p>{fullName(roomQuery.data.User)}</p>
              <h1 className="text-2xl">{roomQuery.data.name}</h1>
            </div>

            <div className="flex gap-6 items-center">
              <Participants participants={roomQuery.data.participants} />
              <FontAwesomeIcon icon={faShare} className="text-gray-200" />
              <Buttons variant="primary">Follow</Buttons>
            </div>
          </Block>
        )}
      </Wrapper>
    </div>
  );
};

export default Live;
