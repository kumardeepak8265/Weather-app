function Search(props) {
  return (
    <div className="flex  justify-center  flex-col sm:flex-row m-4 ">
      <input
        className="p-2 w-full border-2 border-gray-400 rounded-md"
        type="search"
        value={props.value}
        onChange={props.onChange}
      ></input>
      <button
        className="mx-2 p-2 bg-indigo-500  text-white rounded-md"
        onClick={props.onClick}
      >
        SEARCH
      </button>
    </div>
  );
}

export default Search;
