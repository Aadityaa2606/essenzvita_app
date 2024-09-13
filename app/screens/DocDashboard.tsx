import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "app/components"
import { AppStackScreenProps } from "app/navigators"

interface DocDashboardProps extends AppStackScreenProps<"DocDashboard"> {}

export const DocDashboard: FC<DocDashboardProps> = observer(function DocDashboard() {
  return (
    <View>
      <Text>Doc Dashboard</Text>
    </View>
  )
})
