import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';


const DivWrapper = styled.div`
    width: ${props => props.isHighlighted ? '18%' : '15%'};
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid #ffffff;
`;

const DivUpper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;   
    align-items: center;
    justify-content: center;

    text-align: center;
    color: #ffffff;

    background-color: ${props => props.color};
    border-bottom: 1px solid #ffffff;
`;

const DivMain = styled.div`
    width: 100%;
    height: ${props => props.isHighlighted ? '110px' : '100px'};
    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid #ffffff;
    background-color: ${props => props.color};
    opacity: 0.8;
`;

const DivMainWrapper = styled.div`
    height: 70%;
    display: flex;
    flex-direction: row;
`;

const TextCurrency = styled.span`
    align-self: flex-start;
    color: #ffffff;
`;

const MainPrice = styled.span`
    align-self: center;
    font-weight: bold;
    font-size: 2rem;

    color: #ffffff;
`;

const TextMonth = styled.span`
    align-self: flex-end;
    color: #ffffff;
`;

const DivSpeed = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.8rem;
    color: #636363;

    background-color: #f2f0f0;
    border-bottom: 1px solid #ffffff;
`;

const DivLower = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.9rem;
    color: #636363;

    background-color: #e3e3e3;
`;

function Rate(props){
const [selected, setSelected] = useState(false);

const handleSelected = () => {
    setSelected(!selected);
}

    return(
        <DivWrapper {...props} onClick={handleSelected}>
            {selected ? "Выбрано" : ""}
            <DivUpper  {...props}>Безлимитный {props.price}</DivUpper>
            <DivMain  {...props}>
                <DivMainWrapper>
                    <TextCurrency>руб</TextCurrency>
                    <MainPrice>{props.price}</MainPrice>
                    <TextMonth>/мес</TextMonth>
                </DivMainWrapper>
            </DivMain>
            <DivSpeed {...props}>до {props.speed} Мбит/с</DivSpeed>
            <DivLower {...props}>{props.details}</DivLower>
        </DivWrapper>
    )
}
export default Rate;