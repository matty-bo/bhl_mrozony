import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Table, TableCell, TableRow } from "@mui/material";
import React from "react";

export function MessageItems(params) {
  const { messages } = params;

  return (
    <Table>
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
    </Table>
  );
}
