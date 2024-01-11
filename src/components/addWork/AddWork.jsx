import { useEffect, useState } from "react";
import * as service from "../../services/TimesCrudServices";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";


const AddWork = () => {
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate();
  const { id } = useParams();
  const [items, setItems] = useState({
    date: "",
    company: "",
    service: "",
    description: "",
    timeFrom: "",
    timeTo: "",
    uid:user.uid
  });

  useEffect(() => {
    id && service.showById((item) => setItems(item), id);
  }, [id]);

  const handleChange = (event) => {
    setItems({
      ...items,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandle = (event) => {
    event.preventDefault();
    if (id) {
      service.updateWork(id, items);
    } else {
      service.addWork ({
        ...items,
        uid:user.uid
      })
    }
    navigate("/");
  };
  console.log(items);
  return (
    <div className="card">
      <div className="card-header">
        <h2>Add photo</h2>
      </div>
      <div className="card-body">
        <form className="form" onSubmit={submitHandle}>
          <div className="mb-3">
            <label htmlFor="date">Choose a date</label>
            <input
              className="form-control"
              id="date"
              type="date"
              name="date"
              onChange={handleChange}
              value={items.date}
              required
            />
          </div>
          <div className="mb-3">
            <select
              name="company"
              id="company"
              className="form-control"
              onChange={handleChange}
              value={items.company}
              required
            >
              <option value="kb">Kilobaitas</option>
              <option value="it">IT sfera</option>
            </select>
          </div>
          <div className="mb-3">
            <select
              name="service"
              id="service"
              className="form-control"
              onChange={handleChange}
              value={items.service}
              required
            >
              <option value="dev">Development</option>
              <option value="ux">UX design</option>
            </select>
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              onChange={handleChange}
              name="description"
              id="description"
              placeholder="darbo aprasymas"
              value={items.description}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="from">Nuo</label>
            <input
              type="time"
              onChange={handleChange}
              id="from"
              name="timeFrom"
              value={items.timeFrom}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="to">Iki</label>
            <input
              type="time"
              onChange={handleChange}
              id="to"
              name="timeTo"
              value={items.timeTo}
              required
            />
          </div>
          <div className="mb-3">
            {id ? (
              <button type="submit">Edit</button>
            ) : (
              <button type="submit">Save</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddWork;
