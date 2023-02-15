import instance from "@/utils/request";

export const getUserLists = () => {
  return instance({
    url: "/getUserList",
    method: "get",
  });
};

export const loginIn = (data) => {
  return instance({
    url: "/login",
    data,
    method: "post",
  });
};
