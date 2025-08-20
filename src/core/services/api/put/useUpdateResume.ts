import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const useUpdateResume = (key: string, url: string) => {
  const navigation = useNavigate();
  return useMutation({
    mutationKey: key,
    mutationFn: async (data: any) => {
      const response = await axios.put(url, data);
      return response;
    },
    onSuccess: (response) => {
      if (response.data) {
        toast.success("رزومه با موفقیت بروزرسانی شد", {
          position: "top-center",
        });
        navigation("/resume");
      }
    },
  });
};
