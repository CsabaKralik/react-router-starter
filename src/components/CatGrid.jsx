import styled from "styled-components";
import { useState, useEffect } from "react";

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-rows: repeat(auto-fill, minmax(240px, 1fr));
  margin: 1rem;
`;

const Card = styled.div`
  width: 30%;
  position: relative;
  left: 50%;
  transform: translate(-50%);
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

const CatCard = (props) => (
  <Card>
    <Img src={props.url} />
  </Card>
);

const CatGrid = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const farmRaw = localStorage.getItem("farm") ?? "[]";
    const farmArr = JSON.parse(farmRaw);
    setCats(farmArr);
  }, []);

  return (
    <Grid>
      {cats.map((cat) => {
        return <CatCard url={cat.url} key={cat.id} />;
      })}
    </Grid>
  );
};

export default CatGrid;
