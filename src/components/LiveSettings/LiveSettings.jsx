import React from "react";
import Form from "../Form/Form";
import InputWrapper from "../InputWrapper/InputWrapper";
import Input from "../Input/Input";
import Buttons from "../Buttons/Buttons";
const LiveSettings = () => {
  return (
    <Form wide>
      <InputWrapper label="Max Participants">
        <Input placeholder="Default: unlimited" type="number" />
      </InputWrapper>

      <Buttons>Save</Buttons>
    </Form>
  );
};

export default LiveSettings;
