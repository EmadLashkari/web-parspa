import { fetchData } from "@/utils/fetch";
import React from "react";

function useUser() {
  const response = fetchData("/user/profile", {});

  return null;
}

export default useUser;
