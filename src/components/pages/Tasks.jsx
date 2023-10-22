import React from "react";
import Filter from "../Filter";
import Form from "../Form";
import Layout from "../Layout";
import PublicOutlet from "../PublicOutlet";
import Tasklist from "../tasks/Tasklist";
export default function Tasks() {
  return (
    <Layout>
      <>
        <Filter />
        <Form />
        
        <Tasklist />
      </>
    </Layout>
  );
}
