import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import config from "../../config/config";
import { copyToClipboard } from "../../utils/copyToClipboard";

const LiveInfo = ({ data }) => {
  const streamURL = config[process.env.NODE_ENV].frontend + "/live/" + data.sid;
  return (
    <div>
      <p>Stream ID</p>
      <div className="bg-gray-700 p-2 mt-2 text-gray-300 text-sm rounded-md flex items-center justify-between">
        <p>{data.sid}</p>
        <FontAwesomeIcon
          icon={faClipboard}
          onClick={() => copyToClipboard(streamURL)}
        />
      </div>
    </div>
  );
};

export default LiveInfo;
