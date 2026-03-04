import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Phone, MessageCircle, Mail, Globe, Share2, MapPin, BarChart2 } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const iconWidth = (width - 48 - 48) / 4;

export default function ContactScreen() {
  const contactItems = [
    { icon: Phone, label: 'Ara', bg: 'rgba(25, 195, 230, 0.1)', color: '#19c3e6' },
    { icon: MessageCircle, label: 'WhatsApp', bg: '#ecfdf5', color: '#10b981' },
    { icon: Mail, label: 'E-posta', bg: '#fff7ed', color: '#f97316' },
    { icon: Globe, label: 'Web', bg: '#eff6ff', color: '#3b82f6' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Destek Merkezi</Text>
      
      <View style={styles.doctorCard}>
        <View style={styles.doctorAvatarContainer}>
          <Image 
            source={{ uri: 'https://picsum.photos/seed/doctor/400/400' }} 
            style={styles.doctorAvatar} 
          />
          <View style={styles.statusDot} />
        </View>
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>Dr. Ahmet Yılmaz</Text>
          <Text style={styles.doctorRole}>Diyabet ve Endokrinoloji Uzmanı</Text>
          <Text style={styles.doctorHours}>Hafta içi 09:00 - 18:00</Text>
        </View>
        <TouchableOpacity style={styles.askButton}>
          <MessageCircle size={20} color="#fff" />
          <Text style={styles.askButtonText}>Uzmana Sorun</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.iconGrid}>
        {contactItems.map((item, i) => (
          <TouchableOpacity key={i} style={styles.iconItem}>
            <View style={[styles.iconCircle, { backgroundColor: item.bg }]}>
              <item.icon size={24} color={item.color} />
            </View>
            <Text style={styles.iconLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialIcon}>
          <Share2 size={24} color="#94a3b8" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Globe size={24} color="#94a3b8" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <BarChart2 size={24} color="#94a3b8" />
        </TouchableOpacity>
      </View>

      <View style={styles.mapSection}>
        <Text style={styles.sectionTitle}>Konum</Text>
        <View style={styles.mapPlaceholder}>
          <MapPin size={48} color="#19c3e6" />
          <View style={styles.mapBadge}>
            <Text style={styles.mapBadgeText}>MERKEZ KLİNİK</Text>
          </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 24,
  },
  doctorCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(25, 195, 230, 0.1)',
    shadowColor: '#19c3e6',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
    marginBottom: 32,
  },
  doctorAvatarContainer: {
    position: 'relative',
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: 'rgba(25, 195, 230, 0.1)',
    marginBottom: 16,
  },
  doctorAvatar: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  statusDot: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#10b981',
    borderWidth: 3,
    borderColor: '#fff',
  },
  doctorInfo: {
    alignItems: 'center',
    marginBottom: 24,
  },
  doctorName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  doctorRole: {
    fontSize: 14,
    fontWeight: '600',
    color: '#19c3e6',
    marginTop: 4,
  },
  doctorHours: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 4,
  },
  askButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#19c3e6',
    height: 56,
    borderRadius: 16,
    gap: 12,
    width: '100%',
    shadowColor: '#19c3e6',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 5,
  },
  askButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  iconItem: {
    alignItems: 'center',
    width: iconWidth,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  iconLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#64748b',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
    paddingVertical: 24,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(25, 195, 230, 0.1)',
    marginBottom: 32,
  },
  socialIcon: {
    padding: 8,
  },
  mapSection: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  mapPlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#f1f5f9',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  mapBadge: {
    position: 'absolute',
    bottom: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(25, 195, 230, 0.2)',
  },
  mapBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1e293b',
  },
});
