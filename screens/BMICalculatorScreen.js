import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Clock, Trash2, Info } from 'lucide-react-native';

export default function BMICalculatorScreen() {
  const history = [
    { val: '22.8', label: 'Normal', date: '12 Mayıs 2024', weight: '70kg', color: '#059669', bg: '#ecfdf5' },
    { val: '25.4', label: 'Hafif Kilolu', date: '28 Nisan 2024', weight: '78kg', color: '#d97706', bg: '#fffbeb' },
    { val: '24.1', label: 'Normal', date: '15 Nisan 2024', weight: '74kg', color: '#059669', bg: '#ecfdf5' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Vücut Kitle İndeksi</Text>
        <Text style={styles.subtitle}>Sağlıklı bir yaşam için ideal kilonuzu takip edin.</Text>
      </View>

      <View style={styles.inputGrid}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Kilo (kg)</Text>
          <TextInput 
            style={styles.input}
            placeholder="70"
            keyboardType="numeric"
            placeholderTextColor="#94a3b8"
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Boy (cm)</Text>
          <TextInput 
            style={styles.input}
            placeholder="175"
            keyboardType="numeric"
            placeholderTextColor="#94a3b8"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.calculateButton}>
        <Text style={styles.calculateButtonText}>Hesapla</Text>
      </TouchableOpacity>

      <View style={styles.historySection}>
        <View style={styles.historyHeader}>
          <View style={styles.historyTitleRow}>
            <Clock size={18} color="#19c3e6" />
            <Text style={styles.historyTitle}>Geçmiş Kayıtlar</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.viewAll}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.historyList}>
          {history.map((item, i) => (
            <View key={i} style={styles.historyItem}>
              <View style={styles.historyLeft}>
                <View style={[styles.badge, { backgroundColor: item.bg }]}>
                  <Text style={[styles.badgeText, { color: item.color }]}>{item.val}</Text>
                </View>
                <View>
                  <Text style={styles.itemLabel}>{item.label}</Text>
                  <Text style={styles.itemMeta}>{item.date} • {item.weight}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.deleteButton}>
                <Trash2 size={20} color="#94a3b8" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.tipBox}>
        <View style={styles.tipHeader}>
          <View style={styles.tipBadge}>
            <Text style={styles.tipBadgeText}>SAĞLIK İPUCU</Text>
          </View>
        </View>
        <Text style={styles.tipText}>
          Diyabet yönetiminde BMI (BKI) değeri kadar bel çevresi ölçümü de metabolik riskler açısından önemlidir.
        </Text>
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
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
    textAlign: 'center',
  },
  inputGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  inputGroup: {
    flex: 1,
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
    marginLeft: 4,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 16,
    height: 56,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1e293b',
    borderWidth: 1,
    borderColor: 'rgba(25, 195, 230, 0.1)',
  },
  calculateButton: {
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
    marginBottom: 40,
  },
  calculateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  historySection: {
    marginBottom: 32,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  historyTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  viewAll: {
    fontSize: 12,
    fontWeight: '600',
    color: '#19c3e6',
  },
  historyList: {
    gap: 12,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(25, 195, 230, 0.05)',
  },
  historyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  badge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  itemMeta: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  deleteButton: {
    padding: 4,
  },
  tipBox: {
    backgroundColor: 'rgba(25, 195, 230, 0.05)',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(25, 195, 230, 0.1)',
  },
  tipHeader: {
    marginBottom: 8,
  },
  tipBadge: {
    backgroundColor: 'rgba(25, 195, 230, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  tipBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#19c3e6',
    letterSpacing: 1,
  },
  tipText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#334155',
    lineHeight: 20,
  },
});
