import { getItem } from "../../services/storage/localStorage";
import { getSessionItem } from "../../services/storage/sessionStorage";

const getAuthDataUtils = () => {
  let savedAuthData = getSessionItem("AuthData");
  if (!savedAuthData) {
    savedAuthData = getItem("AuthData");
    if (!savedAuthData) {
      savedAuthData = null;
    } else {
      try {
        savedAuthData = JSON.parse(savedAuthData);
      } catch (error) {
        savedAuthData = null;
      }
    }
  } else {
    savedAuthData = JSON.parse(savedAuthData);
  }
  return savedAuthData;
};

export { getAuthDataUtils };
