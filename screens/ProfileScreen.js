import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const ProfileScreen = () => {
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 50 }}>
        <View style={{ padding: 12 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                resizeMode: "cover",
              }}
              source={{
                uri: "https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=800",
              }}
            />
            <View>
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                Name
              </Text>
              <Text style={{ color: "gray", fontSize: 16, fontWeight: "bold" }}>
                email
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "500",
            marginHorizontal: 12,
          }}
        >
          Your Playlists
        </Text>
        <View style={{ padding: 15 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginVertical: 10,
            }}
          >
            <Image
              source={{
                uri: "https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg?auto=compress&cs=tinysrgb&w=800",
              }}
              style={{ width: 50, height: 50, borderRadius: 4 }}
            />
            <View>
              <Text style={{ color: "white" }}>"test</Text>
              <Text style={{ color: "white", marginTop: 7 }}>0 followers</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
