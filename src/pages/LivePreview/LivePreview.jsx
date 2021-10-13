import { faCircle, faCog, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router";
import { createRoom } from "../../api/createRoom";
import { deleteRoom } from "../../api/deleteRoom";
import Buttons from "../../components/Buttons/Buttons";
import Input from "../../components/Input/Input";
import LiveSettings from "../../components/LiveSettings/LiveSettings";
import { useModal } from "../../hooks/useModal";
import { useStream } from "../../hooks/useStream";
import Header from "../../layouts/Header/Header";
import LiveInfo from "../../layouts/LiveInfo/LiveInfo";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import Webcam from "react-webcam";
import Modal from "../../layouts/Modal/Modal";
import { getAccessToken } from "../../api/getAccessToken";
import { roomAdmin } from "../../constants/roomAdmin";
import { useUser } from "../../hooks/useUser";

const LivePreview = () => {
  const { isOpen, setIsOpen, config, setOpts } = useModal();
  const { name, setName, stream, setStreamConfig, reset } = useStream();
  const history = useHistory();
  const userQuery = useUser();

  const createRoomHandler = async () => {
    if (!name || stream.isLive) return;
    const room = await createRoom({ name });

    const aToken = await getAccessToken(
      roomAdmin({
        room: room.name,
        participantName: `${userQuery.data.firstName} ${userQuery.data.lastName}`,
      })
    );

    setStreamConfig({ ...room.data, isLive: true });
    history.push(`/live/${room.sid}?token=${aToken}`);
  };

  const endStreamHandler = () => {
    deleteRoom(stream.sid);
    reset();
  };
  return (
    <>
      <Header />

      <Wrapper className="mt-10">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-4 flex items-center">
            Live Studio{" "}
            {stream.isLive && (
              <span className="bg-red-500 text-gray-800 px-2 rounded-full text-sm flex items-center gap-2 ml-6">
                <FontAwesomeIcon icon={faCircle} size="xs" /> Live
              </span>
            )}
          </h1>
          <Input
            placeholder="Stream title..."
            className="w-full mb-4 text-xl"
            light
            onChange={(e) => setName(e.target.value)}
          />

          <div className="flex items-center mb-10 gap-4">
            {!stream.isLive ? (
              <Buttons disabled={!name} onClick={createRoomHandler}>
                Create Room &amp; Go Live
              </Buttons>
            ) : (
              <Buttons variant="danger" onClick={endStreamHandler}>
                End stream
              </Buttons>
            )}
            {!stream.isLive && (
              <FontAwesomeIcon
                icon={faCog}
                className="text-gray-300 cursor-pointer"
                onClick={() => {
                  setOpts({
                    header: "Stream settings",
                    children: <LiveSettings />,
                  });
                  setIsOpen(true);
                }}
              />
            )}
            {stream.isLive && (
              <FontAwesomeIcon
                icon={faInfo}
                className="text-gray-300 cursor-pointer"
                onClick={() => {
                  setOpts({
                    header: "Stream Information",
                    children: <LiveInfo data={stream} />,
                  });
                  setIsOpen(true);
                }}
              />
            )}
          </div>
          <p className="font-thin  mb-4">
            Here we can make sure your video is working correctly before we go
            live.
          </p>
          <Webcam className="rounded-md" />

          <Modal
            isShowing={isOpen}
            hide={() => setIsOpen(false)}
            header={config.header}
            children={config.children}
          />
        </div>
      </Wrapper>
    </>
  );
};

export default LivePreview;