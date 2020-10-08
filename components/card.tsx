import { NextComponentType } from "next";
import { IUser, User } from "./user";

export interface ICard {
    title: string
    body: string
    userId: IUser["id"]
    users: IUser[]
};

export const Card: NextComponentType<NextComponentType, {}, ICard> = ({ title, body, userId, users })=> (
    <div  className="col-sm-6 pr-1 pl-1">
        <div className="card mt-1 mb-1">
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">&ensp;{ body }</p>
                <User username={ users.filter(user=> user.id === userId)[0].username } name={ users.filter(user=> user.id === userId)[0].name } />
            </div>
        </div>

        <style jsx>{`
            .card-title, .card-body {
                text-transform: capitalize;
            }
        `}</style>
        
    </div>
);