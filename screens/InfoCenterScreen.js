import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';
import { Search, HelpCircle, Activity, ShieldCheck, BarChart2, Clock, Utensils } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const catWidth = (width - 48 - 12) / 2;

export default function InfoCenterScreen() {
  const categories = [
    { label: 'Prediyabet Nedir?', icon: HelpCircle, bg: '#6366f1', image: 'https://picsum.photos/seed/prediabetes/400/400' },
    { label: 'Sağlıklı Yaşam', icon: Activity, bg: '#10b981', image: 'https://picsum.photos/seed/healthy/400/400' },
    { label: 'Komplikasyonlar', icon: ShieldCheck, bg: '#f59e0b', image: 'https://picsum.photos/seed/warning/400/400' },
    { label: 'Tedavi Yöntemleri', icon: BarChart2, bg: '#3b82f6', image: 'https://picsum.photos/seed/medicine/400/400' },
  ];

  const articles = [
    { title: 'Şeker Seviyesini Dengeleyen 5 Besin', time: '4 dk okuma', icon: Activity },
    { title: 'Egzersizin İnsülin Direncine Etkisi', time: '6 dk okuma', icon: BarChart2 },
    { title: 'Düşük Glisemik İndeksli Meyveler', time: '3 dk okuma', icon: Utensils },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.searchBar}>
        <Search size={20} color="#19c3e6" style={styles.searchIcon} />
        <TextInput 
          style={styles.searchInput}
          placeholder="Makale veya konu ara..."
          placeholderTextColor="#94a3b8"
        />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Kategoriler</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>Tümünü Gör</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.catGrid}>
        {categories.map((cat, i) => (
          <TouchableOpacity key={i} style={styles.catCard}>
            <Image source={{ uri: cat.image }} style={styles.catImage} />
            <View style={styles.catOverlay} />
            <View style={styles.catContent}>
              <cat.icon size={24} color="#19c3e6" style={styles.catIcon} />
              <Text style={styles.catLabel}>{cat.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Popüler Makaleler</Text>
      <View style={styles.articleList}>
        {articles.map((art, i) => (
          <TouchableOpacity key={i} style={styles.articleCard}>
            <View style={styles.articleIconContainer}>
              <art.icon size={32} color="#19c3e6" />
            </View>
            <View style={styles.articleInfo}>
              <Text style={styles.articleTitle}>{art.title}</Text>
              <View style={styles.articleMeta}>
                <Clock size={12} color="#94a3b8" />
                <Text style={styles.articleTime}>{art.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8f8',
  },
  content: {
    padding: 24,
    paddingBottom: 40,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    height: 56,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'rgba(25, 195, 230, 0.1)',
    marginBottom: 32,
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  viewAll: {
    fontSize: 12,
    fontWeight: '600',
    color: '#19c3e6',
  },
  catGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 32,
  },
  catCard: {
    width: catWidth,
    aspectRatio: 1,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  catImage: {
    width: '100%',
    height: '100%',
  },
  catOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
  },
  catContent: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  catIcon: {
    marginBottom: 8,
  },
  catLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  articleList: {
    gap: 12,
  },
  articleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(25, 195, 230, 0.05)',
  },
  articleIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: 'rgba(25, 195, 230, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  articleInfo: {
    flex: 1,
    marginLeft: 16,
  },
  articleTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
    lineHeight: 20,
  },
  articleMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 8,
  },
  articleTime: {
    fontSize: 12,
    color: '#94a3b8',
  },
});
