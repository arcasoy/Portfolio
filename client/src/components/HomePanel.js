import React from "react";
import styled from 'styled-components'

const HomePanel = styled.div`
    width: 100%;
    background: ${props => props.theme.colors.darkGray};
    color: ${props => props.theme.colors.pureWhite};
`

export default HomePanel;