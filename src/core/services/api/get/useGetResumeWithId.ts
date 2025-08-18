import axios from "axios";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addDataToResumeDetailState } from "../../../redux/slice/actions";

export const useGetResumeWithId = (
  key: string,
  url: string,
  enabled: boolean
) => {
  const dispatch = useDispatch();
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const response = await axios.get(url);
      return response;
    },
    onSuccess: (response) => {
      if (response.data) {
        dispatch(addDataToResumeDetailState(response.data));
        return response.data
      }
    },
    enabled: !!enabled,
  });
};
