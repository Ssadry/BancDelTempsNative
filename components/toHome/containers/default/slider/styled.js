import styled from 'styled-components/native';

export const Slider = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    border-bottom-width: 1px;
    background-color: red;
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: green;
`;

export const Container = styled.View`
    position: relative;
    left: 0px;
    flex-direction: row;
`;

export const Element = styled.View`
    width: 80px;
    border: 1px solid black;
    margin-left: 5px;

    justify-content: center;
    align-items: center;
    margin-right: 10px;
    overflow: hidden;
`;

export const Image = styled.Image`
    width: 80px;
    height: 80px;
`;