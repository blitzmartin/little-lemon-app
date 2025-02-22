import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, CheckBox, Divider } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { z } from "zod";
import { useAuth } from "../hooks/useAuth";
import { CustomBtn, ScrollContainer, SpacedStack } from "../shared";
import { styles } from "../styles";
import { getUserInitials } from "../utils/utils";

const editAccountValidationSchema = z.object({
  orderStatus: z.boolean(),
  passwordChange: z.boolean(),
  specialOffer: z.boolean(),
  newsletter: z.boolean(),
});

type EditAccountFormValues = z.infer<typeof editAccountValidationSchema>;

export const AccountScreen = () => {
  const { user, savePreferences } = useAuth();
  const initials = getUserInitials(user);

  const editAccount = useForm<EditAccountFormValues>({
    // populate with values found in user preferences
    defaultValues: {
      orderStatus: user?.pref?.orderStatus || true,
      passwordChange: user?.pref?.passwordChange || true,
      specialOffer: user?.pref?.specialOffer || false,
      newsletter: user?.pref?.newsletter || false,
    },
    resolver: zodResolver(editAccountValidationSchema),
  });

  const onSaveAccountSubmit = async (values: EditAccountFormValues) => {
    try {
      await savePreferences(values);
      console.log("Preferences saved successfully!");
    } catch (error) {
      console.error("Failed to save preferences:", error);
    }
  };

  const onDiscardAccountSubmit = async () => {
    editAccount.reset({
      orderStatus: user?.pref?.orderStatus || true,
      passwordChange: user?.pref?.passwordChange || true,
      specialOffer: user?.pref?.specialOffer || false,
      newsletter: user?.pref?.newsletter || false,
    });
  };

  return (
    <ScrollContainer>
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
              readOnly
            />
            <TextInput
              label="Last Name"
              value={user?.lastName}
              onChangeText={(text) => console.log(text)}
              mode="outlined"
              readOnly
            />
            <TextInput
              label="Email"
              value={user?.email}
              onChangeText={(text) => console.log(text)}
              mode="outlined"
              readOnly
            />
          </>
        )}
        <Divider style={{ marginTop: 12 }} />
        <Text style={[styles.title, { fontSize: 20 }]}>
          Email Notifications
        </Text>
        <View style={accountStyles.checkboxContainer}>
          <Controller
            control={editAccount.control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CheckBox
                title="Order Status"
                checked={value}
                onPress={() => onChange(!value)}
                onBlur={onBlur}
              />
            )}
            name="orderStatus"
            rules={{ required: true }}
          />
        </View>
        <View style={accountStyles.checkboxContainer}>
          <Controller
            control={editAccount.control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CheckBox
                title="Password Change"
                checked={value}
                onPress={() => onChange(!value)}
                onBlur={onBlur}
              />
            )}
            name="passwordChange"
            rules={{ required: true }}
          />
        </View>
        <View style={accountStyles.checkboxContainer}>
          <Controller
            control={editAccount.control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CheckBox
                title="Special Offer"
                checked={value}
                onPress={() => onChange(!value)}
                onBlur={onBlur}
              />
            )}
            name="specialOffer"
            rules={{ required: true }}
          />
        </View>
        <View style={accountStyles.checkboxContainer}>
          <Controller
            control={editAccount.control}
            render={({ field: { onChange, onBlur, value } }) => (
              <CheckBox
                title="Newsletter"
                checked={value}
                onPress={() => onChange(!value)}
                onBlur={onBlur}
              />
            )}
            name="newsletter"
            rules={{ required: true }}
          />
        </View>
        <CustomBtn
          title="Save Changes"
          onPress={editAccount.handleSubmit(onSaveAccountSubmit)}
        />
        <CustomBtn
          title="Discard Changes"
          onPress={editAccount.handleSubmit(onDiscardAccountSubmit)}
          variant="outline"
        />
      </SpacedStack>
    </ScrollContainer>
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
