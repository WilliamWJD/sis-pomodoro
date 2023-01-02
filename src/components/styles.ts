import styled from "styled-components";

export const Container = styled.button`
    background-color: ${(props) => props.theme["green-500"]};
    border: none;
    padding: 10px 20px;
    margin-right: 10px;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
`;
