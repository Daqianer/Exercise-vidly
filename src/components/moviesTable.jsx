import React, { Component } from "react";
import Heart from "./heart";
import Table from "./comment/table";
class moviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (item) => <Heart movie={item} onLike={this.props.onLike} />,
    },
    {
      key: "delete",
      content: (item) => (
        <button
          onClick={() => this.props.onDelete(item._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      ),
    },
  ];
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(prevProps, this.props);
    // console.log(prevState, this.state);
    if (!this.props.movies.length) {
      //判断当前页数目是否为0，为0则前往上一页
      this.props.onChangePage(this.props.currentPage - 1);
    }
  }

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        data={movies}
        columns={this.columns}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    );
  }
}

export default moviesTable;
