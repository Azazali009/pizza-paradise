import React from "react";
import PizzaRow from "./PizzaRow";

const SearchResult = ({ isPending, data }) => {
  return (
    <div className=" mt-8 min-h-[200px] text-center text-slate-600">
      {isPending && (
        <div className=" flex flex-col gap-3">
          {[...new Array(4)].map((_, i) => (
            <div key={i} className=" flex items-center gap-4">
              <div className="skeleton h-12 w-12 rounded-md"></div>
              <div className=" flex flex-col gap-2">
                <div key={i} className="skeleton h-4 w-96"></div>
                <div key={i} className="skeleton h-4 w-32"></div>
              </div>
            </div>
          ))}
        </div>
      )}
      {!data && !isPending && (
        <p className="">Search with product name to get better result.</p>
      )}
      {data && !data?.length ? (
        <p className="py-4  text-red-500">
          No pizza found try enter different pizza name!
        </p>
      ) : (
        data?.map((pizza) => <PizzaRow key={pizza.id} {...pizza} />)
      )}
    </div>
  );
};

export default SearchResult;
