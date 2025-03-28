import "./App.css";
import Layout from "@/app/layouts/Layout.tsx";
import { Route, Routes } from "react-router";
import Questions from "@/pages/question/ui/Questions.tsx";
import QuestionInfo from "@/pages/questionInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Questions />} />
          <Route path="/question_info/:id" element={<QuestionInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
