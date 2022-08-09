import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { map } from "lodash";

export default function Stats(props) {
  const { stats } = props;

  const barColor = (number) => {
    const color = number > 49 ? "#00ac17" : "#ff3e3e";
    return {
      backgroundColor: color,
      width: `${number}%`,

    }
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Stats</Text>
      {map(stats, (item, index) => (
        <View key={index} style={styles.blocks}>
          <View style={styles.blocksNames}>
            <Text style={styles.styleName}>{item.stat.name}</Text>
          </View>
          <View style={styles.barInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.backgroundBar}>
              <View style={[styles.fillBar, barColor(item.base_stat)]}></View>
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}


const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  blocks: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blocksNames: {
    width: "31%",
  },
  styleName: {
    fontSize: 12,
    color: "#6b6b6b",
  },
  barInfo: {
    width: "69%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
  },
  backgroundBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  fillBar: {
    height: 5,
    borderRadius: 20,
  }
})