import React, { useState } from "react";
import { faCog, faTable } from "@fortawesome/free-solid-svg-icons";

import Buttons from "../../components/Buttons/Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../layouts/Header/Header";
import Input from "../../components/Input/Input";
import InputWrapper from "../../components/InputWrapper/InputWrapper";
import LiveSettings from "../../components/LiveSettings/LiveSettings";
import Modal from "../../layouts/Modal/Modal";
import Select from "../../components/Select/Select";
import Webcam from "react-webcam";
import Wrapper from "../../layouts/Wrapper/Wrapper";
import { createRoom } from "../../api/createRoom";
import { getAccessToken } from "../../api/getAccessToken";
import { useModal } from "../../hooks/useModal";
import { useNavigate } from "react-location";
import { useTags } from "../../hooks/useTags";
import { useUser } from "../../hooks/useUser";

const LivePreview = () => {
  const { isOpen, setIsOpen, config, setOpts } = useModal();
  const [state, setState] = useState({
    name: "",
    tags: [],
  });
  const tagsQuery = useTags();
  const navigate = useNavigate();
  const userQuery = useUser();

  const createRoomHandler = async () => {
    const { name, tags } = state;
    if (!name) return;

    const room = await createRoom({ name, tags });

    const aToken = await getAccessToken({
      name: room.uuid,
      participantName: `${userQuery.data.firstName} ${userQuery.data.lastName}`,
      participantMetadata: {
        participantId: userQuery.data.uuid,
      },
    });
    console.log(aToken);

    navigate(`/live/${room.roomId}?token=${aToken}`);
  };

  const formattedTags =
    tagsQuery.data &&
    tagsQuery.data.map((tag) => ({ value: tag.tag, label: tag.tag, ...tag }));

  const inputHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />

      <Wrapper narrow>
        <h1 className="text-3xl font-bold mb-4 flex items-center">
          Live Studio
        </h1>
        <div className="w-full flex gap-6">
          <div className="flex flex-col w-1/2">
            <div className="flex flex-col gap-4 ">
              <InputWrapper label="Stream title">
                <Input
                  placeholder="Stream title..."
                  className=" text-xl h-10"
                  light
                  onChange={(e) => inputHandler(e)}
                  value={state.name}
                  name="name"
                />
              </InputWrapper>
              <InputWrapper label="Tags">
                <Select
                  options={tagsQuery.data ? formattedTags : []}
                  isMulti
                  onChange={(e) => setState({ ...state, tags: e })}
                  className="mt-2 mb-4"
                />
              </InputWrapper>
            </div>

            <div className="flex items-center mb-10  gap-4">
              <Buttons disabled={!state.name} onClick={createRoomHandler}>
                Create Room &amp; Go Live
              </Buttons>
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
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <p className="font-thin  mb-4">
              Here we can make sure your video is working correctly before we go
              live.
            </p>
            <Webcam className="rounded-md" />
          </div>
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
