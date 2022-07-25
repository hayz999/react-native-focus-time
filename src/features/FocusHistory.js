import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { spacing, fontSizes } from '../utils/sizes'
import { colors } from '../utils/colors'

export const FocusHistory = ({ history }) => {
  if(!history || !history.length) return <Text style={[styles.title, { padding: spacing.lg }]}>We haven't focused on anything yet.</Text>

  const renderItem = ({ item }) => (
    <Text style={styles.item}>- { item }</Text>
  )

  return (
    <View style={styles.focusList}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList 
        data={history}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingBottom: spacing.md,
    fontWeight: 'bold'
  },
  focusList: {
    padding: spacing.lg,
    flex: 1
  },
  item:{
    color: colors.white,
    fontSize: fontSizes.md
  }
})