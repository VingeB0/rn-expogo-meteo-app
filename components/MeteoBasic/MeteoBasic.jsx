import { s } from "./MeteoBasic.style";
import { Txt } from "../Txt/Txt";
import { Image, TouchableOpacity, View } from "react-native";
import { Clock } from "../Clock/Clock";
import { useNavigation } from "@react-navigation/native";

export function MeteoBasic({
  temperature,
  interpretation,
  city,
  dailyWeather,
}) {
  const nav = useNavigation();
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <View>
        <Txt>{city}</Txt>
      </View>

      <View style={s.interpretation}>
        <Txt style={s.interpretation_txt}>{interpretation.label}</Txt>
      </View>

      <View style={s.temperature_box}>
          <View style={s.temperature_box_wrap}>
              <Txt style={s.temperature}>{temperature}°</Txt>
              <TouchableOpacity
                  onPress={() => nav.navigate("Forecasts", { city, ...dailyWeather })}
              >
                  <Txt style={s.details}>Show details</Txt>
              </TouchableOpacity>
          </View>
        <Image style={s.image} source={interpretation.image} />
      </View>
    </>
  );
}
