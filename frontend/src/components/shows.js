import { useDispatch, useSelector } from 'react-redux';
import { fetchShows } from '../redux/showsDucks';
import {useEffect} from "react";
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import DataTable from 'react-data-table-component';
import moment from "moment";

export default function Shows() {
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.shows.shows);

  function formatSchedule(schedule) {
    return moment(schedule).format('DD-MM-YYYY hh:mm A');
  }

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
    },
    {
      name: 'Duration',
      selector: row => row.duration,
      format: row => formatDuration(row.duration),
    },
    {
      name: 'Schedule',
      selector: row => row.schedule,
      format: row => formatSchedule(row.schedule),
    },
    {
      name: 'Poster',
      selector: row => row.poster,
      format: row => <img src={row.poster} alt="poster" width="200" />,
    },
    {
      name: 'Rating',
      selector: row => row.rating,
      format: row => <ReactStars count={5} value={row.rating} edit={false} size={24} isHalf={true} color2={'#ffd700'} />,
    },
    {
      name: 'Language',
      selector: row => row.language,
    },
  ];

  useEffect(() => {
    dispatch(fetchShows());
  }, [dispatch]);

  const formatDuration = (duration) => {
    if (duration < 3600) {
      return moment.utc(duration*1000).format('m') + ' minutes';
    } else {
      return moment.utc(duration*1000).format('h') + ' hours ' + moment.utc(duration*1000).format('m') + ' minutes';
    }
  };

  return (
      <div>
        <h1>Shows</h1>
        <DataTable
            columns={columns}
            data={shows}
            pagination
        />
      </div>
  );
}
