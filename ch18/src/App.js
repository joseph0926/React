import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { Fragment } from "react";

function App() {
  const auth = useSelector((state) => {
    return state.auth.isLogin;
  });

  return (
    <Fragment>
      <Header></Header>
      {!auth && <Auth></Auth>}
      {auth && <UserProfile></UserProfile>}
      <Counter />
    </Fragment>
  );
}

export default App;
