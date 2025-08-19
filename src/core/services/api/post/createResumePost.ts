import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const createResumePost = (key: string, url: string) => {
  const navigation = useNavigate()
  return useMutation({
    mutationKey: key,
    mutationFn: async (data: object) => {
      const response = await axios.post(url, data);
      return response;
    },
    onSuccess: (response) => {
      console.log("response ==>", response);
      if (response.data) {
        toast.success("رزومه با موفقیت ثبت شد", {
          position: "top-center",
        });
        navigation("/resume")
      }
    },
  });
};
