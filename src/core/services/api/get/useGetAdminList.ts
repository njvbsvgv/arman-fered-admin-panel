import axios from "axios";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { addDataToAdminDataState } from "../../../redux/slice/actions";

export const useGetAdminList = (key: string, url: string) => {
  const dispatch = useDispatch();
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const response = await axios.get(url);
      return response;
    },
    onSuccess: (response) => {
      console.log("admin data ==>", response.data);
      if (response.data) {
        dispatch(addDataToAdminDataState(response.data));
      }
    },
  });
};
