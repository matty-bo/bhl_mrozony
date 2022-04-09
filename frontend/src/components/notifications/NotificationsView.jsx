import { Box, Typography } from "@mui/material";
import React from "react";
import { Notification } from "./NotificationItem";

export const notifications = [
  {
    title: "Przerwy w dostawie wody",
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem mauris, viverra at diam a, suscipit commodo urna. Etiam rhoncus ornare rutrum. Etiam in nisl posuere, condimentum orci id, semper nisi. Phasellus posuere sem id est ornare, laoreet finibus diam dignissim. Mauris vulputate blandit est, nec auctor metus venenatis vitae. Morbi maximus bibendum diam, ac lacinia est viverra vel. Pellentesque quis vulputate libero. Sed ultricies, urna id tincidunt mattis, dolor sem auctor leo, eu faucibus urna ex at erat. Mauris sed urna sem.",
  },
  {
    title: "Alert niskiego poziomu wody",
    data: "Ut elit neque, sodales nec risus quis, convallis gravida tellus. Curabitur sit amet diam non odio finibus molestie. Pellentesque in mi eget sapien efficitur vehicula. Quisque a pulvinar elit, at ornare metus. Donec tincidunt congue tellus aliquam pharetra. Pellentesque molestie lacus a ipsum posuere, at bibendum nisl viverra. In sed suscipit lacus. Nunc vel neque aliquam, condimentum velit a, congue enim. Vivamus est elit, accumsan eget suscipit id, egestas nec massa.",
  },
];

export function NotificationsView() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <Notification notification={notification} />
        ))
      ) : (
        <Typography variant="h6" sx={{ p: "10px" }}>
          Brak powiadomien do wyswietlenia
        </Typography>
      )}
    </Box>
  );
}
