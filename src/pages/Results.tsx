import { useEffect, useState } from 'react'
import {
  Avatar,
  Box,
  Paper,
  Stack,
  SvgIcon,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { useSnackbarContext } from '../context/Snackbar'
import { StyledTableCell, StyledTableRow } from '../MuiComponents/Table'
import { getVote } from '../service/vote'
import './Results.css'

const Results = () => {
  const [votes, setVotes] = useState<any>([])
  const {
    ToastService: { showToast },
  } = useSnackbarContext()

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getVote()
        setVotes(data)
      } catch (err: any) {
        showToast(true, 'error', err, 'center')
      }
    }

    getData()
  }, [showToast])

  return (
    <>
      <Stack direction="column">
        <Stack direction="row" sx={{ height: '250px' }}>
          {votes
            .filter((row: any, i: any) => i <= 2)
            .map((row: any, i: any) => (
              <Stack
                direction="column"
                className="leader"
                key={i}
                sx={{ top: '25%', position: 'absolute' }}
              >
                <SvgIcon
                  viewBox="0 0 100 50"
                  sx={{
                    position: 'absolute',
                    top: '-15%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '3rem',
                  }}
                >
                  <polygon points="12.7 50 87.5 50 100 0 75 25 50 0 25.6 25 0 0 12.7 50" />
                </SvgIcon>
                <Box
                  component="img"
                  className="image"
                  src={row.image}
                  sx={{
                    borderRadius: '50%',
                    overflow: 'visible',
                    objectFit: 'cover',
                    border: '3px solid #b159ffcc',
                  }}
                />
                <Typography
                  variant="h4"
                  textAlign="center"
                  mt={2}
                  color="primary"
                >
                  {row.dishName.substring(0, 10)}
                </Typography>
                <Typography
                  variant="subtitle1"
                  textAlign="center"
                  color="secondary"
                >
                  Points: {row.points}
                </Typography>
              </Stack>
            ))}
        </Stack>
        <TableContainer
          component={Paper}
          sx={{ width: '90%', maxWidth: '700px', m: 'auto', mt: 5 }}
        >
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Points</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {votes.map(
                (row: any, i: any) =>
                  i >= 3 && (
                    <StyledTableRow key={i}>
                      <StyledTableCell component="th" scope="row">
                        <Avatar src={row.image} />
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        <Typography variant="h5">{row.dishName}</Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                          Rank: {i + 1}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Typography variant="body2">{row.points}</Typography>
                      </StyledTableCell>
                    </StyledTableRow>
                  )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  )
}

export default Results
