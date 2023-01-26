import React from 'react';

const Card = (props) => {
    return (
        <div className="bg-[#1F1D2B] py-8 px-10 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
              <img
                src={props.img}
                alt="plato comida"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-2xl">Speacy sead</p>
              <span>{props.price}</span>
              <p>{props.description}</p>
            </div>
    );
};

export default Card;