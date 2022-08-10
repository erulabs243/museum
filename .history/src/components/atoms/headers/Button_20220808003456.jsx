'use strict';

const Button = ({ link = {} }) => {
  return (
    <button className="self-center px-8 py-3 font-semibold rounded bg-red-500 text-gray-900">
      {link.name}
    </button>
  );
};

export default Button;
