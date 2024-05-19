import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-20 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl mb-4">
            We're delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>{" "}
          </h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            tempore enim non excepturi repudiandae pariatur distinctio ipsa
            accusantium, voluptatem molestiae suscipit, sequi voluptatum laborum
            porro molestias iure sapiente? Quas molestiae tenetur similique
            obcaecati in facilis quisquam id sapiente, placeat veniam nihil
            ipsam ducimus, odio recusandae blanditiis vel maxime! Atque quisquam
            magni pariatur beatae. Magnam velit nulla harum deleniti explicabo
            alias. Et hic nobis ratione corrupti minima facilis magnam veritatis
            numquam.
          </p>
          <Link to="/">
            <button className="bg-pink-500 rounded-md m-4 px-4 py-2 text-white hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;