import { API_URL } from "../constants";

export default async (url: string) => {
  const response = await fetch(`${API_URL}${url}`, {
    method: "post",
  });

  return response.status !== 201 ? null : await response.json();
};
