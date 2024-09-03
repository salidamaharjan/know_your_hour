function Card({ title, className, children}) {
  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md border rounded px-8 pt-6 pb-8 mb-4">
        <div className={`text-xl ${className}`}>{title}</div>
        <div className="mb-2">
          {children}
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
}

export default Card;
