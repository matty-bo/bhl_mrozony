import { Box, Typography } from "@mui/material";
import React from "react";
import { MessageItems } from "./MessageItems";

const messages = [
  {
    title: "Faktura za miesiac Marzec 2022",
    date: "03.04.2022",
    price: "100zł",
    paid: false,
  },
  {
    title: "Faktura za miesiac Luty 2022",
    date: "02.03.2022",
    price: "120zł",
    paid: true,
  },
  {
    title: "Faktura za miesiac Styczeń 2022",
    date: "05.02.2022",
    price: "150zł",
    paid: true,
  },
];

export function MessagesView() {
  const hasMessages = messages.length > 0;

  return (
    <Box>
      <Typography variant="h6" sx={{ p: "10px" }}>
        {hasMessages
          ? "Informacje o rozliczeniach"
          : "Brak wiadomosci do wyswietlenia"}
      </Typography>
      {hasMessages && <MessageItems messages={messages} />}
    </Box>
  );
}
