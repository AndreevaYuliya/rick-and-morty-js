import React from "react";

import { Outlet } from "react-router";

import PageHeader from "../../../layouts/PageHeader";
import UpButton from "../../../components/UpButton";

import { useHeroes } from "./hooks";

import { StyledBox, StyledAlert, StyledDataGrid } from "./styles";

const Heroes = () => {
  const {
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
  } = useHeroes();

  return (
    <StyledBox>
      <PageHeader title="Heroes Page" withBackground onClick={resetPage} />

      {error && (
        <StyledAlert severity="error" onClose={dismissError}>
          {error}
        </StyledAlert>
      )}

      <StyledDataGrid
        rows={rows}
        columns={columns}
        paginationMode="server"
        rowCount={rowCount}
        slots={{ pagination: CustomPagination }}
        paginationModel={{ page, pageSize }}
        onPaginationModelChange={handlePagination}
        loading={isLoading}
        onRowClick={handleRowClick}
      />

      <Outlet />
      <UpButton />
    </StyledBox>
  );
};

export default Heroes;

