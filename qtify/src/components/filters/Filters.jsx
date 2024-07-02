import React from "react";
import { Tabs, Tab } from "@mui/material";

export const Filters = ({ filters, selectedFilterIndex, setSelectedFilterIndex }) => {
  
  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <div>
      <Tabs
        value={selectedFilterIndex}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{ style: { backgroundColor: "#34c94b" } }}
      >
        {filters.map((ele, idx) => (
          <Tab style={{color: "#34c94b"}} className={StyleSheet.tab} label={ele.label} {...a11yProps(idx)} key={idx} />
        ))}
      </Tabs>
    </div>
  );
};
