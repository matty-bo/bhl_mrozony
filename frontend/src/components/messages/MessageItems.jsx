import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

export function MessageItems(params) {
  const { messages } = params;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: "bold" }}>Tytył</TableCell>
          <TableCell sx={{ fontWeight: "bold" }}>Data otrzymania</TableCell>
          <TableCell sx={{ fontWeight: "bold" }}>Kwota do zapłaty</TableCell>
          <TableCell sx={{ fontWeight: "bold" }}>Czy opłacono</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {messages.map((message) => (
          <TableRow
            key={message.title}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell>{message.title}</TableCell>
            <TableCell>{message.date}</TableCell>
            <TableCell>{message.price}</TableCell>
            <TableCell>
              {message.paid ? (
                <CheckIcon color="success" />
              ) : (
                <CloseIcon color="error" />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
