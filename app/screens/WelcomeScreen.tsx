/* eslint-disable react-native/no-inline-styles */
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View } from "react-native"
import { Button, Screen } from "app/components"
import { AppStackScreenProps } from "../navigators"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(_props: {
  navigation: any
}) {
  const { navigation } = _props
  const goToPatientDashbaord = () => {
    navigation.navigate("PatientDashboard", { screen: "DemPatientDashboard", params: {} })
  }

  const goToDocDashbaord = () => {
    navigation.navigate("DocDashboard", { screen: "DocDashboard", params: {} })
  }

  return (
    <Screen
      preset="scroll"
      safeAreaEdges={["top", "bottom"]}
      contentContainerStyle={{ width: "100%", height: "100%" }}
    >
      <View className="w-full h-full flex justify-center items-center gap-y-5">
        <Button preset="reversed" text="Go to Patient Dashboard" onPress={goToPatientDashbaord} />
        <Button preset="reversed" text="Go to Doctor Dashboard" onPress={goToDocDashbaord} />
      </View>
    </Screen>
  )
})
