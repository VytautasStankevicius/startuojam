import { Link } from "react-router-dom";
import * as service from "../../services/TimesCrudServices";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Work = (props) => {
  const navigate = useNavigate();
  const { id } = useParams;
  const deleteHandler = () => {
    service.deleteWork(props.id);
    navigate("/");
  };

  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.company}</td>
      <td>{props.service}</td>
      <td>{props.description}</td>
      <td>{props.duration}</td>
      <td>
        <Link className="btn btn-success" to={`/update-work/${props.id}`}>
          Update
        </Link>
      </td>
      <td>
        <a className="btn btn-danger" href="#" onClick={deleteHandler}>
          Delete
        </a>
      </td>
    </tr>
  );
};
export default Work;
