

import { useNavigate } from "react-router-dom";
import { StyledButton } from "./forms/buttons";

const Button = ({to, history, ...rest}) => {
    const navigate = useNavigate()
    const onClick = e => {
        console.log(to)
        if (to) {
            navigate(to)
        }

        if (rest.onClick) {
            rest.onClick(e)
        }
    }

    return <StyledButton {...rest} onClick={onClick} />
}

export default Button