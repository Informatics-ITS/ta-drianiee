// src/components/UserTable.tsx

import React from 'react';
import { Table, TableBody, TableHeader, TableRow, TableCell } from '@/components/ui/table';
import { Pagination } from '@/components/ui/pagination';

interface User {
  name: string;
  email: string;
  role: string;
}

interface UserTableProps {
  data: User[];
  currentPage: number;
  rowsPerPage: number;
  handlePageChange: (page: number) => void;
  handleRowsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const UserTable: React.FC<UserTableProps> = ({
  data,
  currentPage,
  rowsPerPage,
  handlePageChange,
  handleRowsPerPageChange,
}) => {
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentRows = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Nama</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentRows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Pagination */}
      <Pagination
        total={data.length}
        page={currentPage}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </div>
  );
};

export default UserTable;
