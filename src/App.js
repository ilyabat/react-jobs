import axios from "axios";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Jobs from "./components/Jobs";
import OpenJob from "./components/OpenJob";
import Pagination from "./components/Pagination";
import { getPageCount } from "./util/pages";



function App() {

  const accessToken = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` }
  };

  const bodyParameters = {
    key: "value"
  };


  const [jobs, setJobs] = React.useState([])
  const [totalPages, setTotalPages] = React.useState(0)
  const [limit, setLimit] = React.useState(10)
  const [page, setPage] = React.useState(1)


  React.useEffect(() => {
    axios.post(
      'https://api.json-generator.com/templates/ZM1r0eic3XEy/data',
      bodyParameters,
      config
    ).then(res => {
      setJobs(res.data)
      setTotalPages(getPageCount(20, limit))

    }).catch(console.log);
  }, [])

  const changePage = (page) => {
    setPage(page)
  }

 

  console.log(jobs);
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>

          <Route path="/">
            <Route index element={
              <div div className="main">
                <div className="main__container _container">
                
                    <Jobs jobs={jobs} />

                    <Pagination page={page} changePage={changePage} totalPages={totalPages} />
  
                </div>
              </div>
            } />
            <Route path=":id" element={<OpenJob job={jobs} />} />
          </Route>




        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
