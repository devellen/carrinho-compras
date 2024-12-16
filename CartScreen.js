import React from 'react';
import { View, Text, Button, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useMyContext } from './myContext';

const CartScreen = () => {
    const { cart, removeFromCart, clearCart } = useMyContext();

    // Função para calcular o total do pedido
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const renderCartItem = ({ item }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <View>
                <Text>{item.name} - ${item.price}</Text>
                <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>Subtotal: R${(item.price * item.quantity).toFixed(2)}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => {
                        removeFromCart(item.id);
                    }}
                    style={{ padding: 10 }}
                >
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828843.png' }}
                        style={{ width: 20, height: 20 }}
                    />
                </TouchableOpacity>
                <Text style={{ marginLeft: 10 }}>Quantidade: {item.quantity}</Text>
            </View>
        </View>
    );

    return (
        <View style={{ alignItems: 'center', padding: 20 }}>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>Carrinho de Compras</Text>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderCartItem}
            />
            {cart.length > 0 && (
                <View style={{ width: '100%' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginTop: 50 }}>
                        Total do Pedido: R${calculateTotal()}
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={clearCart}>
                        <Text style={styles.buttonText}>Esvaziar Carrinho</Text>
                    </TouchableOpacity>
                </View>
            )}
            {cart.length === 0 && (
                <Text style={{ fontSize: 16, color: 'gray' }}>
                    O carrinho está vazio.
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        padding: 12,     
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white', 
        fontSize: 16,
        fontWeight: 'bold'
    },
});

export default CartScreen;