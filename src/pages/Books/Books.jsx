import React, {useEffect, useState} from 'react';

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch('BooksData.json')
            .then(res => res.json())
            .then(data => console.log(data));
    },[])

    return (
        <div>
            <h1>hellow i am books</h1>
        </div>
    );
};

export default Books;