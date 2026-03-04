import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { ChevronRight, Info } from 'lucide-react-native';

export default function RiskSurveyScreen() {
  const [selected, setSelected] = useState(0);
  const options = ['18 - 34', '35 - 44', '45 - 54', '55 ve üzeri'];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <View>
              <Text style={styles.stepLabel}>ADIM 1/8</Text>
              <Text style={styles.stepTitle}>Kişisel Bilgiler</Text>
            </View>
            <Text style={styles.percent}>%12.5</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '12.5%' }]} />
          </View>
        </View>

        <View style={styles.questionSection}>
          <Text style={styles.question}>Yaşınız hangi aralıkta?</Text>
          <View style={styles.optionsList}>
            {options.map((opt, i) => (
              <TouchableOpacity 
                key={i} 
                style={[styles.option, selected === i && styles.optionSelected]}
                onPress={() => setSelected(i)}
              >
                <Text style={[styles.optionText, selected === i && styles.optionTextSelected]}>{opt}</Text>
                <View style={[styles.radio, selected === i && styles.radioSelected]}>
                  {selected === i && <View style={styles.radioInner} />}
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.infoBox}>
            <Info size={20} color="#19c3e6" style={styles.infoIcon} />
            <View style={styles.infoContent}>
              <Text style={styles.infoTitle}>BMI Bilgilendirmesi</Text>
              <Text style={styles.infoText}>
                Vücut Kitle İndeksi (BMI), kilonuzun boyunuza oranını gösteren bir ölçüttür.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Kaydet ve Devam Et</Text>
          <ChevronRight size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.footerNote}>Cevaplarınız anonim olarak değerlendirilir.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8f8',
  },
  content: {
    padding: 24,
    paddingBottom: 120,
  },
  progressSection: {
    marginBottom: 32,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  stepLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#19c3e6',
    letterSpacing: 1,
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 4,
  },
  percent: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#64748b',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e2e8f0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#19c3e6',
    borderRadius: 4,
  },
  questionSection: {
    gap: 24,
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
  },
  optionsList: {
    gap: 12,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#e2e8f0',
  },
  optionSelected: {
    borderColor: '#19c3e6',
    backgroundColor: 'rgba(25, 195, 230, 0.05)',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
  },
  optionTextSelected: {
    color: '#19c3e6',
    fontWeight: '600',
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#cbd5e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: '#19c3e6',
    backgroundColor: '#19c3e6',
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: 'rgba(25, 195, 230, 0.1)',
    borderRadius: 16,
    padding: 20,
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(25, 195, 230, 0.2)',
  },
  infoIcon: {
    marginTop: 2,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111e21',
  },
  infoText: {
    fontSize: 14,
    color: '#475569',
    marginTop: 4,
    lineHeight: 20,
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
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#19c3e6',
    height: 56,
    borderRadius: 16,
    gap: 8,
    shadowColor: '#19c3e6',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 5,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerNote: {
    textAlign: 'center',
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 16,
  },
});
