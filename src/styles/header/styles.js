import styled from 'styled-components';

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    background-color: #FFFFFF ;
    width: 45%;
    padding-top: 15px;
    padding-left: 15px;
`;

const HeaderH2 = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    margin-left: 5px;
`;

const HeaderP = styled.p`
    font-size: 1.3rem;
    font-weight: bold;
    margin-left: 5px;
    margin-right: 5px;
`;

const HeaderMoneyCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    box-shadow: inset 4px 0 0px rgba(0, 0, 0, 0.2);
    padding-left: 15px;
`;

export {
  HeaderDiv,
  HeaderH2,
  HeaderP,
  HeaderMoneyCont,
};
