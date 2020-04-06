import React, { useContext, useEffect, useState } from "react";
import { Table, Pagination, Form, Button, Input } from "semantic-ui-react";
import { Context } from "../../Context/ContextProvider";
import Filtered from "../Filtered/Filtered";

const DisplayComponent = () => {
  const { cars, fetchCars, filter, loading } = useContext(Context);
  const [page, setPage] = useState(1);
  console.log(filter);
  useEffect(() => {
    fetchCars(page);
  }, [page]);

  const handlePagination = (_e, { activePage }) => {
    console.log(activePage);
    setPage(activePage);
  };
  if (loading) return <div style={{ textAlign: "center" }}>Loading</div>;
  return (
    <div>
      {filter !== null ? (
        <Filtered cars={filter} />
      ) : (
        <>
          <Table celled style={{ width: "100%" }} color='teal'>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>First Name</Table.HeaderCell>
                <Table.HeaderCell>Last Name</Table.HeaderCell>
                <Table.HeaderCell>Country</Table.HeaderCell>
                <Table.HeaderCell>Email Address</Table.HeaderCell>
                <Table.HeaderCell>Car Model</Table.HeaderCell>
                <Table.HeaderCell>Car Model Year</Table.HeaderCell>
                <Table.HeaderCell>Car Color</Table.HeaderCell>
                <Table.HeaderCell>Gender</Table.HeaderCell>
                <Table.HeaderCell>Job Title</Table.HeaderCell>
                <Table.HeaderCell>Bio</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {cars !== null &&
                cars.map((car) => {
                  return (
                    <Table.Row
                      key={car._id}
                      style={{ background: `${car.car_color}` }}
                    >
                      <Table.Cell>{car.first_name}</Table.Cell>
                      <Table.Cell>{car.last_name}</Table.Cell>
                      <Table.Cell>{car.country}</Table.Cell>
                      <Table.Cell>{car.email}</Table.Cell>
                      <Table.Cell>{car.car_model}</Table.Cell>
                      <Table.Cell>{car.car_model_year}</Table.Cell>
                      <Table.Cell>{car.car_color}</Table.Cell>
                      <Table.Cell>{car.gender}</Table.Cell>
                      <Table.Cell>{car.job_title}</Table.Cell>
                      <Table.Cell>{car.bio.slice(0, 10)}</Table.Cell>
                    </Table.Row>
                  );
                })}
            </Table.Body>
          </Table>
          <Pagination
            activePage={page}
            onPageChange={handlePagination}
            boundaryRange={0}
            defaultActivePage={page}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={5}
            totalPages={65000}
          />
        </>
      )}
    </div>
  );
};

export default DisplayComponent;
