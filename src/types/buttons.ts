export interface IButton {
    label: string,
    id: string,
    type: "button" | "submit" | "reset" | undefined
    onClick?: React.MouseEventHandler<HTMLButtonElement> 
}

