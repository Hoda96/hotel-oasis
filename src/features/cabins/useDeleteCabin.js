import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins as deleteCabinsAPI } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinsAPI(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("cabin deleted.");
    },
    onError: (err) => toast.error(err.message, { icon: "🙄" }),
  });
  return { isDeleting, deleteCabin };
}
