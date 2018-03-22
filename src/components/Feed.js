import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import dateFormat from 'dateformat';
import Hyperlink from 'react-native-hyperlink';

const feedURL = 'https://api.massrelevance.com/MassRelDemo/kindle.json';
const tweetsToRender = 10;
const refreshRate = 180000;

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      feed: []
    }
  }

  getFeed() {
    fetch(feedURL)
    .then((response) => response.json())
    .then((responseData) =>
    {
      this.setState({ feed: responseData.slice(0,tweetsToRender) })
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentWillMount() {
    this.getFeed();
  }

  componentDidMount() {
    setInterval(() => { 
      this.getFeed()
    },refreshRate)
  }


  renderItem({ item, index }) {
    let time = dateFormat(item.created_at, "ddd mmm dd yyyy HH:MM:ss")
    const { user, text } = item;
    
    return (
            <View>
              <View style={styles.header}>
                <Image style={styles.thumbnail} source={{ uri: user.profile_image_url_https }} />
                <Text style={styles.userName}>{user.name}</Text>
              </View>
              <Text style={styles.screenName}>{`@${user.screen_name}:`}</Text>
              <Hyperlink linkDefault={ true } linkStyle={ { color: '#2980b9', fontSize: 16 } }>
                <Text style={styles.message}>{text}</Text>
              </Hyperlink>
              <Text style={styles.time}>{time}</Text>
            </View>
           )
  }

  render() {
    return (
      <FlatList
        data={this.state.feed}
        initialNumToRender={4}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
     )
  }
}

const styles = {
  userName: {
    alignSelf: 'flex-start',
    marginLeft: 5,
    fontSize: 20,
    marginTop: 8,
    flexDirection: 'column',
  },
  screenName: {
    justifyContent: 'flex-end',
    marginLeft: 15,
    marginTop: 10,
    fontSize: 16,
    flexDirection: 'row',
  },
  message: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#1c94e0',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    alignContent: 'center',
    fontSize: 16,
  },
  time: {
    margin: 10,
    fontSize: 14,
    marginLeft: 15
  },
  thumbnail: {
    height: 50,
    width: 50,
    borderRadius: 2,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#d9dce2',
    borderRadius: 2
  }
}

export default Feed;
