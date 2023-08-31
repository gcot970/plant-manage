import "./App.css";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Profile from "./pages/ProfilePage";
import Signup from "./pages/SignupPage";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import CalendarPage from "./pages/calendarPage";
import NavTabs from "./pages/NavTabs";
import SearchPage from "./pages/SearchPage";
import auth from "./pages/utils/auth";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_API 
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const handlePageChange = (pagename) => {
    window.location.assign(`/${pagename}`);
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route
                path="/searchpage"
                element={
                  <div>
                    <NavTabs handlePageChange={handlePageChange} />
                    <SearchPage />
                  </div>
                }
              />
              <Route path="/profile" element={
                  <div>
                    <NavTabs handlePageChange={handlePageChange} />
                    <Profile />
                  </div>
                } />
              <Route
                path="/calendar"
                element={
                  <div>
                    <NavTabs handlePageChange={handlePageChange} />
                    <CalendarPage />
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
