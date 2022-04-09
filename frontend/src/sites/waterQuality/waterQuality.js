import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

const waterQualityData = [{
  date: "09.04.2022",
  iron: "100",
  manganese: "42",
  pH: "8",
  hardness: "200"
}, {
  date: "08.03.2022",
  iron: "200",
  manganese: "18",
  pH: "8",
  hardness: "501"
}, {
  date: "07.02.2022",
  iron: "180",
  manganese: "30",
  pH: "9.7",
  hardness: "130"
}];

export const WaterQuality = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: "bold" }}>Data</TableCell>
          <TableCell sx={{ fontWeight: "bold" }}>Żelazo (μg/l)</TableCell>
          <TableCell sx={{ fontWeight: "bold" }}>Mangan (μg/l)</TableCell>
          <TableCell sx={{ fontWeight: "bold" }}>pH</TableCell>
          <TableCell sx={{ fontWeight: "bold" }}>Twardość (mgCaCO3/l)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {waterQualityData.map((data, id) => (
          <TableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell>{data.date}</TableCell>
            <TableCell sx={{ color: data.iron > 200 ? "red" : "" }}>{data.iron}</TableCell>
            <TableCell sx={{ color: data.manganese > 50 ? "red" : "" }}>{data.manganese}</TableCell>
            <TableCell sx={{ color: data.pH < 6.5 || data.pH > 9.5 ? "red" : "" }}>{data.pH}</TableCell>
            <TableCell sx={{ color: data.hardness < 60 || data.hardness > 500 ? "red" : "" }}>{data.hardness}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
