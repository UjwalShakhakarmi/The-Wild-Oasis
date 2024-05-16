import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdateSettings() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Setting is Updated Successfully");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
      onError: (err) => toast.error(err.message);
    },
  });

  return { isUpdating, updateSetting };
}
