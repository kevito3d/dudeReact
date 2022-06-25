import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { getFeching } from "../utils/helper";

//import stiles
import "../css/table.css";

export default function Tabla(props) {
  const { urlData } = props;
  //const navigate = useNavigate();

  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const [loading, setLoading] = useState(true);

  /* const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0); */

  useEffect(() => {
    setLoading(true);
    getFeching(`${urlData}/${offset}`)
      .then((data) => {
        console.log("data: ", data.data);
        if (data.data) {
          setData(data.data);
          setPageCount(data.pages);
        }
        setLoading(false);
      })
  }, [offset, urlData]);

  /* const handleclik = (key) => {
      console.log("handle: ", key);
  
      navigate(`/${urlData}/${key}`);
    }; */

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  /* const handleClick = (num) => {
      setPage(num);
    };
   */
  return (
    <>
      <table>
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map(
                (el, key) => key !== 0 && <th key={key}>{el}</th>
              )}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <th>Loading...</th>
            </tr>
          ) : (
            /* data.map((elemento, key) => (
              <tr
                //onClick={() => handleclik(Object.values(elemento)[0])}
                key={key}
              >
                {Object.values(elemento).map(
                  (em, key) =>
                    key !== 0 &&
                    (typeof em !== "object" || em == null ? (
                      <td key={key}>{em ?? "no tiene"}</td>
                      ) : (
                      console.log({em}),
                      <td key={key}>{em.name}</td>
                    ))
                )}
                {props.compo && (
                  <td key={key}>
                    <props.compo id={Object.values(elemento)[0]} />
                  </td>
                )}
              </tr>
            )) */
            
          )}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Siguiente"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </>
  );
}
