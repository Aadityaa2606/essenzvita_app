/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { FC } from "react"
import { TouchableOpacity, View, FlatList } from "react-native"
import { observer } from "mobx-react-lite"
import { Text, Screen, AutoImage } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"
import Ionicons from "@expo/vector-icons/Ionicons"
import { colors } from "app/theme"

interface PatientDashboardProps extends AppStackScreenProps<"PatientDashboard"> {}

export const PatientDashboard: FC<PatientDashboardProps> = observer(function PatientDashboard() {
  interface DataItem {
    id: string
    type: string
    icon: string
    stat: string
    statType: string
    lastUpdated: string
  }

  const data: DataItem[] = [
    {
      id: "1",
      type: "Heart Rate",
      icon: "heart-pulse",
      stat: "72",
      statType: "bpm",
      lastUpdated: "2 hours ago",
    },
    {
      id: "2",
      type: "Blood Pressure",
      icon: "heart-circle-check",
      stat: "120/80",
      statType: "mmHg",
      lastUpdated: "1 hour ago",
    },
    {
      id: "3",
      type: "Weight",
      icon: "weight-scale",
      stat: "65",
      statType: "kg",
      lastUpdated: "30 minutes ago",
    },
  ]

  const HeaderComponent = () => {
    return (
      <>
        <View className="flex-row justify-between px-[5%] mt-2 pb-2">
          <Text preset="subheading" className="text-primary" text="Wekitsak" />
          <View className="flex-row items-center gap-4">
            <FontAwesome name="bell" size={22} color={colors.palette.neutral700} />
            <Ionicons name="settings" size={22} color={colors.palette.neutral700} />
            <AutoImage
              style={{ width: 40, height: 40, borderRadius: 20 }}
              source={{ uri: "https://picsum.photos/200" }}
            />
          </View>
        </View>
        <View className="w-full h-[1px] bg-slate-100" />
      </>
    )
  }

  const QuickActionsButton = ({
    iconName,
    isLast = false,
    text,
  }: {
    iconName: string
    isLast?: boolean
    text: string
  }) => (
    <TouchableOpacity onPress={() => console.log("pressed")}>
      <View
        className="flex-row p-4 bg-slate-100 rounded-md"
        style={{ marginBottom: isLast ? 0 : 10 }}
      >
        <Ionicons name={iconName} size={22} color={"black"} />
        <Text style={{ marginLeft: 7 }}>{text}</Text>
      </View>
    </TouchableOpacity>
  )

  const Card = ({ item }: { item: DataItem }) => {
    return (
      <View
        className="p-4 rounded-xl w-[250px] mr-4 border-slate-200 border-2"
        style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25 }}
      >
        <View className="flex-row justify-between mb-4">
          <Text className="text-slate-600" preset="bold">
            {item.type}
          </Text>
          <FontAwesome6 name={item.icon} size={22} color={colors.palette.primary} />
        </View>
        <View className="flex-row items-center">
          <Text className="text-primary text-[20px]" preset="bold">
            {item.stat}
          </Text>
          <Text className="text-black text-[16px] ml-2" preset="bold">
            {item.statType}
          </Text>
        </View>
        <Text className="text-slate-600 text-[14px]">{`Last updated ${item.lastUpdated}`}</Text>
      </View>
    )
  }

  return (
    <Screen
      preset="auto"
      safeAreaEdges={["top", "bottom"]}
      backgroundColor={colors.palette.neutral100}
    >
      <HeaderComponent />
      <Text preset="heading" className="px-[5%] mt-2 mb-6 text-slate-600">
        Welcome back, Priya
      </Text>

      <View className="px-[5%] flex items-center mb-3">
        <View className="border-2 border-slate-100 rounded-xl flex-wrap  p-4  w-full bg-white">
          <Text className="text-slate-600" preset="subheading">
            Quick Actions
          </Text>
          <View className="h-[10px]" />
          <QuickActionsButton iconName="calendar" text={"Book Appointment"} />
          <QuickActionsButton iconName="calendar" text={"Video Consult"} />
          <QuickActionsButton iconName="calendar" text={"Lab Tests"} />
          <QuickActionsButton iconName="calendar" text={"My Medicines"} isLast={true} />
        </View>
      </View>

      <View className="px-[5%] flex items-center">
        <View className="border-2 border-slate-100 rounded-xl flex-wrap  p-4  w-full bg-white">
          <Text className="text-slate-600" preset="subheading">
            Upcoming Appointments
          </Text>
          <View className="h-[30px]" />
          <View className="flex-row items-center mb-5">
            <AutoImage
              style={{ width: 70, height: 70, borderRadius: 35, marginRight: 20 }}
              source={{ uri: "https://picsum.photos/200" }}
            />
            <View>
              <Text className="black text-[20px]" text="Dr. Patel" />
              <Text className="text-slate-600" text="Cardiologist" />
              <Text className="text-primary text-[12px]" text="Today, 10:00 AM" />
            </View>
          </View>
          <TouchableOpacity onPress={() => console.log("pressed")} style={{ width: "100%" }}>
            <View className="bg-primary p-3 rounded-xl flex items-center w-[100%]">
              <Text text="Join Video Call" style={{ color: "white" }} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-[5%] mt-5 mb-3">
        <Text className="text-slate-600" preset="subheading" text="Health Insights" />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }: { item: DataItem }) => <Card item={item} />}
        keyExtractor={(item: { id: number }) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
      <View className="w-full h-[20px]" />

      <View className="px-[5%] flex items-center">
        <View className="border-2 border-slate-100 rounded-xl flex-wrap  p-4  w-full bg-white">
          <Text className="text-slate-600" preset="subheading">
            Recent Activities
          </Text>

          <View className="flex-row items-center py-4">
            <View className="h-9 w-7 rounded-2xl bg-primary mr-5" />
            <View>
              <Text preset="bold" text="Blood Test Results Uploaded" className="text-slate-600" />
              <Text className="text-slate-600 text-[14px]">3 days ago</Text>
            </View>
          </View>

          <View className="h-[1px] bg-slate-300 w-full" />

          <View className="flex-row items-center py-4">
            <View className="h-9 w-7 rounded-2xl bg-primary mr-5" />
            <View>
              <Text preset="bold" text="Prescription Renewed" className="text-slate-600" />
              <Text className="text-slate-600 text-[14px]">1 week ago</Text>
            </View>
          </View>

          <View className="h-[1px] bg-slate-300 w-full" />

          <View className="flex-row items-center py-4">
            <View className="h-9 w-7 rounded-2xl bg-primary mr-5" />
            <View>
              <Text
                preset="bold"
                text="Teleconsultation with Dr. Singh"
                className="text-slate-600"
              />
              <Text className="text-slate-600 text-[14px]">2 weeks ago</Text>
            </View>
          </View>
        </View>
        <View className="h-[50px] w-full" />
      </View>
    </Screen>
  )
})
