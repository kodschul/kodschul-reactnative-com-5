import {View, Text} from 'react-native-ui-lib';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {Appearance, Pressable, StyleSheet, FlatList} from 'react-native';

const contact = {
  name: 'Anne Mustermann',
  jobTitle: 'Software Developer',
  company: 'Provectus Technologies GmbH',
  phones: [
    {number: '+49 89 7104092006', type: 'Business'},
    {number: '+49 173 3561572', type: 'Mobile'},
  ],
  email: 'anne.mustermann@provectus.de',
};

const ContactDetailsScreen = () => {
  const renderPhoneNumber = (phone: {type: string; number: string}) => {
    return (
      <View padding-10>
        <View row gap-4>
          <Text>{phone.type}</Text>
          <Text>AAD</Text>
        </View>
        <Text color={colors.action}>{phone.number}</Text>
      </View>
    );
  };

  return (
    <View backgroundColor={colors.background} flex paddingH-10 gap-10>
      {/* Header */}
      <View backgroundColor={colors.background} paddingV-10 paddingH-10>
        <Pressable>
          <View row gap-4 centerV>
            <Icon name="caret-left" size={26} color={colors.action} />
            <Text color={colors.action} text80>
              Contacts
            </Text>
          </View>
        </Pressable>
      </View>

      <View centerH gap-4>
        <Image
          source={{
            uri: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/30/30e608225c58ab3b8732053b11053c7a0dd73f3f_full.jpg',
          }}
          style={{
            width: 80,
            aspectRatio: '1/1',
            borderRadius: 40,
            marginBottom: 10,
          }}
        />
        <Text text40>{contact.name}</Text>
        <Text>{contact.jobTitle}</Text>
        <Text>{contact.company}</Text>
      </View>

      <View row width="100%" gap-20>
        <Pressable style={{flex: 1}}>
          <View backgroundColor="white" br20 center paddingV-5>
            <Icon name="phone" size={24} color={colors.action} />
            <Text color={colors.action}>Call</Text>
          </View>
        </Pressable>
        <Pressable style={{flex: 1}}>
          <View backgroundColor="white" br20 center width="100%" paddingV-5>
            <Icon name="envelope" size={24} color={colors.action} />
            <Text color={colors.action}>Email</Text>
          </View>
        </Pressable>
        <Pressable style={{flex: 1}}>
          <View backgroundColor="white" br20 center width="100%" paddingV-5>
            <Icon name="comment" size={24} color={colors.action} />
            <Text color={colors.action}>Message</Text>
          </View>
        </Pressable>
        <Pressable style={{flex: 1}}>
          <View backgroundColor="white" br20 center width="100%" paddingV-5>
            <Icon name="users" size={24} color={colors.action} />
            <Text color={colors.action}>Teams</Text>
          </View>
        </Pressable>
      </View>

      <FlatList
        style={{
          flexGrow: 0,
        }}
        data={contact.phones}
        contentContainerStyle={{
          width: '100%',
          borderRadius: 5,
          backgroundColor: 'white',
        }}
        ItemSeparatorComponent={() => (
          <View backgroundColor="#ddd" marginH-10 style={{height: 1}} flex-1>
            <Text />
          </View>
        )}
        renderItem={item => renderPhoneNumber(item.item)}
      />

      <View padding-10 backgroundColor="white" br20>
        <View row gap-4>
          <Text>E-Mail</Text>
          <Text>AAD</Text>
        </View>
        <Text color={colors.action}>{contact.email}</Text>
      </View>

      <View padding-10 backgroundColor="white" br20>
        <View row gap-4>
          <Text>Info</Text>
        </View>
        <Text color="#888" numberOfLines={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia in
          expedita error aspernatur velit dolore, numquam natus omnis. Ex amet
          eligendi sequi culpa perferendis laudantium eos, reprehenderit
          repellat quae recusandae assumenda aliquam sunt est blanditiis itaque
          illo obcaecati? Ea fugit quia at corrupti sint, consequatur
          necessitatibus unde quas recusandae accusamus culpa! Accusantium quis
          dignissimos tempore esse cumque quas eligendi explicabo rem eius eaque
          architecto ratione quos aspernatur ducimus perspiciatis quod at
          voluptatibus autem, odio dolores praesentium illo molestiae aperiam
          possimus? Fugiat reprehenderit, quia optio ipsa molestias distinctio
          fuga earum incidunt modi magni. Ullam esse eos magnam magni dolores
          quasi illum?
        </Text>
      </View>
    </View>
  );
};

const colors = {
  background: '#f1f0f5',
  text: '#3e3d40',
  action: '#167aee',
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#f1f0f5',
  },
});

export default ContactDetailsScreen;
