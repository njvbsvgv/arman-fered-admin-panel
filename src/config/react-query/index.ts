import { QueryClient } from "react-query";

export const queryClinetConfig = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})