import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/estilos';

export default class Votar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            alternativas: []
        }
    }
    static navigationOptions = ({ navigation }) => ({
        title: `Pergunta: ${navigation.state.params.numero}`,
    });

    componentWillMount() {
        const titulo = this.props.navigation.getParam('titulo', null);
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={[{ alignSelf: 'auto' }, { marginTop: 10 }]}>
                    <FlatList
                        style={{ marginTop: 20 }}
                        data={alternativas}
                        numColumns={1}
                        renderItem={({ item, index }) => (
                            <BotaoAlternativa
                                onPress={() => this.handleSelect(index)}
                                index={index}
                                text={item}
                                selected={selected}>
                            </BotaoAlternativa>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </ScrollView></View>
      </View >
    );
    }
}