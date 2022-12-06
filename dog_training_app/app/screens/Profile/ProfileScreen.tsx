import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Background from "../../components/Background";
import Navbar from "../../components/Navbar";
import styles from "../../styles/ProfileScreenStyles.js";
import { User } from "../../types.js";

const testUser: User = {
  id: "96b15896573540e78b6b89dc0d6620d6",
  name: "Nick Fuller",
  email: "nicholas.b.fuller@gmail.com",
  phone: "816-332-0044",
  address: {
    street: "500 W. 15th St",
    city: "Rolla",
    state: "MO",
    zipcode: "65401",
    country: "United States of America",
  },
  birthdate: new Date("2000-05-01"),
  trainer: {
    name: "Ivan",
    email: "wizard@dogwizardry.com",
    phone: "555-777-8888",
  },
  vet: {
    name: "Justin Berger",
    email: "wizard@dogwizardry.com",
    phone: "573-364-7100",
  },
  pets: {
    dogs: [
      {
        id: "ef91483085734a88bd43387fd48ef5cf",
        name: "Aurora",
        birthdate: new Date("2019-01-20"),
        breeds: ["Pitbull", "American Staffordshire Terrier"],
        weight: 40,
        helper: false,
        triggers: ["Dogs", "Cats", "Strangers"],
        biteHistory: false,
        medicalInformation: "Takes Paroxetine daily for anxiety.",
        description:
          "Aurora has a bit of a troublesome history so she takes a little while to warm up to people. She's a really smart dog - but also a REALLY stubborn dog:) She's not great with other animals, and sometimes gets overwhelmed when she meets new peopole.",
      },
    ],
    other: [],
  },
};

function ProfileScreen({ navigation }: { navigation: any }) {
  return (
    <Background>
      <Image
        style={styles.profileImage}
        source={require("../../assets/profilePic.png")}
      />
      <View style={styles.overlayBox}>
        <View
          style={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <Text style={styles.profileName}>{testUser.name}</Text>
          <Text style={styles.profileEmail}>{testUser.email}</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require("../../assets/editIcon.png")}
            style={styles.editIcon}
          />
        </TouchableOpacity>
      </View>
      <Navbar selected={"Profile"} navigation={navigation}/>
    </Background>
  );
}

export default ProfileScreen;
