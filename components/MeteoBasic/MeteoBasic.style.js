import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  interpretation: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
  },
  interpretation_txt: {
    fontSize: 20,
  },
  image: {
    height: 90,
    width: 90,
  },
  temperature_box: {
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  temperature_box_wrap: {
    position: "relative"
  },
  temperature: {
    fontSize: 150,
  },
  details: {
    position: "absolute",
    bottom: 40,
    right: -20,
    paddingVertical: 5,
    paddingHorizontal: 8,
    fontSize: 14,
    color: "#fff",
    backgroundColor: "transparent",
    borderRadius: 14,
    borderColor: "white",
    borderWidth: 2,
  }
});

export { s };
