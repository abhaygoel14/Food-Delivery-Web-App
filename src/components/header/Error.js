import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h1>
        Error {err.status} : {err.statusText}
      </h1>
      <Link to="/">
        <h2>Back to Homepage</h2>
      </Link>
    </>
  );
};

export default Error;
