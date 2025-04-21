import React from 'react';
import { useParams, useLoaderData } from "react-router";


const BookDetails = () => {
    const {id} = useParams()
    const bookId = parseInt(id)

    const data = useLoaderData();
    console.log(typeof data)
    const singleBook = data.find((book) => book.id === bookId);
    console.log(singleBook);


    return (
        <div>
            <h1>book details</h1>
        </div>
    );
};

export default BookDetails;