import React from "react";
import styled from 'styled-components';

const ExampleStyles = styled.div`
padding: 1rem;
border: 1px solid #dbdbdb;
`

export const Example = ({children}) => 
    <ExampleStyles>{children}</ExampleStyles>