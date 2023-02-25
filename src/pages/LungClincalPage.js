import React from "react";
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid } from '@mui/material';

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: "1.1rem",
          border: "0",
        }}
      />
    </span>
  );
}

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

function LungClincalPage() {
  const [data, setData] = useState([]);
  var arr = [];
  const fetchData = () => {
    //https://dummyjson.com/products
    fetch(`http://34.160.148.70/getlungcancerdata`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        Object.keys(actualData).forEach(function (key) {
          arr.push(actualData[key]);
        });
        setData(arr);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  var coldata = [
    {
      Header: "Case ID",
      accessor: "Case ID", // accessor is the "key" in the data
      Cell: (props) => {
        var button = <Link to="/PatientInfoPage"> Visualize </Link>;
        console.log(props.test); // the value is 'this is a test'
        return (
          <Link to="/PatientInfoPage" state={[props.value]}>
            {props.value}
          </Link>
          //<Link to="/demotimeline">{props.value}</Link>
        );
      },
    },
    {
      Header: "Patient affiliation",
      accessor: "Patient affiliation",
    },
    {
      Header: "Age at Histological Diagnosis",
      accessor: "Age at Histological Diagnosis",
    },
    {
      Header: "Weight (lbs)",
      accessor: "Weight (lbs)",
    },
    {
      Header: "Gender",
      accessor: "Gender",
    },
    {
      Header: "%GG",
      accessor: "%GG",
    },
    {
      Header: "Smoking status",
      accessor: "Smoking status",
    },
    {
      Header: "Ethnicity",
      accessor: "Ethnicity",
    },
    {
      Header: "Pack Years",
      accessor: "Pack Years",
    },
    {
      Header: "Quit Smoking Year",
      accessor: "Quit Smoking Year",
    },
    {
      Header: "Tumor Location (choice=RML)",
      accessor: "Tumor Location (choice=RML)",
    },
    {
      Header: "Tumor Location (choice=RLL)",
      accessor: "Tumor Location (choice=RLL)",
    },
    {
      Header: "Chemotherapy",
      accessor: "Chemotherapy",
    },
    {
      Header: "Radiation",
      accessor: "Radiation",
    },
    {
      Header: "Date of Last Known Alive",
      accessor: "Date of Last Known Alive",
    },
    {
      Header: "Survival Status",
      accessor: "Survival Status",
    },
    {
      Header: "Date of Death",
      accessor: "Date of Death",
    },
    {
      Header: "Days between CT and surgery",
      accessor: "Days between CT and surgery",
    },
    {
      Header: "EGFR mutation status",
      accessor: "EGFR mutation status",
    },
  ];
  const columns = React.useMemo(() => coldata, []);
  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn, // Be sure to pass the defaultColumn option
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  return (
    <div className="pt-7">
      <div className="container shadow-1">
      <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Individual Patient Data</h1>
      </Grid>
      <Grid item xs={12}>
        <div className="table-responsive">
        <table {...getTableProps()} className="table table-bordered table-hover">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    borderBottom: "solid 3px red",
                    color: "black",
                  }}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                  </span>
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
          <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: "left",
              }}
            >
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
      
      </Grid>
    </Grid>
      </div>
    </div>
  );
}

export default LungClincalPage;
