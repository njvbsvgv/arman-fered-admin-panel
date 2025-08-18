import { useMutation } from "react-query";
import { uploaderImage } from "../../uploaderFile/uploaderImage";
import { Slide, toast, Zoom } from "react-toastify";
import { useDispatch } from "react-redux";
import { addImage } from "../../../redux/slice/actions";

export const postImageUpload = (key: string) => {
  const dispatch = useDispatch();
  return useMutation({
    mutationKey: key,
    mutationFn: async (data: object) => {
      const response = await uploaderImage(data);
      return response.data;
    },
    onSuccess: (response) => {
      console.log("upload image response ==>", response);
      if (response) {
        dispatch(addImage(response.url));
        toast.success("عکس با موفقیت آپلود شد", {
          position: "top-center",
        });
      }
    },
  });
};
