"use client";
import { ServiceBannerCSR } from "../ServicePage/ServicesCSRFunctions";
import Loading from "@/app/Loader/loading";

const LoadingClient = () => {
    const { loading } = ServiceBannerCSR();

    return (
        <>
            {loading && <Loading />}
        </>
    );
};

export default LoadingClient;
