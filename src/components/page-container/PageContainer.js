import styled from "styled-components";


export default function PageContainer({ children }){
    return(
        <MainContainer>
            <Content>{children}</Content>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;  
    padding-top: 20px;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);

    @media (max-width: 611px) {
        padding-top: 55px;
    }
`;

const Content = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 120px;

    @media (max-width: 611px) {
        width: 100vw;
        margin-top: 50px;
    }
`;

