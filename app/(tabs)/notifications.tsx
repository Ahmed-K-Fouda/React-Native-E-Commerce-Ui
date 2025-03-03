import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AllNofitications from "@/components/shared/notifications/AllNofitications";
import NoNotifications from "@/components/shared/notifications/NoNotifications";

const Notifications = () => {
  const showNotifications = true;
  return showNotifications ? <AllNofitications /> : <NoNotifications />;
};

export default Notifications;
