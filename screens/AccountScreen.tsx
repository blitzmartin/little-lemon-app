import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, CheckBox, Divider } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { z } from "zod";
import { useAuth } from "../hooks/useAuth";
import { CustomBtn, ScreenContainer, SpacedStack } from "../shared";
import { styles } from "../styles";
import { getUserInitials } from "../utils/utils";

const editAccountValidationSchema = z.object({
  orderStatus: z.boolean(),
  passwordChange: z.boolean(),
  specialOffer: z.boolean(),
  newsletter: z.boolean(),
});

type EditAccountFormValues = z.infer<typeof editAccountValidationSchema>;

const editAccount = useForm<EditAccountFormValues>({
  // populate with values found in user preferences
  defaultValues: {
    orderStatus: true,
    passwordChange: true,
    specialOffer: false,
    newsletter: false,
  },
  resolver: zodResolver(editAccountValidationSchema),
});

export const AccountScreen = () => {
  const { user } = useAuth();
  const initials = getUserInitials(user);

  const onEditAccountSubmit = async (values: EditAccountFormValues) => {
    console.log(values);
  };

  return (
    <ScreenContainer>
      <Text style={styles.title}>Personal Information</Text>
      <SpacedStack>
        <View style={accountStyles.avatarContainer}>
          <Avatar
            rounded
            size="large"
            title={initials}
            source={{
              uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
            }}
          />
          <CustomBtn
            title="Change"
            onPress={() => console.log("Change propic")}
          />
          <CustomBtn
            title="Remove"
            onPress={() => console.log("Remove propic")}
            variant="outline"
          />
        </View>
        <Divider style={{ marginTop: 12 }} />
        {user && (
          <>
            <TextInput
              label="First Name"
              value={user?.firstName}
              onChangeText={(text) => console.log(text)}
              mode="outlined"
            />
            <TextInput
              label="Last Name"
              value={user?.lastName}
              onChangeText={(text) => console.log(text)}
              mode="outlined"
            />
            <TextInput
              label="Email"
              value={user?.email}
              onChangeText={(text) => console.log(text)}
              mode="outlined"
            />
          </>
        )}
        <Divider style={{ marginTop: 12 }} />
        {user && (
          <Text style={[styles.title, { fontSize: 20 }]}>
            Email Notifications
          </Text>
        )}
        <View style={accountStyles.checkboxContainer}>
          <Controller
            control={editAccount.control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CheckBox
                title="Order Status"
                checked={value}
                onPress={onChange}
                onBlur={onBlur}
              />
            )}
            name="orderStatus"
            rules={{ required: true }}
          />
          <Text style={accountStyles.label}>Do you like React Native?</Text>
        </View>
        <CustomBtn
          title="Remove"
          onPress={editAccount.handleSubmit(onEditAccountSubmit)}
          variant="outline"
        />
      </SpacedStack>
    </ScreenContainer>
  );
};

const accountStyles = StyleSheet.create({
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
