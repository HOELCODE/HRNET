import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    flexRender,
} from '@tanstack/react-table';

import { useState } from 'react';

import { useSelector } from 'react-redux';

const Tableau = ({ data }) => {
    // Récupération des données de l'état Redux
    const employeeList = useSelector((state) => state.employee.newEmployee);

    
    // Gestion des colonnes et des filtres
    const columns = [
        {
            accessorKey: 'FirstName',
            header: ({ column }) => (
                <div onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    First Name {column.getIsSorted() === 'asc' ? '▲' : column.getIsSorted() === 'desc' ? '▼' : ''}
                </div>
            ),
            cell: info => info.getValue(),
        },
        {
            accessorKey: 'LastName',
            header: ({ column }) => (
                <div onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Last Name {column.getIsSorted() === 'asc' ? '▲' : column.getIsSorted() === 'desc' ? '▼' : ''}
                </div>
            ),
            cell: info => info.getValue(),
        },
        {
            accessorKey: 'BirthDate',
            header: ({ column }) => (
                <div onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Birth Date {column.getIsSorted() === 'asc' ? '▲' : column.getIsSorted() === 'desc' ? '▼' : ''}
                </div>
            ),
            cell: info => info.getValue(),
        },
        {
            accessorKey: 'StartDate',
            header: ({ column }) => (
                <div onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Start Date {column.getIsSorted() === 'asc' ? '▲' : column.getIsSorted() === 'desc' ? '▼' : ''}
                </div>
            ),
            cell: info => info.getValue(),
        },
        {
            accessorKey: 'Street',
            header: ({ column }) => (
                <div onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Street {column.getIsSorted() === 'asc' ? '▲' : column.getIsSorted() === 'desc' ? '▼' : ''}
                </div>
            ),
            cell: info => info.getValue(),
        },
        {
            accessorKey: 'City',
            header: ({ column }) => (
                <div onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    City {column.getIsSorted() === 'asc' ? '▲' : column.getIsSorted() === 'desc' ? '▼' : ''}
                </div>
            ),
            cell: info => info.getValue(),
        },
        {
            accessorKey: 'State',
            header: ({ column }) => (
                <div onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    State {column.getIsSorted() === 'asc' ? '▲' : column.getIsSorted() === 'desc' ? '▼' : ''}
                </div>
            ),
            cell: info => info.getValue(),
        },
        {
            accessorKey: 'ZipCode',
            header: ({ column }) => (
                <div onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Zip Code {column.getIsSorted() === 'asc' ? '▲' : column.getIsSorted() === 'desc' ? '▼' : ''}
                </div>
            ),
            cell: info => info.getValue(),
        },
        {
            accessorKey: 'department',
            header: ({ column }) => (
                <div onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Department {column.getIsSorted() === 'asc' ? '▲' : column.getIsSorted() === 'desc' ? '▼' : ''}
                </div>
            ),
            cell: info => info.getValue(),
        },
    ];

    // Gestion du search
    const [globalFilter, setGlobalFilter] = useState('');

    // Récupération du nombre d'emplyés
    const entriesNumber = data.length;

    // Association des données, pagination, tri et filtre
    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter,
        },
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div className='tableau'>

            {/* input entrée */}
            <div className='input-entries'>
                <div className='entrie'>
                    <span>Show</span>
                    <select
                        value={table.getState().pagination.pageSize}
                        onChange={e => table.setPageSize(Number(e.target.value))}
                    >
                        {[5, 10, 25, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                    <span>entries</span>
                </div>
                <div className='input-container'>
                    <label className='search-label'>Search : </label>
                    <input
                        type="text"
                        className='search'
                        value={globalFilter ?? ''}
                        onChange={e => setGlobalFilter(e.target.value)}
                    />
                </div>
            </div>

            {/* Tableau */}
            <table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {employeeList === false ? (
                        <tr>
                            <td colSpan={columns.length} >
                                No data available in table.
                            </td>
                        </tr>
                    ) : (
                        table.getRowModel().rows.map(row => (
                            <tr key={row.id} >
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            {/* Pagination */}
            <div className='pagination-container'>
                {employeeList === false ? (

                    <span>
                        Page{' '}
                        <strong>
                            0 of 0 of 0 entries
                        </strong>{' '}
                    </span>
                ) : (
                    <span>
                        Page{' '}
                        <strong>
                            {table.getState().pagination.pageIndex + 1} to {table.getPageCount()} of {entriesNumber} entries
                        </strong>{' '}
                    </span>
                )}

                <div className='button-container'>
                    <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                        Previous
                    </button>
                    <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                        Next
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Tableau