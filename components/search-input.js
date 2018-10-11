import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import PropTypes from 'prop-types'

export default class SearchInput extends React.Component {
  state = {
    text: ''
  }
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  }

  static defaultProps = {
    placeholder: ''
  }

  handleChangeText = (text) => {
    this.setState({text})
  }

  handleSubmitEditing = () => {
    const {onSubmit} = this.props
    const { text } = this.state
    if (!text) return

    onSubmit(text)
    this.setState({text: ''})
  }

  render() {
    const { text } = this.state
    const { placeholder } = this.props

    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          value={text}
          placeholder={placeholder}
          placeholderTextColor="black"
          underlineColorAndroid="transparent"
          style={styles.textInput}
          clearButtonMode="always"
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: 'white',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  textInput: {
    flex: 1,
    color: 'black'
  }
})
