import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { LoadParcel } from "./LoadParcel";

export default function Root(props) {
  return <section>
    {props.name} is mounted!
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/parcel" element={<LoadParcel />} />
    </Routes>
    </BrowserRouter>
  </section>;
}
