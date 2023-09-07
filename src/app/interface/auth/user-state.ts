import { DataState } from "../../enum/data-state.enum";

export interface UserState<T>{
    dataState: DataState;
    error?: string | null,
    userData?:T;
}