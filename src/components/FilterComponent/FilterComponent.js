import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Menu, Dropdown } from "semantic-ui-react";
import { Context } from "../../Context/ContextProvider";

const FilterComponent = () => {
  const { filterCars } = useContext(Context);
  const [search, setSearch] = useState("");
  useEffect(() => {});
  return (
    <Container>
      {/* <Menu vertical>
        <Menu.Item onClick={() => filterCars("Ford")}>
          Search By Car Model
        </Menu.Item>
        <Menu.Item onClick={() => filterCars("bmw")}>
          Search By Car Model Year
        </Menu.Item>
        <Menu.Item onClick={() => filterCars("toyota")}>
          Search By Country
        </Menu.Item>
      </Menu> */}
      <Menu vertical>
        <Dropdown item text='Car By Model'>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => filterCars("Ford")}>
              Ford
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterCars("bmw")}>BMW</Dropdown.Item>
            <Dropdown.Item onClick={() => filterCars("lexus")}>
              LEXUS
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterCars("maybach")}>
              MAYBACH
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterCars("VOLKSWAGEN")}>
              VOLKSWAGEN
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterCars("TOYOTA")}>
              TOYOTA
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterCars("HONDA")}>
              HONDA
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterCars("CHRYSLER")}>
              CHRYSLER
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
`;

export default FilterComponent;
