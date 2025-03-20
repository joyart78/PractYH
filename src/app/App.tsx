import "./App.css";
import Layout from "@/app/layouts/Layout.tsx";
import { Route, Routes } from "react-router";
import Question from "@/pages/question/ui/Question.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Question />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
