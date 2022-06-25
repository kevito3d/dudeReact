import { Link } from "react-router-dom";
import Table from "../components/Table";
/* import style modal */
import "../css/modal.css";

export default function TablePage() {


  return (
<>
     <Link to="/createArea">
        <button className="btn btn-primary">
            <i className="fas fa-arrow-left"></i>
            crear nueva area
        </button>
    </Link> 
    
    
    
      <Table urlData={"plant"} accion="plant"></Table>
    </>
  );
}
