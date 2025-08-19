import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const useGetLoginData = (key: string, url: string) => {
  const navigation = useNavigate();
  return useMutation({
    mutationKey: key,
    mutationFn: async (formValue: any) => {
      const response = await axios.get(url);
      return { response, formValue };
    },
    onSuccess: (response) => {
      if (response.response.data) {
        const data = response.response.data;
        const filteredUser = data.find(
          (el: any) => el.nationalCode == response.formValue.nationalitiCode
        );
        if (filteredUser) {

          toast.success("به پنل کاربری خود خوش آمدبد", {
            position: "top-center",
          });
          navigation("/resume");
        } else {
          toast.error("کابر یافت نشد", {
            position: "top-center",
          });
        }
      }
    },
  });
};
