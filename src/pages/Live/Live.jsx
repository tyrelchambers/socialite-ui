import React, { useEffect } from "react";
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
import { faShare } from "@fortawesome/free-solid-svg-icons";
import Participants from "../../components/Participants/Participants";
import Buttons from "../../components/Buttons/Buttons";
import { useQueryClient } from "react-query";
import { useUser } from "../../hooks/useUser";
import StageRenderer from "../../components/StageRenderer/StageRenderer";

const Live = ({ location }) => {
  const url = config[process.env.NODE_ENV].streamServer;
  const params = new URLSearchParams(location.search);
  const token = params.get("token");
  const { sid } = useParams();
  const { query: roomQuery, endStream } = useLiveRoom(sid);
  const queryClient = useQueryClient();
  const userQuery = useUser();

  useEffect(() => {
    return () => {
      queryClient.removeQueries("room");
    };
  }, []);

  if (userQuery.isLoading || roomQuery.isLoading) return null;

  const endStreamHandler = (room) => {
    endStream.mutate({ uuid: room.uuid });
  };

  return (
    <div>
      <Header />
      <Wrapper narrow>
        <section className="mt-4">
          <LiveKitRoom
            url={url}
            token={token}
            onConnected={(room) => onConnected(room)}
            controlRenderer={(props) => (
              <LiveControls
                {...props}
                isHost={roomQuery.data.host === userQuery.data.uuid}
                endStream={() => endStreamHandler(roomQuery.data)}
              />
            )}
            stageRenderer={(props) => <StageRenderer {...props} />}
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
              <p className="text-gray-300">{fullName(roomQuery.data.User)}</p>
              <h1 className="text-2xl">{roomQuery.data.name}</h1>
              <div className="flex gap-4">
                {roomQuery.data.roomTags.map((tag) => (
                  <p className="text-safety-yellow">#{tag.tag}</p>
                ))}
              </div>
            </div>

            <div className="flex gap-6 items-center">
              <Participants participants={roomQuery.data.participants} />
              <FontAwesomeIcon icon={faShare} className="text-gray-200" />
              <Buttons>Follow</Buttons>
            </div>
          </Block>
        )}
      </Wrapper>
    </div>
  );
};

export default Live;
