import React from "react";

const List = ({
  genres,
  onGenreSelect,
  textProperty,
  valueProperty,
  selectedGenre,
}) => {
  return (
    <ul className="list-group">
      {genres.map((item) => (
        <li
          className={
            item === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          key={item[valueProperty]}
          style={{ cursor: "pointer" }}
          onClick={() => onGenreSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

List.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default List;
