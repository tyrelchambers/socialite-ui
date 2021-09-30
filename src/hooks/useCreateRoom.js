import { useMutation, useQueryClient } from "react-query";
import { createRoom } from "../api/createRoom";

export const useCreateRoom = () => {
  const queryClient = useQueryClient();

  const mutate = useMutation((data) => createRoom(data), {
    onSuccess: (data, variables) => {
      queryClient.setQueryData(["stream", { sid: variables.sid }], data);
    },
  });

  return mutate;
};
