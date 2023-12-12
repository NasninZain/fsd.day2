import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tables = () => {
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                <TableCell>Shince</TableCell>
                <TableCell>54</TableCell>
                </TableRow>
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Tables
