import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Pagination } from "semantic-ui-react";
import { Context } from "../../Context/ContextProvider";
import Filtered from "../Filtered/Filtered";
const pic = "../../../Annotation.png";

const ShowCarDetail = () => {
  const { cars, fetchCars, filter, loading, filterCars } = useContext(Context);
  const [page, setPage] = useState(1);
  console.log({ filter });
  useEffect(() => {
    fetchCars(page);
  }, [page]);
  const handlePagination = (_e, { activePage }) => {
    setPage(activePage);
  };
  if (loading) return <div style={{ textAlign: "center" }}>Loading</div>;

  return (
    <Container>
      {filter ? (
        <Filtered cars={filter} page={page} filterCars={filterCars} />
      ) : (
        cars !== null &&
        cars.map((car) => {
          return (
            <Car>
              <Image>
                <img src={pic} alt='car picture' width='100%' height='100%' />
              </Image>
              <Detail>
                <H2>
                  {car.first_name} {car.last_name}
                </H2>
                <BrandYearColor>
                  <Brand>
                    <p>Brand</p>
                    <p>{car.car_model}</p>
                  </Brand>
                  <div className='divide1'></div>
                  <Year>
                    <p>Year</p>
                    <p>{car.car_model_year}</p>
                  </Year>
                  <div className='divide2'></div>
                  <Color color={car.car_color}>
                    <p>Color</p>
                    <p></p>
                  </Color>
                </BrandYearColor>

                <BrandYearColor>
                  <Brand paddingRight='1.5em'>
                    <p>Country</p>
                    <p>{car.country}</p>
                  </Brand>
                  <Year paddingRight='1.5em'>
                    <p>Gender</p>
                    <p>{car.gender}</p>
                  </Year>
                  <Color paddingRight='1.5em'>
                    <p>Job</p>
                    <span>{car.job_title}</span>
                  </Color>
                </BrandYearColor>

                <EmailBio>
                  <p>
                    <span>Email: </span>
                    <span>{car.email}</span>
                  </p>
                  <p>
                    <span>Bio: </span>
                    <span>
                      {car.bio.length > 100
                        ? car.bio.slice(0, 100) + "..."
                        : car.bio}
                    </span>
                  </p>
                </EmailBio>
              </Detail>
            </Car>
          );
        })
      )}
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
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background: #fafafa;
  padding: 0.6em;
`;

const Car = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  padding: 2% 0;
  margin: 1.4em;
  border-radius: 15px;
  box-shadow: 0 0 6px #777;
`;
const Image = styled.div`
  padding: 1.4em;
`;

const Detail = styled.div``;

const BrandYearColor = styled.div`
  display: flex;
  padding: 1em 0;

  .divide1 {
    height: 55px;
    width: 0.15em;
    background: #252525;
    margin: 5px 1em;
  }
  .divide2 {
    height: 55px;
    width: 0.2em;
    background: #252525;
    margin: 5px 1em;
  }
`;

const Brand = styled.div`
  font-size: 1.1em;
  padding-right: ${(props) => (props.paddingRight ? props.paddingRight : "")};
  p {
    &:first-child {
      color: #767676;
      font-weight: 500;
    }
  }
`;

const Year = styled.div`
  font-size: 1.2em;
  padding-right: ${(props) => (props.paddingRight ? props.paddingRight : "")};
  p {
    &:first-child {
      color: #767676;
      font-weight: 500;
    }
  }
`;

const Color = styled.div`
  text-align: center;
  p {
    font-size: 1.2em;

    &:first-child {
      color: #767676;
      font-weight: 500;
    }

    &:last-child {
      width: 1.2em;
      height: 1.2em;
      background: ${(props) => (props.color ? props.color : "")};
      border-radius: 50%;
      margin: auto;
    }
  }
`;

const EmailBio = styled.div``;

const H2 = styled.h2`
  display: grid;
  grid-template-columns: 30% 70%;
`;

export default ShowCarDetail;
