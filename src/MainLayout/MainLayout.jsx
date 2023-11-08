import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Component/Nav/Nav";
import { Helmet } from "react-helmet";
export default function MainLayout() {
  return (
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Nav />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
