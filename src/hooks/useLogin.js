import { useMutation } from "react-query";
import { useHistory } from "react-router";
import { login } from "../api/login";

export const useLogin = () => {
  const history = useHistory();
  const mutate = useMutation((data) => login(data), {
    onSuccess: (res) => {
      window.localStorage.setItem("token", res.token);
      history.push("/dashboard");
    },
  });

  return mutate;
};
