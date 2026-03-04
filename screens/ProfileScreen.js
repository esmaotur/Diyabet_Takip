import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { User, Phone, ShieldCheck, EyeOff, Save, Plus } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.avatarSection}>
        <View style={styles.avatarContainer}>
          <Image 
            source={{ uri: 'https://picsum.photos/seed/profile/400/400' }} 
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.plusButton}>
            <Plus size={16} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.nameSection}>
          <Text style={styles.name}>Ahmet Yılmaz</Text>
          <Text style={styles.role}>Tip 1 Diyabet Takipçisi</Text>
        </View>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Ad Soyad</Text>
          <View style={styles.inputWrapper}>
            <User size={20} color="#19c3e6" style={styles.inputIcon} />
            <TextInput 
              style={styles.input}
              defaultValue="Ahmet Yılmaz"
              placeholderTextColor="#94a3b8"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Telefon</Text>
          <View style={styles.inputWrapper}>
            <Phone size={20} color="#19c3e6" style={styles.inputIcon} />
            <TextInput 
              style={styles.input}
              defaultValue="+90 555 123 45 67"
              keyboardType="phone-pad"
              placeholderTextColor="#94a3b8"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Şifre</Text>
          <View style={styles.inputWrapper}>
            <ShieldCheck size={20} color="#19c3e6" style={styles.inputIcon} />
            <TextInput 
              style={styles.input}
              defaultValue="password123"
              secureTextEntry
              placeholderTextColor="#94a3b8"
            />
            <TouchableOpacity style={styles.eyeIcon}>
              <EyeOff size={20} color="#94a3b8" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Save size={20} color="#fff" />
        <Text style={styles.saveButtonText}>Profili Güncelle</Text>
      </TouchableOpacity>
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
    paddingBottom: 100,
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatarContainer: {
    position: 'relative',
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: 'rgba(25, 195, 230, 0.2)',
    padding: 4,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  plusButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#19c3e6',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#f6f8f8',
  },
  nameSection: {
    marginTop: 16,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111e21',
  },
  role: {
    fontSize: 14,
    fontWeight: '500',
    color: '#19c3e6',
    marginTop: 4,
  },
  form: {
    gap: 24,
    marginBottom: 32,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
    marginLeft: 4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(25, 195, 230, 0.2)',
    height: 56,
    paddingHorizontal: 16,
  },
  inputIcon: {
    opacity: 0.6,
  },
  input: {
    flex: 1,
    height: '100%',
    marginLeft: 12,
    fontSize: 16,
    color: '#111e21',
  },
  eyeIcon: {
    padding: 4,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#19c3e6',
    height: 56,
    borderRadius: 16,
    gap: 12,
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
