import React from "react";

function Cards({ item }) {
  return (
    <div className="flex justify-center">
      <div className="hover:scale-105 transition-transform duration-300 m-3 mb-5 w-64 sm:w-72 md:w-80 bg-base-100 dark:bg-slate-900 dark:border dark:rounded-2xl">
        <div className="card shadow-xl">
          <figure>
            <img src={item.image} alt={item.name} className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title dark:text-white">
              {item.name}
              {item.category === "New" && (
                <div className="badge badge-secondary">NEW</div>
              )}
            </h2>
            <p className="dark:text-white">{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white hover:duration-200 px-2 py-1 cursor-pointer dark:text-white">
                {item.category}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;