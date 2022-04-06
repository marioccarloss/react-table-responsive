import React, { useMemo } from "react";
import styled from "styled-components";

import "./styles.css";

import TableDemo from "./TableDemo";

const Layout = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0 5rem;
`;

export default function App() {
  // headers
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Role",
        accessor: "role"
      },
      {
        Header: "Job Title",
        accessor: "jobTitle"
      },
      {
        Header: "Status",
        accessor: "status"
      }
    ],
    [
      // deps
    ]
  );

  // data
  const data = useMemo(
    () => [
      {
        name: "Andrew",
        role: "Design",
        jobTitle: "Lead Designer",
        status: "Expired"
      },
      {
        name: "Dave",
        role: "Engineering",
        jobTitle: "Architect",
        status: "Accepted"
      },
      {
        name: "Gaspar",
        role: "Engineering",
        jobTitle: "Engineer",
        status: "Pending"
      },
      {
        name: "Jose",
        role: "Design",
        jobTitle: "Designer",
        status: "Expired"
      },
      {
        name: "Taylor",
        role: "Management",
        jobTitle: "PM",
        status: "Accepted"
      }
    ],
    [
      // deps
    ]
  );

  return (
    <div className="App">
      <Layout>
        <TableDemo columns={columns} data={data} options={[1, 3, 5, 10, 20]} />
      </Layout>
    </div>
  );
}
