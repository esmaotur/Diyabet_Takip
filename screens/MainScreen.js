import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { 
  User, 
  BookOpen, 
  Calculator, 
  ClipboardCheck, 
  Phone, 
  Info, 
  HelpCircle, 
  Utensils, 
  Footprints,
  Lightbulb
} from 'lucide-react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2;

export default function MainScreen({ navigation }) {
  const menuItems = [
    { id: 'Profile', label: 'Profil', icon: User },
    { id: 'Info', label: 'Bilgilendirme', icon: BookOpen },
    { id: 'BMI', label: 'BKI Hesaplama', icon: Calculator },
    { id: 'Risk', label: 'Ön Testler', icon: ClipboardCheck },
    { id: 'Risk', label: 'Son Testler', icon: ClipboardCheck },
    { id: 'Contact', label: 'İletişim', icon: Phone },
    { id: 'About', label: 'Hakkımızda', icon: Info },
    { id: 'FAQ', label: 'S.S.S.', icon: HelpCircle },
    { id: 'Food', label: 'Besin Ekle', icon: Utensils },
    { id: 'Pedometer', label: 'Adımsayar', icon: Footprints },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Merhaba,</Text>
        <Text style={styles.welcomeSubtitle}>Bugün kendinizi nasıl hissediyorsunuz?</Text>
      </View>

      <View style={styles.grid}>
        {menuItems.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.card}
            onPress={() => navigation.navigate(item.id)}
          >
            <View style={styles.iconContainer}>
              <item.icon size={28} color="#19c3e6" />
            </View>
            <Text style={styles.cardLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.tipCard}>
        <View style={styles.tipContent}>
          <View style={styles.tipHeader}>
            <Lightbulb size={20} color="#fff" />
            <Text style={styles.tipTitle}>Günlük İpucu</Text>
          </View>
          <Text style={styles.tipText}>
            Düzenli su tüketimi kan şekerini dengelemeye yardımcı olur. Bugün 2 litre su içmeyi unutmayın!
          </Text>
        </View>
        <View style={styles.tipIconBg}>
          <Lightbulb size={100} color="#fff" opacity={0.2} />
        </View>
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
  welcomeSection: {
    marginBottom: 32,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111e21',
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 4,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: cardWidth,
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#19c3e6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(25, 195, 230, 0.05)',
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(25, 195, 230, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111e21',
    textAlign: 'center',
  },
  tipCard: {
    marginTop: 24,
    backgroundColor: '#19c3e6',
    borderRadius: 24,
    padding: 24,
    position: 'relative',
    overflow: 'hidden',
    shadowColor: '#19c3e6',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 5,
  },
  tipContent: {
    zIndex: 1,
  },
  tipHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  tipTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  tipText: {
    color: '#fff',
    opacity: 0.9,
    fontSize: 14,
    lineHeight: 20,
  },
  tipIconBg: {
    position: 'absolute',
    right: -20,
    bottom: -20,
  },
});
