import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error:any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>You are an Imposter. You are not allowed just go away and learn some basic to access webapp.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}