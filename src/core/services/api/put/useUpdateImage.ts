import { useMutation } from "react-query";
import { uploaderImage } from "../../uploaderFile/uploaderImage";
import { useDispatch } from "react-redux";
import { addEditeImage } from "../../../redux/slice/actions";

export const useUpdateImage = (key: string) => {
    const dispatch = useDispatch()
  return useMutation({
    mutationKey: key,
    mutationFn: async (data: object) => {
      const response = uploaderImage(data);
      return response;
    },
    onSuccess: (response) => {
      console.log("update a image ==>", response.data);
      dispatch(addEditeImage(response.data.url))
    },
  });
};
