import { NextComponentType } from "next";
import { Card, ICard } from "./card";
import { IUser } from "./user";

type CardsViewType = {
    cards: ICard[]
    users: IUser[]
};

const CardsView: NextComponentType<NextComponentType, {}, CardsViewType> = ({ cards, users })=> (
    <div className="col">
        {
            cards.map((a, index)=>
                index % 2 ?
                    <div className="row" key={ index }>
                        {
                            cards.map((card, i)=>
                                <Card { ...card } key={ i } users={ users } />
                            )
                        }
                    </div>
                : ""
            )
        }
    </div>
);

export default CardsView;