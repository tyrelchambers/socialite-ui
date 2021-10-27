import React from "react";
import styled from "styled-components";

const StyledAvatar = styled.img`
  border-radius: 50%;
  border: 2px solid var(--white);
  object-fit: cover;
`;

const AvatarReg = styled(StyledAvatar)`
  width: 45px;
  height: 45px;
`;

const AvatarSm = styled(StyledAvatar)`
  width: 30px;
  height: 30px;
`;

const AvatarLg = styled(StyledAvatar)`
  width: 100px;
  height: 100px;
`;
const Avatar = ({ size = "reg", src, className }) => {
  const props = { size, src, className };

  if (size === "sm") {
    return <AvatarSm {...props} />;
  }

  if (size === "lg") {
    return <AvatarLg {...props} />;
  }

  return <AvatarReg {...props} />;
};

export default Avatar;
