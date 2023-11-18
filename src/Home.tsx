import { Outlet } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      loading please wait
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};
