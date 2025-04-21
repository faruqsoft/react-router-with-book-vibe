import React, {Suspense, useEffect, useState} from 'react';
import Book from "../Book/Book.jsx";

const Books = ({data}) => {
    const [allBooks, setAllBooks] = useState([]);
    console.log(data)

    // useEffect(() => {
    //     fetch('BooksData.json')
    //         .then(res => res.json())
    //         .then(data => console.log(data));
    // },[])

    // const bookPromise = fetch('BooksData.json').then(res => res.json());


    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>

              <div className='grid grid-cols-3 gap-4'>
                  {
                      data.map((singleBook )=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                  }
              </div>

            </Suspense>
        </div>
    );
};

export default Books;