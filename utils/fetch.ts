import getUrl from "./getUrl";

export const fetchData = async (
  url: string,
  config: RequestInit,
  onError: (status: number) => void,
  onSuccess?: (data: any) => void
) => {
  try {
    const response = await fetch(getUrl(url), {
      method: config.method,
      body: config.body,
      headers: {
        // "Content-Type": "application/json",
        ...config.headers,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("status error : ", res.status);
          onError(res.status);
        }
      })
      .then((data) => {
        if (onSuccess) {
          onSuccess(data);
        }
        return data;
      });
    return response;
  } catch (error) {
    // console.error("Error retrieving data:", error);
    throw new Error("Could not get data");
  }
};
