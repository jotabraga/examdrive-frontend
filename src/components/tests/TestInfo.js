import styled from "styled-components";

export default function SubjectTests(props) {
  const { professor, link, category, subject } = props;

  return (
    <InfoBox>
      <TestRow href={link}>
        <h2>{subject}</h2>
        <h2>{professor}</h2>
        <h2>{category}</h2>
      </TestRow>
    </InfoBox>
  );
}

const InfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TestRow = styled.a`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: #fff;
  opacity: 0.6;
  margin-top: 4px;
  border-radius: 5px;
  h2 {
    color: #000;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
    height: 40px;
    margin-left: 10px;
    margin-right: 30px;
  }
  @media (max-width: 611px) {
    h2 {
      font-size: 15px;
      overflow: hidden;
    }
  }
`;
