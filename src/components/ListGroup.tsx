function ListGroup() {
  let namesArray = ["John", "Paul", "George", "Ringo", "Pete"];

  return (
    <>
      <h1>List</h1>
      {namesArray.length > 0 && (
        <ul className="list-group">
          {namesArray.map((name) => (
            <li key={name} className="list-group-item">
              <a
                href="#"
                className="list-group-item-action"
                aria-current="true"
                onClick={() => console.log(name)}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListGroup;
