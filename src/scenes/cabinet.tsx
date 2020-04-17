import React from "react";
import {
  Table, TableHead, TableRow, TableCell, TableBody, Link,
} from "@material-ui/core";
import { cabinetOfficers } from "../data/cabinetOfficers";

export const CabinetScene: React.FC = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Position</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {cabinetOfficers.map(({ name, title, email }) => (
        <TableRow key={name + title}>
          <TableCell>{title}</TableCell>
          <TableCell>{name}</TableCell>
          <TableCell>
            <Link href={`mailto:${email}`}>
              {email}
            </Link>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
