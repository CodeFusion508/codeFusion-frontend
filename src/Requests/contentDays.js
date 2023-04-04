import axios from "axios";
import { useToastStore } from "../store/toastStore.js";

const students = "content";

export const getContentsRelationByDays = async (uuid) => {
  let err;
  const { data } = await axios({
    method : "GET",
    url    : `${import.meta.env.VITE_SERVER}${students}/relation/${uuid}`
  }).catch(error => err = error);

  if (err) {
    useToastStore().Activated({ text: err.message, title: "Days" });
  }

  return data;
};