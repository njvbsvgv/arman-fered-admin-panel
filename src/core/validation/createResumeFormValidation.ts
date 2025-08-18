import * as yup from "yup"

export const createResumeFormValidation = yup.object({
    resumeName: yup.string().required("این فیلد اجباریست").max(30, "حداکثر 15 کاراکتر"),
    jobTitle: yup.string().required("این فیلد اجباریست").max(30, "حداکثر 20 کاراکتر"),
    jobDescription: yup.string().required("این فیلد اجباریست").max(300, "حداکثر 300 کاراکتر"),
    image: yup.string().required("وارد کردن عکس الزامیست")
})