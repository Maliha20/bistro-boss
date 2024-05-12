// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useToys = () => {
  const axiosPublic = useAxiosPublic();

 const {
    data: toys = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["toys"],
    queryFn: async () => {
      const res = await axiosPublic.get("/toys");
      return res.data;
    },
  });

  return [toys, loading, refetch];
};

export default useToys;
