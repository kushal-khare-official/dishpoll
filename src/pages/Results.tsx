import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { StyledTableCell, StyledTableRow } from '../MuiComponents/Table'
import { getVote } from '../service/vote'

const Results = () => {
  const [votes, setVotes] = useState<any>([])

  useEffect(() => {
    const getData = async () => {
      setVotes(await getVote())
    }

    getData()
  }, [])

  return (
    <TableContainer
      component={Paper}
      sx={{ width: '90%', maxWidth: '700px', m: 'auto' }}
    >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Position</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Points</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {votes.map((row: any, i: any) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {i + 1}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.dishName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.points}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Results
