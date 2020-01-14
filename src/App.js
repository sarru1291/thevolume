import React from "react";
import Layout from "./hoc/layout/layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import TaleCity from "./pages/taleCity/taleCity";
import PostContainer from "./containers/postContainer/postContainer";
import ReportStudy from "./pages/reportStudy/reportStudy";
import BookReview from "./pages/bookReview/bookReview";
import IndiasStand from "./pages/indiasStand/indiasStand";
import Indology from "./pages/indology/indology";
import MonetaryReport from "./pages/monetaryReport/monetaryReport";
import WorldWindow from "./pages/worldWindow/worldWindow";
import NatureScan from "./pages/natureScan/natureScan";
import DiscoverTechnology from "./pages/discoverTechnology/discoverTechnology";
import ProgrammeArchive from './pages/programmeArchive/programmeArchive';
function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/tale-city" exact component={TaleCity} />
          <Route path="/book-review" exact component={BookReview} />
          <Route path="/indias-stand" exact component={IndiasStand} />
          <Route path="/programme-archive" exact component={ProgrammeArchive} />
          <Route path="/indology" exact component={Indology} />
          <Route path="/monetary-report" exact component={MonetaryReport} />
          <Route path="/world-window" exact component={WorldWindow} />
          <Route path="/nature-scan" exact component={NatureScan} />
          <Route
            path="/discover-technology"
            exact
            component={DiscoverTechnology}
          />
          <Route path="/report-study" exact component={ReportStudy} />

          <Route path="/:page/:id" exact component={PostContainer} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
