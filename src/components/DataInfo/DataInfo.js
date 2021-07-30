import { Link } from "react-router-dom";
import styled from "styled-components";

export default function DataInfo(props){

    const {id, name, period} = props;

    return(

        <Link to={`/subject-tests/${id}`}>
            <InfoBox>
                <TestRow>
                    <div>
                        <h1>{name}</h1>
                    </div>
                    <div>
                        <h1>{period}</h1>
                    </div>
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
    h1{
        color: #000;
    }
    div{
        width:auto;
        line-height: 40px;
        height: 40px;
        margin-left: 10px;
        margin-right: 10px;
        min-width: 35px;
    }
`;