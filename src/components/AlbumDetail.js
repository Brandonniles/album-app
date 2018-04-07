import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const {
    thumbnailStyles,
    headerTextStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    albumImageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyles}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={albumImageStyle}
          source={{ uri: image }}
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyles: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
