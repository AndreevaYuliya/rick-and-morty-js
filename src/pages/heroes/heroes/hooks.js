import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { TablePagination } from "@mui/material";
import {
  gridPageSelector,
  gridPageSizeSelector,
  gridRowCountSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";

import { getCharacters } from "../../../api/characters";
import { loadValue, saveValue } from "../../../utils/storage";

export const columns = [
  { field: "id", headerName: "ID", flex: 2 },
  { field: "name", headerName: "Name", flex: 4 },
  { field: "status", headerName: "Status", flex: 4 },
];

export const useHeroes = () => {
  const navigate = useNavigate();

  const initialPage = loadValue("heroesPage", 0);

  const [page, setPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(20);

  const [rows, setRows] = useState([]);
  const [rowCount, setRowCount] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const characters = await getCharacters(page + 1);

        const data = characters.results.map((char) => ({
          id: char.id,
          name: char.name,
          status: char.status,
        }));

        setRows(data.slice(0, pageSize));
        setRowCount(characters.info.count);
      } catch (err) {
        setError(err.message || "Failed to load characters. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [page, pageSize]);

  useEffect(() => {
    saveValue("heroesPage", page);
  }, [page]);

  const resetPage = () => setPage(0);
  const dismissError = () => setError(null);

  const handlePagination = ({ page: newPage, pageSize: newPageSize }) => {
    if (newPageSize !== pageSize) {
      setPageSize(newPageSize);
      setPage(0);

      saveValue("heroesPage", 0);
    } else {
      setPage(newPage);

      saveValue("heroesPage", newPage);
    }
  };

  const handleRowClick = (params) => {
    navigate(`/heroes/${params.id}`);
  };

  const CustomPagination = () => {
    const apiRef = useGridApiContext();
    const currPage = useGridSelector(apiRef, gridPageSelector);
    const rowCountState = useGridSelector(apiRef, gridRowCountSelector);
    const pageSizeState = useGridSelector(apiRef, gridPageSizeSelector);

    const pageCount = Math.max(1, Math.ceil(rowCountState / pageSizeState));

    const handleRowsPerPageChange = (event) => {
      const newSize = Number(event.target.value);

      apiRef.current.setPageSize(newSize);
      apiRef.current.setPage(0);

      setPageSize(newSize);
      setPage(0);

      saveValue("heroesPage", 0);
    };

    return (
      <TablePagination
        component="div"
        count={rowCountState}
        page={currPage}
        onPageChange={(_, value) => apiRef.current.setPage(value)}
        rowsPerPage={pageSizeState}
        rowsPerPageOptions={[5, 10, 20]}
        onRowsPerPageChange={handleRowsPerPageChange}
        labelDisplayedRows={() => `Page ${currPage + 1} of ${pageCount}`}
      />
    );
  };

  return {
    columns,
    rows,
    rowCount,
    page,
    pageSize,
    resetPage,
    isLoading,
    error,
    dismissError,
    handlePagination,
    handleRowClick,
    CustomPagination,
  };
};

