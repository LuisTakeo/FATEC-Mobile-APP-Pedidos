import React, { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

type MenuItem = {
  label: string;
  value: string;
  price: number;
  image: string;
  accent: string;
};

const products: MenuItem[] = [
  {
    label: 'Hambúrguer',
    value: 'hamburguer',
    price: 25,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    accent: '#ff8c42',
  },
  {
    label: 'Pizza',
    value: 'pizza',
    price: 32,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    accent: '#ff5d73',
  },
  {
    label: 'Hot Dog',
    value: 'hotdog',
    price: 18,
    image: 'https://images.unsplash.com/photo-1619740455993-9f4d50d8e1d5?auto=format&fit=crop&w=900&q=80',
    accent: '#f7b801',
  },
];

const drinks: MenuItem[] = [
  {
    label: 'Refrigerante',
    value: 'refrigerante',
    price: 8,
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80',
    accent: '#3b82f6',
  },
  {
    label: 'Suco',
    value: 'suco',
    price: 10,
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=900&q=80',
    accent: '#10b981',
  },
  {
    label: 'Água',
    value: 'agua',
    price: 5,
    image: 'https://images.unsplash.com/photo-1523375590605-5c8f3c5c9b1e?auto=format&fit=crop&w=900&q=80',
    accent: '#06b6d4',
  },
];

export default function App() {
  const [productValue, setProductValue] = useState(products[0].value);
  const [drinkValue, setDrinkValue] = useState(drinks[0].value);

  const selectedProduct = products.find((item) => item.value === productValue) ?? products[0];
  const selectedDrink = drinks.find((item) => item.value === drinkValue) ?? drinks[0];
  const total = selectedProduct.price + selectedDrink.price;

  const handleConfirmOrder = () => {
    Alert.alert(
      'Pedido confirmado',
      `Pedido: ${selectedProduct.label} + ${selectedDrink.label}\nTotal: R$ ${total.toFixed(2)}`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <View style={styles.backgroundOrbTop} />
      <View style={styles.backgroundOrbBottom} />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <Text style={styles.kicker}>Pedido rápido</Text>
          <Text style={styles.title}>Monte seu combo em poucos toques</Text>
          <Text style={styles.subtitle}>
            Escolha um produto, uma bebida, confira o total e confirme o pedido.
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Pedido final</Text>
          <Text style={styles.summaryText}>
            {selectedProduct.label} + {selectedDrink.label}
          </Text>
          <Text style={styles.summaryPrice}>Total: R$ {total.toFixed(2)}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Escolha de produto</Text>
          <View style={styles.pickerBox}>
            <Picker
              selectedValue={productValue}
              onValueChange={(value) => setProductValue(value)}
              dropdownIconColor="#1f2937"
              style={styles.picker}
            >
              {products.map((item) => (
                <Picker.Item key={item.value} label={`${item.label} - R$ ${item.price.toFixed(2)}`} value={item.value} />
              ))}
            </Picker>
          </View>

          <View style={styles.previewCard}>
            <Image source={{ uri: selectedProduct.image }} style={styles.previewImage} />
            <View style={[styles.previewBadge, { backgroundColor: selectedProduct.accent }]}>
              <Text style={styles.previewBadgeText}>R$ {selectedProduct.price.toFixed(2)}</Text>
            </View>
            <Text style={styles.previewTitle}>{selectedProduct.label}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Escolha de bebida</Text>
          <View style={styles.pickerBox}>
            <Picker
              selectedValue={drinkValue}
              onValueChange={(value) => setDrinkValue(value)}
              dropdownIconColor="#1f2937"
              style={styles.picker}
            >
              {drinks.map((item) => (
                <Picker.Item key={item.value} label={`${item.label} - R$ ${item.price.toFixed(2)}`} value={item.value} />
              ))}
            </Picker>
          </View>

          <View style={styles.previewCard}>
            <Image source={{ uri: selectedDrink.image }} style={styles.previewImage} />
            <View style={[styles.previewBadge, { backgroundColor: selectedDrink.accent }]}>
              <Text style={styles.previewBadgeText}>R$ {selectedDrink.price.toFixed(2)}</Text>
            </View>
            <Text style={styles.previewTitle}>{selectedDrink.label}</Text>
          </View>
        </View>

        <View style={styles.totalCard}>
          <Text style={styles.totalLabel}>Resumo do pedido</Text>
          <Text style={styles.totalValue}>{selectedProduct.label} + {selectedDrink.label}</Text>
          <View style={styles.totalDivider} />
          <Text style={styles.totalPrice}>Total: R$ {total.toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleConfirmOrder} activeOpacity={0.85}>
          <Text style={styles.buttonText}>Confirmar pedido</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#120f20',
  },
  content: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 48,
  },
  backgroundOrbTop: {
    position: 'absolute',
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: 'rgba(255, 124, 67, 0.28)',
    top: -70,
    right: -60,
  },
  backgroundOrbBottom: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(59, 130, 246, 0.22)',
    bottom: 20,
    left: -70,
  },
  hero: {
    marginBottom: 20,
  },
  kicker: {
    color: '#fbbf24',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  title: {
    color: '#ffffff',
    fontSize: 34,
    fontWeight: '800',
    lineHeight: 40,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 12,
  },
  summaryCard: {
    backgroundColor: '#1b1730',
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  summaryLabel: {
    color: '#f59e0b',
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  summaryText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '800',
  },
  summaryPrice: {
    color: '#c7f9cc',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  pickerBox: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 14,
  },
  picker: {
    height: 56,
    color: '#111827',
  },
  previewCard: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  previewImage: {
    width: '100%',
    height: 180,
  },
  previewBadge: {
    position: 'absolute',
    top: 14,
    right: 14,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
  },
  previewBadgeText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '800',
  },
  previewTitle: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '800',
    padding: 16,
  },
  totalCard: {
    backgroundColor: '#0f766e',
    borderRadius: 24,
    padding: 20,
    marginTop: 4,
    marginBottom: 18,
  },
  totalLabel: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  totalValue: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 8,
  },
  totalDivider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginVertical: 16,
  },
  totalPrice: {
    color: '#ccfbf1',
    fontSize: 20,
    fontWeight: '800',
  },
  button: {
    backgroundColor: '#f97316',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 6,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '800',
  },
});