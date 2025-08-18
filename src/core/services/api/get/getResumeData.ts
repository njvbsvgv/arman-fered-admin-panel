import axios from "axios";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { addDataToResumeState } from "../../../redux/slice/actions";

export const getResumeData = async (key: string, url: string) => {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const response = await axios.get(url);
      return response.data;
    },
    onSuccess: (data) => {
      if (data) {
        console.log("response ==>", data);
        dispatch(addDataToResumeState(data));
      }
    },
    refetchOnReconnect: true,
  });
};