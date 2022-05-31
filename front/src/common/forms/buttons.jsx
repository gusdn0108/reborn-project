import styled from 'styled-components'

export const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2.25rem;
    font-size: 1rem;
    background: pink;
    &:hover {
        background: #ffa49c;
    }
    &:active {
        background: #ff93c9;
    }

    & + & {
        margin-left: 1rem;
    }

    ${props => props.fullWidth && `
        margin-top:0.75rem;
        padding:0.75rem 0;
        width:100%;
        font-size:1.125rem;
    `
    }

    a{
        text-decoration-line: none;
    }

    
`