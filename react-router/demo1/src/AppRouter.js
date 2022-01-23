import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

// function Index() {
//   return <h2>JSPang.com</h2>;
// }

// function List() {
//   return <h2>List-Page</h2>;
// }
import Shouye from "./views/Shouye";
import ListIndex from "./views/ListIndex";
import List from "./views/List";
import ListItem from "./views/ListItem";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Shouye />} />
        <Route path="listIndex" element={<ListIndex animate={true} />}>
          <Route path="" element={<List />} />
          <Route path=":id" element={<ListItem />} />
        </Route>
      </Routes>
    </BrowserRouter >
  );
}
export default AppRouter;