import { useMutation, useQueryClient } from "react-query";
import { deleteRoom } from "../api/deleteRoom";

export const useDeleteRoom = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation((data) => deleteRoom(data), {
    onSuccess: () => queryClient.invalidateQueries("rooms"),
  });

  return mutate;
};
