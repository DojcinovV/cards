import "./App.css";
import { Redirect, Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import { Cards } from "./pages/cards/cards";
import AddCard from "./pages/cards/addCard";
import EditCard from "./pages/cards/editCard";

function App() {
  const app = (
    <>
      <Header />

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact={true}>
          <Redirect to="/cards" />
        </Route>
        <Route path="/cards" exact={true}>
          <Cards />
        </Route>
        <Route path="/cards/add" exact={true}>
          <AddCard />
        </Route>
        <Route path="/cards/:cardId/edit" exact={true}>
          <EditCard />
        </Route>
      </Switch>
    </>
  );

  return <>{app}</>;
}

export default App;
