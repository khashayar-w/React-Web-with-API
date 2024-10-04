import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [experts, setExperts] = useState([]);
  
  const [selectedExpertId, setSelectedExpertId] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      
      const response = await axios.get("https://reqres.in/api/users");
      setExperts(response.data.data);
      
    };
    fetchData();
  }, []);
  //*functions

  const handleClick = (expertId) => {
    setSelectedExpertId(expertId)
  };

  return (
    <div className="H-container m-2 ">

      <div className="row  ">
        {experts.map((expert, index) => {
          return (
            <div id="card"
              key={index}
              className="  col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center shadow-sm border rounded-5     "
            >
              <div className="img">
                <img
                  style={{ borderRadius: "50%" }}
                  className="border border-danger border-5 "
                  src={expert.avatar}
                  alt=""
                />
              </div>
              <div className="intro">
                <h3>
                  Legal advisor:{expert.firs_name}
                  {expert.last_name}
                </h3>

                <Link className="btn btn-info m-2" to="/login">Counseling</Link>
                <button
                  onClick={() => handleClick(expert.id)}
                  className="btn btn-warning m-2"
                >
                  connect
                </button>
                {selectedExpertId === expert.id && (
                  <h4 className="alert alert-danger ">Email: {expert.email}</h4>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Home;