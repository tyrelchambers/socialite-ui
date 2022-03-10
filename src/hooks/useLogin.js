import { login } from "../api/login";
import { useMutation } from "react-query";
import { useNavigate } from "react-location";

export const useLogin = () => {
  const navigate = useNavigate();
  const mutate = useMutation((data) => login(data), {
    onSuccess: (res) => {
      window.localStorage.setItem("token", res.token);
      navigate("/dashboard");
    },
  });

  return mutate;
};
