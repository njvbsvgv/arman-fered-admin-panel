import axios from "axios"


let config = {
    headers: {
        "x-magicapi-key": "cm7ugp1id0001jp031dg6lxrm"
    }
}

export const uploaderImage = async (data: object) => {
    const file = await axios.post("https://prod.api.market/api/v1/magicapi/image-upload/upload", data, config)
    return file
}