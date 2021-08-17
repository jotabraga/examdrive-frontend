import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SubjectTests(props) {
  const { id, name, period } = props;

  return (
    <Link to={`/subject-tests/${id}`}>
      <InfoBox>
        <TestRow>
          <h2>{name}</h2>
          <h2>{period}</h2>
        </TestRow>
      </InfoBox>
    </Link>
  );
}

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TestRow = styled.div`
  width: 100%;
  background: #fff;
  opacity: 0.6;
  margin-top: 4px;
  border-radius: 5px;
  h2 {
    color: #000;
    font-size: 18px;
    width: auto;
    line-height: 40px;
    height: 40px;
    margin-left: 10px;
    margin-right: 30px;
  }
`;
