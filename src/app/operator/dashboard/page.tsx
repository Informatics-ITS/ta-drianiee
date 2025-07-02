"use client"; 

import React, { useState } from 'react';
import {
  Card
} from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import UserTable from '@/components/UserTable'; // Import komponen tabel

const page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Sample data for the table
  const data = [
    { name: 'John Doe', email: 'john.doe@example.com', role: 'Participant' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Operator' },
    { name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Admin' },
    { name: 'Bob Brown', email: 'bob.brown@example.com', role: 'Participant' },
    { name: 'Charlie Davis', email: 'charlie.davis@example.com', role: 'Operator' },
    { name: 'David Miller', email: 'david.miller@example.com', role: 'Admin' },
    { name: 'Emma Wilson', email: 'emma.wilson@example.com', role: 'Participant' },
    { name: 'Frank Moore', email: 'frank.moore@example.com', role: 'Operator' },
    { name: 'Grace Taylor', email: 'grace.taylor@example.com', role: 'Admin' },
    { name: 'Henry Anderson', email: 'henry.anderson@example.com', role: 'Participant' },
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <div className="flex flex-col gap-5">
      <p className="text-3xl font-medium">Selamat Datang di TPKA ITS</p>
      <div className="flex flex-row gap-4">
        <Card className="flex flex-col p-4 gap-2 w-full h-fit">
          <p className="text-xl font-semibold">Total Peserta</p>
          <div className="flex gap-3 items-center">
            <img src="/jumlahPeserta.svg" alt="Image" className="w-10" />
            <div className="flex flex-row items-end gap-3">
              <p className="text-[32px] font-semibold">822</p>
              <p className="text-base font-medium text-secondary leading-8.5">Peserta Terdaftar</p>
            </div>
          </div>
        </Card>
        <Card className="flex flex-col p-4 gap-2 w-full h-fit">
          <p className="text-xl font-semibold">Total Mitra</p>
          <div className="flex gap-3 items-center">
            <img src="/jumlahMitra.svg" alt="Image" className="w-10" />
            <div className="flex flex-row items-end gap-3">
              <p className="text-[32px] font-semibold">15</p>
              <p className="text-base font-medium text-secondary leading-8.5">Mitra Terdaftar</p>
            </div>
          </div>
        </Card>
        <Card className="flex flex-row p-5 gap-4 w-full items-center">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/path/to/user-image.jpg" alt="User Avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-xl font-semibold">Masruhin</p>
            <p className="text-base font-medium">operatormasruhin@tpka.com</p>
            <p className="text-base font-normal italic text-secondary">Operator</p>
          </div>
        </Card>
      </div>
{/* 
      <Card className="flex flex-col p-4 gap-2 w-full h-fit">
        <div>
          <p className="text-xl font-semibold">Jadwal Terbaru</p>
          <p >Menampilkan 5 dari 5 Jadwal</p>
        </div>
        <UserTable
          data={data}
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          handlePageChange={handlePageChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
        />
      </Card> */}
    </div>
  );
};

export default page;
