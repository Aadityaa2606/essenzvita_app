import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Text, Screen } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import { colors } from "app/theme"

interface DocDashboardProps extends AppStackScreenProps<"DocDashboard"> {}

export const DocDashboard: FC<DocDashboardProps> = observer(function DocDashboard() {
  return (
    <Screen
      preset="auto"
      safeAreaEdges={["top", "bottom"]}
      backgroundColor={colors.palette.neutral100}
    >
      <View></View>
    </Screen>
  )
})
