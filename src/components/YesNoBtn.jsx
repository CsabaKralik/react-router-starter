import styled from "styled-components";

const Button = styled.button`
  outline: none;
  border: 2px solid black;
  border-radius: 3px;
  color: white;
  padding: 0.5rem 2rem;
`;

const YesButton = styled(Button)`
  background-color: green;
`;

const NoButton = styled(Button)`
  background-color: red;
`;

const YesNoBtn = (props) => {
  return (
    <div>
      Do you need this kitten???
      <div>
        <YesButton onClick={props.onYes}>Yes</YesButton>
        <NoButton onClick={props.onNo}>No</NoButton>
      </div>
    </div>
  );
};

export default YesNoBtn;
