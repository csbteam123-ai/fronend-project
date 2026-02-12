import { useEffect } from "react";
import { getReduxUserInfo } from "../api/redux.all.logic";
import { useDispatch } from "react-redux";
import { setUser } from "./Userslice";

const ReduxSave = () => {
    const dicpatch = useDispatch();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const fn = async () => {
      try {
        if (token) {
          const res = await getReduxUserInfo(token);
          console.log(res);
          dicpatch(setUser(res.data.user))

        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
    fn();
  }, []);
  return null;
};

export default ReduxSave;
