import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Search, ChevronRight, MessageCircle, Users, BookOpen, BarChart2, ShieldCheck } from 'lucide-react-native';

export default function FAQScreen() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    { q: 'Kan şekeri ölçümü ne zaman yapılmalıdır?', a: 'Genellikle aç karnına, öğünlerden 2 saat sonra ve yatmadan önce ölçüm yapılması önerilir.' },
    { q: 'Prediyabet nedir?', a: 'Kan şekeri seviyesinin normalden yüksek olduğu ancak henüz tip 2 diyabet tanısı alacak kadar yüksek olmadığı bir ara evredir.' },
    { q: 'İnsülin nasıl saklanmalıdır?', a: 'Açılmamış insülin kalemleri buzdolabında (2-8°C) saklanmalıdır.' },
    { q: 'Diyabetik beslenme nasıl olmalıdır?', a: 'Glisemik indeksi düşük gıdalar tercih edilmeli, lifli gıdalar tüketilmeli ve porsiyon kontrolü yapılmalıdır.' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.searchBar}>
        <Search size={20} color="#19c3e6" style={styles.searchIcon} />
        <TextInput 
          style={styles.searchInput}
          placeholder="Soru ara..."
          placeholderTextColor="#94a3b8"
        />
      </View>

      <View style={styles.catRow}>
        {[
          { label: 'Rehberler', icon: BookOpen, active: true },
          { label: 'Videolar', icon: BarChart2, active: false },
          { label: 'İlaç Takibi', icon: ShieldCheck, active: false },
        ].map((item, i) => (
          <TouchableOpacity key={i} style={[styles.catCard, item.active && styles.catCardActive]}>
            <item.icon size={24} color={item.active ? '#19c3e6' : '#94a3b8'} style={styles.catIcon} />
            <Text style={[styles.catLabel, item.active && styles.catLabelActive]}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.faqSection}>
        <Text style={styles.sectionTitle}>Sıkça Sorulan Sorular</Text>
        <View style={styles.faqList}>
          {faqs.map((faq, i) => (
            <View key={i} style={styles.faqItem}>
              <TouchableOpacity 
                style={styles.faqHeader}
                onPress={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <Text style={styles.faqQuestion}>{faq.q}</Text>
                <ChevronRight 
                  size={20} 
                  color="#19c3e6" 
                  style={[styles.chevron, openIndex === i && styles.chevronOpen]} 
                />
              </TouchableOpacity>
              {openIndex === i && (
                <View style={styles.faqAnswer}>
                  <Text style={styles.faqAnswerText}>{faq.a}</Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </View>

      <View style={styles.supportBanner}>
        <View style={styles.supportIconContainer}>
          <Users size={24} color="#fff" />
        </View>
        <Text style={styles.supportTitle}>Daha fazla yardıma mı ihtiyacınız var?</Text>
        <Text style={styles.supportSubtitle}>Uzman ekibimizle anında iletişime geçin.</Text>
        <TouchableOpacity style={styles.supportButton}>
          <MessageCircle size={20} color="#fff" />
          <Text style={styles.supportButtonText}>Canlı Destek Başlat</Text>
        </TouchableOpacity>
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
    marginBottom: 24,
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
  catRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  catCard: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  catCardActive: {
    backgroundColor: 'rgba(25, 195, 230, 0.05)',
    borderColor: 'rgba(25, 195, 230, 0.2)',
  },
  catIcon: {
    marginBottom: 8,
  },
  catLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#64748b',
    textAlign: 'center',
  },
  catLabelActive: {
    color: '#19c3e6',
  },
  faqSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  faqList: {
    gap: 12,
  },
  faqItem: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(25, 195, 230, 0.05)',
    overflow: 'hidden',
  },
  faqHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  faqQuestion: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
    lineHeight: 20,
  },
  chevron: {
    transform: [{ rotate: '0deg' }],
  },
  chevronOpen: {
    transform: [{ rotate: '90deg' }],
  },
  faqAnswer: {
    padding: 20,
    paddingTop: 0,
    borderTopWidth: 1,
    borderTopColor: '#f8fafc',
  },
  faqAnswerText: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 22,
    marginTop: 12,
  },
  supportBanner: {
    backgroundColor: 'rgba(25, 195, 230, 0.05)',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(25, 195, 230, 0.1)',
  },
  supportIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#19c3e6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    shadowColor: '#19c3e6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
  },
  supportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 4,
  },
  supportSubtitle: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 20,
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#19c3e6',
    height: 56,
    paddingHorizontal: 24,
    borderRadius: 16,
    gap: 12,
    width: '100%',
  },
  supportButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
