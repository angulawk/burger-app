import React, {Fragment, useEffect, useState} from "react";
import Modal from "../../../components/UI/Modal";

function withErrorHandler(WrappedComponent, axios) {
  return props => {
    const [error, setError] = useState(null);

    useEffect(() => {
      axios.interceptors.request.use(req => {
        setError(null);
        return req;
      });

      async function errorResponseHandler(error) {
        if (error) {
          await setError(error);
        }
      }

      axios.interceptors.response.use(response => {}, errorResponseHandler);
    });

    function errorConfirmedHandler() {
      setError(null);
    }

    return (
      <Fragment>
        <Modal isVisible={error} modalClosed={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />;
      </Fragment>
    );
  };
}

export default withErrorHandler;
