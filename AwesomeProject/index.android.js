/**
 * Based On Sample React Native App
 * From https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  ItemCheckbox,
} from 'react-native';

var MOCKED_TODO_DATA = [{taskName: 'Learn React Native', taskDescription: 'Playing around with react-native', isDone: false},
                        {taskName: 'Finish this App', taskDescription: 'Make this app support adding/removing todos', isDone:false}];
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});                        
var mockedDataSource = ds.cloneWithRows(MOCKED_TODO_DATA);

class AwesomeProject extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         My TODOs ! </Text>
        <ListView dataSource={mockedDataSource}
          renderRow={this.renderTODOs}
          style={styles.listView}></ListView>
      </View>
    );
  }

  renderTODOs(todo){
    return (
      <View style={styles.todoEntry}>
        <View style={styles.todoInfo}>
          <Text style={styles.taskName}>{todo.taskName}</Text>          
          <Text style={styles.taskDescription}>{todo.taskDescription}</Text>
        </View>
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 7,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  todoEntry:{
    flex: 1,
    flexDirection : 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  todoInfo:{
    flex: 1,
  },
  taskName:{
    fontSize: 18,
  },
  taskDescription:{
    marginBottom: 10,
    margin: 5,
  },
  listView: {
        paddingTop: 20,
  backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
