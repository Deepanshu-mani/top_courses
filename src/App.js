import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response = await fetch(apiUrl);
        if (response.ok) {
          let data = await response.json();
          setCourses(data.data);
        } else {
          toast.error("Unable to fetch data from API");
        }
      } catch (error) {
        toast.error("Unable to fetch data from API");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#222222]">
      <div>
        <Navbar />
      </div>
      <div className="bg-[#222222]">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          {loading ? (
            <Spinner />
          ) : courses.length === 0 ? (
            <div className="text-4xl text-white flex items-center">
              No Courses Found
            </div>
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;