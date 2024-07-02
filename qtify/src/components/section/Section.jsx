import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import Card from "../card/Card";
import styles from "../section/Section.module.css";
import { Filters } from "../filters/Filters";
import Carousel from "../carousel/Carousel";

const Section = ({ title, data, filterSource, type }) => {
  const [showAll, setShowAll] = useState(false);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  const handleToggle = () => {
    setShowAll((prevState) => !prevState);
  };

  useEffect(() => {
    if (filterSource) {
      filterSource().then((response) => {
        const { data } = response;
        setFilters([...filters, ...data]);
      });
    }
  }, []);

  const showFilters = filters.length > 1;

  const cardsToRender = Array.isArray(data)
    ? data.filter((card) =>
        showFilters && selectedFilterIndex !== 0
          ? card.genre.key === filters[selectedFilterIndex].key
          : true
      )
    : [];
  
  console.log("cardsToRender", cardsToRender);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {showAll ? "Collapse" : "Show All"}
        </h4>
      </div>
      {showFilters && (
        <div className={styles.filterWrapper}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {showAll ? (
            cardsToRender.map((ele, index) => {
              return <Card key={index} data={ele} type={type} />;
            })
          ) : (
            <Carousel
              data={cardsToRender}
              renderComponent={(data) => {
                return <Card data={data} type={type} />;
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;



// import React, { useState, useEffect } from "react";
// import { CircularProgress } from "@mui/material";
// import Card from "../card/Card";
// import styles from "../section/Section.module.css";
// import { Filters } from "../filters/Filters";
// import Carousel from "../carousel/Carousel";

// const Section = ({ title, data, filterSource, type }) => {
//   const [showAll, setShowAll] = useState(false);
//   const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
//   const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

//   const handleToggle = () => {
//     setShowAll((prevState) => !prevState);
//   };

//   useEffect(() => {
//     if (filterSource) {
//       filterSource().then((response) => {
//         const { data } = response;
//         setFilters( [...filters, ...data]);
//       });
//     }
//   }, []);
  
//   // console.log("data to check array",data)
//   // const showfilters= filters.length>1
//   // const cardsTorender= data.fllter((card)=>
//   //   showfilters && selectedFilterIndex !=0 ? cardsTorender.genre.key === filters[selectedFilterIndex].key :card
//   // )

//   const showFilters = filters.length > 1;

//   const cardsToRender = Array.isArray(data)

//     ? data.filter((card) =>
//         showFilters && selectedFilterIndex !== 0
//           ? card.genre.key === filters[selectedFilterIndex].key
//           : true
//       )
//     : [];
//   return (
//     <div className={styles.section}>
//       <div className={styles.header}>
//         <h3>{title}</h3>
//         <h4 className={styles.toggleText} onClick={handleToggle}>
//           {showAll ? "Collapse" : "Show All"}
//         </h4>
//       </div>
//       {showFilters && (
//         <div className={styles.filterWrapper}>
//           <Filters
//             filters={filters}
//             selectedFilterIndex={selectedFilterIndex}
//             setSelectedFilterIndex={setSelectedFilterIndex}
//           />
//         </div>
//       )}
//       {data.length === 0 ? (
//         <CircularProgress />
//       ) : (
//         <div className={styles.cardWrapper}>
//           {showAll ? (
//             cardsToRender.map((ele, index) => {
//               return <Card key={index} data={ele} type={type} />;
//             })
//           ) : (
//             <Carousel
//               data={cardsToRender}
//               renderComponent={(data) => {
//                 return <Card data={data} type={type} />;
//               }}
//             />
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Section;
