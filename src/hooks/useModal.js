import { useState } from "react";

export const useModal = () => {
  const [isOpen, setState] = useState(false);
  const [config, setConfig] = useState({
    header: "",
    children: null,
  });
  const setIsOpen = (bool) => {
    setState(bool);
  };

  const setOpts = (opts) => {
    setConfig({ ...config, ...opts });
  };
  return { isOpen, setIsOpen, config, setOpts };
};
