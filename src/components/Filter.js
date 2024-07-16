import React from 'react'

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title) {
        setCategory(title);
    }

  return (
    <div className="bg-[#6C757D] flex justify-center gap-10 text-[#f8f9fa] border-[2px] border-solid border-[#343A40]  text-lg my-2 mb-5 ">
      {
        filterData.map( (data) => (
            <button
            className={`- [ ] border-2 p-1 px-2 my-1 rounded-lg bg-gray-500  hover:bg-gray-700 transition-all duration-300
            ${category === data.title ? 
            "bg-opacity-60 border-white" :
            "bg-opacity-40 border-transparent"}
            `}
             key={data.id}
             onClick ={() => filterHandler(data.title)}
             >{data.title}</button>
        ))
      }
    </div>
  )
}

export default Filter
