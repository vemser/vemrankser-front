import { ChangeEvent } from 'react';

export interface IBarraPesquisa {
    label: string,
    id: string,
    value: string,
    setValue: (value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export interface IButtonMenuLateral {
    icone: React.ReactNode,
    text: string,
    link: string,
}

export interface IButton {
    label: string,
    id: string,
    type: "button" | "submit" | "reset" | undefined
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export interface IButtonSmall {
    label: string,
    id: string
}

export interface IInput {
    label: string,
    id: string,
    type: string
}

export interface IMenuLateral {
    children: React.ReactNode,
    cargoDoUsuario: string | null,
    nomeDoUsuario: string | null,
    fotoDePerfil: string
}
