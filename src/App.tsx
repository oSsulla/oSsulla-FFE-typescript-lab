import { FC } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Routes/Home/home"
import { Posts } from "./components/Routes/Posts/posts";
import { GlobalStyle } from "./components/style/global";
import { Layout } from "./components/Common/layout";



export const App: FC = () => {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <div>
        <Link to="posts">Posts</Link>
        <Link to="/">Home</Link>
      </div>
      <Layout>
      <Routes>
        <Route path="posts" element={<Posts />} />
        <Route index element={<Home />} />
      </Routes>
      </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;