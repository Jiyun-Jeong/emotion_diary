import {Link} from 'react-router-dom';

const RouteTest = () => {
  return (<>
    <Link to={"/"}>HOME</Link>
    <br />
    <Link to={"/diary"}>DIRAY</Link>
    <br />
    <Link to={"/new"}>NEW</Link>
    <br />
    <Link to={"/edit"}>EDIT</Link>
  </>
  );
};

export default RouteTest;