import axios from "axios";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

export const useGetIP = (key: string, url: string) => {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const response = await axios.get(url);
      return response;
    },
    onSuccess: (response) => {
      if (response.data) {
        console.log(response.data.country_code);
        if (
          response.data.country_code !== "IR" &&
          response.data.country_code !== "EU"
        ) {
          toast.error("لطفا VPN خود را خاموش کنید", {
            position: "top-center",
          });
        }
      }
    },
  });
};
