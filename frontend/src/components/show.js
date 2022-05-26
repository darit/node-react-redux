import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {fetchShow} from "../redux/showDucks";
import {useEffect} from "react";
import {Link} from "react-router-dom";

export default function Show() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.show);
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchShow(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Show</h1>
      <pre>{JSON.stringify(show, null, 2)}</pre>
      <Link to="/">Home</Link>
    </div>
  );
};
