import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
//
import { ICard } from "../components/card";
import Loader from "../components/loader";
import { IUser } from "../components/user";
import CardsView from "../components/cards-view";

export default ()=> {

    const 
        [cards, setCards] = useState<ICard[]>([]),
        [users, setUsers] = useState<IUser[]>([]);
    
    useEffect(()=> {

        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=12").then(res=> setCards(res.data.sort(()=> 0.5 - Math.random())));
        axios.get("https://jsonplaceholder.typicode.com/users?_limit=20").then(res=> setUsers(res.data));

    }, []);

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center" style={ { width: "100%", maxWidth: 600, minHeight: "100vh" } }>
            <Head>
                <title>Next ts test</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
            </Head>

            <div className="mb-5 mt-5 text-center">
                <h2>Hey! This my first Next.js app! ❤</h2>
                <span className="text-muted">But writen on TypeScript</span>
            </div>

            {
                cards.length !== 0 && users.length !== 0 ?
                    <CardsView users={ users } cards={ cards } />
                : <Loader />
            }

        </div>
    );
};