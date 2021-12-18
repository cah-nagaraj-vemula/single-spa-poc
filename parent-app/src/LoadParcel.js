import { Link } from "react-router-dom";
import Parcel from "single-spa-react/parcel";

export const LoadParcel = () => {
  return (
    <>
      <div>
      <Link to={"/"}> Back to home</Link>
      <Parcel config={() => System.import("@org/my-parcel")} wrapWith="div" />
      </div>
    </>
  );
};
