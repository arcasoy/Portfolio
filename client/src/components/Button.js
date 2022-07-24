import React from "react";
import styled from 'styled-components'

const StyledButton = styled.button`
    ${(props) => {
        switch(props.$mode) {
            case 'dark':
                return `
                    background-color: ${props.theme.colors.pureBlack};
                `
            default:
                console.log(props)
                return `
                    background-color: ${props.theme.colors.pureWhite};
                `
        }
    }}
`

export default StyledButton;