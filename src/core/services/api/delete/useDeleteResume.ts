import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const useDeleteResume = (key: string, url: string) => {
  const navigation = useNavigate();
  return useMutation({
    mutationKey: key,
    mutationFn: async () => {
      const response = await axios.delete(url);
      return response;
    },
    onSuccess: (response) => {
      if (response.data) {
        console.log("delete resume ==>", response.data)
        toast.success("رزومه با موفقیت حدف شد");
        navigation("/resume");
      }
    },
  });
};
