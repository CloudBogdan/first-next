import { NextComponentType } from "next";

export interface IUser {
    id?: string | number
    name: string
    username: string
};

export const User: NextComponentType<NextComponentType, {}, IUser> = ({ name, username })=> (
    <span className="card-subtitle text-muted">{ name } @{ username }</span>
);