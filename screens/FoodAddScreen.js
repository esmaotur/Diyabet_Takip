import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { Search, Barcode, Plus } from 'lucide-react-native';

export default function FoodAddScreen() {
  const foods = [
    { name: 'Çavdar ve Kepekli Ekmek', desc: 'Buğday unu ve tahıllar', img: 'https://picsum.photos/seed/bread/100/100' },
    { name: 'Balık Havyarı', desc: 'Protein ve Omega-3 kaynağı', img: 'https://picsum.photos/seed/fish/100/100' },
    { name: 'Et ve Mantar Et Suyu', desc: 'Düşük glisemik indeksli çorba', img: 'https://picsum.photos/seed/soup/100/100' },
    { name: 'Mevsim Yeşillikleri', desc: 'Yüksek lifli, düşük kalorili', img: 'https://picsum.photos/seed/salad/100/100' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <View style={styles.searchBar}>
          <Search size={20} color="#19c3e6" style={styles.searchIcon} />
          <TextInput 
            style={styles.searchInput}
            placeholder="Besin veya marka ara..."
            placeholderTextColor="#94a3b8"
          />
          <TouchableOpacity style={styles.barcodeButton}>
            <Barcode size={24} color="#94a3b8" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Önerilen Besinler</Text>
        <View style={styles.foodList}>
          {foods.map((food, i) => (
            <TouchableOpacity key={i} style={styles.foodCard}>
              <View style={styles.foodImageContainer}>
                <Image source={{ uri: food.img }} style={styles.foodImage} />
              </View>
              <View style={styles.foodInfo}>
                <Text style={styles.foodName}>{food.name}</Text>
                <Text style={styles.foodDesc}>{food.desc}</Text>
              </View>
              <View style={styles.addButton}>
                <Plus size={20} color="#19c3e6" />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Seçilenleri Kaydet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8f8',
  },
  searchSection: {
    padding: 24,
    backgroundColor: '#f6f8f8',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    height: 56,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(25, 195, 230, 0.2)',
    shadowColor: '#19c3e6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  searchIcon: {
    opacity: 0.8,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    marginLeft: 12,
    fontSize: 16,
    color: '#1e293b',
  },
  barcodeButton: {
    padding: 4,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 120,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  foodList: {
    gap: 12,
  },
  foodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(25, 195, 230, 0.05)',
  },
  foodImageContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'rgba(25, 195, 230, 0.05)',
  },
  foodImage: {
    width: '100%',
    height: '100%',
  },
  foodInfo: {
    flex: 1,
    marginLeft: 16,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  foodDesc: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(25, 195, 230, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  saveButton: {
    backgroundColor: '#19c3e6',
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#19c3e6',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 5,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
