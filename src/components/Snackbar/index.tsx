import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import actions from "../../actions";
import { Bar } from "./styles";
import { DefaultRootState } from "../../common/types";

const Snackbar = () => {
  const dispatch = useDispatch();
  const { notification } = useSelector(
    (state: DefaultRootState) => state.appReducer
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(actions.setNotification({ ...notification, hide: true }));
    }, 7000);
  }, [dispatch, notification]);

  return (
    <Bar type={notification.type} hide={notification.hide}>
      <span>{notification.message}</span>
    </Bar>
  );
};

export default Snackbar;
