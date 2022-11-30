import { ChangeEvent } from "react";

export interface IBarraPesquisa {
    label: string,
    id: string,
    value: string,
    setValue: (value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  }