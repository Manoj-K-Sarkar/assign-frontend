import { Pagination } from "@material-ui/lab";
import React from "react";
import List from "./List";


function Main() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalNumberOfPages, setTotalNumberOfPages] = React.useState(0);

  React.useEffect(() => {
    setTotalNumberOfPages(40);
  }, []);

  return (
    <div className="Paper">
      <div className="BottomLeftDesign" />
      <List />
      <Pagination
        count={totalNumberOfPages}
        defaultPage={currentPage}
        onChange={(object, number) => {console.log(number)}}
      />
    </div>
  );
}

export default Main;
